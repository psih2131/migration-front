
$(function () {
	//для якорей
    jQuery(function ($) {
        $('a[href*="#"]').on('click.smoothscroll', function (e) {
            var hash = this.hash, _hash = hash.replace(/#/, ''), theHref = $(this).attr('href').replace(/#.*/, '');
            if (theHref && location.href.replace(/#.*/, '') != theHref) return;
            var $target = _hash === '' ? $('body') : $(hash + ', a[name="' + _hash + '"]').first();
            if (!$target.length) return;
            e.preventDefault();
            $('html, body').stop().animate({ scrollTop: $target.offset().top - 0 }, 800, 'swing', function () {
                window.location.hash = hash;
            });
        });
    });

});


(function () {
	var mobMenu = document.querySelector('.header-mob-meny');
	if (!mobMenu) return;

	var accordionItems = mobMenu.querySelectorAll('.header__nav-list > li:has(> .sub-menu)');

	accordionItems.forEach(function (item) {
		var trigger = item.querySelector(':scope > a');
		if (!trigger) return;

		trigger.setAttribute('aria-expanded', 'false');

		trigger.addEventListener('click', function (e) {
			e.preventDefault();

			var isOpen = item.classList.contains('is-open');

			accordionItems.forEach(function (otherItem) {
				if (otherItem === item) return;
				otherItem.classList.remove('is-open');
				var otherTrigger = otherItem.querySelector(':scope > a');
				if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
			});

			item.classList.toggle('is-open', !isOpen);
			trigger.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
		});
	});
})();

$(function () {
	var $section = $('.help-2-sec');
	if (!$section.length) return;

	$section.find('.help-2-sec__acc-panel').hide();
	$section.find('.help-2-sec__acc-item.is-open .help-2-sec__acc-panel').show();

	$section.on('click', '.help-2-sec__acc-trigger', function () {
		var $trigger = $(this);
		var $item = $trigger.closest('.help-2-sec__acc-item');
		var $panel = $item.find('.help-2-sec__acc-panel');

		$item.toggleClass('is-open');
		$trigger.attr('aria-expanded', $item.hasClass('is-open') ? 'true' : 'false');
		$panel.slideToggle(250);
	});
});

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

