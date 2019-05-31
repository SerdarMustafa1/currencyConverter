import { get } from 'axios';

get(
	'https://data.fixer.io/api/latest?access_key=c7221b2f700e035f99cd06ccb3a521a5&base=USD&symbols=EUR&format=1'
).then(resp => {
	//console.log(resp.data.rates.EUR);
	document.querySelector('.usd2eur').innerHTML =
		'$1 = € ' + resp.data.rates.EUR;
});

get(
	'https://data.fixer.io/api/latest?access_key=c7221b2f700e035f99cd06ccb3a521a5&base=EUR&symbols=USD&format=1'
).then(resp => {
	//console.log(resp.data.rates.EUR);
	document.querySelector('.eur2usd').innerHTML =
		'€1 = $ ' + resp.data.rates.USD;
});
