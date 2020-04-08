const { setup: setupDevServer } = require("jest-dev-server");
const fetch = require("node-fetch");

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
  await fetch("http://localhost:4444").then(() => {});

  console.log("server started");
};
