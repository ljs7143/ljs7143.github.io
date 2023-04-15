const images = ["0.jpeg", "1.jpeg","2.jpeg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];


console.log(chosenImage);

//html 30줄 img src 부분에 어떤 그림이 들어와야하는지를 컨트롤 하는 js 코드 
const bgImage = document.createElement("img");
//src는 경로지정
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);


