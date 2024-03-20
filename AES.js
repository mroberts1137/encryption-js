const crypto = require('crypto-js');

const data = process.argv[2] || 'password';
const key = process.argv[3] || 'secretkey';

console.log(`Original data: ${data}`);
console.log(`Key: ${key}`);

// Encrypt the data
const encrypted = crypto.AES.encrypt(data, key).toString();
console.log(`Encrypted data: ${encrypted}`);

// Decrypting the data
const decrypted = crypto.AES.decrypt(encrypted, key).toString(crypto.enc.Utf8);
console.log(`Decrypted data: ${decrypted}`);
