const ethers = require('ethers');
require('dotenv').config();

async function main() {

  const url = process.env.GOERLI_URL;

  const contractabi = require("../artifacts/contracts/ModifyVariable.sol/ModifyVariable.json");


  const CONTRACT_ADDR = "0x03500C985931C15E5b154b80CCe395BE12775C82"

  let artifacts = await hre.artifacts.readArtifact("ModifyVariable");

  const provider = new ethers.providers.JsonRpcProvider(url);

  const signer = provider.getSigner()

  let contract = new ethers.Contract(CONTRACT_ADDR, contractabi, signer);

  let privateKey = process.env.PRIVATE_KEY;

  let wallet = new ethers.Wallet(privateKey, provider);

  
  console.log("Modify Variable Contract address:", contract.address);

  // modify x from 10 to 1337 via this function!
    await contract.modifyToLeet();
    // getter for state variable x
    //const newX = await contract.x();
    //assert.equal(newX.toNumber(), 1337);

  }

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});
