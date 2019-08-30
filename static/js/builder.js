/* Builder.js
 * simple game of time and resources
 *
 * Ryan Hartje - github.com/ryanhartje
 */
// Test using score to resize things
//$('.score').text(Math.round(score));

$(document).ready(function(){
  // Hide Cathub before we start
  $('.cathub').toggle();
  $('#button').draggable();

    // Instansiate variables
    // spawn is our initial clock time
    // multi - multipliar for causing noticiable increase
    // init - inital font size
    var spawn = jQuery.now(),
        score = 0,
        multi = 0;
        clickValue = 1;

    // The following defines our interval loop
    setInterval(function(){
      //functions
      // Bonuses and more will add to the score
      var bonus = function(score,points){
        score += points;
        return score;
      };

      //CALL BACK$!
      $('.size').click(function(){
        score += clickValue;
      });

      //score logic
      multi *= Math.round((jQuery.now()/spawn)*1.0000001);

      // Update the DOM
      $('.score').text(score);
      $('.multi').text(multi);
      $('.spawn').text(spawn);

      // Style the money
      $('.size').css('font-size',multi+"px");

      //Score logic
      score += 1;

      if(score % 10 == 0){
        multi += 1
      }

      if(score % 100 == 0){
        $('.click').toggle();
        $('.cathub').toggle();
      }
    }, 100);

    //refreshScore(); //mainloop

});

