module.exports = {
  // configuring server here tries to start a server on the same port
  // for every test suite... even those not using playwright
  // see global-setup.js for single server setup for all test suites
  // server: {
  //   command: "cross-env PORT=4444 umi dev",
  //   port: 4444,
  //   launchTimeout: 50000,
  //   usedPortAction: "kill",
  //   debug: true,
  // },
};
