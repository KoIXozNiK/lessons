let menuItem = document.querySelectorAll('.menu-item'),
    menulist = document.querySelectorAll('.menu')[0],
    title = document.querySelectorAll('#title')[0],
    menuItemLi = document.createElement('li'),
    adv = document.querySelectorAll('.adv')[0],
    text = prompt("Яке ваше ставлення до техніки Apple?"),
    boxPromt = document.querySelectorAll('.prompt')[0];



menulist.insertBefore(menuItem[2], menuItem[1]);
menuItemLi.classList.add('menu-item');
menuItemLi.innerHTML = ('Пятий пункт');
menulist.appendChild(menuItemLi);

title.innerHTML = ("Ми продаємо найкращу техніку Apple");

adv.remove();

document.body.style.backgroundImage = "url(img/apple_true.jpg)";

boxPromt.textContent = text;