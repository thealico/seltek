function kit(scop){
	
	// const ua = window.navigator.userAgent.toLowerCase();
	// const isiPad = ua.indexOf('ipad') > -1 || ua.indexOf('macintosh') > -1 && 'ontouchend' in document;
	// alert(isiPad);

	if(scop =='url-snc'){
		

		const urls = document.querySelectorAll('a[data-usnc]'); 
		const host = window.location.origin;

		if (!urls.length)  return false; 
		
		let sets,url,us,as,is;

		Object.entries(urls).forEach(([i,el]) => {
  		
  			sets = JSON.parse(el.dataset['usnc']);
  			url  = el.getAttribute('href');
  			
  			is 		= ( url.substr(0, 4) == 'http' ||  url.substr(0, 4) == 'www.' ) ? true : false ;
  			us   	= new URL( is ? url : host+url);
			
		
  			if(sets.sub){

  				sets.sub.forEach(function(uskey){
					
					let as  = new URL(decodeURIComponent(us.searchParams.get(uskey)));

					if(sets.c) sets.c.forEach(function(askey) { as.searchParams.set(askey,app.cari.tur.id) });
					if(sets.z) sets.z.forEach(function(askey) { as.searchParams.set(askey,app.user.z.code)	  });
				
					us.searchParams.set(uskey,as);
				})
  			}

  			if(sets.c) sets.c.forEach(function(uskey) { us.searchParams.set(uskey,app.cari.tur.id) });
			if(sets.z) sets.z.forEach(function(uskey) { us.searchParams.set(uskey,app.user.z.code)	   });
	
			url = is ? us : us.href.replace(host,'');
			
			el.setAttribute('href',url);

		});

		return false;
	}

	/*
	@ root element style */

	if(scop =='RootStyle'){
		
		let root = document.documentElement;	
	
		root.style.setProperty("--app-body",( set.win.y - 112 )+'px');	
		return false;
	}
	
	
	/*
	@ Blank Url */

	$(document).on('click','a[href="#"]',function(e){
 		
 		e.preventDefault();
 	});

	/*
	@ Triger Click */ 	

 	$(document).on('click','.trig',function(e){
 		
 		$($(this).attr('rel')).click();
 	});


	$(document).on('click','.cac-rst',function(e){


		//let txt = 'Ofisten bu sayfanın içeriğini güncelleme talebinde bulunduysanız aşağıdan yenilemeye basınız';
		//txt = ( set.page.mod != 'sepet' ) ? txt : 'Sepetin eksik olduğunu düşünüyorsanız  buradan yenileye basın' 

		let txt = 'Sayda cache verisini sıfırlayıp yüklemek istediğinden emin misiniz ?';
	
		Swal.fire({
	  
			confirmButtonText 	: 'Yenile',
			cancelButtonText  	: 'Vazgeç',
			title				: 'Yenile',
			text 				: txt,
			width 				: 335,
			reverseButtons 		: true,
			showCancelButton	: true,
			animation 			: false,
			customClass 		: {
				cancelButton 	: 'remove',
				popup 			: 'sw-ios sw-note sw-confirm animated fadeIn'
			}
		})
		.then((result) => {
			
			if(result.value){
				$('html').addClass('query');
				
				if( set.page.cat == 'cari'){

					_cari_sec(false,{reset:true});
				}

				href('reset','page');
				
				let u = set.page.current.replace('?reset=page','');

				window.history.pushState("object or string", "Title",u);


			}
		});
	})


	$(document).on('click','a.confirm',function(){

		let e = $(this); 
		let m = $(e).data('confirm');

		m = m =='frame' ? 'Bu bölüm hazır olmadığı için eski yapıdaki dış bağlantıya yönlendiriliyorsunuz' : m;
		

		event.preventDefault();	

		Swal.fire({
	  
			confirmButtonText 	: 'Tamam',
			cancelButtonText  	: 'Vazgeç',
			title				: 'Dış Bağlantı',
			text 				: m,
			width 				: 335,
			reverseButtons 		: true,
			showCancelButton	: true,
			animation 			: false,
			customClass 		: {
				cancelButton 	: 'remove',
				popup 			: 'sw-ios sw-note sw-confirm animated fadeIn'
			}
		})
		.then((result) => {
			
			if(result.value){
				
				$.address.value($(e).attr('href'));
				return true;
			}
			else{
				return false;
			}
			
		});


	});
}



function kit_lazy(){

	if( fs.run.lazy ) return false;
	fs.run.lazy = true;

	fs.lazyLoad = new LazyLoad({

    	elements_selector: ".lazy",
    	load_delay: 300
	});
}
	
	
