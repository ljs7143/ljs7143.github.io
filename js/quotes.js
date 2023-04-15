const quotes = [

    {
        quote : "The greatest glory in living lies not in never falling, but in rising every time we fall",
        author : "Nelson Mandela",
    },
    {
        quote : "In the end, it’s not the years in your life that count. It’s the life in your years" ,
        author : "Abraham Lincoln",
    },
    {
        quote : "You will face many defeats in life, but never let yourself be defeated",
        author : "Maya Angelou",

    },
    {
        quote : " You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
        author : "Dr. Seuss",

    },
    {
        quote :  "Despite the forecast, live like it's spring",
        author : "Lilly Pulitzer",

    },
    {
        quote : " I find that the harder I work, the more luck I seem to have.",
        author : "Thomas Jefferson",

    },
    {
        quote : " Do one thing every day that scares you",
        author : "Anonymous",

    },
    {
        quote : " Keep your eyes on the stars and your feet on the ground.",
        author : "Theodore Roosevelt",

    },
    {
        quote : " Life is a mountain. Your goal is to find your path, not to reach the top",
        author : "Maxime Lagacé",

    },

    {
        quote : " Never let the fear of striking out keep you from playing the game",
        author : "Babe Ruth",

    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;


