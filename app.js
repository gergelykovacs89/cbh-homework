import express from 'express';
import bodyParser from 'body-parser';
import mainRouter from './routes/index.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(mainRouter);

app.listen(port, () => {
     console.log(`Application started on port ${port}`);
});