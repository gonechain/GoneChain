var GoneChain = artifacts.require("./GoneChain.sol");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(GoneChain, 'GONE', 'GoneChain', accounts[0]);
};
