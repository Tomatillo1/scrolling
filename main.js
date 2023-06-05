window.addEventListener("DOMContentLoaded", function(event) {
    let target = document.querySelector('#animation-wrapper');
    let papers = [...document.querySelectorAll(".paper")]

    let observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                target.style.height = `${300 * 5 + .05 * 300 + 100}px`;
                papers.forEach((paper, idx) => {
                    paper.style.transform = `translateY(${idx * 100 + (5 * idx)}%) scale(1)`
                })
                observer.unobserve(entry.target);
            }
        });
    });

    observer.observe(target);
});