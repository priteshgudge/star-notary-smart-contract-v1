const StarNotary = artifacts.require('./StartNotary.sol')

module.exports = function(deployer) {
  deployer.deploy(StarNotary);
};
