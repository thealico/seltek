/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
@ tema > tab */

function _tema_tab(){
	
	$('.tab-nav > *').click(function(e){
		
		var tabgroup   = $(this).data('tab'),
			tabscript  = $(this).data('script') ? $(this).data('script') : false,
			tabindex   = $(this).index();
		
		console.log(tabgroup);
		
		$('.tab-nav > *').removeClass('on');
		$(this).addClass('on');

		console.log(tabindex);
		$('.tab-'+tabgroup+' > *').removeClass('on');
		$('.tab-'+tabgroup+' > *:nth-child('+(tabindex+1)+')').addClass('on');

		if(tabscript) eval(tabscript+"()");

		e.preventDefault();
	})
}