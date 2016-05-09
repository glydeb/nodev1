var randomNumber = require('./random');
var toDollar = require('./todollar');

var getDollar = function () {
  var usd = toDollar(randomNumber(100, 1000000));
  return usd;
};

var balanceMessage = function () {
  return 'Account balance: \n';
};

module.exports.amount = getDollar;
module.exports.message = balanceMessage;
