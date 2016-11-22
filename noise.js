$(document).ready( function() {

  var assignNotes = function(){
    var letters = ["a","b","c","d","e","f","g"];

    for (var i = 0; i < letters.length; i++) {

      var clickSetter = function(){
        var counter = i;
        $('.'+ letters[counter]).click(function(event){
        var sound = $("#" + letters[counter] + "Audio")[0];
        sound.load();
        sound.play();
        });
      };
      clickSetter();

      var keystrokeSetter = function() {
        var counter = i;
        $('body').keydown(function(event){
            if (event.key == letters[counter]){
              var sound = $("#" + letters[counter] + "Audio")[0];
              sound.load();
              sound.play();
            }
          });
      }
      keystrokeSetter();
    }
  }
  assignNotes();
});
