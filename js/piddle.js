var slide = function(container, duo) {
	$(container + ' .slide').cycle({
		fx: 'fade',
		speed:    800, 
		timeout:  6000,
		pause:   true,
		pauseOnPagerHover: true,
		pager:  container + ' .dots',
		onPagerEvent: function(i, li) {
			$(container + ' h4').removeClass('activePager');
			if(duo && i>1) {
				i = i-1;
			}
			$($(container + ' h4')[i]).addClass('activePager');	
		}
	});
};

$(function() {
	slide('#intro');
	slide('#app',true);

	$('#play').click(function(){
		$('#video').animate({height:500},800);
		$('#video figure').animate({'padding-top':200,opacity:0},800, function() {
			$('#play').css({display:'none'});
			$('#player').fadeIn(1000);
		});
		return false;
	});	
});		