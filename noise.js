$(document).ready( function() {

  $('.c').click(function(event) {
    var sound = document.getElementById("cAudio");
    sound.play();
  });

  $('.d').click(function(event) {
    var sound = document.getElementById("dAudio");
    sound.play();
  });

  $('.e').click(function(event) {
    var sound = document.getElementById("eAudio");
    sound.play();
  });

  $('.f').click(function(event) {
    var sound = document.getElementById("fAudio");
    sound.play();
  });

  $('.g').click(function(event) {
    var sound = document.getElementById("gAudio");
    sound.play();
  });

  $('.a').click(function(event) {
    var sound = document.getElementById("aAudio");
    sound.play();
  });

  $('.b').click(function(event) {
    var sound = document.getElementById("bAudio");
    sound.play();
  });

  $('body').keydown(function(event){
    if (event.key == "a"){
      var sound = document.getElementById("aAudio");
      sound.play();
    }
  });

  $('body').keydown(function(event){
    if (event.key == "b"){
      var sound = document.getElementById("bAudio");
      sound.play();
    }
  });

  $('body').keydown(function(event){
    if (event.key == "c"){
      var sound = document.getElementById("cAudio");
      sound.play();
    }
  });

  $('body').keydown(function(event){
    if (event.key == "d"){
      var sound = document.getElementById("dAudio");
      sound.play();
    }
  });

  $('body').keydown(function(event){
    if (event.key == "e"){
      var sound = document.getElementById("eAudio");
      sound.play();
    }
  });

  $('body').keydown(function(event){
    if (event.key == "f"){
      var sound = document.getElementById("fAudio");
      sound.play();
    }
  });

  $('body').keydown(function(event){
    if (event.key == "g"){
      var sound = document.getElementById("gAudio");
      sound.play();
    }
  });
});






  // DESICATON!//
  // var assignNotes = function(){
  //   var letters = ["a","b","c","d","e","f","g"];
  //
  //   for (var i = 0; i < letters.length; i++) {
  //     console.log('.'+letters[i]);
  //     console.log(letters[i] + "Audio")
  //
  //     $('.'+letters[i]).click(function(event){
  //       console.log("hi");
  //       var sound = document.getElementById(letters[i] + "Audio");
  //       // sound.play();
  //     });
  //   }
  // }
  // assignNotes();
