import { deployments, ethers } from "hardhat";
import hre from "hardhat";

export const getA = async () => {
    const ADeployment = await deployments.get("A");
    const A = await hre.ethers.getContractFactory("A");
    return A.attach(ADeployment.address);
};

export const getB = async () => {
    const BDeployment = await deployments.get("B");
    const B = await hre.ethers.getContractFactory("B");
    return B.attach(BDeployment.address);
};

export const getProxy = async () => {
    const BoxProxy = await deployments.get("Box_Proxy");
    const Box = await hre.ethers.getContractFactory("EIP173Proxy");
    return Box.attach(BoxProxy.address);
};

export const getBoxProxy = async () => {
    const BoxProxyDeployment = await deployments.get("Box_Proxy");
    const boxProxy = await hre.ethers.getContractFactory("EIP173Proxy");
    return boxProxy.attach(BoxProxyDeployment.address);
};
