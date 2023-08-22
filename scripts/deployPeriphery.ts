require("@nomiclabs/hardhat-etherscan");
const fs = require('fs')

const { parseUnits } = require('ethers/lib/utils');
import hre, { ethers, upgrades } from "hardhat";

import {
  AlphaDexRouter,
  AlphaDexRouter__factory
} from '../typechain-types'

const config = require('../config.json')
const envConfig = config[config.env];

async function main() {
  const verify = envConfig.verifyContracts
  let AlphaDexRouter: AlphaDexRouter;
  let AlphaDexRouter__factory: any;
  const accounts = await ethers.getSigners();

  const owner = accounts[0]

  console.log('using address : ', owner.address)

  
  console.log('prepping the alpha v2 token for deployment')

  AlphaDexRouter__factory = await ethers.getContractFactory(
    "AlphaDexRouter",
    owner,
  ) as AlphaDexRouter__factory;

  // factory = _factory;
  // WETH = _WETH;
  const contractConstuctorArgs = [
    envConfig.alphaDexFactoryAddress,
    envConfig.WETH,
  ]

  AlphaDexRouter = await AlphaDexRouter__factory.deploy(...contractConstuctorArgs) as AlphaDexRouter

  await AlphaDexRouter.deployed()
  console.log('deployment of alpha router complete')


  let alphaDexRouterAddress = AlphaDexRouter.address
  
  // if (verify) {
  //   await hre.run("verify:verify", {
  //     address: AlphaDexRouterAddress,
  //     constructorArguments: contractConstuctorArgs
  //   })
  // }

  let data = JSON.stringify({
    ...config,
    [config.env]: {
      ...config[config.env],
      alphaDexRouterAddress
    }
  }, null, 2);

  fs.writeFileSync('./config.json', data);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  // npx hardhat run --network avax scripts/deployPeriphery.ts
  