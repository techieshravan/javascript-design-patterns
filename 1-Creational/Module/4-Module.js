var logger = (function () {
	"use strict";

	var messages = [];

	var add = function (message) {
		messages.push(message)
	};

	var clear = function () {
		messages = [];
	};

	return {
		add: add,
		clear: clear
	};
})();