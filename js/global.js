// _____________________ Show/Hide Navbar on Scroll _____________________

window.addEventListener('scroll', (e) => {
    
    if (window.scrollY >= window.innerHeight/4) {
        document.querySelector('header').style.marginTop = '0'
    } else {
        document.querySelector('header').style.marginTop = ''
    }
})