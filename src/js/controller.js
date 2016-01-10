var cardsTemplate = require("./../templates/cards-list.handlebars");

module.exports = {
	init: function(cards) {

		var content = $(".cards");

		//перерисовка колоды карт
		function resetCards(elem, list) {
			elem.html(cardsTemplate({
				cards: list
			}));
		}

		//событие при клике на колоду карточек (последняя карточка в колоде удаляется)
		$(document).on('click', ".card-item", function(e) {
			if (!e.shiftKey) {
				cards.pop();
				history.pushState(cards, 'Delete', '')
				resetCards(content, cards);
			}
		});

		//событие при клике в области колоды (добавляется карта)
		$(document).on('click', ".cards", function(e) {
			if (e.shiftKey && e.altKey) {
				cards.push({
					type: 'wide'
				});
				history.pushState(cards, 'AddCard', '')
			} else if (e.shiftKey) {
				cards.push({
					type: 'narrow'
				});
				history.pushState(cards, 'AddCard', '')
			} else {
				return;
			}
			resetCards(content, cards);
		});


		window.onpopstate = function(e) {
			if (e.state != null) {
				cards = e.state;
			} else {
				history.back();
			}
			resetCards(content, cards);
		};
	}
}