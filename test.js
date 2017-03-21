const openpgp = require('openpgp');
var options = {
  userIds: [{ name:'bryan chu', email:'bryan.p.chu@gmail.com' }], // multiple user IDs
  numBits: 4096,                                            // RSA key size
  passphrase: 'bamboo'         // protects the private key
};

openpgp.generateKey(options).then(function(key) {
  var privkey = key.privateKeyArmored; // '-----BEGIN PGP PRIVATE KEY BLOCK ... '
  var pubkey = key.publicKeyArmored;   // '-----BEGIN PGP PUBLIC KEY BLOCK ... '
});


