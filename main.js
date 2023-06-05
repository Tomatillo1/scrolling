window.addEventListener("DOMContentLoaded", function(event) {
    let target = document.querySelector('#animation-wrapper');
    let papers = [...document.querySelectorAll(".paper")]

    let observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                papers.forEach((paper, idx) => {
                    paper.style.transform = `translateY(${idx * 100 + (5 * idx)}%) scale(1)`
                })
                observer.unobserve(entry.target); // Optionally stop observing after animation played
            }
        });
    });

    observer.observe(target);
});