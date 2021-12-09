"use strict";

const { ERC20Contract, Application } = require("bepro-js");

const web3Connection = 'https://kovan.infura.io/v3/';

async function deployERC20(name = `BEPRO`,
                     symbol = `$BEPRO`,
                     cap = 1000000*10**18, // 1M Tokens with 18 decimals
                     distributionAddress = `0x0`, // main wallet of erc20 coins
                     tokenAddress = `0xE3A59c7a639816e3FBf3Cf14Ed0bf6E28A8D4Fd8` // base erc20 token
                     ) {
  try {
    const erc20Contract = new ERC20Contract({tokenAddress, opt: {web3Connection}});

    /* Login with Metamask/Web3 Wallet */
    await erc20Contract.login();

    /* Deploy ERC20 Contract */
    const transaction = await erc20Contract.deploy({
      name, symbol, cap, distributionAddress,
    });

    /* Access methods easily */
    const totalSupply = await erc20Contract.totalSupply();

    console.table({transaction, totalSupply});
  } catch (e) {
    console.error(e);
  }
}



function onClickDeployERC20() {
  const options = [`name`, `symbol`, `cap`, `address`];
  const values = options.reduce((p, c) => ({...p, [c]: document.querySelector(`[name="erc20${c}"]`)?.value}), {})
  if (Object.values(values).some(v => !v))
    return alert(`Missing variable values!`);

  values.cap = (values.cap * 10 ** document.querySelector(`[name="erc20dec"]`)?.value).toString();

  deployERC20(values.name, values.symbol, values.cap, values.address)
    .then(() => alert(`Check your console`))
    .catch(() => alert(`Something failed, check console`));
}

(() => {
  if (!web3Connection)
    return alert(`Please provide a web3 address such as`);

  const bepro = new Application({opt: {web3Connection}});

  try {
    bepro.start();

    // make sure we only use KOVAN to avoid disasters.
    if (+window?.ethereum?.chainId !== 42)
      throw new Error(`Please switch to KOVAN and refresh`);

  } catch (e) {
    console.error(e);
    return alert(`Some problems starting: ${e.message}`);
  }
  document.querySelector(`#erc20deploy`).onclick = () => onClickDeployERC20();
})()
