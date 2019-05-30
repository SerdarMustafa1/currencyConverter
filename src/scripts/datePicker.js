var moment = require('moment');

var now = moment().format('ddd-MMM-YYYY');
//console.log(now);

document.querySelector('.startDate').innerHTML =
	"From today's date" + ':' + ' ' + now;

$('#endDate').datepicker({
	uiLibrary: 'bootstrap4',
	iconsLibrary: 'fontawesome',
	minDate: function() {
		return $('#startDate').val();
	}
});
