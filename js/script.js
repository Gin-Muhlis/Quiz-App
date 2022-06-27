// !Efek loading ketika user masuk ke website
const loader = document.querySelector('.loader');

document.addEventListener('DOMContentLoaded', () => {
    loader.style.display = 'block';

    setTimeout(() => {
        loader.style.display = 'none';
    }, 5000);
})