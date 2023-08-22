require("@nomiclabs/hardhat-etherscan");
const fs = require('fs')

const { parseUnits } = require('ethers/lib/utils');
import hre, { ethers, upgrades } from "hardhat";

import {
  AlphaDexFactory,
  AlphaDexFactory__factory,
} from '../typechain-types'

const config = require('../config.json')
const envConfig = config[config.env];

async function main() {
  const verify = envConfig.verifyContracts
  let AlphaDexFactory: AlphaDexFactory;
  let AlphaDexFactory__factory: any;
  const accounts = await ethers.getSigners();

  const owner = accounts[0]

  console.log('using address : ', owner.address)

  
  console.log('prepping the alpha v2 token for deployment')

  AlphaDexFactory__factory = await ethers.getContractFactory(
    "AlphaDexFactory",
    owner,
  ) as AlphaDexFactory__factory;

  const contractConstuctorArgs = [owner.address]

  AlphaDexFactory = await AlphaDexFactory__factory.deploy(...contractConstuctorArgs) as AlphaDexFactory

  await AlphaDexFactory.deployed()
  console.log('deployment of alpha factory complete')

  await AlphaDexFactory.setFeeTo(owner.address)

  let alphaDexFactoryAddress = AlphaDexFactory.address
  
  // if (verify) {
  //   await hre.run("verify:verify", {
  //     address: alphaDexFactoryAddress,
  //     constructorArguments: contractConstuctorArgs
  //   })
  // }

  let data = JSON.stringify({
    ...config,
    [config.env]: {
      ...config[config.env],
      alphaDexFactoryAddress
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

  // npx hardhat run --network avax scripts/deployCore.ts
  