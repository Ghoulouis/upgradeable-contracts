import { deployments, ethers } from "hardhat";
import { getA, getB } from "../src/utils/helper";
import { Signer } from "ethers";
import { A__factory } from "../src/types";

describe("Box", async () => {
    let a: any;
    let b: any;
    let deployer: Signer;
    beforeEach(async () => {
        [deployer] = await ethers.getSigners();
        //await deployments.fixture();
        a = await getA();
        b = await getB();
        console.log(" a address = ", await a.getAddress());
        console.log(" b address = ", await b.getAddress());
    });

    it(" get value", async () => {
        await a.setBox(10);

        let owner = await a.owner();

        console.log(" owner a = ", owner);

        if (owner == (await b.getAddress())) {
            await (await b.setBox(40)).wait();
            console.log(" box = ", await a.getBox());
            return;
        }

        await a.connect(deployer).setBox(20);
        console.log(" box = ", await a.getBox());
        const tx = await a.connect(deployer).transferOwnership(await b.getAddress());
        // await tx.wait();
        console.log(" owner a = ", await a.owner());
        // const tx = await a.connect(deployer).transferOwnership(await b.getAddress());
        // await tx.wait();
        // console.log(" owner a = ", await a.owner());
        // console.log(" box = ", await b.getBox());
    }).timeout(1000000);
});
