let addButton = document.querySelector('.add');
let todoList = document.querySelector('.todo-list');
let inputField = document.getElementById('inputField');

addButton.addEventListener('click', function(){
    var element = document.createElement('p');
    element.classList.add('paragraph-styling');
    element.innerText = inputField.value;
    todoList.appendChild(element);
    inputField.value = "";
    element.addEventListener('click', function(){
        element.style.textDecoration = "line-through";
    })
    element.addEventListener('dblclick', function(){
        todoList.removeChild(element);
    })
})