import { parseEther } from "ethers";
import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre;
    const { deploy } = deployments;
    const { deployer, deployer2 } = await getNamedAccounts();
    await deploy("A", {
        from: deployer,
        args: [],
        log: true,
        skipIfAlreadyDeployed: false,
    });
};

deploy.tags = ["hardhat", "sapphire-testnet", "eth-tenderly"];
export default deploy;
