$(document).ready( function() {

  var assignNotes = function(){
    var letters = ["a","b","c","d","e","f","g"];

    for (var i = 0; i < letters.length; i++) {

      var clickSetter = function(){
        var counter = i;
        $('.'+letters[counter]).click(function(event){
        var sound = document.getElementById(letters[counter] + "Audio");
        sound.play();
        });//.click
      };//clickSetter
      clickSetter();

      var keystrokeSetter = function() {
        var counter = i;
        $('body').keydown(function(event){
            if (event.key == letters[counter]){
              var sound = document.getElementById(letters[counter] +"Audio");
              sound.play();
            }//conditional
          });//.keydown
      }//keystrokeSetter
      keystrokeSetter();
    }//assignNotes
  }//loop
  assignNotes();
});//whole document
