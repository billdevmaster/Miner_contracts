const Migrations = artifacts.require("REALM");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
