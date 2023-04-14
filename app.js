
const loginInput = document.querySelector("input");
const loginButton =  document.querySelector("button");


function onLoginBtnClick(){
    const username = loginInput.value;

    if(username ===""){
        alert("Please write your name");
    }else if(username.length>15){
        alert("Your name is too Long");
    }
}
 loginButton.addEventListener("click",onLoginBtnClick);