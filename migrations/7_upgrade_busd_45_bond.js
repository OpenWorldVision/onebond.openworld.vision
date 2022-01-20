const { upgradeProxy } = require("@openzeppelin/truffle-upgrades");
const XBladeBond45Depository = artifacts.require("XBladeBond45Depository");

module.exports = async function (deployer, network) {
    let proxyAddress;
    if (network === "bsctestnet") {
        proxyAddress = "0x2CC6D07871A1c0655d6A7c9b0Ad24bED8f940517";
    }
    if (network === "bscmainnet") {
        proxyAddress = "";
    }
    await upgradeProxy(
        proxyAddress,
        XBladeBond45Depository,

        { deployer, initializer: "initialize", unsafeAllow: ["struct-definition", "enum-definition", "delegatecall"] },
    );
};