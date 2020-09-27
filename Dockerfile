FROM node:12 AS builder

# Install latest chrome dev package and fonts to support major charsets (Chinese, Japanese, Arabic, Hebrew, Thai and a few others)
# Note: this installs the necessary libs to make the bundled version of Chromium that Puppeteer
# installs, work. This is for critical css webpack plugin.
RUN APT_KEY_DONT_WARN_ON_DANGEROUS_USAGE=1 apt-get update \
  && apt-get install -y wget gnupg \
  && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
  && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
  && apt-get update \
  && apt-get install -y google-chrome-stable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf libxss1 \
  --no-install-recommends \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
ARG UMI_ENV=prod
RUN UMI_ENV=${UMI_ENV} yarn build

# FROM builder AS tester
# WORKDIR /app
# RUN yarn test
# RUN yarn test-e2e

FROM nginx:1.16.1-alpine
WORKDIR /app
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# copy build output to nginx serve folder
COPY --from=builder /app/dist/ /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
