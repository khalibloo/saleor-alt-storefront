# Alt Storefront
This project aims to provide a more customizable storefront for the Saleor
e-commerce platform. It's based on Ant Design and Umi in order to make it easy to extend and customize, and also to reduce the complexity of the codebase. This project is still in its infancy and definitely not ready for
use in production, but you're welcome to experiment with it and give feedback and suggestions.

# Stack
To simplify development and to allow for easy customization, we've chosen
the following tools.
- ✨ Ant Design as UI framework
- 🔥 UmiJS as app framework
- 🛠 ReactJS as underlying UI technology
- 🪂 Typescript for safety
- 🚀 Apollo as GraphQL client
- 🌊 DvaJS (based on redux) as a supporting data framework

# Getting Started
Follow the [Getting Started guide](https://github.com/khalibloo/saleor-alt-storefront/wiki/Getting-Started) on the wiki.

Here are the commands for running and building the project.
Install dependencies

```bash
$ yarn
```

Start the dev server

```bash
$ yarn start
```

Build app bundle. Note that Chrome browser is required.

```bash
$ yarn build
```

# Configuration
Refer to the [Configuration page](https://github.com/khalibloo/saleor-alt-storefront/wiki/Configuration-Options) on the wiki.

# Customization
Refer to [Theming](https://github.com/khalibloo/saleor-alt-storefront/wiki/Theming) and [Customizing the Home Page](https://github.com/khalibloo/saleor-alt-storefront/wiki/Customizing-The-Home-Page) on the wiki.

# Translating
All visible UI strings are set up in locale files to enable easy translation of the UI to different languages. Currently, only English and French (Google Translate quality) are available. Other languages will be slowly added after reaching a stable version. When that time comes, we'll likely need your help with the translations 😉

# Development Guide
We're fans of yarn. We recommend it over npm as it will allow you to have the exact same dependencies as specified in our lock file.

Generate GraphQL types for typescript whenever you modify a GraphQL query or mutation.

```bash
$ yarn codegen
```

Run unit tests to make sure things are in working order.

```bash
$ yarn test
```

Run end-to-end (e2e) tests to make sure the pages are working properly. This requires you to have the Chrome browser installed on your machine.

```bash
$ yarn test-e2e
```

# What We're Working On
Head over to the [Projects](https://github.com/khalibloo/saleor-alt-storefront/projects) tab to see what tasks are being planned or worked on. Feel free to join the discussions on specific issues to help us cater to different use cases, or just to share ideas.

# Contributing
Like our work? There are several ways you can contribute. You could help tackle some of our [issues](https://github.com/khalibloo/saleor-alt-storefront/issues) if you're a developer. Issues labeled ["good first issue"](https://github.com/khalibloo/saleor-alt-storefront/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22) are a good place to start. Be sure to check the [current tasks](https://github.com/khalibloo/saleor-alt-storefront/projects) to see if someone's already working on it before making a PR.
You could also help us by playing with the app and reporting bugs to us, or making suggestions for improvements. Just [create an issue](https://github.com/khalibloo/saleor-alt-storefront/issues/new).

# License
MIT Licensed. We provide no guarantees and take no liabilities. If you're cool with that, you may use this project, modify it, share it, use commercially, etc. Read the fine details in the [LICENSE file](/LICENSE).

# Getting Help
We haven't quite set up channels for this yet. Hang in there. For the time being, you may open an issue for help requests and we'll do our best to respond to them on time.

# Support Us
Give us stars, talk about us, ...or just send us cat pictures over here in our [Nuclear Cat Reactor](https://github.com/khalibloo/saleor-alt-storefront/issues/89). They motivate us.
