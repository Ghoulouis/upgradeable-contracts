import { parseEther } from "ethers";
import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { openzeppelin } from "../types";

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre;
    const { deploy } = deployments;
    const { deployer, deployer2 } = await getNamedAccounts();

    const a = await deployments.get("A");

    await deploy("B", {
        from: deployer,
        args: [],
        proxy: {
            execute: {
                init: {
                    methodName: "init",
                    args: [a.address],
                },
            },
        },
        log: true,
        skipIfAlreadyDeployed: false,
    });
};

deploy.tags = ["hardhat", "sapphire-testnet", "eth-tenderly"];
export default deploy;
