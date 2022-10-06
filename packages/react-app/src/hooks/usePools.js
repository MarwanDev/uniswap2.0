import React from "react";
import Web3 from "web3";
import { useState, useEffect } from "react";
import { useConfig } from "@usedapp/core";

import { ROUTER_ADDRESS } from "../config";
export const loadPools = async (provideUrl) => {
    const provider = new Web3.providers.HttpProvider(provideUrl)
    const web3 = new Web3(provider)

    const routerInfo = null
    const factoryInfo = null
}
export const usePools = () => {
  const { readOnlyChainId, readOnlyUrls } = useConfig();
  const [Loading, setLoading] = useState(true);
  const [pools, setPools] = useState({});

  useEffect(() => {
    loadPools(readOnlyUrls[readOnlyChainId])
    .then((pools) => {
        setPools(pools);
        setLoading(false);
    })
  }, [readOnlyUrls, readOnlyChainId]);
  return [Loading, pools];
};
