# google-app-script-test
Adding of function getPriceOf() to Google Spreadsheets.

Adding of function getPriceOf() to get price of crypto pair from Binance. You need to set Script Properties 'apiKey' and 'errorCode' in menu 'File - Project Properties'. Default value of 'errorCode' should be '{"value": 0}'. I haven't found out how to set not string value into Script Properties yet. Property 'errorCode' use to cancel sending requests if request limit is exceed. If you need to restore a posibility to make requests after exceeding limit, you can use function setDefaultErrorCode().
Read documentation for Binance REST API here: https://github.com/binance-exchange/binance-official-api-docs/blob/master/rest-api.md
