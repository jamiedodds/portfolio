$("button.hamburger").click(function(){
    $("button.hamburger").toggleClass("is-active");
    
});

function myFunction() {
    var showLinks = document.getElementById('mobileLinks');
    if (showLinks.style.display === 'none') {
        showLinks.style.display = 'block';
    } else {
        showLinks.style.display = 'none';
    }
}

// gallery lightbox

$(document).ready(function(){
                $('.gallery').featherlightGallery({
                    gallery: {
                        fadeIn: 300,
                        fadeOut: 300
                    },
                    openSpeed:    300,
                    closeSpeed:   300
                });
                $('.gallery2').featherlightGallery({
                    gallery: {
                        next: 'next »',
                        previous: '« previous'
                    },
                    variant: 'featherlight-gallery2'
                });
            });

            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//stats.g.doubleclick.net/dc.js','ga');

            ga('create', 'UA-5342062-6', 'noelboss.github.io');
            ga('send', 'pageview');

// slider gallery

'use strict';

$(function() {

    //settings for slider
    var width = 720;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    //cache DOM elements
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();


});