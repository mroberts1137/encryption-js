#!/usr/bin/env node

const SHA256 = require('crypto-js/sha256');

const plainText = process.argv[2] || 'password';
const hashedData = SHA256(plainText).toString();

console.log(`Original String: ${plainText}`);
console.log(`SHA256 encryption: ${hashedData}`);
