import { deployments, ethers } from "hardhat";
import { getA, getB } from "../src/utils/helper";
import { Signer } from "ethers";

describe("Box", async () => {
    let a: any;
    let b: any;
    let deployer: Signer;
    beforeEach(async () => {
        [deployer] = await ethers.getSigners();
        await deployments.fixture();
        a = await getA();
        b = await getB();
        console.log(" a address = ", await a.getAddress());
        console.log(" b address = ", await b.getAddress());
    });

    it(" get value", async () => {
        await a.setBox(10);
        console.log(" owner a = ", await a.owner());
        console.log(" a. box = ", await a.getBox());

        await a.transferOwnership(await b.getAddress());
        console.log(" owner a = ", await a.owner());
        console.log(" box = ", await b.getBox());
    });
});
