import fs from 'fs';
import moment from 'moment';
import uuid from 'uuidv4';

export default (req, res) => {
    const { accountId } = req.params;
    const { type, date } = req.query;

    if (!uuid.isUuid(accountId)) {
        return res.status(400).json({ message: `The provided accountId: ${accountId} is not a valid uuid.` });
    }

    let db = JSON.parse(fs.readFileSync('./db/testDB.json'));
    const account = db.find((account) => account._id === accountId);

    if (!account) {
        return res.status(404).json({ message: `The account with the provided accountId: ${accountId} doesn't exist.` });
    }

    const filteredTransactions = account._transactions.filter((transaction) => filterTransactions(transaction, type, date));

    return res.status(200).json(filteredTransactions);
}

const filterTransactions = (transaction, type, date) => {
    return (type ? (transaction.type === type) : true) &&
        (date ? (moment(date).isSame(transaction.date, 'day')) : true);
};