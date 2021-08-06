const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

let todos = [];

function saveTodos(){
    localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(event){
    const li = event.target.parentNode;
    li.remove();
    todos = todos.filter((todo) => li.id != todo.id);
    saveTodos();
}

function paintTodo(newTodoObj){
    const newLi = document.createElement("li");
    newLi.id = newTodoObj.id;
    const newSpan = document.createElement("span");
    newSpan.innerText = newTodoObj.text;
    const newBtn = document.createElement("button");
    newBtn.innerText = "❌";
    newBtn.addEventListener("click", deleteTodo);
    newLi.appendChild(newSpan);
    newLi.appendChild(newBtn);
    todoList.appendChild(newLi);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}


todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = JSON.parse(localStorage.getItem("todos"));
if(savedTodos!==null){
    todos = savedTodos;
    todos.forEach(paintTodo);
}


// for(i=0; i<savedTodos.length; i++){
//     todos[i] = savedTodos[i];
//     paintTodo(todos[i]);
// }

