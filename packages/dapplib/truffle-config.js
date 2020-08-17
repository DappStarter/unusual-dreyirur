require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install inhale fresh turn bitter birth mushroom erosion just entire outer total'; 
let testAccounts = [
"0x8614a1b3d766d4678c2533739b6dc6127ba90798e1efe37de0130599061e5efa",
"0x50599a3c7b8273d0b3fc29fc75b87869897d5cec8b0c47a9e1e7cd33f57d2a8d",
"0x9d7d624a51928e2f84fb631d7e45f080e79011e44c769a5b195ff1c03624456a",
"0x67853786cc558687c2d05fb21175efe0f9f4897f6a51a228dbe69cffa1d659bf",
"0x8e8f008226e6dd261267852a55bf7ae0158845d8ffce758045afcfcf2ff39c17",
"0x35300ffa6d8fcfb4a0450ebc66e04efb11a6b0fb48983572c8023a2a9445c1bf",
"0x90f4467b2b68c63fe93fd5d2391287261d9d15e8f54309478feb6620d752d72e",
"0x0ebd0d87ae2c43e812d2dded5ff25954b37545fcad92e65b7a6daa77d5dedc12",
"0xc28e497ef1ffb35dd90fbdbea56bac3f81bd22d04988d4e14d3e014e15109b7d",
"0x78f9aa0923ac5a29d08415a4386ec344c984e94abc9c3f1aa78c30a236e9f5ee"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
