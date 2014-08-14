$(document).ready(function() {
	$('body').append('<div id="rkt-shuttle"></div>');
	
	$('body').on('click', "div", function(e) {
		var shuttle = $('#rkt-shuttle');
		if ($(this).hasClass('rkt-overcast') || (($(this).attr('id') == 'rkt-shuttle') && ((e.offsetX + 9 - shuttle.innerWidth()) > 0) && (e.offsetY < 9))) {
			shuttle.removeClass('rkt-orbiting');
			setTimeout(landingSequence, 500);
		}
	});

	function landingSequence() {
		var shuttle = $('#rkt-shuttle');
		if (shuttle.data('landing-sequence')) {
			eval(shuttle.data('landing-sequence'));
		}
		$('.rkt-atmosphere').removeClass('rkt-overcast');
		shuttle.html('');
	}


	$('.rkt-launcher').click(function(e) {
		e.stopPropagation();
		$('.rkt-atmosphere').addClass('rkt-overcast');
		var launcher = $(this),
			shuttle = $('#rkt-shuttle');

		shuttle.attr('style', '');
		shuttle.attr('data-landing-sequence', '');
		shuttle.attr('class', '');

		if (launcher.data('width')) {
			shuttle.css('width', launcher.data('width') + (shuttle.innerWidth() - shuttle.width()));
		}
		if (launcher.data('height')) {
			shuttle.css('height', launcher.data('height') + (shuttle.innerHeight() - shuttle.height()));
		}

		if (launcher.data('min-width')) {
			shuttle.css('min-width', launcher.data('min-width') + (shuttle.innerWidth() - shuttle.width()));
		}
		if (launcher.data('min-height')) {
			shuttle.css('min-height', launcher.data('min-height') + (shuttle.innerHeight() - shuttle.height()));
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
		if (launcher.data('landing-sequence')) {
			shuttle.attr('data-landing-sequence', launcher.data('landing-sequence'));
		}
		if (launcher.data('class')) {
			shuttle.addClass(launcher.data('class'));
		}

		shuttle.addClass('rkt-orbiting');
	});
});