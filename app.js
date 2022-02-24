const PAGEBTN = document.querySelector('#page-top');
PAGEBTN.addEventListener('click', () => {
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
});

function scrollTimeLineAnime() {
const TIMELINE = document.querySelectorAll('.flex');
TIMELINE.forEach(function(item, index){
    let elemPos = TIMELINE[index].getBoundingClientRect().top;
    let scroll = window.pageYOffset;
    let windowHeight = window.innerHeight;
    let startPoint = 100;
    if(scroll >= elemPos - windowHeight - startPoint) {
        let liHeight = TIMELINE[index].offsetHeight;
        let percent = (scroll + startPoint - elemPos) / (liHeight / 2) * 100;
        
        if(percent > 100) {
            percent = 100;
        }

        console.log(percent);
    }
});

}

window.addEventListener('scroll', function() {
    scrollTimeLineAnime();
});