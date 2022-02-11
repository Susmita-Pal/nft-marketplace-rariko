// compile code will go here
const path=require('path');
const fs=require('fs');
const solc=require('solc');

const lotteryPath=path.resolve(__dirname,'marketplaceBoilerplate.sol');
//to read the contents of the file
const source=fs.readFileSync(lotteryPath,'utf8');

const input = {
    language: 'Solidity',
    sources: {
        'marketplaceBoilerplate.sol': {
            content: source,
        },
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*'],
            },
        },
    },
};

//console.log(solc.compile(JSON.stringify(input)));
module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
    'marketplaceBoilerplate.sol'
    ].marketplaceBoilerplate;
console.log(JSON.parse(solc.compile(JSON.stringify(input))).contracts);