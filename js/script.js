// !Efek loading ketika user masuk ke website
const loader = document.querySelector('.loader');
const boxForm = document.querySelector('.box-form');

document.addEventListener('DOMContentLoaded', () => {
    loader.style.display = 'block';

    setTimeout(() => {
        loader.style.display = 'none';
        boxForm.classList.add('show');
    }, 5000);
})

// !sistem quote random
const DATA_QUOTE = [{
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

let randomNumber = Math.floor(Math.random() * 5);

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

// ! sistem button ok untuk memulai pertanyaan
document.querySelector('.ok').addEventListener('click', () => {
    boxRule.classList.remove('show');
    setTimeout(() => {
        document.querySelector('#question-section').classList.add('show');
    }, 1000)
    setupQuestion();
    numberQuestion();
})

// !Section question
const DB_SOAL = [{
        question: 'Siapa orang terkaya di dunia?',
        answer: ['Bill Gates', 'Elon Musk', 'Mark Zackerberg', 'Will Smith']
    },
    {
        question: 'Untuk membuat 5 potong kue, Ibu membutuhkan telur ½ kg. Berapa telur yang dibutuhkan Letek Ibu ingin membuat 50 potong kue?',
        answer: ['5 kg', '10 kg', '6 kg', '50 kg']
    },
    {
        question: 'Cara yang paling efisien untuk membuat object dan methodnya pada JS adalah dengan cara?',
        answer: ['Object Literal', 'Function Declaration', 'Class', 'Object Constructor']
    },
    {
        question: 'Nama mata uang Jerman?',
        answer: ['Euro', 'Dolar', 'Rupiah', 'Rupee']
    },
    {
        question: 'Nama aktor yang memerankan Thor di Avengers?',
        answer: ['Robert Downey Jr.', 'Chris Evan', 'Mark Ruffalo', 'Chris Hemsworth']
    },
    {
        question: 'Property CSS yang bisa mengubah perilaku dari sebuah element?',
        answer: ['Float', 'Background', 'Display', 'Box-sizing']
    },
    {
        question: 'Postition default dari sebuah element HTML adalah?',
        answer: ['Relative', 'Static', 'Absolute', 'Sticky']
    },
    {
        question: 'Method array yang berfungsi untuk menghapus value pada index terakhir?',
        answer: ['Pop', 'Push', 'Slice', 'Delete']
    },
    {
        question: 'Sungai terpanjang di Indonesia?',
        answer: ['Sungai Kapuan', 'Sungai Mahakam', 'Sungai Musi', 'Sungai Mendawai']
    },
    {
        question: 'Hasil dari 120(18) – 45(120) + 120(32)?',
        answer: ['1200', '960', '600', '720']
    }
]

const CA = [1, 0, 2, 0, 3, 2, 1, 0, 0, 2];

// !membuat variabel untuk pertanyaan dinamis
let currnetQ = 0;

// !membuat variabel untuk menyimpan jawaban user
let savedAnswer = [];

// !membuat variabel untuk menyimpan score/nilai user
let grade = 0;

// !membuat fungsi untuk menampilkan pertanyaan
function setupQuestion() {
    document.querySelector('.question').innerHTML = DB_SOAL[currnetQ]['question'];

    const choices = document.querySelectorAll('.choiceText span');
    
    for(let i = 0; i < choices.length; i++) {
        choices[i].innerHTML = DB_SOAL[currnetQ]['answer'][i];
    }
}

// !membuat fungsi untuk soal selanjutnya 
function nextQuestion() {
    currnetQ++;

    numberQuestion();

    userAnswer();

    resetState();

    if (currnetQ >= DB_SOAL.length) {
        stopQuiz();
    }

    setupQuestion()
}

function stopQuiz() {
    
    checkScore();

    alert(`Quiz telah selesai nilai anda ${grade}`);
}

// !membuat fungsi untuk menyimpan jawaban yang dipilih user
function userAnswer() {
    const answer = document.querySelector('input[name="choices"]:checked');

    if (answer !== null) {
        savedAnswer.push(parseInt(answer.getAttribute('data-id')));
    } else {
        savedAnswer.push(999);
    }
}

// !membuat function untuk mengecek apakah jawaban user benar atau salah
function checkScore() {
    for (let i = 0; i < CA.length; i++) {
        if (savedAnswer[i] === CA[i]) {
            grade += 10;
        }
    }
}

// !membuuat fungsi untuk mereset state pilihan jawaban user
function resetState() {
    const user = document.querySelector('input[name="choices"]:checked');

    if (user !== null) {
        user.checked = false;
    }
}

// !membuat fungsi untuk number soal yang dinamis
function numberQuestion() {

    document.querySelector('.number-question').innerHTML = `${currnetQ+1} / ${DB_SOAL.length}`;
}

// !membuat fungsi untuk waktu pengerjaan soal
