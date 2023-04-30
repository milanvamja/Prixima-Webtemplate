
$(document).ready(function(){
    $("#slider_1").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:1,
        dots:false,
        navText: ['PREV', 'NEXT'],
        autoplay:true,
        autoplayTimeout:5000,
        responsive: {
            0:{
                items:1,
                nav:false,
            },
            576:{
                items:1,
                nav:false,
            },
            768:{
                items:1,
                nav:true,
            },
            992:{
                items:1,
                nav:true,
            }
        }

    })

    $('#slider_2').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        items: 2,
        dots: true,
        center: true,
        autoplay: true,
        dotsEatc:true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            }
        }

    })

    $('#slider_3').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        items: 1,
        // autoplay: true
    })
    
  });