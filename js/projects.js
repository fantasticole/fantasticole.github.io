$(function(){
	function scrollToProject(loc){
        var width = $(window).width();
        var oneWidth = parseInt(width)/100;
        if ($(window).width() > 550){
        	var move = oneWidth*5;
	        $('html, body').animate({
	            scrollLeft: $(loc).offset().left - move
	        }, 600);
        }
        else{
        	var move = oneWidth*2;
	        $('html, body').animate({
	            scrollLeft: $(loc).offset().left - move
	        }, 600);
        }
	}

	var here = window.location.href;

	if (here.indexOf('#') > -1){
		var linkedProj = here.slice(here.indexOf('#'));
		scrollToProject(linkedProj);
	}

	$('.projects li>a').click(function(event){
        scrollToProject($(this)[0].hash)
        event.preventDefault();
    });

   	$('.panel-title a').click(function(){
   		var mom = $(this)[0].dataset.parent.toString();
		$('i', this).toggleClass('down');
		$(mom + ' .panel-title a').not(this).each(function(){
			$('i', this).removeClass('down');
		})
	});

	var config = {
		"id": '628733595385995265',
		"domId": 'timeline',
		"maxTweets": 15,
		"enableLinks": true,
		"showUser": true,
		"showTime": true,
		"showInteraction": false,
		"lang": 'en'
	};

	var here = window.location.href;

	if (here.indexOf('projects') > -1){
		twitterFetcher.fetch(config);
	};
});





