var moment = require('moment');

var now = moment().format('ddd-MMM-YYYY');
//console.log(now);

document.querySelector('.startDate').innerHTML =
	"From today's date" + ':' + ' ' + now;

$(function() {
	$('#datepicker').datepicker();
	$('#datepicker').change(function() {
		$('#placeholder').text(date);
		//console.log(date);
	});
});
