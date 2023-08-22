import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-ethers'
import '@typechain/hardhat'
import '@tenderly/hardhat-tenderly'

import "hardhat-gas-reporter"
import 'hardhat-interface-generator'
import '@nomiclabs/hardhat-web3'
import 'solidity-coverage'

import { task, subtask } from 'hardhat/config'
import type { HardhatUserConfig } from 'hardhat/types'
import * as dotenv from 'dotenv'

import "@nomiclabs/hardhat-ethers";
import "@openzeppelin/hardhat-upgrades";
import "@openzeppelin/hardhat-defender";

const {
    TASK_COMPILE_SOLIDITY_GET_SOURCE_PATHS
} = require('hardhat/builtin-tasks/task-names')

dotenv.config()
const AVALANCHE_MAINNET_URL = process.env.AVALANCHE_MAINNET_URL
const ROPSTEN_TESTNET_URL = process.env.ROPSTEN_TESTNET_URL
const ETH_MAINNET_URL = process.env.ETH_MAINNET_URL
const BSC_MAINNET_URL = process.env.BSC_MAINNET_URL
const POLYGON_MAINNET_URL = process.env.POLYGON_MAINNET_URL
const ARBITRUM_URL = process.env.ARBITRUM_URL
const FANTOM_URL = process.env.FANTOM_URL
// secrets file is in gitignore and should NEVER EVER EVER be committed to git.
const secrets = require('./secrets')

// npx hardhat run --network hardhat scripts/deploy.js
// npx hardhat run --network mainnet scripts/deploy.js

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners()

    for (const account of accounts) {
        console.log(account.address)
    }
})

const snowtraceAPIKey = 'YAJSABKAA973A3Y8T5U94KUJN6YIWA5Z8R'


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config: HardhatUserConfig = {
    // @ts-ignore
    defender: {
        apiKey: secrets.defenderPublic,
        apiSecret: secrets.defenderSecret,
    },
    solidity: {
        compilers: [           
        {
            version: '0.6.12',
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200
                }
            }
        },
        {
            version: '0.5.0',
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200
                }
            }
        },
        {
            version: '^0.5.0',
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200
                }
            }
        },
        {
            version: '^0.5.5',
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200
                }
            }
        },
        {
            version: '0.5.5',
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200
                }
            }
        }
        ],
        
    },
    // @ts-ignore
    etherscan: {
        apiKey: {
            avalanche: snowtraceAPIKey,
            avalancheFujiTestnet: snowtraceAPIKey
        }
    },
    networks: {
        hardhat: {
            chainId: 43114,
            gasPrice: 225000000000,
            // throwOnTransactionFailures: false, // this causes test to not function properly because errors dont bubble
            loggingEnabled: true,
            forking: {
                url: AVALANCHE_MAINNET_URL as string,
                enabled: true,
                blockNumber: 21920927
            }
        },
        ethereum: {
            url: ETH_MAINNET_URL as string,
            gasPrice: 'auto',
            chainId: 1,
            accounts: [`0x${secrets.burner}`],
            timeout: 1000000000
        },
        bsc: {
            url: BSC_MAINNET_URL as string,
            gasPrice: 'auto',
            accounts: [`0x${secrets.burner}`]
        },
        polygon: {
            url: POLYGON_MAINNET_URL as string,
            gasPrice: 'auto',
            accounts: [`0x${secrets.burner}`]
        },
        arbitrum: {
            url: ARBITRUM_URL as string,
            gasPrice: 'auto',
            accounts: [`0x${secrets.burner}`]
        },
        fantom: {
            url: FANTOM_URL as string,
            gasPrice: 'auto',
            accounts: [`0x${secrets.burner}`]
        },
        // fuji: {
        //     url: 'https://api.avax-test.network/ext/bc/C/rpc',
        //     gasPrice: 'auto',
        //     chainId: 43113,
        //     accounts: [`0x${secrets.burner}`]
        // },
        avax: {
            url: AVALANCHE_MAINNET_URL as string,
            gasPrice: 'auto',
            chainId: 43114,
            accounts: [`0x${secrets.burner}`]
        }
        // ropsten: {
        //     url: ROPSTEN_TESTNET_URL as string,
        //     gasPrice: 'auto',
        //     chainId: 3,
        //     accounts: [`0x${secrets.burner}`]
        // }
    },
    mocha: {
        timeout: 100000000
    },
    // gasReporter: {
    //     currency: 'AVAX',
    //     gasPrice: 26
    // }
}

export default config
