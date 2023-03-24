const { accountBodyToSlim } = require("@nomicfoundation/ethereumjs-util");

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/5cd35ccad73e44679a3c51dc5af5d101",
      accounts: [
        "402cabe4b1a2abb7b6d24d3dbb9a795c1a40c7d3337f279af1bf057a95df0326",
      ],
    },
  },
  solidity: "0.8.18",
};
