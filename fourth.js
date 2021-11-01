const workersArr = [{
    number: 1,
    name: 'Ivan',
    surname: 'Petrov',
    department: 1,
    position: 'deputyhead',
    salary: 20000,
    dismissed: false,
},
{
    number: 2,
    name: 'Vadim',
    surname: 'Zholud',
    department: 1,
    position: 'deputy director',
    salary: 18000,
    dismissed: false,
},
{
    number: 3,
    name: 'Michail',
    surname: 'Polovnik',
    department: 1,
    position: 'seniorchef',
    salary: 15000,
    dismissed: false,
},
{
    number: 4,
    name: 'Vasiliy',
    surname: 'Gordiy',
    department: 1,
    position: 'chef',
    salary: 13000,
    dismissed: false,
},
{
    number: 5,
    name: 'Stepan',
    surname: 'Monobrov',
    department: 1,
    position: 'chef',
    salary: 13500,
    dismissed: true,
},
{
    number: 6,
    name: 'Ignat',
    surname: 'Pobegushka',
    department: 1,
    position: 'waiter',
    salary: 9500,
    dismissed: false,
},
{
    number: 7,
    name: 'Victor',
    surname: 'Sito',
    department: 1,
    position: 'seniorchef',
    salary: 16000,
    dismissed: false,
},
{
    number: 8,
    name: 'Nikita',
    surname: 'Soteynikov',
    department: 1,
    position: 'seniorchef',
    salary: 16200,
    dismissed: false,
},
{
    number: 9,
    name: 'Akakiy',
    surname: 'Kolovrat',
    department: 1,
    position: 'chef',
    salary: 12800,
    dismissed: true,
},
{
    number: 10,
    name: 'Yan',
    surname: 'Riurik',
    department: 1,
    position: 'chef',
    salary: 13100,
    dismissed: false,
},
{
    number: 11,
    name: 'Vladimir',
    surname: 'Kolokol',
    department: 2,
    position: 'deputyhead',
    salary: 19000,
    dismissed: true,
},
{
    number: 12,
    name: 'Iliya',
    surname: 'Lopata',
    department: 2,
    position: 'deputy director',
    salary: 17000,
    dismissed: false,
},
{
    number: 13,
    name: 'Victor',
    surname: 'Pavlik',
    department: 2,
    position: 'seniorchef',
    salary: 15000,
    dismissed: false,
},
{
    number: 14,
    name: 'Evpatiy',
    surname: 'Yasnosolnishko',
    department: 2,
    position: 'chef',
    salary: 12900,
    dismissed: false,
},
{
    number: 15,
    name: 'Agomen',
    surname: 'Mondrizgi',
    department: 2,
    position: 'chef',
    salary: 13300,
    dismissed: false,
},
{
    number: 16,
    name: 'Armen',
    surname: 'Gigigiurishvili',
    department: 2,
    position: 'waiter',
    salary: 9000,
    dismissed: false,
},
{
    number: 17,
    name: 'Shi-no',
    surname: 'Yiung',
    department: 2,
    position: 'seniorchef',
    salary: 16100,
    dismissed: false,
},
{
    number: 18,
    name: 'Enrike',
    surname: 'Mondaless',
    department: 2,
    position: 'seniorchef',
    salary: 16200,
    dismissed: false,
},
{
    number: 19,
    name: 'Evpatiy',
    surname: 'Yasnosolnishko',
    department: 2,
    position: 'chef',
    salary: 12900,
    dismissed: false,
},
{
    number: 20,
    name: 'Agomen',
    surname: 'Mondrizgi',
    department: 2,
    position: 'chef',
    salary: 13300,
    dismissed: false,
},
{
    number: 21,
    name: 'Efim',
    surname: 'Shiza',
    department: 3,
    position: 'deputyhead',
    salary: 18500,
    dismissed: false,
},
{
    number: 22,
    name: 'Svyatizar',
    surname: 'Molot',
    department: 3,
    position: 'deputy director',
    salary: 17500,
    dismissed: false,
},
{
    number: 23,
    name: 'Alex',
    surname: 'Maslo',
    department: 3,
    position: 'seniorchef',
    salary: 15500,
    dismissed: false,
},
{
    number: 24,
    name: 'victoria',
    surname: 'Vlasova',
    department: 3,
    position: 'chef',
    salary: 13000,
    dismissed: false,
},
{
    number: 25,
    name: 'Tatyana',
    surname: 'Korzh',
    department: 3,
    position: 'chef',
    salary: 13000,
    dismissed: false,
},
{
    number: 26,
    name: 'Gurgen',
    surname: 'Akapyan',
    department: 3,
    position: 'waiter',
    salary: 9100,
    dismissed: false,
},
{
    number: 27,
    name: 'Papau',
    surname: 'Oueo',
    department: 3,
    position: 'seniorchef',
    salary: 16300,
    dismissed: false,
},
{
    number: 28,
    name: 'Enrike',
    surname: 'Mondaless',
    department: 3,
    position: 'seniorchef',
    salary: 16200,
    dismissed: false,
},
{
    number: 29,
    name: 'Ekaterina',
    surname: 'Orlova',
    department: 3,
    position: 'chef',
    salary: 13500,
    dismissed: false,
},
{
    number: 30,
    name: 'Sergey',
    surname: 'Mozgovitiy',
    department: 3,
    position: 'chef',
    salary: 12800,
    dismissed: true,
},
{
    number: 31,
    name: 'Ada',
    surname: 'Voroncova',
    department: 4,
    position: 'deputyhead',
    salary: 21000,
    dismissed: false,
},
{
    number: 32,
    name: 'Slava',
    surname: 'Trudu',
    department: 4,
    position: 'deputy director',
    salary: 16900,
    dismissed: false,
},
{
    number: 33,
    name: 'Victor',
    surname: 'Pavlik',
    department: 4,
    position: 'seniorchef',
    salary: 15300,
    dismissed: false,
},
{
    number: 34,
    name: 'Ludmila',
    surname: 'Nazarova',
    department: 4,
    position: 'chef',
    salary: 13300,
    dismissed: false,
},
{
    number: 35,
    name: 'Agafon',
    surname: 'Kunilakis',
    department: 4,
    position: 'chef',
    salary: 13700,
    dismissed: false,
},
{
    number: 36,
    name: 'Tumbau',
    surname: 'Gogonoleole',
    department: 4,
    position: 'waiter',
    salary: 9600,
    dismissed: false,
},
{
    number: 37,
    name: 'Shi-no',
    surname: 'Yiung',
    department: 4,
    position: 'seniorchef',
    salary: 16400,
    dismissed: false,
},
{
    number: 38,
    name: 'Enrike',
    surname: 'Mondaless',
    department: 4,
    position: 'seniorchef',
    salary: 16800,
    dismissed: false,
},
{
    number: 39,
    name: 'Egor',
    surname: 'Zatoka',
    department: 4,
    position: 'chef',
    salary: 12400,
    dismissed: true,
},
{
    number: 40,
    name: 'Bogdan',
    surname: 'Salo',
    department: 4,
    position: 'chef',
    salary: 13200,
    dismissed: false,
},
];

const department = [
    {
        id: 1,
        name: 'Texas Rangers',
    },

    {
        id: 2,
        name: 'Gore Konditery',
    },

    {
        id: 3,
        name: 'Myasnoy Otdel',
    },

    {
        id: 4,
        name: 'Molekulyarka',
    },
];

const position = [
    {
        id: 1,
        name: 'deputyhead',
    },

    {
        id: 2,
        name: 'deputy director',
    },

    {
        id: 3,
        name: 'seniorchef',
    },

    {
        id: 4,
        name: 'chef',
    },

    {
        id: 5,
        name: 'waiter',
    },
];

class Restoraunt {
    constructor(data) {
        this.data = data;
    }

    countWholeSalaryDepartment(dismissed) {
        let wholeSalary = {};
        this.data.forEach((value) => {
            wholeSalary[value.department] = wholeSalary[value.department] || 0;

            if (value.dismissed === dismissed) {
                wholeSalary[value.department] += value.salary;
            }
        });

        return wholeSalary;
    };

    activeWorkers(dismissed) {
        let department = {};
        for (let i = 0; i < workersArr.length; i++) {
            if (department[workersArr[i].department] === undefined) {
                department[workersArr[i].department] = 0;
            }
            if (workersArr[i].dismissed == dismissed) {
                department[workersArr[i].department]++;
            }
        }
        return department;
    };

    middleDepartmentSalary(dismissed) {
        let activeWorkers = rest.activeWorkers(dismissed);
        let wholeSalary = rest.countWholeSalaryDepartment(dismissed);
        let middleSalary = {};
        for (let i in activeWorkers) {
            middleSalary[i] = Math.round(wholeSalary[i] / activeWorkers[i]);
        }
        return middleSalary;
    };

    minDepartmentSalary(dismissed) {
        let minDepSalary = {};
        let min = false;
        for (let j = 0; j < department.length; j++) {
            min = 0;
            for (let i = 0; i < workersArr.length; i++) {
                if (workersArr[i].dismissed === dismissed && (min > workersArr[i].salary || min === 0) && workersArr[i].department == department[j].id) {
                    min = workersArr[i].salary;
                }
            }
            minDepSalary[department[j].name] = min;
        }
        return minDepSalary;
    }

    maxDepartmentSalary(dismissed) {
        let maxDepSalary = {};
        let max = false;
        for (let j = 0; j < department.length; j++) {
            max = 0;
            for (let i = 0; i < workersArr.length; i++) {
                if (workersArr[i].dismissed === dismissed && (max < workersArr[i].salary || max === 0) && workersArr[i].department == department[j].id) {
                    max = workersArr[i].salary;
                }
            }
            maxDepSalary[department[j].name] = max;
        }
        return maxDepSalary;
    }

    minPositionSalary(dismissed) {
        let minPosSalary = {};
        let min = false;
        for (let j = 0; j < position.length; j++) {
            min = 0;
            for (let i = 0; i < workersArr.length; i++) {
                if (workersArr[i].dismissed === dismissed && (min > workersArr[i].salary || min === 0) && workersArr[i].position == position[j].name) {
                    min = workersArr[i].salary;
                }
            }
            minPosSalary[position[j].name] = min;
        }
        return minPosSalary;
    }

    maxPositionSalary(dismissed) {
        let maxPosSalary = {};
        let max = false;
        for (let j = 0; j < position.length; j++) {
            max = 0;
            for (let i = 0; i < workersArr.length; i++) {
                if (workersArr[i].dismissed === dismissed && (max < workersArr[i].salary || max === 0) && workersArr[i].position == position[j].name) {
                    max = workersArr[i].salary;
                }
            }
            maxPosSalary[position[j].name] = max;
        }
        return maxPosSalary;
    }

    showDepartmentWithoutPosition(position) {
        let departmentWithoutPosition = [];
        label:
        for (let j = 0; j < department.length; j++) {
            for (let i = 0; i < workersArr.length; i++) {
                if (workersArr[i].dismissed === false && workersArr[i].position == position && workersArr[i].department == department[j].id) {
                    continue label;
                }
            }
            departmentWithoutPosition.push(department[j].name);
        }
        return departmentWithoutPosition;
    };
};



const rest = new Restoraunt(workersArr);

// console.log(rest.countWholeSalaryDepartment(false));
// console.log(rest.activeWorkers(false));
// console.log(rest.middleDepartmentSalary(false));
// console.log(rest.minDepartmentSalary(false));
// console.log(rest.maxDepartmentSalary(false));
// console.log(rest.minPositionSalary(false));
// console.log(rest.maxPositionSalary(false));
// console.log(rest.showDepWithoutDir('deputyhead'));


const bankClients = [{
    id: 1,
    name: 'Vasiliy',
    surname: 'Zazhitochniy',
    isActive: true,
    debit: {
        curentBalance: 8000,
        active: true,
        activetedDate: '04.06.2015',
        expiredDate: '04.06.2028',
        currency: 'USD',
    },
    credit: {
        ownBalance: {
            ownBalance: 10000,
            active: true,
            activetedDate: '04.06.2016',
            expiredDate: '04.06.2028',
            currency: 'UAH',
        },
        creditBalance: {
            creditBalance: 10000,
            creditLimit: 20000,
            active: false,
            activetedDate: '04.06.2016',
            expiredDate: '04.06.2028',
            currency: 'EUR',
        }
    },
},
{
    id: 2,
    name: 'Margarita',
    surname: 'Nahlebnikova',
    isActive: true,
    debit: {
        curentBalance: 7000,
        active: false,
        activetedDate: '21.10.2015',
        expiredDate: '21.10.2025',
        currency: 'UAH',
    },
    credit: {
        ownBalance: {
            ownBalance: 6000,
            active: true,
            activetedDate: '21.10.2015',
            expiredDate: '21.10.2025',
            currency: 'USD',
        },
        creditBalance: {
            creditBalance: 0,
            creditLimit: 10000,
            active: false,
            activetedDate: '21.10.2015',
            expiredDate: '21.10.2025',
            currency: 'UAH',
        },
    },
},
{
    id: 3,
    name: 'Ignat',
    surname: 'Magnat',
    isActive: false,
    debit: {
        curentBalance: 8090,
        active: true,
        activetedDate: '14.01.2013',
        expiredDate: '14.01.2023',
        currency: 'UAH',
    },
    credit: {
        ownBalance: {
            ownBalance: 5000,
            active: false,
            activetedDate: '19.10.2015',
            expiredDate: '19.10.2025',
            currency: 'USD',
        },
        creditBalance: {
            creditBalance: 100000,
            creditLimit: 500000,
            active: false,
            activetedDate: '19.10.2015',
            expiredDate: '19.10.2025',
            currency: 'RUB',
        }
    },
},
{
    id: 4,
    name: 'Azul',
    surname: 'Ryabko',
    isActive: true,
    debit: {
        curentBalance: 3800,
        active: true,
        activetedDate: '21.08.2016',
        expiredDate: '21.08.2028',
        currency: 'EUR',
    },
    credit: {
        ownBalance: {
            ownBalance: 15000,
            active: true,
            activetedDate: '21.08.2016',
            expiredDate: '21.08.2028',
            currency: 'UAH',
        },
        creditBalance: {
            creditBalance: 0,
            creditLimit: 30000,
            active: false,
            activetedDate: '21.08.2016',
            expiredDate: '21.08.2028',
            currency: 'EUR',
        }
    },
},
{
    id: 5,
    name: 'Vladimir',
    surname: 'Mamontov',
    isActive: true,
    debit: {
        curentBalance: 20000,
        active: true,
        activetedDate: '02.04.2016',
        expiredDate: '02.04.2028',
        currency: 'RUB',
    },
    credit: {
        ownBalance: {
            ownBalance: 50000,
            active: false,
            activetedDate: '02.04.2016',
            expiredDate: '02.04.2028',
            currency: 'RUB',
        },
        creditBalance: {
            creditBalance: 35000,
            creditLimit: 50000,
            active: true,
            activetedDate: '02.04.2021',
            expiredDate: '02.04.2032',
            currency: 'RUB',
        }
    },
},
{
    id: 6,
    name: 'Georgiy',
    surname: 'Managerovich',
    isActive: false,
    debit: {
        curentBalance: 10000,
        active: false,
        activetedDate: '26.03.2016',
        expiredDate: '26.03.2026',
        currency: 'EUR',
    },
    credit: {
        ownBalance: {
            ownBalance: 10000,
            active: false,
            activetedDate: '23.09.2016',
            expiredDate: '23.09.2028',
            currency: 'USD',
        },
        creditBalance: {
            creditBalance: 3000,
            creditLimit: 10000,
            active: true,
            activetedDate: '15.11.2016',
            expiredDate: '15.11.2028',
            currency: 'UAH',
        }
    },
},
{
    id: 7,
    name: 'Igor',
    surname: 'Talkov',
    isActive: true,
    debit: {
        curentBalance: 90000,
        active: false,
        activetedDate: '10.10.2014',
        expiredDate: '10.10.2024',
        currency: 'RUB'
    },
    credit: {
        ownBalance: {
            ownBalance: 80000,
            active: true,
            activetedDate: '10.10.2016',
            expiredDate: '10.10.2028',
            currency: 'USD',
        },
        creditBalance: {
            creditBalance: 90000,
            creditLimit: 100000,
            active: true,
            activetedDate: '10.10.2016',
            expiredDate: '10.10.2028',
            currency: 'UAH',
        }
    },
},
];

class Bank {

    constructor(data) {
        this.data = data;
    }

    fetchApiData(data, callback) {
        return fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
            .then(result => result.json())
            .then(function (currencyValue) {
                let currency = {};
                currencyValue.forEach((data) => {
                    currency[data.ccy] = currency[data.ccy] || 0;
                    currency[data.ccy] = data.buy;
                })
                return callback(data, currency);
            });
    }


    countTotalBalanceBank() {
        let totalBalance = {};
        this.data.forEach((client) => {
            totalBalance[client.credit.ownBalance.currency] = totalBalance[client.credit.ownBalance.currency] || 0;
            totalBalance[client.credit.ownBalance.currency] += client.credit.ownBalance.ownBalance;
            totalBalance[client.credit.creditBalance.currency] = totalBalance[client.credit.creditBalance.currency] || 0;
            totalBalance[client.credit.creditBalance.currency] += client.credit.creditBalance.creditBalance;
            totalBalance[client.debit.currency] = totalBalance[client.debit.currency] || 0;
            totalBalance[client.debit.currency] += client.debit.curentBalance;
        });
        return this.fetchApiData(totalBalance, (data, currency) => {
            let convertTotalBalance = data.UAH;
            data.UAH = 0;
            for (let value in currency) {
                for (let num in totalBalance) {
                    if (value === num) {
                        convertTotalBalance += totalBalance[num] * currency[value];
                    };
                };
            };
            return Math.round(convertTotalBalance);
        });
    }

    countCreditMoney() {
        let creditMoney = {};
        this.data.forEach((client) => {
            creditMoney[client.credit.creditBalance.currency] = creditMoney[client.credit.creditBalance.currency] || 0;
            creditMoney[client.credit.creditBalance.currency] += client.credit.creditBalance.creditBalance;
        });
        return this.fetchApiData(creditMoney, (data, currency) => {
            let convertCreditMoney = data.UAH;
            data.UAH = 0;

            for (let value in currency) {
                for (let num in creditMoney) {
                    if (value === num) {
                        convertCreditMoney += creditMoney[num] * currency[value];
                    };
                };
            };
            return Math.round(convertCreditMoney);
        });
    }

    countLoanDebtorsTotalDebt() {
        let loanDebtorsDebt = {};
        this.data.forEach((client) => {
            loanDebtorsDebt[client.credit.creditBalance.currency] = loanDebtorsDebt[client.credit.creditBalance.currency] || 0;
            if (client.isActive === false) {
                loanDebtorsDebt[client.credit.creditBalance.currency] += client.credit.creditBalance.creditBalance;
            }
        });
        return this.fetchApiData(loanDebtorsDebt, (data, currency) => {
            let convertLoanDebtorsDebt = data.UAH;
            data.UAH = 0;

            for (let value in currency) {
                for (let num in loanDebtorsDebt) {
                    if (value === num) {
                        convertLoanDebtorsDebt += loanDebtorsDebt[num] * currency[value];
                    };
                };
            };

            return Math.round(convertLoanDebtorsDebt);
        });
    }
}
const bankOschad = new Bank(bankClients);

console.log(bankOschad.countTotalBalanceBank());
console.log(bankOschad.countCreditMoney());
console.log(bankOschad.countLoanDebtorsTotalDebt());