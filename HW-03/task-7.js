// Напиши скрипт управления личным кабинетом интернет банка. 
// Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.
/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};
/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */
const account = {
    // Текущий баланс счета
    balance: 0,
    // amount: 0,
    // История транзакций
    transactions: [],
    id: 0,
    /*
     * Метод отвечающий за добавление суммы к балансу
     * Создает объект транзакции и вызывает addTransaction
     */
    deposit(amount) {
        const transaction = {
            id: this.id,
            type: Transaction.DEPOSIT,
            amount,
        };
        this.balance += amount;
        this.id += 1;
        this.addTransaction(transaction);
    },
    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Создает объект транзакции и вызывает addTransaction
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            const transaction = {
                id: this.id,
                type: Transaction.WITHDRAW,
                amount,
            };
            this.id += 1;
            this.addTransaction(transaction);
        } else {
            console.log('Невозможно совершить трансакцию, недостаточно средств');
        }
    },
    /*
     * Метод добавляющий транзацию в свойство transactions
     * Принимает объект трназкции
     */
    addTransaction(transaction) {
        this.transactions.push(transaction);
    },
    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
        return this.balance;
    },
    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {
        for (const transaction of this.transactions) {
            if (id === transaction.id) {
                return transaction;
            }
        }
    },
    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
        let totalAmount = 0;
        for (const transaction of this.transactions) {
            if (type === transaction.type) {
                totalAmount += transaction.amount;
            }
        }
        return totalAmount;
    }
}

account.deposit(100);
console.log('Current balance: ' + account.getBalance());
account.transactions;
console.log(account.transactions);

account.withdraw(50);
console.log('Current balance: ' + account.getBalance());
account.deposit(1050);
console.log('Current balance: ' + account.getBalance());

account.withdraw(750);
console.log('Current balance: ' + account.getBalance());
console.log('transaction list : ');
console.log(account.transactions);

console.log(account.getTransactionDetails(3));


console.log(`Тип трансакции: ${Transaction.DEPOSIT}, 
общая сумма: ${account.getTransactionTotal(Transaction.DEPOSIT)}`);
console.log(`Тип трансакции: ${Transaction.WITHDRAW}, 
общая сумма: ${account.getTransactionTotal(Transaction.WITHDRAW)}`);