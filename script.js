const button = document.querySelector('.one');

let inputValue = document.querySelector('.i-1');
let todoStorage = document.querySelector('.out');
let todoStogeList = document.querySelectorAll('out-element');
let todoList = [];

const addTodoHandler = () => {
    todoList.push(inputValue.value);

    todoStorage.innerHTML += `<button class='out-element'>${todoList[todoList.length - 1]}</button>`;


}



button.addEventListener('click', addTodoHandler);
