// _____________________ Show/Hide Navbar on Scroll _____________________

const heroImage = document.getElementById('hero-image')
let startingWidth = 100;
let startingHeight = 100;


window.addEventListener('wheel', (e) => {

        if (e.deltaY < 0 && startingWidth < 100) {
            startingWidth += 4;
            startingHeight += 4;
        } else if (e.deltaY > 0 && startingWidth > 80) {
            startingWidth -= 4;
            startingHeight -= 4;
        };

    console.log(startingHeight)
    console.log(startingWidth)
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