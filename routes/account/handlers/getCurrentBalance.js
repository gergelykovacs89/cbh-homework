import fs from 'fs';
import uuid from 'uuidv4';

export default (req, res) => {
    const { accountId } = req.params;

    if (!uuid.isUuid(accountId)) {
        return res.status(400).json({ message: `The provided accountId: ${accountId} is not a valid uuid.` });
    }

    let db = JSON.parse(fs.readFileSync('./db/testDB.json'));
    const account = db.find((account) => account._id === accountId);

    if (!account) {
        return res.status(404).json({ message: `The account with the provided accountId: ${accountId} doesn't exist.` });
    }

    return res.status(200).json(`The current balance of the account with id: ${accountId} is ${account._balance}`);
}