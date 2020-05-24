import uuid from 'uuidv4';

export default class Account {
    constructor(name, balance) {
        this._id = uuid.uuid();
        this._name = name;
        this._balance = balance;
        this._transactions = [];
    }

    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }

    get balance() {
        return this._balance;
    }
    set balance(newBalance) {
        this._balance = newBalance;
    }

    get id() {
        return this._id;
    }

    get transactions() {
        return this._transactions;
    }
}