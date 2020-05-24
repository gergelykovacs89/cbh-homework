import express from 'express';
import getCurrentBalance from './handlers/getCurrentBalance.js';
import createAccount from './handlers/createAccount.js';
import makeDeposit from './handlers/makeDeposit.js';
import makeWithdraw from './handlers/makeWithdraw.js';
import transferMoney from './handlers/transferMoney.js';
import getTransactionHistory from './handlers/getTransactionHistory.js';

const accountRouter = express.Router();

accountRouter.post('/create', createAccount)
accountRouter.get('/current-balance/:accountId', getCurrentBalance);
accountRouter.get('/transaction-history/:accountId', getTransactionHistory)
accountRouter.post('/transfer', transferMoney)
accountRouter.put('/make-deposit', makeDeposit);
accountRouter.put('/make-withdraw', makeWithdraw);

export default accountRouter;
