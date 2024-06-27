import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";
import "@typechain/hardhat";
import "@openzeppelin/hardhat-upgrades";

import dotenv from "dotenv";

dotenv.config();

const TEST_HDWALLET = {
    mnemonic: "test test test test test test test test test test test junk",
    path: "m/44'/60'/0'/0",
    initialIndex: 0,
    count: 20,
    passphrase: "",
};

const accounts = process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : TEST_HDWALLET;

const config: HardhatUserConfig = {
    paths: {
        artifacts: "artifacts",
        cache: "cache",
        deploy: "src/deploy",
        sources: "contracts",
        tests: "test",
    },
    solidity: {
        compilers: [
            {
                version: "0.8.24",
                settings: {
                    optimizer: { enabled: true, runs: 800 },
                    viaIR: true,
                    metadata: {
                        bytecodeHash: "none",
                    },
                },
            },
        ],
    },
    namedAccounts: {
        deployer: 0,
        alice: 1,
        bob: 2,
    },
    typechain: {
        outDir: "src/types",
        target: "ethers-v6",
        alwaysGenerateOverloads: false,
        externalArtifacts: ["externalArtifacts/*.json"],
        dontOverrideCompile: false,
    },
    networks: {
        hardhat: {
            chainId: 31337,
            accounts: TEST_HDWALLET,
            tags: ["hardhat"],
        },
        "eth-tenderly": {
            url: process.env.ETH_TENDERLY_URL!,
            chainId: 1,
            accounts,
            live: true,
            tags: ["eth-tenderly"],
        },
        "sapphire-testnet": {
            url: "https://testnet.sapphire.oasis.dev",
            chainId: 0x5aff,
            accounts,
            live: true,
            tags: ["sapphire-testnet"],
        },
        "hardhat-node": {
            chainId: 31337,
            accounts: TEST_HDWALLET,
            url: "http://127.0.0.1:8545/",
            tags: ["hardhat-local"],
        },
    },
};

export default config;
