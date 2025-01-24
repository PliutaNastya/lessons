"use strict"

// =====================ПРАКТИКА=================================================================================
// ------------------------------------1-------------------------------------------------------------------------
// Написати скрипт, який виведе в консоль поточний URL сторінки.
console.log(window.location.href)
// ------------------------------------2-------------------------------------------------------------------------
// Реалізувати таймер, який через 10 секунд після завантаження сторінки виведе повідомлення Hello, Mentor! за допомогою alert.
const showMessage = (string) => alert(string)
window.setTimeout(() => showMessage(`Hello, Mentor!`), 10000)
// ------------------------------------3-------------------------------------------------------------------------
// Написати скрипт, який виведе у консоль ширину поточного вікна браузера.
console.log(`Ширина вікна браузера: ${window.innerWidth}px; 
Висота вікна браузера: ${window.innerHeight}px;`)
// ------------------------------------4-------------------------------------------------------------------------
// Виконати автоматичний перехід на сторінку https://google.com, сторінка має відкритись у новому вікні.
// window.open(`https://google.com`, `_blank`)
// ------------------------------------5-------------------------------------------------------------------------
// Написати скрипт, який виведе в консоль, скільки секунд користувач перебуває на сторінці(рахунок починається одразу після завантаження сторінки).
let timeOnPage = 0
window.setInterval(() => {
	timeOnPage += 1000
	console.log(`Ви знаходитесь на сторінці ${timeOnPage}ms або ${timeOnPage / 1000}s`)
}, 1000)
// ------------------------------------5-------------------------------------------------------------------------
// Написати скрипт, який зберігає в localStorage число, збільшує його на 1 при кожному запуску сторінки і виводить результат у консоль.
const myStorage = window.localStorage
// console.log(myStorage)
myStorage.setItem('visitCount', 0)
// console.log(myStorage)
let visitCountNumber = myStorage.getItem(`visitCount`)
// console.log(visitCountNumber)
visitCountNumber++
myStorage.setItem('visitCount', visitCountNumber)
console.log(`Кількість відвідувань сторінки: ${visitCountNumber}`)
// ------------------------------------6-------------------------------------------------------------------------
// Реалізувати простий діалог з користувачем через prompt, який запитує ім’я та рік народження, і виводить у alert відповідь із розрахованим віком.
const userName = prompt(`Введіть Ваше ім'я`)
let userYearOfBirth = prompt(`Введіть рік Вашого народження`)
userYearOfBirth = parseFloat(userYearOfBirth)
const currentYear = new Date().getFullYear()

if (userName !== null && userYearOfBirth !== null && userName !== "" && userYearOfBirth !== "" && !isNaN(userYearOfBirth)) {
	let userInfo = `В цьому році ${userName} Вам виповниться/виповнилось ${currentYear - parseFloat(userYearOfBirth)} років`
	alert(userInfo)
} else if (userName === null) {
	alert(`Ви не назвали своє ім'я`)
} else if (userYearOfBirth === null) {
	alert(`Ви не назвали свій рік народження`)
} else {
	alert(`Ви не надали відповідь на запитання або відповідь була некоректна`)
}
// ==============================ДОМАШНЯ РОБОТА==================================================================
// ------------------------------Задача №1-----------------------------------------------------------------------
// Отримати в константу елемент <body>
const elementBody = document.body
console.log(elementBody)
// ------------------------------Задача №2-----------------------------------------------------------------------
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI(кількість має передаватись як параметр функції, також мати значення за замовченням)
let templateList = `<ul class="list"></ul>`
let templateListItem = `<li class="item"></li>`

function addListItems(itemNumbers = 1) {
	if (elementBody && itemNumbers > 0) {
		elementBody.insertAdjacentHTML(`afterbegin`, templateList)
	}
	let elementList = document.querySelector(`.list`)
	for (let i = 0; i < itemNumbers; i++) {
		elementList.insertAdjacentHTML(`beforeend`, templateListItem)
	}
	// console.log(elementList)
}
addListItems(3)

// ------------------------------Задача №3-----------------------------------------------------------------------
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента < body >
// 	і, якщо є, додати стиль кольору тесту зедлений.

elementBody.classList.toggle(`loaded`)

if (elementBody && elementBody.classList.contains(`loaded`)) {
	elementBody.style.color = `green`
}
let text = document.createElement(`p`)
text.textContent = `This is some text`
elementBody.prepend(text)

console.log(elementBody)
// ------------------------------Задача №4-----------------------------------------------------------------------
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active,
// 	та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".
const items = document.querySelectorAll(`.item`)
console.log(items)
if (items.length) {
	items.forEach((item, index) => {
		item.classList.add(`active`)
		item.textContent = `Елемент №${++index}`
	})
}
// ------------------------------Задача №5-----------------------------------------------------------------------
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки

const button = document.querySelector(`.button`)

if (button) {
	function scrollToButton(element) {
		element.scrollIntoView({
			block: `start`,
			inline: `nearest`,
			behavior: `smooth`
		})
	}
	scrollToButton(button)
}


// ------------------------------Задача №6-----------------------------------------------------------------------
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення трибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний

const link = document.querySelector(`.link`)

if (link) {
	link.dataset.value = `100`
	// console.log(link)

	const valueFromDataAttribute = parseFloat(link.dataset.value) || 200

	if (valueFromDataAttribute < 200) {
		link.style.color = `red`
	}
}



