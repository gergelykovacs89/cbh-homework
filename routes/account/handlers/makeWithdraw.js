import fs from 'fs';
import uuid from 'uuidv4';

export default (req, res) => {
    const { amount, accountId } = req.body;

    if (!uuid.isUuid(accountId)) {
        return res.status(400).json({message: `The provided accountId: ${accountId} is not a valid uuid.`});
    }

    let db = JSON.parse(fs.readFileSync('./db/testDB.json'));

    let accountIndex = db.findIndex((account) => account._id === accountId);

    if (accountIndex === -1) {
        return res.status(404).json({message: `The account with the provided accountId: ${accountId} doesn't exist.`});
    }

    const newBalance = db[accountIndex]._balance - amount;
    db[accountIndex]._balance = newBalance;
    const transaction = {
        type: 'withdraw',
        date: new Date(),
        amount: amount,
        balance: newBalance,
    }
    db[accountIndex]._transactions.push(transaction);
    fs.writeFileSync('./db/testDB.json', JSON.stringify(db));

    return res.status(200).json(`Withdraw made to account with id: ${accountId}. The new balance is: ${newBalance}`);
}