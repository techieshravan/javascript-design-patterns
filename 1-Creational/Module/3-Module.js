var logger = (function() {
	"use strict";
	
	var messages = [];
	
	return {
		add: function(message) {
			messages.push(message)
		},
		clear: function() {
			messages = [];	
		}
	};
})();