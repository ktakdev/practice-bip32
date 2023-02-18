const crypto = require("node:crypto")
const bip39 = require('bip39')

// // defaults to BIP39 English word list
// // uses HEX strings for entropy
// bip39.setDefaultWordlist("JA")
const mnemonic1 = bip39.generateMnemonic();
// const mnemonic = bip39.entropyToMnemonic('00000000000000000000000000000000')
// const wl = bip39.getDefaultWordlist();
// const entropy = bip39.mnemonicToEntropy(mnemonic)

console.log(mnemonic1);

const buf = Buffer.allocUnsafe(4)
crypto.getRandomValues(buf)
console.log(buf)