const { expect } = require("chai");

describe('Counter', async ()=>{
    beforeEach(async ()=>{
            const Counter=await hre.ethers.getContractFactory("Counter");
            const counter=await Counter.deploy(5);
            await counter.deployed();
        
    });

        it ('should set correct number', async()=>{
            expect( await counter.number()).to.equal(5);
    });

        it ("should properly increment number", async()=>{
            await counter.increment();
            expect(await counter.number()).to.equal(6);

    })




} );