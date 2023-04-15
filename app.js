
const loginForm = document.querySelector("#login-form");
const loginInput =  document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";


//If users submit their ID, then form of login will be disappeared
//Text will be "hello + username"
function onLoginSubmit(event){
    event.preventDefault(); //기본동작을 막아줌 
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    // greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


loginForm.addEventListener("submit", onLoginSubmit);
