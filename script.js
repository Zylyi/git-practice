const button = document.querySelector('.one');

let inputValue = document.querySelector('.i-1');
let todoStorage = document.querySelector('.out');
let todoStogeList = document.querySelectorAll('out-element');
const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-button');
let todoList = [];

const addTodoHandler = () => {
    if (!inputValue.value) return;
    todoList.push(inputValue.value);
    todoStorage.innerHTML += `<button class='out-element'>${todoList[todoList.length - 1]}</button>`;
}

const openMenuHandler = () => {
    menu.classList.toggle('open');
}



button.addEventListener('click', addTodoHandler);
menuButton.addEventListener('click', openMenuHandler)
