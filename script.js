//toggle icon navbar
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// scroll sections
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight('id');

        if (top >= offset && top < offset + height) {
            //active navbar links wsf
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelectorAll('header nav a[href*=' + id + '[').classList.add('active');
            });
            //active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        //if you want to use animation  that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });

    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links(scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    //animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}
