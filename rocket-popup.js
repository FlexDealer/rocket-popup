$(document).ready(function() {
	if($('.rkt-shuttle').length > 0) {
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
				shuttle = $(launcher.data('shuttle'));
			shuttle.html(launcher.data('cargo')).addClass('orbiting');
			$('.slider').slick();
		});
	}
});