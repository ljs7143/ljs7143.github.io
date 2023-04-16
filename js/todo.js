const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; //input의 현재 value를 새로운 변수에 복사

    toDoInput.value = "";    //submit버튼에 입력한 값이 지워지도록



}
toDoForm.addEventListener("submit", handleToDoSubmit);