var cardsTemplate = require("./../templates/cards-list.handlebars");

module.exports = {
	init: function(cards) {

		var cardsContainer = $(".cards");

		//перерисовка колоды карт
		function resetCards(elem, list) {
			elem.html(cardsTemplate({
				cards: list
			}));

			//изменение ширины блока, содержащего карточки
			if (cardsContainer.find(".card-item:last").hasClass("wide")) {
				cardsContainer.addClass("cards-resize");
			} else if (cardsContainer.hasClass("cards-resize")) {
				cardsContainer.removeClass("cards-resize");
			}
		}

		//событие при клике на карточки
		$(document).on('click', ".cards", function(e) {
			var actionType;
			if (e.shiftKey) {
				var cardType = e.altKey ? 'wide' : 'narrow';
				cards.push({
					type: cardType
				});
				actionType = 'AddCardType-' + cardType;
			} else {
				cards.pop();
				actionType = 'Delete';
			}
			history.pushState(cards, actionType, '');
			resetCards(cardsContainer, cards);
		});

		//событие при клике на кнопки истории в браузере
		window.onpopstate = function(e) {
			cards = e.state;
			resetCards(cardsContainer, cards);
		};
	}
}