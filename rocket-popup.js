$(document).ready(function() {
	$('body').append('<div id="rkt-shuttle"></div>');
	
	$('body').on('touchstart click', "div", function(e) {
		if ($(this).hasClass('rkt-overcast') || (($(this).hasClass('rkt-x')))) {
			$('#rkt-shuttle').removeClass('rkt-orbiting');
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


		if (launcher.data('cargo')) {
			shuttle.html(launcher.data('cargo') + '<div class="rkt-x">X</div>');
		} else if (launcher.attr('rel') == 'image') {
			shuttle.html('<img style="width:100%; height:auto;" src="' + launcher.attr('href') + '">' + '<div class="rkt-x">X</div>');
		} else {
			shuttle.html('<iframe style="width:100%; height:100%;" src="' + launcher.attr('href') + '"></iframe>' + '<div class="rkt-x">X</div>');
			if (!launcher.data('width')) {
				shuttle.css('width', 800 + (shuttle.innerWidth() - shuttle.width()));
			}
			if (!launcher.data('height')) {
				shuttle.css('height', 550 + (shuttle.innerHeight() - shuttle.height()));
			}
		}


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
		return false;
	});
});