
const loginForm = document.querySelector("#login-form");
const loginButton =  document.querySelector("#login-form input");


function onLoginSubmit(){
    const username = loginInput.value;
    console.log(username);
}
 loginButton.addEventListener("click",onLoginBtnClick);