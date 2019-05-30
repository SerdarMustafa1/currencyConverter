// import currencyStyle from '../../style/currencySelector.css';

// /* eslint-disable semi */
// const currencies = ['EUR', 'USD'];

// const fromSelectEl = document.querySelector('#from');
// const toSelectEl = document.querySelector('#to');
// const formEl = document.querySelector('form');
// const resultEl = document.querySelector('#result');
// const symbolEl = document.querySelector('#symbol');

// const renderOptions = options => {
// 	options.sort().forEach(curr => {
// 		const newOption = document.createElement('option');
// 		newOption.setAttribute('value', curr);
// 		newOption.textContent = curr;
// 		const clonedOption = newOption.cloneNode(true);
// 		if (curr === 'USD') {
// 			newOption.selected = true;
// 		}
// 		if (curr === 'EUR') {
// 			clonedOption.selected = true;
// 		}
// 		fromSelectEl.appendChild(newOption);
// 		toSelectEl.appendChild(clonedOption);
// 	});
// };

// const submitHandler = e => {
// 	e.preventDefault();

// 	const [amountVal, fromVal, toVal] = [...e.target.elements].map(
// 		el => el.value
// 	);

// 	if (amountVal === '') {
// 		return alert('Please insert amount');
// 	}

// 	if (fromVal === toVal) {
// 		return alert('Fun Fact: You need to select 2 different currencies!');
// 	}
// 	makeHttpRequest(
// 		'https://data.fixer.io/api/latest?access_key=c7221b2f700e035f99cd06ccb3a521a5&base=USD&symbols=EUR',
// 		response => {
// 			const dataToShow = response.rates[toVal] * amountVal;
// 			resultEl.textContent = dataToShow.toFixed(3);
// 			symbolEl.value = toVal;
// 		}
// 	);
// };

// const makeHttpRequest = (url, callback) => {
// 	const xhr = new XMLHttpRequest();
// 	xhr.onload = res => {
// 		if (xhr.status === 200) {
// 			return callback(JSON.parse(res.target.responseText));
// 		} else {
// 			alert('Probably a server error');
// 		}
// 	};

// 	xhr.open('GET', url);
// 	xhr.send();
// };

// renderOptions(currencies);
// formEl.addEventListener('submit', submitHandler);
