# Serverless Bitly API

Consumes posted URL & Event and returns Result

## Prerequisites ##

- Docker
- Docker Compose
- Make
- AWS Admin Access

## Environment variables ##

Make sure you have set your environment variables properly or create a file `.env`. The file `.env.template` contains the environment variables that are used by the application.

## Make Usage ##

```bash
# using . env.template for .env as an example
$ make dotenv DOTENV=.env.template
# OR 
$ make .env
# Deploy the lambda stack
$ make deploy
# Remove the lambda stack
$ make remove
```


## Develop ##

Uncomment the Offline plugin in serverless.yml 

```bash
# using offline mode
$ make offline
```

Run tests: 

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/c12d379cf03c4c88ca44)

http://0.0.0.0:3000/bitly-api?event=shorten

Test JSON:

```json
{"url" : "https://www.google.com"}

```

```json
{"url" : <A_SHORT_BITLY_URL>}

```
