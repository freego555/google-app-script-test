function getPriceOf(symbol) {
  // Example of parameter symbol for tests in Google App Script
  if (symbol === undefined) {
    symbol = 'ETHBTC';
  }
  
  var scriptProperties = PropertiesService.getScriptProperties();
  var errorCode = JSON.parse(scriptProperties.getProperty('errorCode')).value;
  var apiKey = scriptProperties.getProperty('apiKey');
  
  var result = '';
  if (errorCode !== 429 && errorCode !== 418) {
    var url = 'https://api.binance.com/api/v3/ticker/price?symbol=' + symbol;
    var response = UrlFetchApp.fetch(url, {'X-MBX-APIKEY': apiKey, 'muteHttpExceptions': true});
  
    if (response.getResponseCode() === 200) {
      responseObject = JSON.parse(response.getContentText());
      result = responseObject.price;
    } else {
      scriptProperties.setProperty('errorCode', '{"value": ' + response.getResponseCode() + '}');
      result = 'ErrorBinance: HTTP ' + response.getResponseCode();
    }
  } else {
    result = 'ErrorBinance: Request limit exceeded.';
  }
  Logger.log(result);
  
  return result;
}

function setDefaultErrorCode() {
  var scriptProperties = PropertiesService.getScriptProperties();
  scriptProperties.setProperty('errorCode', '{"value": 0}');
  return true;
}
