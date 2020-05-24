import fs from 'fs';

export default (req, res) => {
    const { accountId } = req.params; 

    let db = JSON.parse(fs.readFileSync('./db/testDB.json'));
    const account = db.find((account) => account._id === accountId);

    res.status(200).json(`The current balance of the account with id: ${accountId} is ${account._balance}`);
}