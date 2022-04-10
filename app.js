const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.menu');
    const navLinks = document.querySelectorAll('.menu li')

    burger.addEventListener('click', () => {
        nav.classList.toggle('menu-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`
            }
        })

        burger.classList.toggle('toggle');
        // console.log('clicked')
    })
}

navSlide();