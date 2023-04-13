const h1 = document.querySelector("div.hello:first-child h1");  //css를 통해 원하는 값을 찾는 것


console.dir(h1);

function handleTitleClick(){
    h1.style.color = "blue";
} 
function handleMouseEnter(){

    h1.innerText = "Mouse is here";
}

function handleMouseLeave(){

    h1.innerText = "mouse is gone!";
}

function handleWindowResize(){
    document.body.style.background = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}
function handleWindowOffLine(){

    alert("sos! no wifi");
}

function handleWindowOnline(){
    alert("Connected !");

}
function handleWindowPaste(){
    alert("Paste !!!? ");
}


h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseleave", handleMouseLeave);
h1.addEventListener("mouseenter", handleMouseEnter);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffLine);
window.addEventListener("online", handleWindowOnline);
window.addEventListener("paste", handleWindowPaste);