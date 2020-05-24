import express from 'express';
import accountRouter from './account/index.js';

const mainRouter = express.Router();

mainRouter.use('/account', accountRouter);

export default mainRouter;