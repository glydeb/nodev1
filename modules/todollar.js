var toDollar = function (num) {
  var usd = num.toString();
  usd = usd.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  return ('$' + usd);
};

module.exports = toDollar;
