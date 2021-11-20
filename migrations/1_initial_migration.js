const Migrations = artifacts.require("HEMPIRE_SHIBA");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
