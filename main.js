console.log("Up and running!");

var cards = [
	{ rank: "queen",
	  suit: "hearts",
	  cardImage: "images/queen-of-hearts.png"
	},
	{ rank: "queen",
	  suit: "diamonds",
	  cardImage: "images/queen-of-diamonds.png"
	},
	{ rank: "king",
	  suit: "hearts",
	  cardImage: "images/king-of-hearts.png"
	},
	{ rank: "king",
	  suit: "diamonds",
	  cardImage: "images/king-of-diamonds.png"
	}
];

var cardsInPlay =[];

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");	
	}
	else {
		alert("Sorry,try again.")
	}
};

var flipCard = function (cardId) {
	console.log("User flipped "+ cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
};

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		console.log(cards[i].cardImage);
	}
};

cardElement.addEventListener('click' , flipCard);

var cardElement = document.createElement('img');
cardElement.setAttribute('src', 'images/back.png');
cardElement.setAttribute('data-id', i);
document.getElementById('game-board').appendChild(cardElement);

createBoard();


