$(document).ready(function() {
	let number_first_digit = 0;
	let number_second_digit = 0;
	let number_third_digit = 0;
	let number_forth_digit = 0;
	$(".first-digit").html(number_first_digit);
	$(".second-digit").html(number_second_digit);
	$(".third-digit").html(number_third_digit);
	$(".forth-digit").html(number_forth_digit);

	let stop_watch_timer;

	$(".start-button").click(function() {
		$(".start-button").prop("disabled", true);
		$(".stop-button").prop("disabled", false);
		$(".reset-button").prop("disabled", false);
		stop_watch_timer = setInterval(function() {
			if (number_first_digit != 9) {
				number_first_digit += 1;
				$(".first-digit").html(number_first_digit);
			}
			else {
				number_first_digit = 0;
				$(".first-digit").html(number_first_digit);
				if (number_second_digit != 9) {
					number_second_digit += 1;
					$(".second-digit").html(number_second_digit);
				}
				else {
					number_second_digit = 0;
					$(".second-digit").html(number_second_digit);
					if (number_third_digit != 9) {
						number_third_digit += 1;
						$(".third-digit").html(number_third_digit);
					}
					else {
						number_third_digit = 0;
						$(".third-digit").html(number_third_digit);
						number_forth_digit += 1;
						$(".forth-digit").html(number_forth_digit);
					}
				}
			}
		}, 100);
	});

	$(".stop-button").click(function() {
		$(".start-button").prop("disabled", false);
		$(".stop-button").prop("disabled", true);
		$(".reset-button").prop("disabled", false);
		clearInterval(stop_watch_timer);
	});

	$(".reset-button").click(function() {
		number_first_digit = 0;
		number_second_digit = 0;
		number_third_digit = 0;
		number_forth_digit = 0;
		$(".first-digit").html(number_first_digit);
		$(".second-digit").html(number_second_digit);
		$(".third-digit").html(number_third_digit);
		$(".forth-digit").html(number_forth_digit);
		clearInterval(stop_watch_timer);
		$(".start-button").prop("disabled", false);
		$(".stop-button").prop("disabled", true);
		$(".reset-button").prop("disabled", true);
	})
});
