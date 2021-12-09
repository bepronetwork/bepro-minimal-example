## Minimal BEPRO example

### What
Minimal example to get developers start on bepro-js usage

### How
By building the solution on `index.js` into a bundled file with `bepro-js` via `npm run build`.    
The example spawns a page when `npm run start` is issued that will allow a user to deploy a ERC20 
Token on the `kovan` network.

You can change this limitation, by yourself, be removing or commenting the lines `59` and `60` of the
`index.js` file and providing the correct web3 provider link.

The default web3 provider is missin a _identification_ required by infura - you can use any other web3
provider that you'd like.

The default base ERC20 Token is using a Kovan address, don't forget to change line `12` of index.js
if you plan on deploying on anyother network and use a ERC20 as a base on that network.

If you wish to use BEPRO token as defaults, 

|Network|Contract Address|
|---|---|
|kovan|[0xE3A59c7a639816e3FBf3Cf14Ed0bf6E28A8D4Fd8](https://kovan.etherscan.io/address/0xE3A59c7a639816e3FBf3Cf14Ed0bf6E28A8D4Fd8)|
|moonriver|[0xCb4a593ce512D78162C58384f0b2Fd6e802c2c47](https://blockscout.moonriver.moonbeam.network/address/0xCb4a593ce512D78162C58384f0b2Fd6e802c2c47/transactions)|

### Installation
```
$ npm install
```

### Start
```
$ npm run start
```
