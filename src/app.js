require("./css/style.css");

var content = require("./templates/content.handlebars");

var controller = require("./js/controller.js");

var cards = require("./js/cart.js");

$(document).ready(function() {

	history.pushState(cards, 'start', '');

	$("body").append(content({
		cards: cards
	}));

	controller.init(cards);
});