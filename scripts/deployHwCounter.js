const hre = require("hardhat");

async function main(){
    const HwCounter=await hre.ethers.getContractFactory("HwCounter");
    console.log("deploying...");
    const hwCounter=await HwCounter.deploy();
    await hwCounter.deployed();

    console.log("contract ", hwCounter);
    console.log("hwCounter deployed to:", hwCounter.address);
}

main();