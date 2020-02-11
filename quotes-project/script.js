const quotes = [
    {
        name:'Oscar Wilde',
        quote:'Be yourself, everyone else is already taken.'
    },

    {
        name:'Albert Einstein',
        quote:'Two things are infinite, the universe and human stupidity, and I am not sure about the universe.'
    },

    {
        name:'Frank Zappa',
        quote:'So many books, so little time.'
    },

    {
        name:'Dr. Seuss',
        quote:'You know you are in love when you cannot fall asleep because reality is finally better than your dreams.'
    },

    {
        name:'Dr. Seuss',
        quote:'You have got to dance like there is nobody watching, Love like you will never be hurt, sing like there is nobody listening, and live like it is heaven on earth.'
    },

]


const quoteBtn = document.querySelector ('#quote-Btn');
const quoteAuthor = document.querySelector ('#quote-Author');
const quote = document.querySelector ('#quote');

quoteBtn.addEventListener ('click', displayQuote);

function displayQuote () {
    let number = Math.floor(Math.random()*quotes.length);
    
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}



// const simpleQuotes = [
//     {
//         name:'author number 1',
//         quote:'quote number 1'
//     },

//     {
//         name:'author number 2',
//         quote:'quote number 2'
//     },

//     {
//         name:'author number 3',
//         quote:'quote number 3'
//     },

//     {
//         name:'author number 4',
//         quote:'quote number 4'
//     },

//     {
//         name:'author number 5',
//         quote:'quote number 5'
//     },
// ]