const activeClass = 'active';
const images = document.querySelectorAll('.slider');

images[0].classList.add(activeClass);

function removeActiveClass () {
    const elm = document.querySelector(`.${activeClass}`);
    console.log(elm);
    if (elm) {
        elm.classList.remove(activeClass);
    };
};

function addClass($event) {
    // $event.stopPropagation();
    removeActiveClass();
    const target = $event.currentTarget;
    target.classList.add(activeClass);
};

images.forEach(image => {
    image.addEventListener('click', addClass);
});

// Menu bar
$(document).ready(function () {
    $('.fa-bars').click(function () {
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('nav-toggle')
    });
});