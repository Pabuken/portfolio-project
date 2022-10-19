// _____________________ Show/Hide Navbar on Scroll _____________________

const heroImage = document.getElementById('hero-image')

let header = document.querySelector('header');
let heroScale = 1;
let heroCorners = 0;


window.addEventListener('wheel', (e) => {

    if (e.deltaY < 0 && heroScale < 1) {
        heroScale += 0.05;
        heroCorners -= 6;
    } else if (e.deltaY > 0 && heroScale > 0.7) {
        heroScale -= 0.05;
        heroCorners += 6;
    };

    heroImage.style.scale = `${heroScale}`
    heroImage.style.borderRadius = `${heroCorners}px`

})

window.addEventListener('scroll', () => {

    if (window.scrollY >= window.innerHeight/3) {
        header.style.marginTop = '0'
        header.style.marginBottom = '5vh'
        header.style.visibility = ''
    } else {
        header.style.marginTop = ''
        header.style.marginBottom = ''
        header.style.visibility = 'hidden'
    }

})



