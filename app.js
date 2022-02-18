const PAGEBTN = document.querySelector('#page-top');
PAGEBTN.addEventListener('click', () => {
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
});

const TIMELINE = document.querySelectorAll('.flex');
TIMELINE.forEach(function(item, index){
    const RECT = TIMELINE.getBoundingClientRect();
    console.log(RECT);
    const ELEMPOS = TIMELINE.offsetTop;
    console.log(ELEMPOS);
    item.onclick = function() {
        console.log("あ");
    }
});
