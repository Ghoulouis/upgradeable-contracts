import { deployments, ethers } from "hardhat";
import { Box } from "../src/types";
import { getBox } from "../src/utils/helper";
import { Signer } from "ethers";

describe("Box", async () => {
  let box: Box;
  let deployer: Signer;
  beforeEach(async () => {
    [deployer] = await ethers.getSigners();
    //await deployments.fixture();
    box = await getBox();
    console.log(" box address = ", await box.getAddress());
  });

  it(" get value", async () => {
    console.log(" box value = ", await box.getBox());
    console.log(" box value = ", await box.box3());

    await box.connect(deployer).setBox4(100);
    console.log(" box value = ", await box.getBox4());
  });
});
D;
