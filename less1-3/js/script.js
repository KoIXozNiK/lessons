let money, time;

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
    chooseExpenses: function () {
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
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "грн.");
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Это минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Это высокий уровень достатка!");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Яка сумма накопичення?"),
                percent = +prompt("Під який процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Дохід в місяць з вашого депозиту: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        let i;
        for (i = 1; i <= 3; i++) {
            let s = prompt("Статья  необязательного расхода?");
            appData.optinalExpenses[i] = s;
            console.log(appData.optinalExpenses);

        }
    },
    chooseIncome: function () {
        let items = prompt("Що принесе додатковий дохів (перерахуйте через кому)");

        if (typeof (items) != 'string' && typeof (items) == null && items == "") {
            alert("Щось пішло не так попробуйте ще раз!");

        } else {
            appData.income = items.split(', ');
            appData.income.sort();
            appData.income.push(prompt("Може ще щось???"));
        }

        appData.income.forEach( function (item, i ){
            alert("Спосіб дод. заробітку: " + (i+1) + ": " + item);
        });
    },
};

for ( let key in appData){
    alert("Наша программа включає в себе: " + key + " - " + appData[key]);
}




function hideTabContent(a) {
	for (let i = a; i < tabContent.length; i++) {
		tabContent[i].classList.remove('show');
		tabContent[i].classList.add('hide');
	}
}

function showTabContent(b) {
	if (tabContent[b].classList.contains('hide')) {
		tabContent[b].classList.remove('hide');
		tabContent[b].classList.add('show');
	}
}

info.addEventListener('click', function(event) {
	let target = event.target;
	if (target && target.classList.contains('info-header-tab')) {
		for(let i = 0; i < tab.length; i++) {
			if (target == tab[i]) {
				hideTabContent(0);
				showTabContent(i);
				break;
			}
		}
	}

});