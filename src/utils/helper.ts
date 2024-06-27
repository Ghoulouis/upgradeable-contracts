import { deployments, ethers } from "hardhat";
import hre from "hardhat";
import { Box__factory } from "../types";

export const getBox = async () => {
    const BoxDeployment = await deployments.get("Box");
    const Box = await hre.ethers.getContractFactory("Box");
    return Box__factory.connect(BoxDeployment.address, ethers.provider);
};

export const getBoxProxy = async () => {
    const BoxProxyDeployment = await deployments.get("Box_Proxy");
    const boxProxy = await hre.ethers.getContractFactory("EIP173Proxy");
    return boxProxy.attach(BoxProxyDeployment.address);
};
