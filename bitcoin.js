function fillCurrency() {
  const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
  const data = getRequest(url);

  $('#us-currency span').html("$" + data.bpi.USD.rate);
  $('#uk-currency span').html("£" + data.bpi.GBP.rate);
  $('#ue-currency span').html("€" + data.bpi.EUR.rate);
}

fillCurrency();
