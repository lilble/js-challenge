const quotes = [
    {
        quote: "I am the leader.",
        author: "S.coups",
    },
    {
        quote: "I'm 1004, an Angel.",
        author: "Jeong Han",
    },
    {
        quote: "I'm SVT's Zentleman.",
        author: "Joshua",
    },
    {
        quote: "I have too many brothers.",
        author: "Dino",
    },
    {
        quote: "Why do you keep cheating?",
        author: "The 8",
    },
    {
        quote: "I'm angry KOOKOO.",
        author: "DK. Lee",
    },
    {
        quote: "뭘 봐.",
        author: "Mingyu",
    },
    {
        quote: "HORANG HAE~~~!!",
        author: "Hoshi",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;