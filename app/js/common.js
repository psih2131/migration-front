
// $(function () {
// 	$('.main-sec__slider').slick({
// 		infinite: true,
// 		speed: 1000,
// 		adaptiveHeight: true,
// 		slidesToScroll: 1,
// 		dots: false,
// 		slidesToShow: 1,
// 		prevArrow: '<div class="ar_slier prev-ar_slide"><div class="ar-ic-slider"></div></div>',
// 		nextArrow: '<div class="ar_slier next-ar_slide"><div class="ar-ic-slider"></div></div>',
// 		responsive: [
// 			{
// 				breakpoint: 1200,
// 				settings: {
// 					autoplay: true,
// 					autoplaySpeed: 3000,
// 				}
// 			},
// 			{
// 				breakpoint: 900,
// 				settings: {
// 					autoplay: true,
// 					autoplaySpeed: 3000,
// 					arrows: false,
// 				}
// 			},
// 		]
// 	});

// });


(function () {
	var mobMenu = document.querySelector('.header-mob-meny');
	if (!mobMenu) return;

	var accordionItems = mobMenu.querySelectorAll('.header__nav-item--has-sub');

	accordionItems.forEach(function (item) {
		var trigger = item.querySelector('.header__nav-link');
		if (!trigger) return;

		trigger.addEventListener('click', function (e) {
			e.preventDefault();

			var isOpen = item.classList.contains('is-open');

			accordionItems.forEach(function (otherItem) {
				if (otherItem === item) return;
				otherItem.classList.remove('is-open');
				var otherTrigger = otherItem.querySelector('.header__nav-link');
				if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
			});

			item.classList.toggle('is-open', !isOpen);
			trigger.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
		});
	});
})();

window.addEventListener('load', function () {
    

    function openMobMenu() {
        let mobMenu = document.querySelector('.burger-meny');
        let headerMobMenu = document.querySelector('.header-mob-meny');
        
        mobMenu.addEventListener('click', function () {
            headerMobMenu.classList.toggle('active');
            mobMenu.classList.toggle('active');
        });
    }

    openMobMenu()
}, false);


