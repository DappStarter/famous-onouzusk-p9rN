require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena forward turtle crazy response rifle upgrade kidney process suspect genre'; 
let testAccounts = [
"0x4b456c1721e9507fbd13c9af7aa39a01b1ac3874b9ee88209831dfbf73fd7b49",
"0xdc687df352b74355be6504726a5a720d1302db95ef88fd723ddbd0b0d8f3ab93",
"0xdff96acc19c02f226286978d80096d96f4d83c3dad4ea6194278436d8d61b49b",
"0xa210ee8cbf20acea7b9ab2f8ac4a435e3b4080fa9af8291ada054339e9b0a607",
"0x55c48ca211eaf67bc4bec83d9475a8603cc1b6a04941c9f8cef5fbeaf8606ba1",
"0x1e3c6b7f01933cd82c8a1bfd659b0935712a0e968891b63ff76c12261555ad7f",
"0x80080862911b2229a47c246e0a66f2795cd2d5a495dd4881031932d064203672",
"0xfe5e842d3ce6a22f326971947c928d14f067b53ea3271ae4955cd0dc5890b45b",
"0x9bb4e55458098b3959bba09645c0e534fbe51be1df0b056ce1792779d16a1f86",
"0x24e1d4f20c7a10143835430fcdbf3522585682674e18ae1c6aa9d2193f1fab5e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

