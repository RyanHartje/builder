$(document).ready(function(){
    $('.score').text(jQuery.now());
    // Instansiate variables
    // spawn is our initial clock time
    // multi - multipliar for causing noticiable increase
    // init - inital font size
    var spawn = jQuery.now(),
        score = 14,
        multi = 1;   
    

    
    var refreshScore = setInterval(function(){
      //functions
      // Bonuses and more will add to the score
      var bonus = function(multi,points){
        multi += points;
        return multi;
      };
        
      //call backs
      $('.score').click(function(){
        $('.warn').text(jQuery.now());
        score += bonus(multi,1);  
      });
        
      //score logic
      score *= (jQuery.now()/spawn)*1.0001;
        
      $('.multi').text("Multi: " + multi);
      $('.score').text(Math.round(score));
      $('.score').css('font-size',score+'px');
      $('.spawn').text(spawn);
      multi += 1;
    }, 100);
 
    refreshScore(); //mainloop

});

