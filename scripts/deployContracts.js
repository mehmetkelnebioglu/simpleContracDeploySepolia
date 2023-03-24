const hre = require("hardhat");

async function hello(prams) {
    const Hello = await hre.ethers.getContractFactory("Hello");
    const hello = await Hello.deploy();

    console.log("deployin...",);

    await hello.deployed();

    console.log("deployed", hello.address);

    console.log("data", await hello.greetings());

}

async function counter(params) {

    const Counter=await hre.ethers.getContractFactory("Counter");
    const counter=await Counter.deploy(5);

    await counter.deployed();
    
    console.log ("deployed" , counter.address);
    
}

counter();


//hello();