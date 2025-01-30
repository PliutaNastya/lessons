"use strict"

// =====================ПРАКТИКА=================================================================================
// -----------------------------------------1--------------------------------------------------------------------
// Клік на кнопку: Створити кнопку, яка змінює свій текст між "Play" та "Pause" при кожному кліку.
const playButton = document.querySelector('.button--play')

if (playButton) {
	playButton.addEventListener('click', () => {
		playButton.textContent === 'Play' ? playButton.textContent = 'Pause' : playButton.textContent = 'Play'
	})
}

// -----------------------------------------2--------------------------------------------------------------------
// Колір кнопки: Додати подію наведення миші(mouseenter) на кнопку, яка змінює її колір фону.При втраті наведення(mouseleave) кнопка повинна повертатися до початкового кольору.

if (playButton) {
	const currentButtonBg = window.getComputedStyle(playButton).getPropertyValue('background-color')
	const currentButtonColor = window.getComputedStyle(playButton).getPropertyValue('color')

	function changeButtonBg() {
		playButton.style.backgroundColor = 'yellow'
		playButton.style.color = 'darkblue'
	}
	function returnButtonBg() {
		playButton.style.backgroundColor = currentButtonBg
		playButton.style.color = currentButtonColor
	}

	playButton.addEventListener('mouseenter', changeButtonBg)
	playButton.addEventListener('mouseleave', returnButtonBg)
}


// -----------------------------------------3--------------------------------------------------------------------
// Додати подію руху миші(mousemove) для сторінки, яка відображає координати курсора на екрані в реальному часі.

const elementBody = document.body

const message = document.createElement('div')
message.style.position = 'fixed'
message.style.bottom = '10px'
message.style.right = '20px'
message.style.zIndex = '50'
message.style.padding = '20px'
message.style.backgroundColor = 'purple'

elementBody.appendChild(message)

function documentAction(e) {
	if (elementBody) {
		const coordinatesX = e.clientX
		const coordinatesY = e.clientY
		message.textContent = `X: ${coordinatesX}, Y: ${coordinatesY}`
	}
}

document.addEventListener("mousemove", documentAction)

// -----------------------------------------4--------------------------------------------------------------------
// Таймер: Створити таймер, який відображає кількість секунд, що минули після завантаження сторінки.Таймер має зупинятися при натисканні кнопки "Зупинити".
const timeSpan = document.querySelector('#timeValue')
const stopTimerButton = document.querySelector('.button--stop')

let timeOnPage = 0
let timer
function startTimer() {
	timer = setInterval(() => {
		timeOnPage += 1000
		timeSpan.textContent = `${timeOnPage / 1000}s`
	}, 1000)
}
function stopTimer() {
	clearInterval(timer)
}

function toggleTime(e) {
	if (e.target.textContent === `Зупинити таймер`) {
		stopTimer()
		stopTimerButton.textContent = `Відновити таймер`
	} else {
		startTimer()
		stopTimerButton.textContent = `Зупинити таймер`
	}
}

document.addEventListener("click", toggleTime)
startTimer()

// -----------------------------------------4--------------------------------------------------------------------
// Список задач: Створити форму для введення тексту і кнопку "Додати".При натисканні на кнопку текст має додаватися до списку задач, а потім можна видалити кожну задачу окремо.

const toDoInput = document.querySelector('#to-do-input')
const buttonAddTask = document.querySelector('.button--add')
const listTasks = document.querySelector('.list')

function insertTask() {
	let value = toDoInput.value
	if (value !== "") {
		const itemList = document.createElement("li")
		itemList.classList.add('list__item')
		itemList.innerHTML = value

		let deleteButton = document.createElement('span')
		deleteButton.classList.add('delete-button')
		deleteButton.innerHTML = 'X'
		itemList.appendChild(deleteButton)

		listTasks.appendChild(itemList)

		toDoInput.value = ''
	}
}
function addTask(e) {
	if (e.target === buttonAddTask) {
		insertTask()
	}
}
function deleteTask(e) {
	if (e.target.classList.contains('delete-button')) {
		const taskItem = e.target.closest(`.list__item`)
		taskItem.remove()
	}
}
document.addEventListener("click", addTask)
document.addEventListener("click", deleteTask)

// -----------------------------------------5--------------------------------------------------------------------
// Слід миші: Реалізувати ефект "сліду миші".При русі курсора за ним мають з’являтися кольорові кола, які через кілька секунд зникають.
function createCircle(e) {
	if (elementBody) {
		const coordinatesX = e.pageX
		const coordinatesY = e.pageY

		let circle = document.createElement('div')
		circle.style.width = '100px'
		circle.style.height = '100px'
		circle.style.borderRadius = `50%`
		circle.style.backgroundColor = `purple`
		circle.style.opacity = '0.1'
		circle.style.position = 'absolute'
		circle.style.top = `${coordinatesY}px`
		circle.style.left = `${coordinatesX}px`
		circle.style.zIndex = '-1'

		elementBody.appendChild(circle)

		setTimeout(() => {
			circle.remove()
		}, 1000);
	}
}
document.addEventListener("mousemove", createCircle)

// -----------------------------------------ДОМАШНЯ РОБОТА----------------------------------------------------------------
// -------------------------------------------ЗАДАЧА 1--------------------------------------------------------------------
// Дано в html: три елементи з класом item. При кліку на кожен з елментів додати клас active, при повторному кліку прибрати клас 
const itemButtons = document.querySelectorAll('button.item')

function addClass(e) {
	if (itemButtons.length) {
		itemButtons.forEach((itemButton) => {
			if (e.target === itemButton && itemButton.innerHTML === 'I\'m static') {
				itemButton.classList.add('active')
				itemButton.innerHTML = 'I\'m active'
			} else {
				itemButton.classList.remove('active')
				itemButton.innerHTML = 'I\'m static'
			}
		})
	}
}

document.addEventListener('click', addClass)
// -------------------------------------------ЗАДАЧА 2--------------------------------------------------------------------
// Дано в css / scss: body прозорий. При повному завантаженню сторінки додати клас до body який прибирає прозорість.

window.addEventListener("load", pageLoaded)
function pageLoaded(e) {
	document.documentElement.classList.add('loaded')
}
// -------------------------------------------ЗАДАЧА 3--------------------------------------------------------------------
// Дано в html: header main footer
// При наведенні курсору на header змінювати колір фону у footer.
// Коли курсор йде з header повертати початковий фон для footer.
const headerElement = document.querySelector('header')
const footerElement = document.querySelector('footer')
const currentHeaderBg = window.getComputedStyle(headerElement).getPropertyValue('background-color')
const currentFooterBg = window.getComputedStyle(footerElement).getPropertyValue('background-color')

function changeFooterColor() {
	footerElement.style.backgroundColor = currentHeaderBg
}
function returnFooterColor() {
	footerElement.style.backgroundColor = currentFooterBg
}

headerElement.addEventListener('mouseenter', changeFooterColor)
headerElement.addEventListener('mouseleave', returnFooterColor)

// -------------------------------------------ЗАДАЧА 4--------------------------------------------------------------------
// Дано в html: текст, елемент з класом item, текст.Так, що елемент з класом item за межами в'юпотрта.
// Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
// Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
// Функція має запустатить коли ми доскролюємо до елементу item(його видно), і не запускатись повторно.

let scrollElement = document.querySelector('span.item')

const interval = parseInt(scrollElement.dataset.interval) || 1000
const maxNumber = parseInt(scrollElement.dataset.maxnumber) || 10
let startNumber = 0

const startCount = () => {
	if (scrollElement) {
		setInterval(() => {
			if (maxNumber > startNumber) {
				scrollElement.textContent = ++startNumber 
			} else {
				clearInterval()
			}
		}, interval)
	}
}

const options = {
	root: null,
	rootMargin: "0px 0px 0px 0px",
	threshold: 0.3,
}
const callback = (entries, observer) => {
	entries.forEach(entry => {
		const currentElement = entry.target
		if (entry.isIntersecting) {
			startCount()
		}
	})
}

const observer = new IntersectionObserver(callback, options)
observer.observe(scrollElement)