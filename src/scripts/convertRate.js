/* eslint-disable no-undef */
import { get } from 'axios';

let ourRequest = new XMLHttpRequest();
let btn = document.getElementById('btn');
let amt = document.getElementById('amt');
let footer = document.getElementById('footer');
let fixer = document.getElementById('fixer');

btn.addEventListener('click', function() {
	amt.innerHTML = '';
	let toConvert = document.getElementById('amountToConvert').value;
	let baseCurrency = document.getElementById('fromMoney').value;
	//console.log(baseCurrency);
	let targetCurrency = document.getElementById('toMoney').value;
	//console.log(targetCurrency);
	ourRequest.open(
		'GET',
		'https://data.fixer.io/api/latest?access_key=c7221b2f700e035f99cd06ccb3a521a5&base=' +
			baseCurrency
	);

	if (toConvert == '') {
		amt.innerHTML = 'Please enter how much you would like to convert';
	} else if (baseCurrency != targetCurrency) {
		ourRequest.onload = function() {
			let ourData = JSON.parse(ourRequest.responseText);
			//console.log(ourData);
			let dateAccess = ourData.date;
			let convertedAmount = toConvert * ourData.rates[targetCurrency];
			amt.innerHTML =
				toConvert +
				'<span>' +
				baseCurrency +
				'</span>' +
				' is equal to ' +
				convertedAmount.toFixed(2) +
				'<span>' +
				targetCurrency +
				'</span>';
			footer.innerHTML =
				'Rates are as updated on ' + dateAccess + "<span id='small'></span>";
			fixer.innerHTML =
				"Data is pulled from <a href='http://fixer.io/Fixer.io'>Fixer.io</a>";
		};
	} else {
		amt.innerHTML = 'Please choose different currencies';
	}
	ourRequest.send();
});
