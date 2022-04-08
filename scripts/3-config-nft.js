import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

// from 'node scripts/2-deploy-drop.js : 0x0eeAB69E9560b68cEe71e2BCa5b89449B7107D6F

const editionDrop = sdk.getEditionDrop("0x0eeAB69E9560b68cEe71e2BCa5b89449B7107D6F");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Leaf Village Headband",
        description: "This NFT will give you access to NarutoDAO!",
        image: readFileSync("scripts/assets/dz.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();