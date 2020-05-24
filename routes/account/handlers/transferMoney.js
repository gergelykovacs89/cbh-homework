import fs from 'fs';

export default (req, res) => {
    const { amount, fromAccountId, toAccountId } = req.body;

    let db = JSON.parse(fs.readFileSync('./db/testDB.json'));

    let fromAccountIndex = db.findIndex((account) => account._id === fromAccountId);
    let toAccountIndex = db.findIndex((account) => account._id === toAccountId);

    const newFromBalance = db[fromAccountIndex]._balance - amount;
    const newToBalance = db[toAccountIndex]._balance + amount;

    db[fromAccountIndex]._balance = newFromBalance;
    db[toAccountIndex]._balance = newToBalance;

    const fromTransaction = {
        type: 'transfer',
        date: new Date(),
        amount: amount,
        balance: newFromBalance,
        to: toAccountId
    };

    const toTransaction = {
        type: 'transfer',
        date: new Date(),
        amount: amount,
        balance: newToBalance,
        from: fromAccountId
    };

    db[fromAccountIndex]._transactions.push(fromTransaction);
    db[toAccountIndex]._transactions.push(toTransaction);

    fs.writeFileSync('./db/testDB.json', JSON.stringify(db));

    res.status(200).json(`Transfer made to account with id: ${toAccountId} from account with id: ${fromAccountId}.`)
}