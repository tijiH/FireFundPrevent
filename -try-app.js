const http = require('http');

const hostname = '127.0.0.1';
const port = 3100;

const Web3 = require('web3');
const bignumers = require('bignumber')

// Crée une instance de Web3 avec l'URL du nœud BSC
const web3 = new Web3('https://bsc-dataseed.binance.org/');

// Adresse du smart contract
const contractAddress = '0x2152aa45e02c1022cAB4ad964663fB3D69C2023e';

// ABI du smart contract
const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"DeposMap","outputs":[{"internalType":"uint256","name":"key","type":"uint256"},{"internalType":"uint256","name":"depoTime","type":"uint256"},{"internalType":"uint256","name":"amt","type":"uint256"},{"internalType":"address","name":"reffy","type":"address"},{"internalType":"bool","name":"initialWithdrawn","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"FeesKey","outputs":[{"internalType":"uint256","name":"daysInSeconds","type":"uint256"},{"internalType":"uint256","name":"feePercentage","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"MainKey","outputs":[{"internalType":"uint256","name":"ovrTotalDeps","type":"uint256"},{"internalType":"uint256","name":"ovrTotalWiths","type":"uint256"},{"internalType":"uint256","name":"users","type":"uint256"},{"internalType":"uint256","name":"compounds","type":"uint256"},{"internalType":"uint256","name":"ovrTotalStaked","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"PercsKey","outputs":[{"internalType":"uint256","name":"daysInSeconds","type":"uint256"},{"internalType":"uint256","name":"divsPercentage","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDC","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"UsersKey","outputs":[{"internalType":"uint256","name":"startDate","type":"uint256"},{"internalType":"uint256","name":"divs","type":"uint256"},{"internalType":"uint256","name":"refBonus","type":"uint256"},{"internalType":"uint256","name":"totalInits","type":"uint256"},{"internalType":"uint256","name":"totalWiths","type":"uint256"},{"internalType":"uint256","name":"totalAccrued","type":"uint256"},{"internalType":"uint256","name":"lastWith","type":"uint256"},{"internalType":"uint256","name":"timesCmpd","type":"uint256"},{"internalType":"uint256","name":"keyCounter","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"dy","type":"address"}],"name":"calcdiv","outputs":[{"internalType":"uint256","name":"totalWithdrawable","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"compoundDividends","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devLastWithdrawal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mainInfo","outputs":[{"internalType":"uint256","name":"ovrTotalDeps","type":"uint256"},{"internalType":"uint256","name":"users","type":"uint256"},{"internalType":"uint256","name":"compounds","type":"uint256"},{"internalType":"uint256","name":"ovrTotalStaked","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minContractValue","outputs":[{"internalType":"uint256","name":"contractBackStop","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"seeRefBonus","outputs":[{"internalType":"uint256","name":"amtz","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amtx","type":"uint256"},{"internalType":"address","name":"ref","type":"address"}],"name":"stakeStablecoins","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"userInfo","outputs":[{"components":[{"internalType":"uint256","name":"key","type":"uint256"},{"internalType":"uint256","name":"depoTime","type":"uint256"},{"internalType":"uint256","name":"amt","type":"uint256"},{"internalType":"address","name":"reffy","type":"address"},{"internalType":"bool","name":"initialWithdrawn","type":"bool"}],"internalType":"struct Depo[]","name":"depoList","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amtx","type":"uint256"},{"internalType":"address","name":"ref","type":"address"}],"name":"withDrawFromContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawDivs","outputs":[{"internalType":"uint256","name":"withdrawAmount","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"keyy","type":"uint256"}],"name":"withdrawInitial","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amtx","type":"uint256"}],"name":"withdrawPartialDivs","outputs":[{"internalType":"uint256","name":"withdrawAmount","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"keyy","type":"uint256"},{"internalType":"uint256","name":"amtx","type":"uint256"}],"name":"withdrawPartialInitial","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawRefBonus","outputs":[],"stateMutability":"nonpayable","type":"function"}];

// Crée une instance du contrat
const contract = new web3.eth.Contract(abi, contractAddress);

const myFunctionSignature = web3.eth.abi.encodeFunctionSignature('withdrawInitial()');



async function getPastEvents(){
  const latestBlockNumber = 	await web3.eth.getBlockNumber();
  const startBlockNumber = latestBlockNumber - 52;

  console.log(latestBlockNumber, " à ", startBlockNumber)

  const blockPromises = [];
  for (let i = startBlockNumber; i <= latestBlockNumber; i++) {
    console.log(i)
    //blockPromises.push(web3.eth.getBlock(i, true));
  }

   console.log(web3.eth.getBlock(876, true))

  //const blocks = await Promise.all(blockPromises);

  //const transactions = [];

  //blocks.forEach((block) => {
  //  block.transactions.forEach((transaction) => {
  //    if (transaction.input.startsWith(myFunctionSignature)) {
  //      transactions.push(transaction);
   //   }
  //  });
  //});

  //console.log(transactions);
}

getPastEvents()
