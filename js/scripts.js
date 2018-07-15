var words = [
    "Love",
    "Caring",
    "Family",
    "Blessing",
    "Moments",
    "Treasures",
    "Friendship",
    "Trust"
];

var $slide = $(".indicator.active")[0];
var word = "";

//grab a word from words
function getWord() {
    word = words[Math.floor(Math.random() * words.length)];
}
//check to see if new word is current word
function checkWord (w) {
    
    while (w === word) {
        getWord();
    }
}
//write the word into DOM
function displayWord() {
    var $currentSlide = $(".indicator.active")[0];
    if ( $slide != $currentSlide  ) {
        checkWord(word);
        $(".words").html ( "<p>" + word + "</p>" );
        $slide = $currentSlide;
    }
}

// $.getJSON("data/words.json", function (response) {
//     words = response;
// });
getWord();
$(".words").html ( "<p>" + word + "</p>" );
setInterval( displayWord, 100 );
