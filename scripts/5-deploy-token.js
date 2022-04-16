import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenAddress = await sdk.deployer.deployToken({
      // What's your token's name? Ex. "Ethereum"
      name: "Bread DAO Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "Bread Coin",
      // This will be in case we want to sell our token,
      // because we don't, we set it to AddressZero again.
      primary_sale_recipient: AddressZero,
    });
    console.log(
      "✅ Successfully deployed token module, address:", // 0x85456Dc39A69B8682cf6eC29082cDE391EfA305d
      tokenAddress,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();

