# cbh-homework

Example minimal banking node.js backend

## Getting Started

This little project has 6 endpoints which will be accessible on localhost:3000 by default:

 - POST /account/create                       |   request body attributes: name(String), balance(int)
 - GET  /account/current-balance/:accountId   |   accountId should be valid uuid
 - GET  /transaction-history/:accountId       |   accountId should be valid uuid
 - POST /transfer                             |   request body attributes: fromAccountId(uuid), toAccountId(uuid), amount(int)
 - PUT  /make-deposit                         |   request body attributes: accountId(uuid), amount(int)
 - PUT  /make-withdraw                        |   request body attributes: accountId(uuid), amount(int)

### Prerequisites

The start script needs nodemon to execute, it's included in the package.json dependencies with all other prerequisites

### Installing

Run npm install, after the installation finishes, you can start the project with npm start

```sh
$ cd cbh-homework
$ npm install
$ npm start
```


