// deploy code will go here
const HDWallerProvider=require('@truffle/hdwallet-provider');
const Web3=require('web3');
const {abi,evm}=require('compile');
//interface is the ABI
const provider=new HDWallerProvider(
    'garment film beyond satisfy honey input flock provide glue evoke learn youth'
    ,'https://rpc-mumbai.maticvigil.com'
);
const web3=new Web3(provider);

//1. Account that we need access to
//2. Deployment to the network
let accounts;
const deploy=async ()=>{
    accounts=await web3.eth.getAccounts();
    console.log('Attempting to deploy the account',accounts[0]);
    console.log("ABI is :",abi);
    const  result=await new web3.eth.Contract(abi)
        .deploy({data:evm.bytecode.object})
        .send({gas:'1000000',from:accounts[0]});
    console.log(abi);
    //to get the address of the node where our contract has been deployed in the rinkeby network
    console.log('Contract deployed to',result.options.address);
};
deploy();