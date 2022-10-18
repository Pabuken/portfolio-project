// _____________________ Show/Hide Navbar on Scroll _____________________

const heroImage = document.getElementById('hero-image')
let startingWidth = 80;
let startingHeight = 80;


window.addEventListener('wheel', (e) => {

        if (e.deltaY < 0 && startingWidth > 80) {
            startingWidth -= 3;
            startingHeight -= 3;
        } else if (e.deltaY > 0) {
            startingWidth += 3;
            startingHeight += 3;
        };

    heroImage.style.width = `${startingWidth}%`
    heroImage.style.height = `${startingHeight}%`
})

window.addEventListener('scroll', () => {

    if (window.scrollY >= window.innerHeight/4) {
        document.querySelector('header').style.marginTop = '0'
    } else {
        document.querySelector('header').style.marginTop = ''
    }

})