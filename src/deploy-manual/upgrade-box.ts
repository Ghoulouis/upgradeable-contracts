import { ethers, upgrades } from "hardhat";
import { getBoxProxy } from "../utils/helper";

async function main() {
    const boxV2 = await ethers.getContractFactory("BoxV2");
    const mainBox = await upgrades.upgradeProxy("0x3dd6132f195caf8f8013b3ea6026cb9df15d0180", boxV2);
    console.log(" Box updated");
}
main();
