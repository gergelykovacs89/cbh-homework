import fs from 'fs';
import moment from 'moment';

export default (req, res) => {
    const { accountId } = req.params;
    const {type, date} = req.query;

    let db = JSON.parse(fs.readFileSync('./db/testDB.json'));
    const account = db.find((account) => account._id === accountId);

    const filteredTransactions = account._transactions.filter((transaction) => filterTransactions(transaction, type, date));

    res.status(200).json(filteredTransactions);
}

const filterTransactions = (transaction, type, date) => {
    return (type ? (transaction.type === type) : true) &&
           (date ? (moment(date).isSame(transaction.date, 'day')) : true);
}