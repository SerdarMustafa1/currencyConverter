/* eslint-disable no-undef */
import { get } from 'axios';

$('#from').change(function() {
	let fromCurr = $(this).val();
	console.log(fromCurr);
});

$('#to').change(function() {
	let toCurr = $(this).val();
	console.log(toCurr);
});

let rangeSlider = function() {
	let slider = $('.range-slider'),
		range = $('.range-slider__range'),
		value = $('.range-slider__value');

	slider.each(function() {
		value.each(function() {
			let value = $(this)
				.prev()
				.attr('value');
			$(this).html(value);
			//console.log(value);
		});

		range.on('input', function() {
			$(this)
				.next(value)
				.html(this.value);
			let exchangeAmount = value[0].innerHTML;
			console.log(value[0].innerHTML);
		});
	});
};

rangeSlider();

function getRate(fromCurr, toCurr, exchangeAmount) {
	get(
		'https://data.fixer.io/api/convert?access_key=c7221b2f700e035f99cd06ccb3a521a5&from=' +
			fromCurr +
			'&to=' +
			toCurr +
			'&amount=' +
			exchangeAmount
	).then(resp => {
		let currResult = resp.data.result;
		console.log(currResult);
		document.querySelector('#convResult').innerHTML = currResult;
		// 	'$1 = € ' + resp.data.rates.EUR;
	});
}

getRate();

// append an additional "date" parameter if you want to use
// historical rates for your conversion

//& date = YYYY-MM-DD

// let currencies = [
// 	{
// 		value: '0',
// 		currAbv: 'None-Selected'
// 	},
// 	{
// 		value: '1',
// 		currAbv: 'USD'
// 	},
// 	{
// 		value: '2',
// 		currAbv: 'EUR'
// 	}
// ];
