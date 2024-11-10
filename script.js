// Add JavaScript code here

'use strict';


const slider = function () {
    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider__btn--left');
    const btnRight = document.querySelector('.slider__btn--right');
    const dotContainer = document.querySelector('.dots');

    let curSlide = 0;
    const maxSlide = slides.length;

    // Functions
    const createDots = function () {
        slides.forEach(function (_, i) {
            dotContainer.insertAdjacentHTML(
                'beforeend',
                `<button class="dots__dot" data-slide="${i}"></button>`
            );
        });
    };

    const activateDot = function (slide) {
        document
            .querySelectorAll('.dots__dot')
            .forEach(dot => dot.classList.remove('dots__dot--active'));

        document
            .querySelector(`.dots__dot[data-slide="${slide}"]`)
            .classList.add('dots__dot--active');
    };

    const goToSlide = function (slide) {
        slides.forEach(
            (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
        );
    };

    // Next slide
    const nextSlide = function () {
        if (curSlide === maxSlide - 1) {
            curSlide = 0;
        } else {
            curSlide++;
        }

        goToSlide(curSlide);
        activateDot(curSlide);
    };

    const prevSlide = function () {
        if (curSlide === 0) {
            curSlide = maxSlide - 1;
        } else {
            curSlide--;
        }
        goToSlide(curSlide);
        activateDot(curSlide);
    };

    const init = function () {
        goToSlide(0);
        createDots();

        activateDot(0);
    };
    init();

    // Event handlers
    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);

    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') prevSlide();
        e.key === 'ArrowRight' && nextSlide();
    });

    dotContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains('dots__dot')) {
            const { slide } = e.target.dataset;
            goToSlide(slide);
            activateDot(slide);
        }
    });
};
slider();



// join

const join = document.querySelector(".join")
const newUsers = document.querySelector('.newUsers')
const form = document.querySelector('.form')
const section = document.querySelector('.section')
const username = document.querySelector('#username')
const userjob = document.querySelector('#userjob')
const userprofile = document.querySelector('#userprofile')

join.addEventListener('click', () => {

    section.classList.add("blur-[10px]")
    form.classList.remove("-z-10", "scale-0")
})


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const html = `<div class="flex flex-col gap-1 text-center text-sm">
            <img src="${userprofile.value}" alt="user" class="w-16 h-16 rounded-full object-cover object-top mx-auto">
            <h2 class="font-bold">${username.value}</h2>
            <span class="text-xs">${userjob.value}</span>
            <button class="py-1.5 px-3 rounded-2xl bg-[#211d4f] text-sm font-medium text-slate-100">View content</button>
        </div>`

    newUsers.insertAdjacentHTML('beforeend', html)

    section.classList.remove("blur-[10px]")
    form.classList.add("-z-10", "scale-0")
})


// https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/avatars/60d928dd-fcfe-45d4-a7c2-75d25989a352.jpg