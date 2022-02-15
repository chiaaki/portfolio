const PAGEBTN = document.querySelector('#page-top');
PAGEBTN.addEventListener('click', () => {
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
});

const TIMELINE = document.getElementsByClassName('timeline');
console.log(TIMELINE);
