/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AlphaDexPair, AlphaDexPairInterface } from "../AlphaDexPair";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    name: "Mint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0In",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1In",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "Swap",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint112",
        name: "reserve0",
        type: "uint112",
      },
      {
        indexed: false,
        internalType: "uint112",
        name: "reserve1",
        type: "uint112",
      },
    ],
    name: "Sync",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINIMUM_LIQUIDITY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getReserves",
    outputs: [
      {
        internalType: "uint112",
        name: "_reserve0",
        type: "uint112",
      },
      {
        internalType: "uint112",
        name: "_reserve1",
        type: "uint112",
      },
      {
        internalType: "uint32",
        name: "_blockTimestampLast",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token1",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "kLast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
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
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "price0CumulativeLast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "price1CumulativeLast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "skim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "swap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sync",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token0",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token1",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526001600c5534801561001557600080fd5b50604080518082018252601181527020b6383430a232bc102628102a37b5b2b760791b6020918201528151808301835260018152603160f81b9082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527f76e8aa9ff02be517066f8f852704122eee6eed36d03e83352ebe3fa2b76bb474818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a0808301919091528351808303909101815260c09091019092528151910120600355600580546001600160a01b0319163317905561235e8061010f6000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c80636a627842116100f9578063ba9a7a5611610097578063d21220a711610071578063d21220a714610534578063d505accf1461053c578063dd62ed3e1461058d578063fff6cae9146105bb576101a9565b8063ba9a7a56146104fe578063bc25cf7714610506578063c45a01551461052c576101a9565b80637ecebe00116100d35780637ecebe001461046557806389afcb441461048b57806395d89b41146104ca578063a9059cbb146104d2576101a9565b80636a6278421461041157806370a08231146104375780637464fc3d1461045d576101a9565b806323b872dd116101665780633644e515116101405780633644e515146103cb578063485cc955146103d35780635909c0d5146104015780635a3d549314610409576101a9565b806323b872dd1461036f57806330adf81f146103a5578063313ce567146103ad576101a9565b8063022c0d9f146101ae57806306fdde031461023c5780630902f1ac146102b9578063095ea7b3146102f15780630dfe16811461033157806318160ddd14610355575b600080fd5b61023a600480360360808110156101c457600080fd5b8135916020810135916001600160a01b0360408301351691908101906080810160608201356401000000008111156101fb57600080fd5b82018360208201111561020d57600080fd5b8035906020019184600183028401116401000000008311171561022f57600080fd5b5090925090506105c3565b005b610244610ade565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561027e578181015183820152602001610266565b50505050905090810190601f1680156102ab5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102c1610b0b565b604080516001600160701b03948516815292909316602083015263ffffffff168183015290519081900360600190f35b61031d6004803603604081101561030757600080fd5b506001600160a01b038135169060200135610b35565b604080519115158252519081900360200190f35b610339610b4c565b604080516001600160a01b039092168252519081900360200190f35b61035d610b5b565b60408051918252519081900360200190f35b61031d6004803603606081101561038557600080fd5b506001600160a01b03813581169160208101359091169060400135610b61565b61035d610bf5565b6103b5610c19565b6040805160ff9092168252519081900360200190f35b61035d610c1e565b61023a600480360360408110156103e957600080fd5b506001600160a01b0381358116916020013516610c24565b61035d610ca7565b61035d610cad565b61035d6004803603602081101561042757600080fd5b50356001600160a01b0316610cb3565b61035d6004803603602081101561044d57600080fd5b50356001600160a01b031661112e565b61035d611140565b61035d6004803603602081101561047b57600080fd5b50356001600160a01b0316611146565b6104b1600480360360208110156104a157600080fd5b50356001600160a01b0316611158565b6040805192835260208301919091528051918290030190f35b6102446114eb565b61031d600480360360408110156104e857600080fd5b506001600160a01b03813516906020013561150a565b61035d611517565b61023a6004803603602081101561051c57600080fd5b50356001600160a01b031661151d565b61033961168e565b61033961169d565b61023a600480360360e081101561055257600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c001356116ac565b61035d600480360360408110156105a357600080fd5b506001600160a01b03813581169160200135166118ae565b61023a6118cb565b600c5460011461060d576040805162461bcd60e51b815260206004820152601060248201526f105b1c1a1851195e0e881313d0d2d15160821b604482015290519081900360640190fd5b6000600c55841515806106205750600084115b61065b5760405162461bcd60e51b81526004018080602001828103825260248152602001806123056024913960400191505060405180910390fd5b600080610666610b0b565b5091509150816001600160701b03168710801561068b5750806001600160701b031686105b6106dc576040805162461bcd60e51b815260206004820181905260248201527f416c7068614465783a20494e53554646494349454e545f4c4951554944495459604482015290519081900360640190fd5b60065460075460009182916001600160a01b0391821691908116908916821480159061071a5750806001600160a01b0316896001600160a01b031614155b610762576040805162461bcd60e51b8152602060048201526014602482015273416c7068614465783a20494e56414c49445f544f60601b604482015290519081900360640190fd5b8a1561077357610773828a8d611a2c565b891561078457610784818a8c611a2c565b861561083657886001600160a01b03166310d1e85c338d8d8c8c6040518663ffffffff1660e01b815260040180866001600160a01b03168152602001858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509650505050505050600060405180830381600087803b15801561081d57600080fd5b505af1158015610831573d6000803e3d6000fd5b505050505b604080516370a0823160e01b815230600482015290516001600160a01b038416916370a08231916024808301926020929190829003018186803b15801561087c57600080fd5b505afa158015610890573d6000803e3d6000fd5b505050506040513d60208110156108a657600080fd5b5051604080516370a0823160e01b815230600482015290519195506001600160a01b038316916370a0823191602480820192602092909190829003018186803b1580156108f257600080fd5b505afa158015610906573d6000803e3d6000fd5b505050506040513d602081101561091c57600080fd5b5051925060009150506001600160701b0385168a9003831161093f57600061094e565b89856001600160701b03160383035b9050600089856001600160701b031603831161096b57600061097a565b89856001600160701b03160383035b9050600082118061098b5750600081115b6109c65760405162461bcd60e51b81526004018080602001828103825260238152602001806122bb6023913960400191505060405180910390fd5b60006109e86109d6846003611bc6565b6109e2876103e8611bc6565b90611c29565b905060006109fa6109d6846003611bc6565b9050610a1f620f4240610a196001600160701b038b8116908b16611bc6565b90611bc6565b610a298383611bc6565b1015610a6a576040805162461bcd60e51b815260206004820152600b60248201526a416c7068614465783a204b60a81b604482015290519081900360640190fd5b5050610a7884848888611c79565b60408051838152602081018390528082018d9052606081018c905290516001600160a01b038b169133917fd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d8229181900360800190a350506001600c55505050505050505050565b6040518060400160405280601181526020017020b6383430a232bc102628102a37b5b2b760791b81525081565b6008546001600160701b0380821692600160701b830490911691600160e01b900463ffffffff1690565b6000610b42338484611e37565b5060015b92915050565b6006546001600160a01b031681565b60005481565b6001600160a01b038316600090815260026020908152604080832033845290915281205460001914610be0576001600160a01b0384166000908152600260209081526040808320338452909152902054610bbb9083611c29565b6001600160a01b03851660009081526002602090815260408083203384529091529020555b610beb848484611e99565b5060019392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b601281565b60035481565b6005546001600160a01b03163314610c79576040805162461bcd60e51b815260206004820152601360248201527220b6383430a232bc1d102327a92124a22222a760691b604482015290519081900360640190fd5b600680546001600160a01b039384166001600160a01b03199182161790915560078054929093169116179055565b60095481565b600a5481565b6000600c54600114610cff576040805162461bcd60e51b815260206004820152601060248201526f105b1c1a1851195e0e881313d0d2d15160821b604482015290519081900360640190fd5b6000600c81905580610d0f610b0b565b50600654604080516370a0823160e01b815230600482015290519395509193506000926001600160a01b03909116916370a08231916024808301926020929190829003018186803b158015610d6357600080fd5b505afa158015610d77573d6000803e3d6000fd5b505050506040513d6020811015610d8d57600080fd5b5051600754604080516370a0823160e01b815230600482015290519293506000926001600160a01b03909216916370a0823191602480820192602092909190829003018186803b158015610de057600080fd5b505afa158015610df4573d6000803e3d6000fd5b505050506040513d6020811015610e0a57600080fd5b505190506000610e23836001600160701b038716611c29565b90506000610e3a836001600160701b038716611c29565b90506000610e488787611f47565b6000549091508061101f5760055460408051637cd07e4760e01b815290516000926001600160a01b031691637cd07e47916004808301926020929190829003018186803b158015610e9857600080fd5b505afa158015610eac573d6000803e3d6000fd5b505050506040513d6020811015610ec257600080fd5b50519050336001600160a01b0382161415610f9d57806001600160a01b03166340dc0e376040518163ffffffff1660e01b815260040160206040518083038186803b158015610f1057600080fd5b505afa158015610f24573d6000803e3d6000fd5b505050506040513d6020811015610f3a57600080fd5b505199508915801590610f4f57506000198a14155b610f98576040805162461bcd60e51b81526020600482015260156024820152744261642064657369726564206c697175696469747960581b604482015290519081900360640190fd5b611019565b6001600160a01b03811615610ff2576040805162461bcd60e51b815260206004820152601660248201527526bab9ba103737ba103430bb329036b4b3b930ba37b960511b604482015290519081900360640190fd5b61100a6103e86109e26110058888611bc6565b612087565b995061101960006103e86120d9565b50611062565b61105f6001600160701b0389166110368684611bc6565b8161103d57fe5b046001600160701b0389166110528685611bc6565b8161105957fe5b04612163565b98505b600089116110a15760405162461bcd60e51b81526004018080602001828103825260278152602001806122946027913960400191505060405180910390fd5b6110ab8a8a6120d9565b6110b786868a8a611c79565b81156110e1576008546110dd906001600160701b0380821691600160701b900416611bc6565b600b555b6040805185815260208101859052815133927f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f928290030190a250506001600c5550949695505050505050565b60016020526000908152604090205481565b600b5481565b60046020526000908152604090205481565b600080600c546001146111a5576040805162461bcd60e51b815260206004820152601060248201526f105b1c1a1851195e0e881313d0d2d15160821b604482015290519081900360640190fd5b6000600c819055806111b5610b0b565b50600654600754604080516370a0823160e01b815230600482015290519496509294506001600160a01b039182169391169160009184916370a08231916024808301926020929190829003018186803b15801561121157600080fd5b505afa158015611225573d6000803e3d6000fd5b505050506040513d602081101561123b57600080fd5b5051604080516370a0823160e01b815230600482015290519192506000916001600160a01b038516916370a08231916024808301926020929190829003018186803b15801561128957600080fd5b505afa15801561129d573d6000803e3d6000fd5b505050506040513d60208110156112b357600080fd5b5051306000908152600160205260408120549192506112d28888611f47565b600054909150806112e38487611bc6565b816112ea57fe5b049a50806112f88486611bc6565b816112ff57fe5b04995060008b118015611312575060008a115b61134d5760405162461bcd60e51b81526004018080602001828103825260278152602001806122de6027913960400191505060405180910390fd5b611357308461217b565b611362878d8d611a2c565b61136d868d8c611a2c565b604080516370a0823160e01b815230600482015290516001600160a01b038916916370a08231916024808301926020929190829003018186803b1580156113b357600080fd5b505afa1580156113c7573d6000803e3d6000fd5b505050506040513d60208110156113dd57600080fd5b5051604080516370a0823160e01b815230600482015290519196506001600160a01b038816916370a0823191602480820192602092909190829003018186803b15801561142957600080fd5b505afa15801561143d573d6000803e3d6000fd5b505050506040513d602081101561145357600080fd5b5051935061146385858b8b611c79565b811561148d57600854611489906001600160701b0380821691600160701b900416611bc6565b600b555b604080518c8152602081018c905281516001600160a01b038f169233927fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d81936496929081900390910190a35050505050505050506001600c81905550915091565b604051806040016040528060038152602001620414c560ec1b81525081565b6000610b42338484611e99565b6103e881565b600c54600114611567576040805162461bcd60e51b815260206004820152601060248201526f105b1c1a1851195e0e881313d0d2d15160821b604482015290519081900360640190fd5b6000600c55600654600754600854604080516370a0823160e01b815230600482015290516001600160a01b039485169490931692611610928592879261160b926001600160701b03169185916370a0823191602480820192602092909190829003018186803b1580156115d957600080fd5b505afa1580156115ed573d6000803e3d6000fd5b505050506040513d602081101561160357600080fd5b505190611c29565b611a2c565b611684818461160b6008600e9054906101000a90046001600160701b03166001600160701b0316856001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156115d957600080fd5b50506001600c5550565b6005546001600160a01b031681565b6007546001600160a01b031681565b428410156116f6576040805162461bcd60e51b8152602060048201526012602482015271155b9a5cddd85c158c8e881156141254915160721b604482015290519081900360640190fd5b6003546001600160a01b0380891660008181526004602090815260408083208054600180820190925582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98186015280840196909652958d166060860152608085018c905260a085019590955260c08085018b90528151808603909101815260e08501825280519083012061190160f01b6101008601526101028501969096526101228085019690965280518085039096018652610142840180825286519683019690962095839052610162840180825286905260ff89166101828501526101a284018890526101c28401879052519193926101e280820193601f1981019281900390910190855afa158015611811573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906118475750886001600160a01b0316816001600160a01b0316145b611898576040805162461bcd60e51b815260206004820152601c60248201527f556e697377617056323a20494e56414c49445f5349474e415455524500000000604482015290519081900360640190fd5b6118a3898989611e37565b505050505050505050565b600260209081526000928352604080842090915290825290205481565b600c54600114611915576040805162461bcd60e51b815260206004820152601060248201526f105b1c1a1851195e0e881313d0d2d15160821b604482015290519081900360640190fd5b6000600c55600654604080516370a0823160e01b81523060048201529051611a25926001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561196657600080fd5b505afa15801561197a573d6000803e3d6000fd5b505050506040513d602081101561199057600080fd5b5051600754604080516370a0823160e01b815230600482015290516001600160a01b03909216916370a0823191602480820192602092909190829003018186803b1580156119dd57600080fd5b505afa1580156119f1573d6000803e3d6000fd5b505050506040513d6020811015611a0757600080fd5b50516008546001600160701b0380821691600160701b900416611c79565b6001600c55565b604080518082018252601981527f7472616e7366657228616464726573732c75696e74323536290000000000000060209182015281516001600160a01b0385811660248301526044808301869052845180840390910181526064909201845291810180516001600160e01b031663a9059cbb60e01b1781529251815160009460609489169392918291908083835b60208310611ad95780518252601f199092019160209182019101611aba565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611b3b576040519150601f19603f3d011682016040523d82523d6000602084013e611b40565b606091505b5091509150818015611b6e575080511580611b6e5750808060200190516020811015611b6b57600080fd5b50515b611bbf576040805162461bcd60e51b815260206004820152601960248201527f416c7068614465783a205452414e534645525f4641494c454400000000000000604482015290519081900360640190fd5b5050505050565b6000811580611be157505080820282828281611bde57fe5b04145b610b46576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6d756c2d6f766572666c6f7760601b604482015290519081900360640190fd5b80820382811115610b46576040805162461bcd60e51b815260206004820152601560248201527464732d6d6174682d7375622d756e646572666c6f7760581b604482015290519081900360640190fd5b6001600160701b038411801590611c9757506001600160701b038311155b611cdd576040805162461bcd60e51b8152602060048201526012602482015271416c7068614465783a204f564552464c4f5760701b604482015290519081900360640190fd5b60085463ffffffff42811691600160e01b90048116820390811615801590611d0d57506001600160701b03841615155b8015611d2157506001600160701b03831615155b15611d8c578063ffffffff16611d4985611d3a8661220d565b6001600160e01b03169061221f565b600980546001600160e01b03929092169290920201905563ffffffff8116611d7484611d3a8761220d565b600a80546001600160e01b0392909216929092020190555b600880546dffffffffffffffffffffffffffff19166001600160701b03888116919091176dffffffffffffffffffffffffffff60701b1916600160701b8883168102919091176001600160e01b0316600160e01b63ffffffff871602179283905560408051848416815291909304909116602082015281517f1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1929181900390910190a1505050505050565b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038316600090815260016020526040902054611ebc9082611c29565b6001600160a01b038085166000908152600160205260408082209390935590841681522054611eeb9082612244565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600080600560009054906101000a90046001600160a01b03166001600160a01b031663017e7e586040518163ffffffff1660e01b815260040160206040518083038186803b158015611f9857600080fd5b505afa158015611fac573d6000803e3d6000fd5b505050506040513d6020811015611fc257600080fd5b5051600b546001600160a01b03821615801594509192509061207357801561206e576000611fff6110056001600160701b03888116908816611bc6565b9050600061200c83612087565b90508082111561206b57600061202e6120258484611c29565b60005490611bc6565b9050600061204783612041866005611bc6565b90612244565b9050600081838161205457fe5b04905080156120675761206787826120d9565b5050505b50505b61207f565b801561207f576000600b555b505092915050565b600060038211156120ca575080600160028204015b818110156120c4578091506002818285816120b357fe5b0401816120bc57fe5b04905061209c565b506120d4565b81156120d4575060015b919050565b6000546120e69082612244565b60009081556001600160a01b03831681526001602052604090205461210b9082612244565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b60008183106121725781612174565b825b9392505050565b6001600160a01b03821660009081526001602052604090205461219e9082611c29565b6001600160a01b038316600090815260016020526040812091909155546121c59082611c29565b60009081556040805183815290516001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef919081900360200190a35050565b6001600160701b0316600160701b0290565b60006001600160701b0382166001600160e01b0384168161223c57fe5b049392505050565b80820182811015610b46576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6164642d6f766572666c6f7760601b604482015290519081900360640190fdfe416c7068614465783a20494e53554646494349454e545f4c49515549444954595f4d494e544544416c7068614465783a20494e53554646494349454e545f494e5055545f414d4f554e54416c7068614465783a20494e53554646494349454e545f4c49515549444954595f4255524e4544416c7068614465783a20494e53554646494349454e545f4f55545055545f414d4f554e54a2646970667358221220929ce163ded200402bf0573c4ffd3bab38f57dacf780a6d96e6489b6f74c601764736f6c634300060c0033";

type AlphaDexPairConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AlphaDexPairConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AlphaDexPair__factory extends ContractFactory {
  constructor(...args: AlphaDexPairConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "AlphaDexPair";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AlphaDexPair> {
    return super.deploy(overrides || {}) as Promise<AlphaDexPair>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AlphaDexPair {
    return super.attach(address) as AlphaDexPair;
  }
  connect(signer: Signer): AlphaDexPair__factory {
    return super.connect(signer) as AlphaDexPair__factory;
  }
  static readonly contractName: "AlphaDexPair";
  public readonly contractName: "AlphaDexPair";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AlphaDexPairInterface {
    return new utils.Interface(_abi) as AlphaDexPairInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AlphaDexPair {
    return new Contract(address, _abi, signerOrProvider) as AlphaDexPair;
  }
}
