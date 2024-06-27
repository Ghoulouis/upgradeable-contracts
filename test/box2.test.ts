import { deployments, ethers, upgrades } from "hardhat";
import { Box } from "../src/types";
import { getBox } from "../src/utils/helper";
import { Signer } from "ethers";

describe("Box", async () => {
    it("works", async () => {
        const Box = await ethers.getContractFactory("Box");
        const BoxV2 = await ethers.getContractFactory("Box");
        const instance = await upgrades.deployProxy(Box, [42], { initializer: "init" });
        const upgraded = await upgrades.upgradeProxy(await instance.getAddress(), BoxV2);
        const value = await upgraded.value();
        console.log(" value = ", value);
    });
});
