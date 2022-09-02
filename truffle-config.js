require('babel-register');
require('babel-polyfill');
require('dotenv').config();
const HDWalletProvider = require("@truffle/hdwallet-provider")

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    matic: {
      provider: () => new HDWalletProvider("haha", `https://polygon-mumbai.g.alchemy.com/v2/haha`),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },
  mocha: {
    timeout: 100000
  }, 
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version:"0.8.10",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}

