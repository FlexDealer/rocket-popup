$(document).ready(function() {
	$('body').append('<div class="rkt-shuttle"></div>');
	
	$('body').on('click', "div", function() {
		if ($(this).hasClass('overcast')) {
			var shuttle = $('.rkt-shuttle');
			shuttle.removeClass('orbiting');

			setTimeout(landingSequence, 500);
		}
	});

	function landingSequence() {
		var shuttle = $('.rkt-shuttle');
		if (shuttle.data('landing-squence')) {
			eval(shuttle.data('landing-squence'));
		}
		$('.rkt-atmosphere').removeClass('overcast');
		shuttle.html('');
	}


	$('.rkt-launcher').click(function(e) {
		e.stopPropagation();
		$('.rkt-atmosphere').addClass('overcast');
		var launcher = $(this),
			shuttle = $('.rkt-shuttle');

		shuttle.attr('style', '');
		shuttle.attr('data-landing-squence', '');

		if (launcher.data('width')) {
			shuttle.css('width', launcher.data('width') + (shuttle.innerWidth() - shuttle.width()));
		}
		if (launcher.data('height')) {
			shuttle.css('height', launcher.data('height') + (shuttle.innerHeight() - shuttle.height()));
		}

		if (launcher.data('max-width')) {
			shuttle.css('max-width', launcher.data('max-width') + (shuttle.innerWidth() - shuttle.width()));
		}
		if (launcher.data('max-height')) {
			shuttle.css('max-height', launcher.data('max-height') + (shuttle.innerHeight() - shuttle.height()));
		}

		shuttle.html(launcher.data('cargo'));

		if (launcher.data('flight-plan')) {
			eval(launcher.data('flight-plan'));
		}
		if (launcher.data('landing-squence')) {
			shuttle.attr('data-landing-squence', launcher.data('landing-squence'));
		}

		shuttle.addClass('orbiting');
	});
});