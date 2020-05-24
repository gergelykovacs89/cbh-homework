import fs from 'fs';

export default (req, res) => {
    const { amount, accountId } = req.body;

    let db = JSON.parse(fs.readFileSync('./db/testDB.json'));

    let accountIndex = db.findIndex((account) => account._id === accountId);

    const newBalance = db[accountIndex]._balance - amount;
    db[accountIndex]._balance = newBalance;
    fs.writeFileSync('./db/testDB.json', JSON.stringify(db));

    res.status(200).json(`Withdraw made to account with id: ${accountId}. The new balance is: ${newBalance}`)
}