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
        const data = await box.getBox();
        console.log(" box value = ", data);
        const newData = Number(data) + 10;
        await box.connect(deployer).setBox(newData);
        console.log(" box value = ", await box.getBox());
    });
});
