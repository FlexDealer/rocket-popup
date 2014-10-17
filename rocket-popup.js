$(document).ready(function() {
	$('body').append('<div id="rkt-shuttle"></div>');
	


	$('body').on('touchstart click', "div", function(e) {
		if (($(this).hasClass('rkt-overcast') && !($('#rkt-shuttle').hasClass('rkt-permanent'))) || (($(this).hasClass('rkt-x')))) {
			$('#rkt-shuttle').removeClass('rkt-orbiting');
			setTimeout(landingSequence, 500);
		}
	});



	$('.rkt-launcher').click(function(e) {
		var launcher = $(this);
		if ((launcher.data('disable-below')) && $(window).width() < launcher.data('disable-below')) {
			return true;
		}
		e.preventDefault();
		e.stopPropagation();

		launch({
			url:             launcher.attr('href'),
			flightPlan:      launcher.data('flight-plan'),
			landingSequence: launcher.data('landing-sequence'),
			classes:         launcher.data('class'),
			w:               launcher.data('width'),
			h:               launcher.data('height'),
			mode:            launcher.attr('rel'),
			cargo:           launcher.data('cargo')
		});
		return false;
	});
});

function launch(settings) {
	$('.rkt-atmosphere').addClass('rkt-overcast');
	var shuttle = $('#rkt-shuttle');

	shuttle.attr('style', '');
	shuttle.attr('data-landing-sequence', '');
	shuttle.attr('class', '');

	if (settings.classes) {
		shuttle.addClass(settings.classes);
	}
	if (settings.landingSequence) {
		shuttle.attr('data-landing-sequence', settings.landingSequence);
	}

	var paddingX = Number(shuttle.css('padding-left').replace(/[^-\d\.]/g, '')) + Number(shuttle.css('padding-right').replace(/[^-\d\.]/g, '')),
		paddingY = Number(shuttle.css('padding-top').replace(/[^-\d\.]/g, '')) + Number(shuttle.css('padding-bottom').replace(/[^-\d\.]/g, ''));

	if (settings.w) {
		shuttle.css('width', Number(settings.w) + paddingX);
	}
	if (settings.h) {
		shuttle.css('height', Number(settings.h) + paddingY);
	}


	if (settings.cargo) {
		shuttle.html(settings.cargo + '<div class="rkt-x">X</div>');
	} else if (settings.mode == 'image') {
		shuttle.html('<img style="width:100%; height:auto;" src="' + settings.url + '">' + '<div class="rkt-x">X</div>');
	} else {
		shuttle.html('<iframe style="width:100%; height:100%; height:calc(100% - ' + paddingY + 'px);" src="' + settings.url + '"></iframe>' + '<div class="rkt-x">X</div>');
		if (!settings.w) {
			shuttle.css('width', 800 + paddingX);
		}
		if (!settings.h) {
			shuttle.css('height', 600 + paddingY);
		}
	}

	if (settings.flightPlan) {
		eval(settings.flightPlan);
	}

	shuttle.addClass('rkt-orbiting');
}


function landingSequence() {
	var shuttle = $('#rkt-shuttle');
	if (shuttle.data('landing-sequence')) {
		eval(shuttle.data('landing-sequence'));
	}
	$('.rkt-atmosphere').removeClass('rkt-overcast');
	shuttle.html('');
}