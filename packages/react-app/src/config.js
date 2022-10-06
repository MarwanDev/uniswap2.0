import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x7521fd332bb721c936d1d70de9e8d4ef2a165cf677cf7674c6e437f892507057"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/UkFf17Ec54GQMGzcO-tQWQmJ45WNycOt",
  },
};