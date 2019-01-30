var suits = ["diamonds", "hearts", "spades", "clubs"];
var numbers = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
var deck = [];
$(document).ready(function() {
  $("form#deck").submit(function(event) {

    suits.forEach(function(suit) {
      numbers.forEach(function(number) {
        var card = number + " of " + suit;
        deck.push(card);
      });
    });
    $("#mydeck").show();
    deck.forEach(function(card) {
      $("#mydeck").append("<li>" + card + "</li>")
    })
    event.preventDefault();
  })
})
