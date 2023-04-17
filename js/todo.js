const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const toDos = [];

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}
function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText ="❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; //input의 현재 value를 새로운 변수에 복사
    toDoInput.value = "";    //submit버튼에 입력한 값이 지워지도록
    toDos.push(newTodo); 
    paintToDo(newTodo);
    saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);