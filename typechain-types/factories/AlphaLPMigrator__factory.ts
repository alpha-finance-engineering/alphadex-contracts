/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AlphaLPMigrator,
  AlphaLPMigratorInterface,
} from "../AlphaLPMigrator";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IUniswapV2Router01",
        name: "_oldRouter",
        type: "address",
      },
      {
        internalType: "contract IUniswapV2Router01",
        name: "_router",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountADesired",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountBDesired",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountAMin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountBMin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "migrate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountADesired",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountBDesired",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountAMin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountBMin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "migrateWithPermit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "oldRouter",
    outputs: [
      {
        internalType: "contract IUniswapV2Router01",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "router",
    outputs: [
      {
        internalType: "contract IUniswapV2Router01",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516110b63803806110b68339818101604052604081101561003357600080fd5b508051602090910151600080546001600160a01b039384166001600160a01b0319918216179091556001805493909216921691909117905561103c8061007a6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806370d9e44b14610051578063964c1f98146100c0578063f7aa6d8a146100e4578063f887ea4014610139575b600080fd5b6100be600480360361016081101561006857600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060808101359060a08101359060c08101359060e08101359060ff6101008201351690610120810135906101400135610141565b005b6100c86101f9565b604080516001600160a01b039092168252519081900360200190f35b6100be60048036036101008110156100fb57600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060808101359060a08101359060c08101359060e00135610208565b6100c86102b7565b600061014d8c8c6102c6565b6040805163d505accf60e01b8152336004820152306024820152604481018d90526064810188905260ff8716608482015260a4810186905260c4810185905290519192506001600160a01b0383169163d505accf9160e48082019260009290919082900301818387803b1580156101c357600080fd5b505af11580156101d7573d6000803e3d6000fd5b505050506101eb8c8c8c8c8c8c8c8c610208565b505050505050505050505050565b6000546001600160a01b031681565b42811015610252576040805162461bcd60e51b815260206004820152601260248201527114dd5cda1a54ddd85c0e881156141254915160721b604482015290519081900360640190fd5b6000806102628a8a8a88886103fc565b915091506000806102778c8c8b8b8b8b610603565b9150915081841115610299576102996001600160a01b038d16338487036108a0565b808311156101eb576101eb6001600160a01b038c16338386036108a0565b6001546001600160a01b031681565b60008060006102d585856108f7565b9150915060008054906101000a90046001600160a01b03166001600160a01b031663c45a01556040518163ffffffff1660e01b815260040160206040518083038186803b15801561032557600080fd5b505afa158015610339573d6000803e3d6000fd5b505050506040513d602081101561034f57600080fd5b5051604080516bffffffffffffffffffffffff19606095861b811660208381019190915294861b81166034830152825160288184030181526048830184528051908601206001600160f81b031960688401529390951b9094166069850152607d8401919091527f96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f609d808501919091528151808503909101815260bd909301905281519101209392505050565b600080600061040b88886102c6565b604080516323b872dd60e01b81523360048201526001600160a01b03831660248201819052604482018a9052915192935090916323b872dd916064808201926020929091908290030181600087803b15801561046657600080fd5b505af115801561047a573d6000803e3d6000fd5b505050506040513d602081101561049057600080fd5b50506040805163226bf2d160e21b8152306004820152815160009283926001600160a01b038616926389afcb449260248084019391929182900301818787803b1580156104dc57600080fd5b505af11580156104f0573d6000803e3d6000fd5b505050506040513d604081101561050657600080fd5b508051602090910151909250905060006105208b8b6108f7565b509050806001600160a01b03168b6001600160a01b031614610543578183610546565b82825b9096509450878610156105a0576040805162461bcd60e51b815260206004820181905260248201527f5375736869526f6c6c3a20494e53554646494349454e545f415f414d4f554e54604482015290519081900360640190fd5b868510156105f5576040805162461bcd60e51b815260206004820181905260248201527f5375736869526f6c6c3a20494e53554646494349454e545f425f414d4f554e54604482015290519081900360640190fd5b505050509550959350505050565b6000806000600160009054906101000a90046001600160a01b03166001600160a01b031663c45a01556040518163ffffffff1660e01b815260040160206040518083038186803b15801561065657600080fd5b505afa15801561066a573d6000803e3d6000fd5b505050506040513d602081101561068057600080fd5b50516040805163e6a4390560e01b81526001600160a01b038c811660048301528b8116602483015291519293506000929184169163e6a4390591604480820192602092909190829003018186803b1580156106da57600080fd5b505afa1580156106ee573d6000803e3d6000fd5b505050506040513d602081101561070457600080fd5b50516001600160a01b031614156107a257806001600160a01b031663c9c653968a8a6040518363ffffffff1660e01b815260040180836001600160a01b03168152602001826001600160a01b0316815260200192505050602060405180830381600087803b15801561077557600080fd5b505af1158015610789573d6000803e3d6000fd5b505050506040513d602081101561079f57600080fd5b50505b6000806107b0838c8c6109d5565b915091508160001480156107c2575080155b156107d257889450879350610892565b60006107df8a8484610aa3565b905088811161083257868110156108275760405162461bcd60e51b8152600401808060200182810382526026815260200180610f446026913960400191505060405180910390fd5b899550935083610890565b600061083f8a8486610aa3565b90508a81111561084b57fe5b8881101561088a5760405162461bcd60e51b8152600401808060200182810382526026815260200180610fb76026913960400191505060405180910390fd5b95508894505b505b505050965096945050505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526108f2908490610b49565b505050565b600080826001600160a01b0316846001600160a01b0316141561094b5760405162461bcd60e51b8152600401808060200182810382526025815260200180610f1f6025913960400191505060405180910390fd5b826001600160a01b0316846001600160a01b03161061096b57828461096e565b83835b90925090506001600160a01b0382166109ce576040805162461bcd60e51b815260206004820152601e60248201527f556e697377617056324c6962726172793a205a45524f5f414444524553530000604482015290519081900360640190fd5b9250929050565b60008060006109e485856108f7565b5090506000806109f5888888610bfa565b6001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b158015610a2d57600080fd5b505afa158015610a41573d6000803e3d6000fd5b505050506040513d6060811015610a5757600080fd5b5080516020909101516dffffffffffffffffffffffffffff91821693501690506001600160a01b0387811690841614610a91578082610a94565b81815b90999098509650505050505050565b6000808411610ae35760405162461bcd60e51b8152600401808060200182810382526025815260200180610f926025913960400191505060405180910390fd5b600083118015610af35750600082115b610b2e5760405162461bcd60e51b8152600401808060200182810382526028815260200180610f6a6028913960400191505060405180910390fd5b82610b398584610cba565b81610b4057fe5b04949350505050565b6060610b9e826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610d239092919063ffffffff16565b8051909150156108f257808060200190516020811015610bbd57600080fd5b50516108f25760405162461bcd60e51b815260040180806020018281038252602a815260200180610fdd602a913960400191505060405180910390fd5b6000806000610c0985856108f7565b604080516bffffffffffffffffffffffff19606094851b811660208084019190915293851b81166034830152825160288184030181526048830184528051908501206001600160f81b031960688401529a90941b9093166069840152607d8301989098527fe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303609d808401919091528851808403909101815260bd909201909752805196019590952095945050505050565b6000811580610cd557505080820282828281610cd257fe5b04145b610d1d576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6d756c2d6f766572666c6f7760601b604482015290519081900360640190fd5b92915050565b6060610d328484600085610d3a565b949350505050565b6060610d4585610ee5565b610d96576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b60208310610dd55780518252601f199092019160209182019101610db6565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114610e37576040519150601f19603f3d011682016040523d82523d6000602084013e610e3c565b606091505b50915091508115610e50579150610d329050565b805115610e605780518082602001fd5b8360405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610eaa578181015183820152602001610e92565b50505050905090810190601f168015610ed75780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470818114801590610d3257505015159291505056fe556e697377617056324c6962726172793a204944454e544943414c5f414444524553534553556e69737761705632526f757465723a20494e53554646494349454e545f425f414d4f554e54556e697377617056324c6962726172793a20494e53554646494349454e545f4c4951554944495459556e697377617056324c6962726172793a20494e53554646494349454e545f414d4f554e54556e69737761705632526f757465723a20494e53554646494349454e545f415f414d4f554e545361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a2646970667358221220127685629713aa4045ef72cc42b6f811faa2c4d5695bf5de1d56c8dfe769e7ab64736f6c634300060c0033";

type AlphaLPMigratorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AlphaLPMigratorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AlphaLPMigrator__factory extends ContractFactory {
  constructor(...args: AlphaLPMigratorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "AlphaLPMigrator";
  }

  deploy(
    _oldRouter: string,
    _router: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AlphaLPMigrator> {
    return super.deploy(
      _oldRouter,
      _router,
      overrides || {}
    ) as Promise<AlphaLPMigrator>;
  }
  getDeployTransaction(
    _oldRouter: string,
    _router: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_oldRouter, _router, overrides || {});
  }
  attach(address: string): AlphaLPMigrator {
    return super.attach(address) as AlphaLPMigrator;
  }
  connect(signer: Signer): AlphaLPMigrator__factory {
    return super.connect(signer) as AlphaLPMigrator__factory;
  }
  static readonly contractName: "AlphaLPMigrator";
  public readonly contractName: "AlphaLPMigrator";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AlphaLPMigratorInterface {
    return new utils.Interface(_abi) as AlphaLPMigratorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AlphaLPMigrator {
    return new Contract(address, _abi, signerOrProvider) as AlphaLPMigrator;
  }
}
