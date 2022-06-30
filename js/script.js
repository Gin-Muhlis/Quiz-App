// !Efek loading ketika user masuk ke website
const loader = document.querySelector('.loader');
const boxForm = document.querySelector('.box-form');

// document.addEventListener('DOMContentLoaded', () => {
//     loader.style.display = 'block';

//     setTimeout(() => {
//         loader.style.display = 'none';
//         boxForm.classList.add('show');
//     }, 5000);
// })

// !sistem quote random
const DATA_QUOTE = [
    {
        quote: 'Waktumu terbatas, jadi jangan sia-siakan dengan menjalani hidup orang lain. Jangan terjebak oleh dogma.',
        name: 'Steve Jobs',
        title: 'Tokoh Bisnis',
        imgURL: '0.jpg'
    },
    {
        quote: 'Untuk menulis tentang kehidupan pertama-tama kamu harus menjalaninya.',
        name: 'Ernest Hemingway',
        title: 'Novelis',
        imgURL: '1.jpg'
    },
    {
        quote: 'Terlalu banyak dari kita yang tidak mewujudkan impian kita karena kita menjalani ketakutan kita.',
        name: 'Les Brown',
        title: 'Mantan Anggota DPR Rakyat Ohio',
        imgURL: '2.jpg'
    },
    {
        quote: 'Ia yang mengerjakan lebih dari apa yang dibayar pada suatu saat akan dibayar lebih dari apa yang ia kerjakan.',
        name: 'Napoleon Hill',
        title: 'Penulis',
        imgURL: '3.jpg'
    },
    {
        quote: 'Teruslah tersenyum, karena hidup adalah hal yang indah dan ada banyak hal untuk disyukuri.',
        name: 'Marilyn Monroe',
        title: 'Aktris',
        imgURL: '4.jpeg'
    }
]

let randomNumber = Math.floor(Math.random()*5);

function quoteRandom() {
    document.querySelector('.quote-text').innerHTML = DATA_QUOTE[randomNumber]['quote'];
    document.querySelector('.name-quote-people').innerHTML = DATA_QUOTE[randomNumber]['name'];
    document.querySelector('.title-quote-people').innerHTML = DATA_QUOTE[randomNumber]['title'];
    document.querySelector('.image-quote-people').setAttribute('src', `assets/${DATA_QUOTE[randomNumber]['imgURL']}`)

}

quoteRandom();

// !sistem button start quiz
const btn = document.querySelector('.button .btn');
const boxRule = document.querySelector('.pop-up');

btn.addEventListener('click', () => {
    boxForm.classList.remove('show');
    setTimeout(() => {
        boxRule.classList.add('show');
    }, 1000)
})

