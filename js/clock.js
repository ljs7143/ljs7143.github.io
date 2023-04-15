const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
getClock()   //이렇게 하면 바로 실행되어서 1초 후 시간을 표시하는 것을 막을 수 있음 
setInterval(getClock, 1000);