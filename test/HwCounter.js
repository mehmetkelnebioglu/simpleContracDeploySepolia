
const { expect } = require("chai");
const hre = require("hardhat");

describe('Web3-03', ()=>{
    let hwCounter;
    let add0; //herserefinde sinerlari cagimamak icin burada deger atadik ve beforeeach icinde kullandik
    let add1;

beforeEach(async ()=>{
    const [add0,add1]=await hre.ethers.getSigners();
    const HwCounter=await hre.ethers.getContractFactory("HwCounter");
           hwCounter=await HwCounter.deploy();
    await hwCounter.deployed();
    //console.log('HwCounter deployed to ', hwCounter.address);
});

it('sholud return deployer as owner', async()=>{
    const owner= await hwCounter.owner();
    const add0 = await hre.ethers.getSigner();
    //console.log ('add1', add0.address);

    expect(owner).to.equal(add0.address);
    
});

it('should set initial number correctly',async()=>{
    //const number= await hwCounter.number();
    expect( await hwCounter.number()).to.equal(100);
})

it ('should  increment number by parameter', async()=>{
    await hwCounter.increment(4);
    expect(await hwCounter.number()).to.equal(104);
});

it ('should decrement number by parameter', async()=>{
    await hwCounter.decrement(4);
    expect(await hwCounter.number()).to.equal(96);
});

it ('should revert increment more than 5 for not owner', async () =>{
        //const [add0,add1]=await hre.ethers.getSigners();
        await expect(hwCounter.connect(add1).increment(6)).to.revertedWith("Only owner");
        //buraaki yazdigimiz mesaj ile  contracttaki mesaj bir birbirinin aynisi olmali yoksa fail olur
});

it ('should revert decrement more than 5 for not owner', async () =>{
   //const [add0,add1]=await hre.ethers.getSigners();
    //burada sinerlara ulasiyoruz tekrar tekrar yazmamak icin 
    await expect(hwCounter.connect(add1).decrement(6)).to.revertedWith("Only owner");
    //connet ile fonksiyonu add1 adresi cagirmaya calisiyor
});
});

