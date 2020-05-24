import Account from '../../../models/account.js';
import fs from 'fs';

export default (req, res) => {
    const { name, balance } = req.body;

    const newAccount = new Account(name, balance);

    let db = JSON.parse(fs.readFileSync('./db/testDB.json'));
    db.push(newAccount);
    fs.writeFileSync('./db/testDB.json', JSON.stringify(db));
    
    res.status(201).json({message: `Account created with id: ${newAccount.id}`})
}