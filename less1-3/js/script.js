let money,time;

function start() {
    money = +prompt("Ваш бюджет на місяць");
    time = prompt("Введіть дату в форматі YYYY-MM_DD");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на місяць");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optinalExpenses: {},
    income: [],
    savings: false,
};

function chooseExpenses() {
    for (let i = 1; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце"),
            b = prompt("Во сколько обойдется? ");

        if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            alert("Щось пішло не так");
            i--;
        }
    };
}
chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "грн.");
}
detectDayBudget();

function detectLevel(){

    if (appData.moneyPerDay < 100) {
        console.log("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Это высокий уровень достатка!");
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Яка сумма накопичення?"),
            percent = +prompt("Під який процент?");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Дохід в місяць з вашого депозиту: " + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {
    let i;
    for (i = 1; i <= 3; i++) {
        let s = prompt("Статья  необязательного расхода?");
        appData.optinalExpenses[i] = s;
        console.log(appData.optinalExpenses);

    }
}
chooseOptExpenses();