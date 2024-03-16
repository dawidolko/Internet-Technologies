/**
 * 
 */
window.addEventListener('scroll', function () {
    var nav = document.querySelector('.nav');
    if (window.scrollY > 200) {
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');
    }
});