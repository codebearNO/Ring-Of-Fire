// console.log(
// 	"your card is " + Object.keys(cards[0]),
// 	"it means " + cards[0]["one of hearts"].meaning
// );

//model
let cards = [];
let currentCardIndex = 0;
let cardDraw;
let spentCards;
let app = document.getElementById("app");
let html;

//view
generateCards();
setRules();
updateView();
function updateView() {
	html = /*HTML*/ `
  <div class="container">
  <div>${cards[currentCardIndex].rule}</div>
  <img onclick="drawCard()" src="${cards[currentCardIndex].src}"/>
  </div>
  `;
	app.innerHTML = html;
}

//controller

function generateCards() {
	for (let i = 1; i < 14; i++) {
		cards.push({ name: i + " of clubs", src: "images/" + i + "ofclubs.png" });
		cards.push({ name: i + " of hearts", src: "images/" + i + "ofhearts.png" });
		cards.push({
			name: i + " of diamonds",
			src: "images/" + i + "ofdiamonds.png",
		});
		cards.push({ name: i + " of spades", src: "images/" + i + "ofspades.png" });
	}
	console.log(cards);
}

function drawCard() {
	currentCardIndex = Math.floor(Math.random() * cards.length);
	updateView();
	cards.splice(currentCardIndex, 1);
	if (cards.length == 0) {
		cards.push({
			name: "odinproject",
			src: "https://www.theodinproject.com/assets/badge-javascript-069c5eaf6d697e8704865294fd5660c7f63c6010c4c3e729540464d6acf5d769.svg",
		});
		// alert("Game over, Restart?");
	}
	console.log(cards);

	// updateView();
}

function setRules() {
	for (let i = 0; i < cards.length; i++) {
		if (cards[i].name.indexOf("13") == 0) {
			cards[i].rule =
				"Pour!- You must pour a little of your drink into the cup that is in the middle of the table. Whomever picks up the LAST king must drink the whole cup, which could be filled with different drinks, so who knows how bad it could taste!";
		} else if (cards[i].name.indexOf("12") == 0) {
			cards[i].rule =
				"Questions – Go around in a circle and you have to keep asking questions to each other. Doesn’t matter what the question is, as long as its a question. Whoever messes up and does not say a question, drinks.";
		} else if (cards[i].name.indexOf("11") == 0) {
			cards[i].rule =
				"Make a Rule – You can make up any rule that everyone has to follow, such as you can only drink with your left hand. Everyone (including you) must follow this rule for the whole entire game and if you disobey you must drink.";
		} else if (cards[i].name.indexOf("10") == 0) {
			cards[i].rule =
				"Categories- Pick a category such as football and you go in a circle and everyone has to say a word that fits with football such as: touchdown, field goal, USC. Whoever messes up, drinks.";
		} else if (cards[i].name.indexOf("9 ") == 0) {
			cards[i].rule =
				"Rhyme – Pick a word such as fog and the person next to you must rhyme with fog, like dog, and it goes to the next person and the next, in a circle, until someone messes up and he or she will have to drink";
		} else if (cards[i].name.indexOf("8 ") == 0) {
			cards[i].rule =
				"is Mate – Choose someone to drink with you. He/she, your drinking buddy, should always drink with you.";
		} else if (cards[i].name.indexOf("7 ") == 0) {
			cards[i].rule =
				"is Heaven – Point your finger in the sky, whoever is last must drink";
		} else if (cards[i].name.indexOf("6 ") == 0) {
			cards[i].rule = "is Dicks – All guys drink";
		} else if (cards[i].name.indexOf("5 ") == 0) {
			cards[i].rule =
				"Thumb Master- When you put your thumb on the table everyone must follow and whomever is last must drink. You are the thumb master till someone else picks a five.";
		} else if (cards[i].name.indexOf("4 ") == 0) {
			cards[i].rule = "is Wh0re – All girls must drink";
		} else if (cards[i].name.indexOf("3 ") == 0) {
			cards[i].rule = "is Me – You must drink";
		} else if (cards[i].name.indexOf("2 ") == 0) {
			cards[i].rule = "is Choose – You can choose someone to drink";
		} else if (cards[i].name.indexOf("1 ") == 0) {
			cards[i].rule =
				"Waterfall – Everyone should keep drinking until the person who picked the card stops.So who knows how long you will be going for!";
		}
	}
}
