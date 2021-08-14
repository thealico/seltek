'use strict';


/*
@ Front-end Developer & UI Designer by alico 
@ http://akman.me */

var fs 				= {}

$(document).ready(function(){



	/*
	@ display  */
 
	if( set.display )
	{

		set.doc.y	= Math.round($(document).height());
		set.doc.x	= Math.round($(document).width());
		
		set.win.y 	= Math.round($(window).height());
		set.win.x	= Math.round($(window).width());

	
		display(false);

		$(window).resize(function(){
			
			set.win.y 	= Math.round($(window).height());
			set.win.x	= Math.round($(window).width());
			
			display(true);
		});		
	}
	

	/*  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
	@ Tema  */
	
	tema();

	/*  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
	@ Form */
	
 	form_post();
 	form_type();
 	
 	nav_select();
	nav_count();
	
	/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
	@ Utility  */
		
	kit();


	//stick(150);

	/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
	@ Build > table  */

	//table();

	/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
	@ Build > Modal Yapilari  */

	// modal();

	/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
	@ Model   */
	
	
	/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
	@ tema  */
	
	fs.context =  new Context();

	_tema_slide();
	_tema_tab();



	$('#menu > li').hover(
	  function(){
	  	$('html').addClass('on-menu');
	  	screen(1,'two');
	  },function(){

	  	$('html').removeClass('on-menu');
	  	screen(0,'two');

	  	$('#menu .nav-as ol').removeClass('on');
	  	$('#menu .nav-as ol:nth-child(1)').addClass('on');
	  	$('#menu .nav-us li').removeClass('on');
	  	$('#menu .nav-us li:nth-child(1)').addClass('on');
	  }
	);


	$('#menu .tab-con .on .nav-us li').hover(
		function(){
	  		
	  		let i = $(this).index()+1;

	  		$('#menu .tab-con .on .nav-us ol li').removeClass('on');
	  		$(this).addClass('on');

	  		$('#menu .tab-con .on .nav-as ol').removeClass('on');
	  		$(`#menu .tab-con .on .nav-as ol:nth-child(${i})`).addClass('on');
		},
		function(){

	  		//$('#menu .tab-con .on .nav-us ol').removeClass('on');
		}
	);

	

	//_tema_app_menu();
	//_tema_nav_tab();
	//_tema_context();
	//_tema_info();
	//_tema_side();
	//_tema_app();




	/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
	@ pages  */



})
