require("./css/style.css");

var content = require("./templates/content.handlebars");

var controller = require("./js/controller.js");

var cards = require("./js/card.js");

$(document).ready(function() {

	history.replaceState(cards, 'start', '');

	$("body").append(content({
		cards: cards
	}));

	controller.init(cards);
});