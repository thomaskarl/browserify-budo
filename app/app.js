var $ = require('jquery');

$(function(){
	if(navigator.userAgent.match(/Trident\/7\./)) {
		$('body').addClass('browser-is-internet-explorer');
	} else {
		$('body').addClass('browser-is-NOT-ie');
	}
});