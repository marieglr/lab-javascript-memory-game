var cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" }
];

$(document).ready(function() {
  memoryGame = new MemoryGame(cards);
  memoryGame.shuffleCards();

  var html = "";
  memoryGame.cards.forEach(function(pic) {
    html += '<div class="card" data-card-name="' + pic.name + '">';
    html += '  <div class="back" name="' + pic.img + '"></div>';
    html +=
      '  <div class="front" style="background: url(img/' +
      pic.img +
      ') no-repeat"></div>';
    html += "</div>";
  });

  // Add all the div's to the HTML
  $("#memory_board").html(html);

  // Bind the click event of each element to a function
  $(".back").click(function() {
    var card = $(event.target);

    // 1. Flip the card
    flipCard(card);

    //2. Push the card into the clickedCards array
    memoryGame.pickedCards.push(card);

    //3. Handle 2 cards clicked
    if (memoryGame.pickedCards.length > 1) {
      var firstCard = memoryGame.pickedCards[0].attr("name");
      var secondCard = memoryGame.pickedCards[1].attr("name");
      var isPair = memoryGame.checkIfPair(firstCard, secondCard);

      if (isPair) {
        memoryGame.pickedCards = [];
      } else {
        turnBackCards();
      }
    }

    //4. Check if game is over
    if (memoryGame.isFinished()) {
      alert("You won!");
    }

    //5. Print game info on the board
    printGameInfo();
  });
});

function flipCard(card) {
  card.toggleClass("front");
  card.toggleClass("back");
  card.next().toggleClass("front");
  card.next().toggleClass("back");
}

function turnBackCards() {
  setTimeout(function() {
    flipCard($(memoryGame.pickedCards[0]));
    flipCard($(memoryGame.pickedCards[1]));
    memoryGame.pickedCards = [];
  }, 1000);
}

function printGameInfo() {
  $("#pairs_clicked").html(memoryGame.pairsClicked);
  $("#pairs_guessed").html(memoryGame.pairsGuessed);
}
