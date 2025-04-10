/*
Template Name: Waggy Tails
Author: Ingrid Kuhn
Author URI: themeforest/user/ingridk
Version: 1.0
*/

	//----------------------------------- Document ready -----------------------------------//
	$(document).ready(function () {
		"use strict";
		
	
		//Scrolling feature 

		$('.page-scroll a').on('click', function (event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});

		// Close Navbar when clicked outside
		
		$(window).on('click', function(event){
			var clickOver = $(event.target)
			if ($('.navbar .navbar-toggler').attr('aria-expanded') == 'true' && clickOver.closest('.navbar').length === 0) {
				$('button[aria-expanded="true"]').click();
			}
		});
		
		//	Back Top Link

		var offset = 500;
		var duration = 500;
		$(window).scroll(function() {
			if ($(this).scrollTop() > offset) {
				$('.back-to-top').fadeIn(400);
			} else {
				$('.back-to-top').fadeOut(400);
			}
		});

		//Slick Slider
		
		$('.slider-stage').slick({
			centerMode: true,
			dots: true,
			autoplay: true,
			autoplaySpeed: 2000,
			centerPadding: '120px',
			slidesToShow: 3,
			responsive: [{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					centerMode: false
				}
			}]
		});
		$('.slider-1').slick({
			dots: true,
			autoplaySpeed: 2000,
			slidesToShow: 1

		});
		$('.slider-2').slick({
			dots: true,
			autoplaySpeed: 2000,
			slidesToShow: 2,
			responsive: [{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
		$('.slider-3').slick({
			dots: true,
			autoplaySpeed: 2000,
			slidesToShow: 3,
			responsive: [{
					breakpoint: 991,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]

		});
		$('.slider-4').slick({
			dots: true,
			autoplaySpeed: 2000,
			slidesToShow: 4,
			responsive: [{
					breakpoint: 991,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]

		});
		
		/* Refresh slick slider when inside tab */

	   $("#pills-2-tab").on('click',function(){
          $('.slider-1').slick('refresh');
       });
		
	  /* init Jarallax */
	  
       jarallax(document.querySelectorAll(".parallax"));
	     
		
	}); // end document ready


	//----------------------------------- Window load function -----------------------------------//

	$(window).on('load', function(){
	"use strict";

		// Page animations 	
		
		  AOS.refresh();
		  
       // Page animations fix conflict with Slick slider	
		$(function () {
		  AOS.init();
		});

        AOS.init({once: true,duration: 1000});
 
		// Page Preloader 	

		$("#preloader").fadeOut("slow");
		
	   // Magnific Popup

		$('#lightbox-wrap').magnificPopup({
			delegate: 'a', 
			type: 'image',
			gallery: {
				enabled: true
			}
		});
		
		 $('.popup-youtube').magnificPopup({
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
        });
		

	}); // end window load function

