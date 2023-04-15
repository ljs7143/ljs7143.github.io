
const loginForm = document.querySelector("#login-form");
const loginInput =  document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//If users submit their ID, then form of login will be disappeared
//Text will be "hello + username"

function onLoginSubmit(event){
    event.preventDefault(); //기본동작을 막아줌 
    loginForm.classList.add(HIDDEN_CLASSNAME);
    //localstorage에 로그인한 유저네임 정보 저장 
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

}

// loginForm.addEventListener("submit", onLoginSubmit);
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{ 
    paintGreetings(savedUsername);
}


//1.js가 localStorage를 확인함 