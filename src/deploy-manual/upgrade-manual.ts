import { ethers, upgrades } from "hardhat";
import { getBox, getBoxProxy } from "../utils/helper";

async function main() {
    const boxV2 = await ethers.getContractFactory("BoxV2");
    const signer = await ethers.getSigners();
    const contract = await getBox();
    console.log(" Box updated");
}
main();
