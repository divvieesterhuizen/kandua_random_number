// Voucher batch
// create a list with size n of unique voucher numbers for an online store
// vouchers should be random and non-deterministic
// all vouchers codes should be alphanumeric
// all vouchers must contain both numbers and letters to be valid
// There may not be more than 2 consecutive repeating letters/ digits in a voucher
// A voucher code must be exactly 10 characters long
// If time permits try the following:
// Expose your API via a NodeJS API. Bonus if you can use NestJS and use some of its features
// The API should be able to produce 1 to 10 million voucher codes in a reasonable amount of time.

const express = require('express');
const router = express.Router();

// GET /api/vouchers/generate
router.get('/generate/:sizeParam?', (req, res) => {
  let listOfRandomNumbers = new Set();
  let n = 1;

  if (req.params && req.params.sizeParam && parseInt(req.params.sizeParam)) {
    n = parseInt(req.params.sizeParam);

    while (listOfRandomNumbers.size <= n) {
      listOfRandomNumbers.add(generateRandomNumber());
    }
  } else {
    listOfRandomNumbers.add(generateRandomNumber());
  }

  res.json(Array.from(listOfRandomNumbers));
});

// HELPER FUNCTIONS
const generateRandomNumber = () => {
  let arrayEven = 'abcdefghijklm01234';
  let arrayOdd = 'nopqrstuvwxyz56789';
  let randomNumberToReturn = '';

  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      randomNumberToReturn +=
        arrayEven[Math.floor(Math.random() * arrayEven.length)];
    } else {
      randomNumberToReturn +=
        arrayOdd[Math.floor(Math.random() * arrayOdd.length)];
    }
  }

  return randomNumberToReturn;
};

module.exports = router;
