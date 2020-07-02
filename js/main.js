function main() {
	(function () {
		('use strict');

		$('a.page-scroll').click(function () {
			if (
				location.pathname.replace(/^\//, '') ==
					this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				var target = $(this.hash);
				target = target.length
					? target
					: $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate(
						{
							scrollTop: target.offset().top - 40,
						},
						900
					);
					return false;
				}
			}
		});

		// Show Menu on Book
		$(window).scroll(function () {
			var navHeight = $(window).height() - 500;
			var navWidth = $(window).width();

			if (navWidth > 799) {
				$();
				if ($(window).scrollTop() > navHeight) {
					$('.navbar-default').addClass('on');
				} else {
					$('.navbar-default').removeClass('on');
				}
			}
		});
		// $(window).on(() => {
		// 	const navWidth = $(window).width();
		// 	if (navWidth < 800) $('.navbar-nav').removeClass('navbar-right');
		// });

		$('body').scrollspy({
			target: '.navbar-default',
			offset: 80,
		});

		// Hide nav on click
		$('.navbar-nav li a').click(function (event) {
			// check if window is small enough so dropdown is created
			var toggle = $('.navbar-toggle').is(':visible');
			if (toggle) {
				$('.navbar-collapse').collapse('hide');
			}
		});

		// // TODO: pull data from bissell object
		// const productsBoxFunc = (array) => {
		// 	array.forEach((obj, index) => {
		// 		//console.log(obj.model);
		// 		let productImage = $('<img />', {
		// 			class: 'product-image',
		// 			src: obj.imageLocation,
		// 			alt: obj.model,
		// 		});

		// 		//console.log(productImage);
		// 		let productTitle = `<h3>${obj.model}</h3>`;

		// 		$('#product-box').append(productTitle);
		// 		$('#product-box').append(productImage);
		// 	});
		// };


		// $('.product-btn').click(function () {
		// 	// ? empties product-box
		// 	// TODO: needs to make it dynamic so if button hit twice it doesn't have to reload everytime
		// 	$('#product-box').empty();

		// 	// finds value of product btn clicked
		// 	let value = $(this).attr('value');

		// 	// convert value to a number and find which btn was clicked
		// 	// passing in which array from bissell obj to function
		// 	switch (Number(value)) {
		// 		case 100:
		// 			let vacuums = bissell.vacuums;
		// 			productsBoxFunc(vacuums);
		// 			break;

		// 		case 101:
		// 			let powerSweepers = bissell.powerSweepers;
		// 			productsBoxFunc(powerSweepers);
		// 			break;

		// 		case 100:
		// 			break;

		// 		case 100:
		// 			break;

		// 		default:
		// 			break;
		// 	}
		// });

		// // Portfolio isotope filter
		// $(window).load(function() {
		//     var $container = $('.portfolio-items');
		//     $container.isotope({
		//         filter: '*',
		//         animationOptions: {
		//             duration: 750,
		//             easing: 'linear',
		//             queue: false
		//         }
		//     });
		//     $('.cat a').click(function() {
		//         $('.cat .active').removeClass('active');
		//         $(this).addClass('active');
		//         var selector = $(this).attr('data-filter');
		//         $container.isotope({
		//             filter: selector,
		//             animationOptions: {
		//                 duration: 750,
		//                 easing: 'linear',
		//                 queue: false
		//             }
		//         });
		//         return false;
		//     });

		// });

		// // Nivo Lightbox
		// $('.portfolio-item a').nivoLightbox({
		//         effect: 'slideDown',
		//         keyboardNav: true,
		//     });
	})();
}
main();
