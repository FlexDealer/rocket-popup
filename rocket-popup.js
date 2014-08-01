$(document).ready(function() {
	$('body').append('<div class="rkt-shuttle"></div>');
	
	$('body').on('click', "div", function() {
		if ($(this).hasClass('overcast')) {
			$('.rkt-shuttle').removeClass('orbiting');
			$('.rkt-atmosphere').removeClass('overcast');
		}
	});

	$('.rkt-launcher').click(function(e) {
		e.stopPropagation();
		$('.rkt-atmosphere').addClass('overcast');
		var launcher = $(this),
			shuttle = $('.rkt-shuttle');
		if (launcher.data('width')) {
			shuttle.css('width', launcher.data('width'));
		}
		shuttle.html(launcher.data('cargo'));
		$('.slider').slick();

		if (launcher.data('flight-plan')) {
			eval(launcher.data('flight-plan'));
		}

		shuttle.addClass('orbiting');
	});
});