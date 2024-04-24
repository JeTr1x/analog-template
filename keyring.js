import Keyring from "@polkadot/keyring";
import { TimegraphClient, keygen } from "@analog-labs/timegraph-js";
import { cryptoWaitReady } from '@polkadot/util-crypto';

const PHRASE = ''

await cryptoWaitReady();
// init polkadot keypair for node env
const keyring = new Keyring({ type: "sr25519" });
const keypair = keyring.addFromUri(PHRASE);
// pass signer and address to get keygen instance
const _keygen = new keygen({ signer: keypair.sign, address: keypair.address });
// generate API key, i.e. role is optional default will be developer
const apiKey = await _keygen.createApiKey();
// generate session key
const sessionKey = await _keygen.createSessionkey(30000);
console.log(sessionKey.ssk)
