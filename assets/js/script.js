$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1200:{
            items: 5
        }
    }
});

document.querySelector('.responsive-bar').addEventListener('click', ()=>{

    document.querySelector('.navigation .menu').classList.toggle('active');

})