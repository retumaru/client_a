const dotenv = require('dotenv');
const fs = require('fs');
const messageModule = require('./message');

dotenv.config();

const name = process.env.NAME;
const number = process.env.NUMBER;

const result = messageModule.create(name, number);
console.log(result);

fs.writeFileSync('result.txt', result, 'utf-8');
