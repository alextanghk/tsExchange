# Development Setup

1. Copy and rename .env.example as .env
2. Fill in api key ( you can check the tatum env key meaning from https://github.com/tatumio/tatum-js)
3. npm start to start the testing server.


## Testing API

```
// Create BTC wallet and return public key

CURL -X POST http://localhost:PORT/test/CreateBTCAccount
```

```
// Create Account by public key

CURL -X POST --header "Content-Type: application/json" --data '{"pub":"{PUBKEY}"}" http://localhost:PORT/test/CreateBTCAccount
```

```
// Get Account by Account id

CURL -X GET http://localhost:PORT/test/GetAccountById/{accountId}
```