import Keyring from "@polkadot/keyring";
import { TimegraphClient, keygen } from "@analog-labs/timegraph-js";
import { cryptoWaitReady } from '@polkadot/util-crypto';

const ssk = ""

const timeGraphClient = new TimegraphClient({
url: "https://timegraph.testnet.analog.one/graphql", // A url to Watch GraphQL instance.  
sessionKey: ssk, // Session key created by user wallet using WASM SDK
});
//If you're querying other publishers' View, then an alias request will be called in first like this:
const response = timeGraphClient.view.data(
{ 
        hashId:"view_hash",
        fields:["definition/field to get"],
        limit:"10"
}
); 
await new Promise(r => setTimeout(r, 2000));
await console.log(response)




