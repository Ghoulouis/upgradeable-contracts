import { ethers, upgrades } from "hardhat";
import { getBox, getBoxProxy } from "../utils/helper";

async function main() {
    const Box = await ethers.getContractFactory("Box");
    console.log("Deploying Box...");

    const box = await upgrades.deployProxy(Box, [42], { initializer: "initializer" });
    await box.waitForDeployment();
    console.log("Box deployed to:", await box.getAddress());
}
main();
