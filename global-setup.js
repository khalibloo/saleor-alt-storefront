const { setup: setupDevServer } = require("jest-dev-server");
const fetch = require("node-fetch");

async function testServer() {
  return new Promise(resolve => {
    setTimeout(() => {
      fetch("http://localhost:4444")
        .then(() => {
          resolve("resolved");
        })
        .catch(() => testServer());
    }, 5000);
  });
}

module.exports = async function globalSetup() {
  await setupDevServer({
    command: "cross-env PORT=4444 umi dev",
    port: 4444,
    launchTimeout: 50000,
    usedPortAction: "kill",
    debug: true,
  });

  // the server command above binds the port before the server is ready
  // we need to delay it until it's ready. fetch seems to work well for that
  await testServer();

  console.log("server started");
};
