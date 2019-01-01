let money, time,
    startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    expensesItem = document.getElementsByClassName('expenses-item'),
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    sumValue = document.querySelector('#sum'),
    percentValue = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),
    checkSavings = document.querySelector('#savings');


expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBtn.disabled = true;
startBtn.addEventListener('click', function () {
    time = prompt("Введіть дату в форматі YYYY-MM-DD");
    money = +prompt("Ваш бюджет на місяць");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на місяць");
    };

    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();


    expensesBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBtn.disabled = false;
});

expensesBtn.addEventListener('click', function () {
    let sum = 0

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if (typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i--;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function () {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let s = optionalExpensesItem[i].value;
        appData.optinalExpenses[i] = s;
        optionalExpensesValue.textContent += appData.optinalExpenses[i] + ' ';

    }
});

countBtn.addEventListener('click', function () {
    if (appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Это минимальный уровень достатка!";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Это средний уровень достатка!";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Это высокий уровень достатка!";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    } else {
        dayBudgetValue.textContent = "Произошла ошибка";
    }
});

incomeItem.addEventListener('input', function(){
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function(){
    if(appData.savings == true ){
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});


sumValue.addEventListener('input', function(){
    if(appData.savings == true ){
        let sum = +sumValue.value,
           precent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * precent;
        appData.yearIncome = sum / 100 * precent;

        monthSavingsValue.textContent =  appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent =  appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function(){
    if(appData.savings == true ){
        let sum = +sumValue.value,
        precent = +percentValue.value;

     appData.monthIncome = sum / 100 / 12 * precent;
     appData.yearIncome = sum / 100 * precent;

     monthSavingsValue.textContent =  appData.monthIncome.toFixed(1);
     yearSavingsValue.textContent =  appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optinalExpenses: {},
    income: [],
    savings: false,
};
