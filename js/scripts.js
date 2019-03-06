var suits = ["diamonds", "hearts", "spades", "clubs"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
var deck = [];
var card1;
var card2
$(document).ready(function() {
  $("form#deck").submit(function(event) {

    suits.forEach(function(suit) {
      numbers.forEach(function(number) {
        var card = number + " " + "of" + " " + suit;
        deck.push(card);
      });
    });
    $("#mydeck").show();
    deck.forEach(function(card) {
      $("#mydeck").append("<li>" + card + "</li>")
    })
    event.preventDefault();
  })
  $("button#draw").click(function(){
    var randomnumber = Math.floor((Math.random() * 51));
    card1 = deck[randomnumber]
    $(".single-card").text(card1)
  })
  $("button#draw2").click(function(){
    var randomnumber = Math.floor((Math.random() * 51));
    card2 = deck[randomnumber]
    $(".single-card2").text(card2)
  })
  $("button#compare").click(function(){
    var card1arr = card1.split(" ")
    var card2arr = card2.split(" ")
    if (card1 === card2){
      $(".compare").text("exact match")
    } else if (card1arr[2] === card2arr[2]){
      $(".compare").text("suits match")
    } else if (parseInt(card1) === parseInt(card2)){
      $(".compare").text("numbers match")
    } else {
      $(".compare").text("no match")
    }
  })
})
