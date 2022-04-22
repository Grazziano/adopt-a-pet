const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://localhost:27017/adoptapet');
  console.log('Conectou ao Mongo');
}

main().catch((err) => console.log(err));

module.exports = mongoose;
