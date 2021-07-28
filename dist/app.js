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
		
	pull_refresh();
	reset();
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

	//_tema_app_menu();
	//_tema_nav_tab();
	//_tema_context();
	//_tema_info();
	//_tema_side();
	//_tema_app();




	/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
	@ pages  */



})


// fs.siparis = __siparis_set('create');

function _page_belge(push){
	
	if( set.page.cat != 'belge' )  return false;
	if( app.mods.cek.on ) 	 	 return false;

	app.mods.cek.on = true;

	if( push ){
		
		__belge_on(push);

		return false;
	}

	__belge_on();

}

// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

function __belge_set(opt){

	let con = {
		
		total 	: 0,
		count 	: 1,
		id 		: 0,
		post 	: false,
	}
	
	if ( opt == 'reset' ) { fs.cek = con; return true }
	if ( opt == 'create') return con;

	return false;
}


// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

function __belge_on(push) {
	

	// stick(30);
	// stick(85);
	// stick(150);

	
	stick(180,'#dt-thead',400);
	
	table();

	$(document).on('click','.dtc-list a',function(){

		$('.dtc-list a').removeClass('on');
		
		$(this).addClass('on');

		$('.dt-sepet').attr('data-list',$(this).attr('rel'));

	})
}



// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

function _find_belge(open){

};



function _page_cari(j){

	if( j == 'z-sec' ){
		
		window.history.pushState("object or string", "Title",'/cari');
		$('#tab-1 li').removeClass('on');
		$('#tab-1 li.today').addClass('on');
				
		return false;
	}

	if( set.page.cat != 'cari' ) return false;
	if( app.mods.cari.on ) 	 	 return false;

	app.mods.cari.on = true;

	$(document).on('click','table .e-cari-sec',function(e){
	
		if(!app.session) { 
			
			session();
			return false
		}
		
		if( $(this).hasClass('on') ) {
			
			_cari_sec(0,{ reset:true });

			$(this).removeClass('on');
			return false;
		}

		
		let tr = $(this).parent().parent().parent();

		$('table .e-cari-sec.on').removeClass('on');
		$('table tbody tr').removeClass('on');

		$(this).addClass('on');
		$(tr).addClass('on');

		_cari_sec( $(this).data('id') );

		return false;
	})


	_pgc_snc();
	

}

function _pgc_snc(rtn){

	if(rtn){
		
		
		let tr = '#c-'+rtn.id;
		
		if(rtn.sepa) $(tr+' .td-sepa i').removeClass('of icon-sad-b').addClass('on icon-god'); else $(tr+' .icon-sad-b').addClass('of icon-sad-b').removeClass('on icon-god');
		$(tr+' .count').html(rtn.bakiye.vgbcnt+'<s></s>');
		$(tr+' .bky').html(nFor(rtn.bakiye.val,0)+' '+rtn.bakiye.kur);
		$(tr+' .vgb').html(nFor(rtn.bakiye.vgb,0)+' '+rtn.bakiye.kur);
	
		return false;
	}


	$(document).on('click','table .e-cari-snc',function(e){

		const id = $(this).data('id');

		Swal.fire({
	  
			confirmButtonText 	: 'Güncelle',
			cancelButtonText  	: 'Vazgeç',
			title				: 'Cari Güncelle',
			text 				: 'Ofisten bu carinin bilgisini değiştirme talebinde bulunduysanız aşağıdan güncelleye basınız',
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
				
				_cari_ups(id,{ js:'_pgc_snc' });
				
			}
		});

		return false; 
	})


	$(document).on('click','table .e-tur',function(e){

		const id = $(this).data('id');
		
		let rel  = $(this).attr('rel');
		let el   = $(this);
		

		Swal.fire({
	  
			confirmButtonText 	: 'Talep Gönder',
			cancelButtonText  	: 'Vazgeç',
			title				: 'Tur Talebi',
			text 				: 'Bu cariye gitmek üzere, günlük turunun açılmasını istiyorum',
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
				
				$.post('/ajax/data/cari-tur-ac',{id:id},function(data){
	
					data = (typeof data =='object') ? data : $.parseJSON(data);
					
				
					if(data.result){

						let tit = 'Gönderildi';
						let txt = 'Talebiniz onaylandıktan sonra cariniz tur günü listesinde yer alacaktır.';
						let cod = data.out.code; 

						
						tit = (cod===1) ? 'Onaylandı' 		: tit;
						tit = (cod===2) ? 'Üzgünüm' 		: tit;
						tit = (cod===3) ? 'Onay Bekliyor' 	: tit;

						
						txt = (cod===1) ? 'Bu müşteriniz için verdiğiniz tur açma talebiniz onaylandı' 		: txt;
						txt = (cod===2) ? 'Bu müşterinizin tur açma talebi red edildi' 						: txt;
						txt = (cod===3) ? 'Bu müşteriniz için verdiğiniz tur açma talebi onay bekliyor' 	: txt;

						Swal.fire({
							title 		: tit,
							text 		: txt,
							width 		: 350,
							customClass	: {
							 	popup 	: 'sw-ios sw-note sw-ok'
							}
						})

						if( cod!=rel ){

							$(el).attr('rel',cod);

							tit = (cod===1) ? '( Onaylandı )' 		: tit;
							tit = (cod===2) ? '( Red Edildi )' 		: tit;
							tit = (cod===3) ? '( Onay Bekliyor)' 	: tit;

							$(el).find('span').text(tit);
						}

					}

				});
			}

		});

		return false; 
	})

}




fs.cek = __cek_set('create');

// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

function _page_cek(push){
	
	if( set.page.cat != 'cek' )  return false;
	
	if( push ){
		
		__cek_on(push);

		return false;
	}

	__cek_on();

}

// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

function __cek_set(opt){

	let con = {
		
		total 	: 0,
		count 	: 1,
		id 		: 0,
		kur 	: false,
		post 	: false,
		bank 	: false,
		data 	: false
	}
	
	if ( opt == 'reset' ) { fs.cek = con; return true }
	if ( opt == 'create') return con;

	return false;
}


// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

function __cek_on(push) {
	
	
	app.cek  	   = {};

	app.cek.filter = { 
		rel 	: false,
		rst 	: 0,
		nav 	: {
			cek  : '#tab-1 .item-cek',
			flt  : '#tab-1 .item-flt',
			all  : '#tab-1 ol > li'
		},
		dom  	 : {
			rel  : '.dtc-rel a:not(.static)',
		} 
	}

	_cek_filter(push);


	if(push){

		$('#modal-cek').attr('mod',(set.page.mod == 'list' ? 'add' : 'view')); 
	}




	
	if( app.mods.cek.on ) return false;
	app.mods.cek.on = true;


	stick(30);
	stick(85);
	stick(150);
	stick(240,'#dt-thead',400);
	
	table();
	

	_modal_dekont({
		prev:true,
		rel:'cek'
	});
	
	_modal_imza({
		prev:true,
		rel:'cek'
	});

	_stepBody({

		callback : ['_cek_teslim',{step:true}],
		time 	 : 500
	});

	
	let rows ;
	let str = '<option value="" class="">Seç</option>';
	
	rows = _cari_storge_get('tum-rows');
	rows = rows ? rows : _cari_tum(false,true);

	window.setTimeout(function(){
		
		rows = _cari_storge_get('tum-rows');
		
		if(rows){
			
			$.each(rows,function( key, v ) {
				str = str+'<option value="'+v.erp.id+'">'+v.name+'</option>';
			});	
			
			$('#f-ce-cari').html(str);
		}

	},1500)
}


// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

function _cek_filter(){

	if( set.page.cat == 'cek'){
		_cf_rel('load');	
	}
}

// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -


function _cf_rel(g,e){
	
	let f = app.cek.filter;

	if( g == 'load' ){

		let rel  = [1,2,3,4,5,6,7,8];
		
		$.each( rel, function( key,i ){

			console.log(i);
			
			let n = $('#list-cek li[rel='+i+']').length;
			if(!n) $('#tab-1 .dtc-rel a[rel='+i+']').addClass('of-point'); 
		});
		
		fs.dt.action.rel.js = '_cf_rel';

		return true;
	}


	if( g == 'reset' ){

		$(fs.ly.head.title).text($(fs.ly.head.title).data('title'));
		
		$(f.nav.urn).removeClass('op'); 
		$(f.dom.rel).removeClass('on');

		//$('.dt-list').removeAttr('sort');
		$('.dt-list').removeAttr('rel');
		
		app.cek.filter.rel = false;

		return true;
	}


	if( g > 0 ){
		
	
		if(g == 1)	$(fs.ly.head.title).text('Bekleyen Çekler');
		if(g == 2)	$(fs.ly.head.title).text('Bugün Vadesi Gelen Çekler');
		if(g == 3)	$(fs.ly.head.title).text('Vadesi Geçen Çekler');

		app.cek.filter.rel = g;
		
	}
	
}


// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

function _cek_ekle(j,olay){
	
	if( j == 'valid' ){
		
	
		let input = ['cari','vade','bank','sube','cek','birim','tutar'];
		let err   = false;

		$('#modal-cek-add .err').removeClass('err');

		$.each( input, function(key,v){

			let s = $('#f-ce-'+v);
			
			if( !$(s).val()) {

				err = true;
				$('#modal-cek-add .f-'+v).addClass('err');
			}
		})

		if(err){

			return false;
		}

		_modal_imza({
			txt : { para:$('#f-ce-tutar').val(),kur:$('#f-ce-birim').val()},
			sum : 'add'
		});

		return true;
	}

	if( j == 'send' ){

		if(fs.cek.post) return false; fs.cek.post = true;
		
		$('#fx-cek-ekle').submit();
	}

	if( j == 'post' ){

		if( !form.sent ){

			form.data.append('imza',signaturePad.toDataURL("image/jpeg"));

			return true;
		}

		if( form.sent ){

			if(!form.data.result) {
				
				_modal_of();
				
				window.setTimeout(function(){

					Swal.fire({text:form.feed.api,customClass:{popup:'sw-ios sw-note'}});

				},300)

				return false;
			}

			fs.cek.post = false;

			_modal_of();
			
			window.setTimeout(function(){
				
				let str;
				str = 'Çek kaydınız başarıyla tamamlandı';

				Swal.fire({ type:'success', text:str, customClass:{popup:'sw-ios sw-note sw-ok'}}).then((result)=>{
					if(result.value){
						
						$('.dtc-rel-reset').click();
						$('.find-reset').click();

						block_load('cek');

					}
				})
			},300);

		}
	}

}


// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

function _cek_tahsil(j,olay){


	if( j == 'bank' ){
		
		$.post('/cek/tahsil',{ send:'bordro' },function(data){
			
			$('#el-cekbank-6').text(data.bordro);
			$('#field-bordro').val(data.bordro);
		});
	}

	if( j == 'valid' ){


		if(!fs.modal.last.box){

			if(!fs.dt.checkeds.tot){

			 	let str = 'en az bir adet çek seçmelisiniz';
			 	str     = ( olay =='trns' ) ? 'Başkasına transfer için '+str : 'Tahsil için bankaya teslim edeceğiniz '+str;

				Swal.fire({title:"Çek Seçin", text:str, customClass:{popup:'sw-ios sw-note'}});
				return false;
			}
			


			if( fs.dt.checkeds.tot == 'all' )
			{

				fs.cek.count = app.data.entry.length ;
				fs.cek.id 	 = [];
				fs.cek.data  = 'all';
				let kur 	 = 1;

				$.each( app.data.entry, function( key, v ) {
					
					if(v){

						fs.cek.total = ( fs.cek.total + Number(v.tot));
						fs.cek.id.push(key);	


						if( kur == 1 ) kur = v.kur;
						if( kur != 2 ) kur = kur != v.kur ? 2 : kur; 
					}
				})

				fs.cek.kur = (kur!=1 && kur!=2) ? kur : false  ;
			}
			else
			{
				
				fs.cek.count = fs.dt.checkeds.tot;
				fs.cek.id 	 = fs.dt.checkeds.val;
				fs.cek.data  = {};
				let kur 	 = 1;
				$.each(fs.cek.id,function(key,v) {
					
					let d = app.data.entry[v];

					fs.cek.total   = ( fs.cek.total + Number(d.tot));
					fs.cek.data[v] = d;
					
					if( kur == 1 ) kur = d.kur;
					if( kur != 2 ) kur = kur != d.kur ? 2 : kur; 
				
				})

				fs.cek.kur = (kur!=1 && kur!=2) ? kur : false  ;
			}

			return true;
		}

		if(fs.modal.last.box == 'cek-banka'){

			//let input = { 1 : $('#field-bank').val() , 2 : $('#field-date').val(), 3 : $('#field-bordro').val() }
			let input = { 1 : $('#field-cb-bank').val() , 2 : $('#field-cb-date').val() }
		
			//if( input[1] && input[2] && input[3] ){
			if( input[1] && input[2] ){
				
				let id = $('#field-cb-bank').val();

				fs.cek.bank = {
					name 	: $(`#field-cb-bank option[value='${id}']`).text(),
					date 	: $('#field-cb-date').val(),
					id 		: id
				};
					
				return true;
			}
			else {

				let str = false;

				str = !str && !input[1] ? ' banka seçmelisiniz' : str;
				str = !str && !input[2] ? ' tarih girmelisiniz' : str;

				Swal.fire({text:'Onay vermeden önce'+str,customClass:{popup:'sw-ios sw-note'}});
				return false;
			}

		}

	}


	if( j == 'send' ){


		if(fs.cek.post) return false; fs.cek.post = true;
		
		$('#fx-tahsil').submit();

	}

	if( j == 'post' ){

		if( !form.sent ){
			
			form.data.append('dekont',$('#modal-dekont-input')[0].files[0]); 
			
			let cek =  fs.cek.count > 1 ? [] : app.data.entry[fs.cek.id].id;
			let tip =  fs.cek.count > 1 ? 'cok' : 'tek';

			if( fs.cek.count > 1 ){
				
				$.each(fs.cek.id,function(key,val){ cek.push(app.data.entry[val].id); });
				cek = JSON.stringify(cek);
			}

			form.data.append('cek',cek);
			form.data.append('tip',tip);
			form.data.append('data',JSON.stringify(fs.cek.data));
			
			return true;
		}

		if( form.sent ){

			if(!form.data.result) {
				
				_modal_of();
				
				window.setTimeout(function(){

					Swal.fire({text:form.feed.api,customClass:{popup:'sw-ios sw-note'}});

				},300)

				return false;
			}


			fs.cek.post = false;

			_modal_of();

			window.setTimeout(function(){
				
				let str;
				str = fs.cek.count > 1 ? 'Çekler' : 'Çek'; 
				str = str + ' tahsile verildi. Sonraki tahsil sürecini ofis takip edecektir, teşekkürler';

				Swal.fire({ type:'success', text:str, customClass:{popup:'sw-ios sw-note sw-ok'}}).then((result)=>{
					
					if(result.value){

						if( fs.cek.count > 1 ){

							$.each( fs.cek.id, function(key,v){ 
								
								$('#list-cek li#'+v).addClass('remove');
								delete app.data.entry[v];
							})
						}
						else{

							$('#list-cek li#'+fs.cek.id).addClass('remove');
							delete app.data.entry[fs.cek.id];
						}

						if( $('#list-cek > li:not(.remove)').length < 1 ){

							_onBodyHas(false);
							_onBodyLod(true);
							_onBodyLod(false);
						}

						if(fs.app.edit) _app_mod_edit();
						_m_cek_bank_of();
					}
				})
				
			},300);

		}
	}

}


// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

function _cek_teslim(j){


	
	if( j == 'send' ){
		
		if(fs.cek.post) return false; fs.cek.post = true;
		//$('#field-teslim-imza').val(signaturePad.toDataURL("image/jpeg"));
		
		$('#fx-teslim').submit();
	}

	if( j == 'post' ){

		
		if( !form.sent ){
			
			//form.data.append('dekont',$('#modal-dekont-input')[0].files[0]); 
			
			
			let cek =  fs.cek.count > 1 ? [] : app.data.entry[fs.cek.id].id;
			let tip =  fs.cek.count > 1 ? 'cok' : 'tek';

			if( fs.cek.count > 1 ){

				$.each(fs.cek.id,function(key,val){ cek.push(app.data.entry[val].id); });
				cek = JSON.stringify(cek);
			}
			
			form.data.append('imza',signaturePad.toDataURL("image/jpeg"));
			form.data.append('cek',cek);
			form.data.append('tip',tip);
			
			return true;
		}

		
		
		if( form.sent ){

			if(!form.data.result) {
				
				_modal_of();
				
				window.setTimeout(function(){
					Swal.fire({text:form.feed.api,customClass:{popup:'sw-ios sw-note'}});
				},300)

				return false;
			}

			fs.cek.post = false;

			_modal_of();
			
			window.setTimeout(function(){
				
				let str;
				str = fs.cek.count > 1 ? 'çekler' : 'çek'; 
				str = 'Tebrikler '+str+' başarıyla transfer edilmiştir.';

				Swal.fire({ type:'success', text:str, customClass:{popup:'sw-ios sw-note sw-ok'}}).then((result)=>{
					
					if(result.value){

						if( fs.cek.count > 1 ){

							$.each( fs.cek.id, function(key,v){ 
								
								$('#list-cek li#'+v).addClass('remove');
								delete app.data.entry[v];
							})
						}
						else{

							$('#list-cek li#'+fs.cek.id).addClass('remove');
							delete app.data.entry[fs.cek.id];
						}
						
						if( $('#list-cek > li:not(.remove)').length < 1 ){

							_onBodyHas(false);
							_onBodyLod(true);
							_onBodyLod(false);
						}


						if(fs.app.edit) _app_mod_edit();
						_stepReset();
						_m_cek_bank_of();
					}
				})
				
			},300);

		}

	}


	if( j && j.help == 'title' ){
		
		let str;

		str = (j.str!='z')    ? str : 'Saha Çalışanı';
		str = (j.str!='vf')   ? str : 'Saha Sorumlusu';
		str = (j.str!='ofis') ? str : 'Ofis Çalışanı';
		str = (j.str!='cari') ? str : 'Müşteri';

		return str;
	}

	if( j && j.step ){

		let sb = fs.stepBody;
		let v  = sb.parent;

	
		if( sb.step == 2 ){
		
			v1 = v[1];

			var get= v1.get;

			let strTit;
			let strUnt;

			strTit = fs.cek.count > 1 ? 'Çekleri' : 'Çeki';

			strTit = (get=='z')    ? strTit+' teslim edeceğiniz <span>plasiyer<sup>(z)</sup></span><br/>çalışınını seçiniz' : strTit;
			strTit = (get=='vf')   ? strTit+' teslim edeceğiniz <span>saha<sup>(vf)</sup></span><br/>sorumlusunu seçiniz'   : strTit;
			strTit = (get=='ofis') ? strTit+' teslim edeceğiniz <span>ofis</span><br/>sorumlusunu seçiniz' 					: strTit;

		
			strUnt = _cek_teslim({ help:'title', str:get });

			console.log('tt');

			$('.step.tre #field-cek').val(JSON.stringify(fs.cek.id));
			$('.step.tre #field-unit').val(v1.id);
			$('.step.tre h4').html(strUnt);

		}


		if( sb.step == 3 ){
			
			var v1 = v[1];
			var v2 = v[2] ? v[2] : false ;
		
			let strUnt;
			let strTit;

			
			// Birinci adımdan buraya atlanmis ve out da degilse kodu durdur

			if( v[1].next && !j.out) return false;

			// Birinci adımdan buraya atlanm ise 

			if( v[1].next ){

				v2 = {
				 
					name :fs.stepBody.data[0].name,
					code :fs.stepBody.data[0].code,
					kasa :fs.stepBody.data[0].kasa
				}

				$('.step.tre #field-unit').val(v1.id);
				
				strUnt = _cek_teslim({ help:'title', str: v1.get });
				strUnt = ( v1.get == 'ofis' ) ? 'Yetkili' : strUnt;

				$('.step.tre h4').html(strUnt);
			}
					
			strTit = ( v1.get == 'ofis' ) ? 'Ofis Çalışanı' : v2.name;
			$('.step.tre h3').text(strTit);
			
			$('.step.tre #field-sent').val(v2.code);
		
		
			_modal_imza({
				txt : { name:v2.name},
				sum : 'trs'
			});

			
		}

		return false;
	}

}


// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

function _find_cek(open){
};




function _page_dash(push){

	if( set.page.mod != 'dash' )  return false;
	if( app.mods.dash.on ) 	 	 return false;



	app.mods.dash.on = true;


	if( push ){
		
		__dash_on(push);

		return false;
	}

	__dash_on();

}



function __dash_on(push) {
	
	if( set.page.mod == 'dash' ){
		
		/*
		$.post('http://ciloglueu.com/siparis/exdata.php?code='+app.user.z.code,function(data){
			$('.ban .el-1').text(nFix(data.aylikciro));
			$('.ban .el-2').text(nFix(data.yilbazindaaylik));
			$('.ban .el-3-1').text(nFix(data.anliktoplam));
			$('.ban .el-4-1').text(nFix(data.gunhedef));
			$('.ban .el-5').text(data.kalangun);
		});
		*/

		if(push){
	
	    }

    }

  
}











function _page_hesap(j){


	if( set.page.cat != 'hesap' ) return false;
	if( app.mods.hesap.on ) 	  return false;

	app.mods.hesap.on = true;


	__hesap_set();

	

}

function __hesap_set(j){

	
	if( j == 'post'){

		if(form.sent){
			app.user.set = form.data.response;
		}

		return false;
	}


	$(document).on('change','#fx-set-user select',function(){
		$('#fx-set-user').submit();
	})

}	
fs.kasa = __kasa_set('create');


function _page_kasa(push){
	

	if( set.page.cat != 'kasa' )  return false;
	
	// if( app.mods.kasa.on ) 	 	  return false;
	// app.mods.kasa.on = true;


	if( push ){
	
		__kasa_on(push);

		return false;
	}

	__kasa_on();
 
}


function __kasa_on(push) {
	
	if( set.page.sub == 'tahsil' ) _k_tahsil();
	if( set.page.sub == 'teslim' ) _k_teslim();
	if( set.page.sub == 'banka' )  _k_banka();
}



/*   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
@ kasa > json set ayarlari  */

function __kasa_set(opt){

	let con = {

		bakiye 	: { val:0, int:0, out:0 },
		cari  	: { bky: false, kalan: false, arti:false, aft:false, ftr:{} },
		tahsil  : { close:'auto', aft:false, mono:{ fell:false, sonOdeme:0 } },
		para 	: { val:0, onda:0 },
		post    : false,
	}


	if ( opt == 'create' ) return con;
	 
	if ( opt == 'bakiye') fs.kasa.bakiye = con.bakiye;
	if ( opt == 'tahsil') fs.kasa.tahsil = con.tahsil;
	if ( opt == 'cari'  ) fs.kasa.cari   = con.cari;
	if ( opt == 'para'  ) fs.kasa.para   = con.para;

	return false;
}


/*   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
@ kasa > tahsilat  */

function _k_tahsil(opt){
	

	if( opt && opt.rst ){
		
		let con = { bky:false, kalan:false, close:'auto',fatura:{} }
		
		if ( opt.rst == 'create' ) return con;

		fs.navcnt = con;

		return false;
	}


	const appcari = app.cari.tum ? app.cari.tum : app.cari.tur;


	/*
	@ Onay 
	@ Onay butonu onay imza modalını açar bunu açmadan önce para alanının
	@ Validate burası sorar */

	if( opt == 'onay' ){

		
		let onode = $('#f-odeme-tur').val()== 'onode' ? true : false;
		

		if( !onode ){
			
			//let a = fs.kasa.cari.arti;
			let bky = fs.kasa.cari.bky;



			if( ( bky && $('#para').val() < 1 ) || ( !bky && !fs.kasa.cari.arti ) ) {

				Swal.fire({
					text 	: 'onay vermeden önce müşterinizden aldığınız ödemeyi girmelisiniz',
					title 	: 'Ödeme Girmediniz',
					customClass:{popup:'sw-ios sw-note'}
				});
				return false
			}
			
			let ftrErr = !$('#f-fatura').val() ? true : false;
			
			if( !ftrErr && fs.kasa.tahsil.close == 'mono' ){
				
				let ftrtot = 0;

				$.each(fs.kasa.cari.ftr, function(key,value){

		  			ftrtot = ftrtot + ( value===true ? $('#'+key).data('set').tutar : value );
				});

				
				ftrErr = fs.kasa.para.val > ftrtot ? (fs.kasa.para.val - ftrtot) : false; 
			}


			if( ftrErr ) { 

				let kur = app.cari.tum ? app.cari.tum.bakiye.kur : app.cari.tur.bakiye.kur;

				if(isNumeric(ftrErr)){

					Swal.fire({
							
							title 				: 'Onay Vermeden Önce',
							text 				: 'Arttırmış olduğunuz '+ftrErr+kur+' karşılığında kapanacak olan faturayı seçin',
							customClass 		: {
								popup 			: 'sw-ios sw-note',
							}
					});

					return false;
				}
		
				Swal.fire({
					title 				: 'Onay Vermeden Önce',
					text 				: 'ödeme karşılığında kapanacak olan faturaları elle seçmelisiniz',
					confirmButtonText 	: 'Otomatik Seç',
					cancelButtonText  	: 'Tamam',
					showCancelButton	: true,
					customClass 		: {
						cancelButton 	: 'blue',
						confirmButton 	: 'gray',
						popup 			: 'sw-ios sw-note sw-confirm',
					}
				}).then((result) => 	{
					
					if (result.value) 	{
						
						Swal.fire({
							
							title 				: 'Elle Kapatmadan Vazgeçip',
							text 				: 'Faturaları otomatik kapatarak tahsil etmek istediğinizden emin misiniz ?',
							confirmButtonText 	: 'Eminim',
							cancelButtonText  	: 'Vazgeç',
							showCancelButton	: true,
							reverseButtons 		: true,
							width 				: 335,
							customClass 		: {
								popup 			: 'sw-ios sw-note sw-confirm',
							}

						}).then((result) => 	{

							if (result.value) 	{

								$('.e-close .auto').click();
								$('.app-head .save-link').click();
							}
						});
					}

				});

				return false
			}
		}


		$('#modal-imza .mb-one .sum').removeClass('on');
		$('#modal-imza .t-para').text('');
		
		let sum = onode ? '.onode' : ( fs.kasa.cari.kalan > 0 ? '.ksm' : '.tum' );
		
		console.log(fs.kasa);
		

		$('#modal-imza '+sum+' .t-cari').text(appcari.name);
		$('#modal-imza '+sum+' .t-para').text(fs.kasa.para.val);
		$('#modal-imza '+sum).addClass('on');
		

		return true;
	}


	/*
	@ Tahsil Form Send
	@ Tum validate, imza alma sureci bitip onay tamamlandıginda bu adım
	@ calisir ve formu submit' tetikler */

	if( opt == 'send' ){

		if(fs.kasa.post) return false;

		fs.kasa.post=true;

		$('#f-imza').val(signaturePad.toDataURL("image/jpeg"));
		
		window.setTimeout(function(){
			
			$('#fx-main').submit();
			
		},150)

		return true;
	}

	/*
	@ Tahsil Form Submit  
	@ İmza onayı bitip submit tetiklendikten sonra form sistemi calisir submit oncesi ve sonrasında ki
	@ scriptler buradan kontrol edilir */

	if( opt == 'post' ){

		if(!form.sent){
			
			return true;	
		}

		if(form.sent){

			_modal_of();
			
		
			if(!form.data.result){
				
				/*
				window.setTimeout(function(){
					

					Swal.fire({
						customClass: {container:'sw-err'},
						text: 'Hata 7'
					});

				},300);
				*/

				//return false;

			}
			
			fs.kasa.post = false;
		
			_cari_ups(appcari.id,{

				scop:(app.cari.tum ? 'tum' : 'tur')
			});
			
			//let a = isNaN(form.data.para) ?  nPar(form.data.para) : form.data.para;
			//let b = isNaN(app.user.kasa)  ?  nPar(app.user.kasa)  : app.user.kasa ;

		
			let a = Number.isInteger(form.data.para) ? form.data.para : nPar(form.data.para);
			let b = Number.isInteger(app.user.kasa)  ? app.user.kasa  : nPart(app.user.kasa);
			
			console.log(a);
			console.log(b);
			console.log(a+b);
			_user_set('kasa',(a+b));

			
			fs.kasa.cari.bky = fs.kasa.cari.kalan;
			fs.kasa.cari.ftr = {}

			
			if( form.field.odemetur == 'ftr'){

				$('table tr.check').remove();
				$('table tr.fell .td-borc .v').addClass('on');
			
				if($('table tr.fell').length){

					let fell = $('table tr.fell').data('set');
				
					fell.tutar = fell.tutar - fs.kasa.cari.ftr[fell.id];
					
					$('#'+fell.id).attr('data-set',JSON.stringify(fell));
					$('#'+fell.id).removeClass('fell');	
				}
			
				let s = fs.kasa.cari.bky;
				
				$('#para').attr('max',nFor(s,2,'.',',',1));
				$('#para').val(0);

				$('#cari-odeme span').text('0');
				$('#cari-odeme sup').text('00');

				let o = s.toString().split('.');
			
				o = o[1] ? ( o[1].length == 1 ? o[1]+'0' : o[1] ) : '0';
				$('#onda').val(o);

			}

			$('#fx-main')[0].reset();
			$('#f-fatura').val('');


			var text = fs.kasa.cari.bky > 0 ? ' Müşterinizin toplam '+nFor(fs.kasa.cari.bky)+'€ borcu kalmıştır.' : ' Müşterinizin tüm borcu kapanmıştır teşekkür ederiz.';

			text = form.field.odemetur == 'onode' ? 'Müşterinizin ön odeme tahsilatı başarıyla alınmıştır teşekkür ederiz' : text 
			
			console.log(fs.kasa);

			window.setTimeout(function(){
				
				Swal.fire({

					type 		: 'success',
					title 		: 'Tahsilat Onaylandı',
					text 		: text,
					width 		: 350,
					imageHeight	: 40, 
    				imageWidth	: 40,
					customClass	: {
					 	popup 	: 'sw-ios sw-note sw-ok'
					}

				}).then((result)=>{
					
					if ( result.value ){
				  		
				  		if( form.field.odemetur == 'ftr' ){

				  			console.log('odeme-tur : ftr ');

					  		let ob,fa,fk;

					  		fk = fs.kasa;
					  		//fa = (fk.cari.aft - fk.para.val) > 0 ? false : true;

							ob = false;
							ob = fk.cari.bky > 0 ? false : true;

					  		// ob = !ob && ( fa && fk.cari.bky > 1 ) ? true : ob ;
					  		// ob = !ob && ( fk.tahsil.aft ) 		  ? true : ob ;
					  		
					  		
					  		if(ob){
					  			
								$('body').removeClass('on');

					  			__kasa_set('tahsil');
					  			__kasa_set('cari');

					  			_onBodyHas(false);
					  			_onBodyLod(true);
					  			_onBodyLod(false,2);	
					  		}
				  		}

				  		__kasa_set('para');
				  	}


				})

			},300);
			
			imzaClear();
		
			return false;
		}

		return true;
	}


	if(!app.cari.tum && app.cari.tur ) $('html').removeClass('no-cari-tum');

	fs.kasa.cari.bky = nFix(Number($('#para').attr('max')));
	fs.kasa.cari.aft = nFix(Number($('#para').attr('ftr')))

	

	_kt_ftr_mono();
	_kt_e_kapama();
	_kt_e_odeme();
	


	_modal_imza();
	
	
}

/*   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
@ e-kapama : fatura elle ve otomatik kapama modunu degisir */

function _kt_e_kapama(){
	
	$(document).on('click','.e-close button',function(){

		$('.e-close button').removeClass('on');
		$(this).addClass('on');

		fs.kasa.tahsil.close =  $(this).attr('rel');


		if(fs.kasa.tahsil.close == 'mono') _kt_ftr_reset();
		if(fs.kasa.tahsil.close == 'auto') _kt_ftr_auto();

		if(fs.kasa.tahsil.close == 'auto'){

			$('#para').attr('min',0);
		}

	})
}


/*   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
@  e-odeme : elle odeme acan swal dialog  */

function _kt_e_odeme(){
	
	//$(document).on('click','.e-odeme', async()=>{
	$(document).on('click','.e-odeme', function(){
	
		
		let onode = $(this).data('tur') == 'onodeme' ? true : false ;
		
		(async function getText () {
			

			const { value: val } =  await Swal.fire({

				title 				: onode ? 'Ödeme Al' : 'Ödeme Gir',
				text 				: onode ? 'faturasız ön ödeme alacağınız tutarı yazıp göndere basın' : 'almış olduğunuz ödeme tutarını yazmak için aşağıya tıklayın.  ',
				confirmButtonText   : onode ? 'Gönder' : 'Tamam',
				inputPlaceholder 	: '0.00,0',
				inputClass 			: 'mask-money',
				input 				: 'tel',
				
				inputAttributes 	: {
					maxlength 		: 9
				},
				customClass 		: {
					popup 			: 'sw-money'
				},
				onBeforeOpen: () => {

					$('input.mask-money').mask('00.000,00', {reverse: true});
				},
			})
						
			

			if (val){

				var odeme;
				
				odeme = nPar(val);

				if( !onode ){

					//console.log(odeme);
					//console.log(fs.kasa.cari.bky);
					
				
					if ( odeme > fs.kasa.cari.bky) {
						
					//	console.log(odeme)

						Swal.fire({
					  
							confirmButtonText 	: 'Eminim',
							cancelButtonText  	: 'Vazgeç',
							title				: 'Dikkat',
							text 				: 'Müşterinin bakiye borcundan fazlasını yatırmak istediğinizden emin misiniz ?',
							width 				: 360,
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
								
								//console.log(odeme);
								
								$('#f-artipara').val(odeme);
								$('#para').val(odeme);
							
								fs.kasa.para.val = odeme;

								fs.kasa.cari.arti = odeme - fs.kasa.cari.bky;

								_nc_range_onda($('#onda'),$('#para'));
								_kt_ex();
							}
							
						});
					}
					else {

						//console.log('y')
						 $('#para').val(odeme);
						 $('#f-artipara').val(0);
						 fs.kasa.para.val = odeme;
						
						 _nc_range_onda($('#onda'),$('#para'));
						_kt_ex();
					}


					// odeme = (odeme > fs.kasa.cari.bky) ? fs.kasa.cari.bky : odeme;
					// odeme = $('#f-fatura').val() && fs.kasa.tahsil.close == 'mono'  && ( odeme < fs.kasa.para.val ) ? fs.kasa.para.val : odeme ; 
					// $('#para').val(odeme);

				}	
				
				fs.kasa.para.val = odeme;

				console.log('heys');

				/*
				
				fs.kasa.para.val = odeme;
			
				if( !onode ){

					_nc_range_onda($('#onda'),$('#para'));
					_kt_ex();
				}

				*/


				if( onode ){

					$('#f-odeme-tur').val('onode');
					$('#f-odeme-val').val(odeme);

					$('.save-link').click();


				}
	
			}

		})();

	});



	$(document).on('focus','#para',function(){
		if(fs.kasa.cari.arti){

			/*
			Swal.fire({

				title 				: '',
				text 				: 'Ücret barı',
				confirmButtonText 	: 'Vazgeç',
				cancelButtonText  	: 'Sıfırla',
				showCancelButton	: true,
				customClass 		: {
					cancelButton 	: 'blue',
					confirmButton 	: 'gray',
					popup 			: 'sw-ios sw-note sw-confirm',
				}
			}).then((result) => 	{
				
				if (result.value) 	{
					
					
				}

			});
			*/
		}
	})


}


/*   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
@ kasa > tahsilat > cari degisme */

function _kt_cari(e){
	
	let cari = e.tum ? e.tum : e.tur;

	// set reset

	__kasa_set('tahsil');
	__kasa_set('cari');
	__kasa_set('para');

	
	// bakiye ve acik faturayi al

	fs.kasa.cari.aft = cari.bakiye.ftr.val > 0 ? nFix(cari.bakiye.ftr.val) : false ;
	fs.kasa.cari.bky = nFix(cari.bakiye.val);


	// kisayol

	let cb = _cari_borc(cari);   // cari borcu var
	let bk = cari.bakiye;       // cari bakiye keyleri
	
	
	
	// kisayol : of-body dom path
	
	let of  = {

		1  : '.of-body .text.t-1',
		2  : '.of-boby .text.t-2',
		t  : '.of-body .text',
		b  : '.of-body',
		f  : ' .frk',
		e  : ' .el'
	}

	// of-body'yi resetle ve cari duruma gore hazirla

	$(of.b+of.f).addClass('hidden')
	$(of.b+of.e).text('');
	
	$(of.t).removeClass('on');
	$(of[1]).addClass('on');


	if( cb && bk.ftr.frk > 0 ) { $(of.t+of.e).text(nFix(bk.ftr.frk)); $(of.t+of.f).removeClass('hidden'); }
	if( cb && bk.ftr.val < 1 ) { $(of[1]+of.e).text(nFix(bk.val));    $(of[1]+of.f).removeClass('hidden'); }

	
	// on-body -  cari duruma gore acik kapali modu bu ve onbody fonkisyona ver
	
	let onBody = false;
	
	onBody = cb ? true : onBody;
	onBody = !onBody && fs.kasa.cari.aft > 0 ? true  : onBody;
	onBody =  onBody && fs.kasa.cari.aft < 1 ? false : onBody;

	_onBodyHas(onBody);
	_onBodyLod(false);
}


/*   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
@ kasa > fatura islem sonrasi guncellenme  */

function _kt_ex(mono){
	
	let odm,bky,frk;

	odm = fs.kasa.para.val;
	frk = fs.kasa.cari.aft;
	bky = fs.kasa.cari.bky;

	/*
		if( frk && odm > frk ){
			
			fs.kasa.para.val = frk;
			$('#para').val(frk);
			
			odm = frk;

			if(fs.kasa.tahsil.aft) return false;
			
			fs.kasa.tahsil.aft = true;
		}
		else
		{
			
			fs.kasa.tahsil.aft = false;
		}
	*/

	
	//fs.kasa.cari.arti = fs.kasa.cari.arti ? fs.kasa.cari.arti : ( fs.kasa.para.val > fs.kasa.cari.bky ) ? Math.abs(fs.kasa.cari.bky - odm) : false ;
	
	fs.kasa.cari.arti = ( odm > bky) ? Math.abs(bky - odm) : false ;



	bky = fs.kasa.cari.arti ? 0 : bky - odm;

	if( odm > 0 ) $('.cari-bakiye label').text('Kalan');
	if( odm < 1 ) $('.cari-bakiye label').text('Bakiye');

	$('#cari-bakiye').html(nHtm(bky));
	$('#cari-odeme').html(nHtm(odm));
	
	fs.kasa.cari.kalan = bky;

	
	if(fs.kasa.cari.arti)
	{
		$('#f-artipara').val(odm);
		$('.ct-arti-val.f-1').text(`( +${nFor(fs.kasa.cari.arti)}€ )`);
		$('.ct-arti-val.f-2').text(nFor(fs.kasa.cari.arti)+'€');
		$('.ct-arti-elm').removeClass('hide');
	}
	else
	{
		$('.ct-arti-val.f-1').text('');
		$('.ct-arti-val.f-2').text('');
		$('.ct-arti-elm').addClass('hide');
		$('#f-artipara').val(0);
	}
	
	if(!mono) _kt_ftr_auto();
}


/*   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
@ kasa > tahsilat > count nav */	

function _kt_cn(n){

	fs.kasa.para.val = n.val;
	_kt_ex();
}


/*   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
@ kasa > tahsilat > count ran */

function _kt_cr(n){
	

	
	fs.kasa.para.val = n == 'onda' ? nPar($('#para').val()) :  fs.kasa.para.val;
	_kt_ex();
}


/*   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
@ kasa > tahsilat > fatura otomatik  kapama */

function _kt_ftr_auto(real){
	
	
	if( fs.kasa.tahsil.close == 'mono' ) return false;
	

	var odeme = fs.kasa.para.val;

	


	var end   = true;
	
	let data  = real ? false : true;
	
	if(data) fs.kasa.cari.ftr = {}


	$('.tb-kasa tbody tr.e').each(function(){

		let j = $(this).data('set');
		let kalan; 
		
		if ( odeme > j.tutar || odeme == j.tutar ){

			$(this).addClass('check').removeClass('fell');
			
			odeme = nFix(odeme - j.tutar);
			kalan = 0;

			if(data) fs.kasa.cari.ftr[j.id] = true;
		}
		else{
			
			kalan = j.tutar - odeme;

			$(this).removeClass('fell check');	
			
			if( odeme > 0 && kalan > 0 ) {

				$('#'+j.id+' .stat .dusen span').text(nFor(odeme));
				$(this).addClass('fell');

				console.log(odeme);
				if(data) fs.kasa.cari.ftr[j.id] = nFix(odeme);  
			}

			odeme = 0 ;

		}

		$('#'+j.id+' .td-borc .k span').text(nFor(kalan));
	
	})
	
	if(data){

		let ftr = Object.keys(fs.kasa.cari.ftr).length ? JSON.stringify(fs.kasa.cari.ftr) : '' ;
		
		$('#f-fatura').val(ftr);
	}
}


/*   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
@ kasa > tahsilat > fatura manual reset */


function _kt_ftr_mono(){
	
	var dus 	 = false;
	
	$(document).on('click','.tb-kasa tbody tr.e', function(){

		let mono   = fs.kasa.tahsil.mono;
		let ftr    = fs.kasa.cari.ftr;
		let opt    = fs.kasa;
	
		if( opt.tahsil.close  == 'auto') return false;

		var e = $(this);
		var j = $(e).data('set');
		var s = '#'+j.id+' .td-borc .k span';
		var d = '#'+j.id+' .dusen span';

		var varOdeme = opt.para.val;
		
		if( mono.fell && !$(e).hasClass('fell') ) {
			
			let txt,tit;
			
			txt = 'fatura kapamaya devam etmek için önce yarım kalan son faturayı seçiniz';
			tit = varOdeme !=  mono.sonOdeme ? 'Artan Ödeme Limitiyle' : 'Ödeme Limitini Kaldırıp';

			Swal.fire({
				customClass : { popup : 'sw-ios sw-note' },
				title 		: tit,
				text 		: txt
			});

			return false ;
		}

		if(mono.fell) mono.fell = false;

		if( !$(e).hasClass('check') ) { 

			$(e).addClass('check').removeClass('fell'); 
			$(s).text(0); 

			ftr[j.id] = true;
		}
		else{
			
			delete ftr[j.id];

			$(e).removeClass('check feel');
			$(s).text(j.tutar);
		}
		
	
		// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

		var totOdeme = 0 ;
		
		$('.tb-kasa tbody tr.check').each(function(){ var j = $(this).data('set');
			
			totOdeme = nFix( totOdeme + j.tutar);
		})
		
		// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

		var die = (varOdeme > totOdeme) && ( mono.sonOdeme != varOdeme ) ? true : false ;
		var dus = (totOdeme > varOdeme) && ( mono.sonOdeme != varOdeme ) ? true : false ;
		
		// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

		if(dus) {
			
			let n;

			n = varOdeme - (totOdeme - j.tutar);
			
			ftr[j.id] = n;

			$(e).removeClass('check').addClass('fell');
			$(s).text(nFix(j.tutar - n));
			$(d).text(nFix(n));

			totOdeme = varOdeme;

			mono.fell = true;
		}
		
		$('#f-fatura').val(Object.keys(ftr).length ? JSON.stringify(ftr) : '');

		// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -		

		$('#para').attr('min',totOdeme);

		mono.sonOdeme = totOdeme;

		// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

		if(die) { return false }
		
		// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

		var val = totOdeme;
		$('#para').val(val);

		// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -		
		
		fs.kasa.tahsil.mono = mono
		fs.kasa.para.val 	= val;
		fs.kasa.cari.ftr 	= ftr;
		
		// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
		
		_nc_range_onda('#onda','#para');
		_kt_ex(true);

	})
}


/*   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
@ kasa > tahsilat > fatura reset */


function _kt_ftr_reset(){
	
	$('.tb-kasa tbody tr.e').removeClass('check fell');
	$('.tb-kasa tbody tr.e').each(function(){
		
		var j = $(this).data('set');
		
		$('#'+j.id+' .td-borc .k span').text(nFor(j.tutar));
		$('#'+j.id+' .stat .dusen span').text('');
	})

	fs.kasa.tahsil.mono = { fell:false,sonOdeme:0 }
	fs.kasa.cari.ftr    = {};
	
	$('#f-fatura').val('');

	if(fs.kasa.tahsil.close=='mono'){
		

		fs.kasa.cari.kalan  = false;
		fs.kasa.para.onda  	= 0;
		fs.kasa.para.val  	= 0;
		
		$('#ext-para').val(0);
		$('#para').val(0);
		$('#onda').val(0);
		

		_kt_ex();
		
	}

}

/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
@ kasa > teslimat */

function _k_teslim(j){

	
	/*
	@ Onay 
	@ Onay butonu onay imza modalını açar bunu açmadan önce para alanının
	@ Validate burası sorar */

	if( j == 'onay' ){

		if( $('#field-para').val() ){
			return true;
		}
		else {

			Swal.fire({text:'Onay vermeden önce ödeme girmelisiniz',customClass:{popup:'sw-ios sw-note'}});
			return false;
		}
	}


	/*
	@ Send 
	@ İmza modalında yer alan onayla ve tamam butonuna bastığımızda burası çalışır
	@ İlişkili formunun submit'ini tetikler */

	if( j == 'send'){

		if(fs.kasa.post) return false;
		fs.kasa.post=true;

		$('#field-imza').val(signaturePad.toDataURL("image/jpeg"));
		
		window.setTimeout(function(){
			
			$('#fx-main').submit();
			
		},150)

		return false;
	}


	/*
	@ StepBody 
	@ tıklanıp sonraki listenin yüklenmis oldugu adimları yoneten StepBody fonksiyon hareket önce ve sonrasında buraya doner
	@ hangi adımda ne olmasını istiyorsak buradan duzenliyoruz 
	@ fs.stepBody parametlerini üzerinden erişiyoruz */

	if( j == 'post' ){

		if(!form.sent){
			
			if(fs.kasa.bakiye.out < 1 )   { _k_teslim('onay'); return false;  }
			if(fs.modal.last.box!='imza') { $('#fx-main input.modal-open').click(); return false;  }
			

			return true;	
		}

		if(form.sent){

			if(!form.data.result) {
				
				_modal_of();
				
				window.setTimeout(function(){
					Swal.fire({text:form.feed.api, width:400,customClass:{ container:'sw-err'}});
				},300)

				return false;
			}
			
			fs.kasa.post=false;
		
			fs.kasa.bakiye.val = nFix(fs.kasa.bakiye.val - fs.kasa.bakiye.out);
			fs.kasa.bakiye.out = 0;

			var text = 'Nakit para teslimat işlemeniz onaylandı.';
			text = fs.kasa.bakiye.val > 0 ? text+' Kasanızda toplam € '+nFor(fs.kasa.bakiye.val)+' paranız kaldı' : text+' Kasa bakiyeniz sıfırlandı.';

			
			if(fs.kasa.bakiye.val < 1) {
				
				$('body.teslim .of-body p').html('Eğer paranızın tümünü teslim etmeyip bir hata olduğunu düşünüyorsanız <br>lütfen bu durumu sorumlunuza bildiriniz');
				$('body.teslim .of-body h3').html('Kasa Sıfırlandı');
				$('body.teslim .of-body .alert').addClass('hidden');

				_stepReset();
			}
			
			_modal_of();
			
			window.setTimeout(function(){

				Swal.fire({type:'success',text:text,customClass:{popup:'sw-ios sw-note'}}).then((result)=>{
					if (result.value) {
				  		if(fs.kasa.bakiye.val < 1 ){
				  			
				  			_onBodyHas(false);
							_onBodyLod(true);	
							_onBodyLod(false);	
				  		}
				 	}
				})
			},600);

			$('#field-para').attr('max',fs.kasa.bakiye.val);
			$('#field-para').val('');

			imzaClear();

			_user_set('kasa',fs.kasa.bakiye.val);
		
			return false;

		}
	}
	
	
	/*
	@ StepBody 
	@ tıklanıp sonraki listenin yüklenmis oldugu adimları yoneten StepBody fonksiyon hareket önce ve sonrasında buraya doner
	@ hangi adımda ne olmasını istiyorsak buradan duzenliyoruz 
	@ fs.stepBody parametlerini üzerinden erişiyoruz */

	if( j && j.step ){

		var sb = fs.stepBody;
		var v =  sb.parent;

		/*
		@ Step İkinci Adım
		@ İkinci adıma geciste gerkenlesen duzenlemeler */

		if( sb.step == 2 ){
			
			v1 = v[1];

			var get= v1.get;
		
			var strTit
			var strUnt

			strTit = (get!='z')    ? strTit : 'Parayı teslim edeceğiniz <span>plasiyer<sup>(z)</sup></span><br/>çalışınını seçiniz';
			strTit = (get!='vf')   ? strTit : 'Parayı teslim edeceğiniz <span>saha<sup>(vf)</sup></span><br/>sorumlusunu seçiniz';
			strTit = (get!='ofis') ? strTit : 'Parayı teslim edeceğiniz <span>ofis</span><br/>sorumlusunu seçiniz';
			strTit = (get!='cari') ? strTit : 'Parayı geri ödeme yapacağınız <br/>müşterinizi seçiniz';
			
			strUnt = (get!='z')    ? strUnt : 'Plasiyer';
			strUnt = (get!='vf')   ? strUnt : 'Saha Sorumlusu';
			strUnt = (get!='ofis') ? strUnt : 'Ofis Çalışanı';
			strUnt = (get!='cari') ? strUnt : 'Müşteri';
			
			fs.stepBody.parent[1].strUnt = strUnt; 
			
		
			// 2

			$('#field-unit').val(v1.id);
			$('.step.two .us h3').html(strTit);
			
			// 3

			$('.step.tre .us h3 span').html( get!='cari' ? 'Teslim edeceğiniz' : 'Ödeme yapacağınız');
			$('.step.tre .eylem').html( get!='cari' ? 'para teslimatı' : 'geri ödeme');
			$('.step.tre .unit').html(strUnt);
			
		}
		
		/*
		@ Step Ucuncu Adım
		@ Ucuncu adıma geciste gerkenlesen duzenlemeler */

		if( sb.step == 3 ){
			
			

			var v1 = v[1];
			var v2 = v[2] ? v[2] : false ;
					
			// Birinci adımdan buraya atlanmis ve out da degilse kodu durdur

			if( v[1].next && !j.out) return false;

			// Birinci adımdan buraya atlanm ise 
			if( v[1].next ){

				v2 = {
				 
					name :fs.stepBody.data[0].name,
					code :fs.stepBody.data[0].code,
					kasa :fs.stepBody.data[0].kasa
				}

				
				$('#field-unit').val(v1.id);
			}

			$('.step.tre .name').text(v2.name);
			$('.step.tre .code').removeClass('hidden');

			if(v2.code)   $('.step.tre .code').text(v2.code);
			if(!v2.code)  $('.step.tre .code').addClass('hidden');

			
			$('#field-user').val(v2.code);
			$('#field-kasa').val(v2.kasa);

			$('#modal-imza .mb-one .sum').removeClass('on');
			$('#modal-imza .mb-one .sum.teslim').addClass('on');

			$('#modal-imza .t-unit').text(v1.strUnt);
			$('#modal-imza .t-name').text(v2.name);
		}

		return false;
	}

	
	_stepBody({

		callback: ['_k_teslim',{step:true}]
	});


	_k_input_para();

	//console.log('x');
	_modal_imza();
	
}


/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
@ kasa > banka  */


function _k_banka(j) {
	
	
	if( j == 'onay' ){

		if( $('#field-para').val() ){
			
			return true;
		}
		else {

			Swal.fire({text:'Onay vermeden önce ödeme girmelisiniz',customClass:{popup:'sw-ios sw-note'}});
			return false;
		}
	}


	if( j == 'send'){
		
		if(fs.kasa.post) return false;
		fs.kasa.post=true;

		$('#fx-main').submit();
	}

	if( j == 'post' ){

		
		if(!form.sent){
			
			if(fs.kasa.bakiye.out < 1)   	{ _k_banka('onay'); return false;  }
			if(fs.modal.last.box!='dekont') {  $('#fx-main input.modal-show').click(); return false }
			
			form.data.append('dekont',$('#modal-dekont-input')[0].files[0]); 
			
			return true;
		}
		
		if(form.sent){
			
			if(!form.data.result) {
				
				_modal_of();
				
				window.setTimeout(function(){
					Swal.fire({text:form.feed.api, width:400,customClass:{ container:'sw-err'}});
				},300)

				return false;
			}
			
			fs.kasa.post = false;

			fs.kasa.bakiye.val = nFix(fs.kasa.bakiye.val - fs.kasa.bakiye.out);
			fs.kasa.bakiye.out = 0;

			var text = 'Bankaya para yatırma işlemeniz onaylandı.';
			text = fs.kasa.bakiye.val > 0 ? text+' Kasanızda toplam € '+nFor(fs.kasa.bakiye.val)+' paranız kaldı' : text+' Kasa bakiyeniz sıfırlandı.';

			
			if(fs.kasa.bakiye.val < 1) {
				
				$('body.banka .of-body p').html('Eğer paranızın tümünü yatırmayıp bir hata olduğunu düşünüyorsanız <br>lütfen bu durumu sorumlunuza bildiriniz');
				$('body.banka .of-body .alert').addClass('hidden');
				$('body.banka .of-body h3').html('Kasa Sıfırlandı');

				_stepReset();
			}
			
			_user_set('kasa',fs.kasa.bakiye.val);

			_modal_of();
			
			window.setTimeout(function(){

				Swal.fire({

					type 		: 'success',
					text 		: text,
					width 		: 350,
					imageHeight	: 40, 
    				imageWidth	: 40,
					customClass	: {
					 	popup 	: 'sw-ios sw-note sw-ok'
					}

				}).then((result)=>{


					if (result.value) {

				  		if(fs.kasa.bakiye.val < 1 ){

				  			_onBodyHas(false);
							_onBodyLod(true);	
							_onBodyLod(false);	
				  		}
				 	}

				})

			},600);

			$('#field-para').attr('max',fs.kasa.bakiye.val);
			$('#field-para').val('');

			_modal_dekont('reset');

			return false;
		}

		
	}

	if( j && j.step){

		var sb = fs.stepBody;
		var v =  sb.parent;
		
		if( sb.step == 2 ){
			
			var v1 = v[1];
			
			$('.step.two .us h4,.step.two .name').html(v1.name);
			$('#modal-dekont .t-bank').text(v1.name);
			$('#modal-dekont .t-para').text(fs.kasa.bakiye.out);
			$('#field-banka').val(v1.id)
		}

		return false;
	}

	_stepBody({

		callback: ['_k_banka',{ step:true }]
	});

	_k_input_para();

	_modal_dekont();
}



/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
@ kasa > banka & teslimat para keyup blur  */

function _k_input_para(){
	
	fs.kasa.bakiye.val = app.user.kasa;

	console.log('ss:'+fs.kasa.bakiye.val);

	//$('#field-para').attr('max');

	$(document).on('click','.e-add-money',function(){
		
		$('#field-para').val(fs.kasa.bakiye.val).keyup();
	});


	let lentot,tot;
	
	tot 	= fs.kasa.bakiye.val;
	lentot 	= tot.toString().length;
	lentot 	= ( parseInt(tot)==tot ) ? (lentot+3) : lentot;

	$(document).on('keyup','#field-para',function(){
	
		var out,val,rem,put ;
		
		put  =$(this);
		val  = $(this).val() ? nPar($(this).val()) : 0;
		out  = ( val > tot ) ? tot : val;
		
		rem  = nFix(tot - out); 

		fs.kasa.bakiye.out = out;
		
		$('#modal-dekont .t-para, #modal-imza .t-para').text(fs.kasa.bakiye.out);	
		
		if( out > 0 ) $('.kasa-bakiye .a').removeClass('hidden');
		if( out < 1 ) $('.kasa-bakiye .a').addClass('hidden');
		
		$('.kasa-bakiye .c').html(nFor(rem));

		let lenval;
		
		lenval = val.toString().length;
	
		if( ( lenval == lentot || lenval > lentot ) && val > out ){
			
			$(this).val(out);
		}

	})

	$(document).on('blur','#field-para',function(){
		
		let a,b;

		a = fs.kasa.bakiye.val;
		b = $(this).val() ? nPar($(this).val()) : 0;

		$(this).val(( b > a ? a : b));
	})
}

function _page_market(push){

	if( set.page.cat != 'market' )  { 
		
		__market_of(); return false;
	}
	

	if( push ){
		
		__market_on(push);
		return false;
	}

	__market_on();
} 


function __market_on(push) {

	if(push){
		
		app.cari.sepet = push.sepet ? push.sepet : false; 
		
		if(push.market){
			
			/*
			app.market.iade =  push.market.iade;
			app.market.mod  =  push.market.mod ;
			app.market.view =  push.market.view;	
			app.market.read =  push.market.read; 	
			*/
		}
		
		if(!push.block) _sepet_load();

		if( Object.keys(app.data.entry).length  > 0 ) $('body').addClass('on'); else $('body').removeClass('on');;
	}
	
	if(!push){

		if(app.market.view) $('#'+app.market.view+' a').click();
	}


	//_sepet_ctrl(false,'on');

	
	app.market.filter = { 
		cat 	: false,
		rel 	: false,
		key 	: false,
		rst 	: 0,
		nav 	: {
			urn  : '#tab-1 .item-urn',
			ryn  : '#tab-1 .item-ryn',
			flt  : '#tab-1 .item-flt',
			all  : '#tab-1 ol > li'
		},
		dom  	 : {
			rel  : '.dtc-rel a:not(.static)',
		} 
	}

	_sepet_uptodate();
	//_sepet_mod();

	_urun_filter(push);
	
	if(fs.lazyLoad) fs.lazyLoad.update();
	

	if(app.mods.market.on ) return false;
	
	app.mods.market.on = true;

	
	_urun_scroll();

	kit_lazy();
	
	_sepet_add_market();


	$(document).on('click','.con-grup .list-cover a',function(e){
		
		let f = app.market.filter;

		$('#cxt-uf-2 a[rel='+$(this).attr('rel')+']').click();
		
		$(f.nav.urn).removeClass('on');
		$(f.nav.urn).removeClass('op');
		$(f.nav.ryn).addClass('op');

		$('#tab-1-con .con-grup').removeClass('on');
		$('#tab-1-con .con-urun').addClass('on');
		$('.app-head h1').text($(this).find('h4').text());


		capa({top:1})

	})

}

function __market_of(){

}

function _urun_scroll(){

	//console.log('_urun_scroll');

	let g = false;

	$(window).scroll(function(event){
	
		if(set.page.cat != 'market' ) { 
			
			g = false;

			return false;
		}


		let t = $(window).scrollTop();
		let w = set.doc.y -set.win.y;
		
		//console.log('hey');
		if( t > (w-40) ) {
			
			if(!g){
				
				$('#list-urun li.s').each(function(i){
					$(this).removeClass('s');
					if(i > 30) {
						
						doc_update();
						return false;
					}
				});
			 	
				g = true;	
			}
		}
		else{
			 g= false;
		}

	})
}



function _urun_filter(push){

	let single = app.mods.market.on;

	
	if(push){
		
		_uf_cat('reset');
		_uf_rel('reset');
	}


	if( set.page.mod == 'all-list'){
		
		_uf_rel('load');	
	}


	if(!single){
		
		$(document).on('click','.urun .filter-reset',function(){
			
			let f = app.market.filter;

			_uf_cat('reset');
			_uf_rel('reset');

			if( $(this).attr('tab')=='2' ) $(fs.ly.head.title).text('GRUPLAR');
		})

		_uf_cat();

		return true;
	}
	
}

/*
@ dtc-rel : market urun liste hizli filtresi */

function _uf_rel(g,e){
	
	
	let f = app.market.filter;


	if( g == 'load' ){

		//console.log('uf_rel(load)');
		
		$(f.dom.rel).removeClass('of-point');

		let rel  = [1,4,5,63];
		let sort = [6];

		$.each( rel, function( key,i ){

			let n = $('#list-urun li[rel='+i+']').length;
			
			if(!n) $('#tab-1 .dtc-rel a[rel='+i+']').addClass('of-point'); 
		});
		
		/*
			// @ artik php den geliyor of point twig de yazıyor 

			$.each( sort, function( key,i ){

				let n = $('#list-urun li[sort='+i+']').length;
				
				if(!n) $('#tab-1 .dtc-rel a:not(.load)[sort='+i+']').addClass('of-point');
			});
		*/

		fs.dt.action.rel.js = '_uf_rel';

		return true;
	}


	if( g == 'reset' ){

		//console.log('uf_rel(reset)');

		$(fs.ly.head.title).text($(fs.ly.head.title).data('title'));
		
		$(f.nav.urn).removeClass('op'); 
		$(f.dom.rel).removeClass('on');

		$('.dt-list').removeAttr('sort');
		$('.dt-list').removeAttr('rel');
		
		app.market.filter.rel = false;

		return true;
	}


	if( g > 0 ){
		
		_uf_cat('reset');

		

		if(g == 1)	$(fs.ly.head.title).text('İndirimler');
		if(g == 2)	$(fs.ly.head.title).text('Şuan Önerilen Ürünler');
		if(g == 4)	$(fs.ly.head.title).text('Aksiyon İndirimleri');
		if(g == 5) 	$(fs.ly.head.title).text('Yıldız İndirimleri');

		if(g == 7) 	$(fs.ly.head.title).text('Mus. Çok Sattıklarımız');
		if(g == 63) $(fs.ly.head.title).text('Mus. Özel Fiyatlı Urunler');
		if(g == 6) 	$(fs.ly.head.title).text('Mus. Son Satılanlar');
		
		if(g == 8) 	$(fs.ly.head.title).text('Alls');


		if(g == 10)	$(fs.ly.head.title).text('Satış Yaptığım Ürünler');
		if(g == 11)	$(fs.ly.head.title).text('Tanımlı Ürünler');
		if(g == 12) $(fs.ly.head.title).text('Diğer Ürünler');

		
		/*

		if(g == 6 && $(e).hasClass('load'))
		{
			$('html').addClass('load-url out');
			
			$(e).removeClass('load');

			
			if(!app.cari.urun.last){
				
				console.log('hey');
				
				$.post('/market?o=6',{filter:true},function(response){
					
					if(response){
						
						let u = [];
						
						$.each( response, function( key,val ){
							
							u.push(key);
							$('#'+key).attr('sort',6);
						});

						app.cari.urun.last = u;
						_uf_rel('load');
						$('html').removeClass('load-url out');
					}
				})
				
			}

			if( app.cari.urun.last ){
					
				$.each( app.cari.urun.last, function( key,val ){
					$('#'+val).attr('sort',6);
				});
				
				if( set.page.mod =='all-list'){
					_uf_rel('load');
					$('html').removeClass('load-url out');
				}
			}

		}
		*/

		app.market.filter.rel = g;
		
	}
	
}

/*
@ cxt uf : context menu urun filter */

function _uf_cat(j,g){

	let f = app.market.filter;

	const el4  = '.find-urun input';
	const el2  = '#cxt-uf-2 li';
	const el6  = '#cxt-uf-2 a';
	const el3  = '.find-urun';
	const el5  = '#cxt-uf-3';

	const nv   = '.cxt-urun-filter';
	const ul   = '#list-urun';
	const li   = ul+' li';
	

	// filter reset

	if( j == 'reset'){

		//console.log('_uf_cat(reset,g)');
		//if( g.push)

		$(ul).removeClass('iscat');
		$(li).removeClass('oncat');
		$(nv).removeClass('on-filter');
		
		
		if( !$(f.nav.flt).hasClass('op') )  $(f.nav.all).removeClass('op');
		

		$(el2).removeClass('on');
		$(el3).removeClass('on');
	
		f.cat = false;
		f.key = false;

		app.market.filter = f;

		if(!$(f.nav.flt).hasClass('op')) _find_reset({rel:'urun'});

		return false;
	}

	
	// filter key 

	if( j && j.get == 'key' ) {
		
		if(j.key) {
			
			if(!f.cat) $(nv).addClass('on-filter');

			if( !$(f.nav.all).hasClass('op') ) $(f.nav.urn).addClass('op');

			app.market.filter.key = true;

		}
		else {
			
			if(f.cat){
				
				$(ul).removeClass('iskey');
				$(li).removeClass('onkey');

				app.market.filter.key = false;	
				
			}
			else{
				
				if( !$(f.nav.flt).hasClass('op') ) $(f.nav.urn).removeClass('op');
			
				_uf_cat('reset');
			}
		}
		
		return false;
	}


	// filter reset click 

	$(document).on('click',el5,function(){
		
		_uf_cat('reset');
		_context_of();

	})
	
	
	// filter grup click 

	$(document).on('click',el6,function(){
		
		let p  = $(this).parent();
		let r  = li+'[cat*="'+$(this).attr('rel')+'"]';

		if( !$(p).hasClass('on') ) {
			
			
			$(p).find('li').removeClass('on')
			$(r).addClass('oncat');
			$(p).addClass('on');
			
			if( !$(ul).hasClass('iscat') ){

				$(nv).addClass('on-filter');
				$(ul).addClass('iscat');

				//if( !$(f.nav.all).hasClass('op') ) $(f.nav.urn).addClass('op');
				console.log('on 2');
			} 


			if( $(f.nav.ryn).hasClass('on') || $(f.nav.ryn).hasClass('op') ){
				$(fs.ly.head.title).text($(fs.ly.head.title).data('title'));
				if($(f.nav.ryn).hasClass('on')){ _tab_con(1,1) }
				$(f.nav.ryn).removeClass('op on');
			}
		
			if( !$(f.nav.all).hasClass('op') ) $(f.nav.urn).addClass('op');
			
			f.cat = true;

			//f.cat = f.cat ? f.cat : [];
			//f.cat.push($(this).attr('rel'));
		}
		else
		{
		
			// unArry(app.mods.market.filter.cat,$(this).attr('rel'));

			$(r).removeClass('oncat');
			$(p).removeClass('on');
			
			//console.log('c 1');
			if( !$(li).hasClass('oncat') ) {
				//console.log('c 2');
				f.cat = false;

				$(nv).removeClass('on-filter');
				$(ul).removeClass('iscat');
				
				if( !$(f.nav.flt).hasClass('op') ) $(f.nav.urn).removeClass('op').addClass('on');
			}

			
			if(  $(f.nav.ryn).hasClass('on') || $(f.nav.ryn).hasClass('op') ){
				
				if($(f.nav.ryn).hasClass('on')){ _tab_con(1,1) }
				$(fs.ly.head.title).text($(fs.ly.head.title).data('title'));
				$(f.nav.ryn).removeClass('op on');
			}

		}

		app.market.filter = f;

	});
}


function _find_urun(open){
	
	_uf_cat({'get':'key','key':open})
};








function _page_more(push){
	
	if( set.page.cat != 'more' )  return false;
	
	if( push ){
		
		__more_on(push);

		return false;
	}

	__more_on();

}

function __more_on(push){
	
	if( app.mods.more.on ) return false;
	app.mods.more.on = true;
	
}
function _page_sepet(push){
	
	if( set.page.mod != 'sepet' ) return false;

	if(push){
		
		__sepet_on(push);
		return false;
	}

	__sepet_on();
}

// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
// test
function __sepet_on(push) {
	


	if(push){

		app.cari.sepet = push.sepet ? push.sepet : false; 
		
		if(push.market){
			
			/*
				app.market.iade =  push.market.iade;
				app.market.view =  push.market.view;	
			*/
		}

	    _dt_swipe_remove();
    	
    	console.log('girdi');
    	_sepet_load();
    }

	//_sepet_ctrl(false,'on');


	if( app.mods.sepet.on )  return false;
	
	app.mods.sepet.on = true;

	
	_sepet_mod();
	
	stick(23);
	stick(240,'#dt-thead',400);

	table();

	let strmod = app.market.mod == 'iade' ? 'iade' : ''

	fs.dt.action.unSelect = { 
		text 				: "Seçtiğiniz ürünleri  sepetten çıkarmak istediğinizden emin misiniz ?",
		buttons 			: ["Vazgeç", "Çıkar"],
		callback 			: '_sepet_del_select'
	}

	fs.dt.action.trash = 	{ 
		text 				: 'Bu müşterinizin tüm '+strmod+' sepetini boşaltmak istediğinizden emin misiniz ?',
		width 				: app.market.mod == 'iade' ? 340 : false, 
		buttons 			: ["Vazgeç", "Sepeti Sil"],
		callback 			: '_sepet_trash'
	}

	fs.dt.action.unSwipeRecord = { 
		
	    callback   			 : '_sepet_del_record'
	}
	
	fs.dt.td.name = 'sepet';

	


	$(document).on('click','.sepet .e-detay',function(e){
		
		if( !$('.dt-sepet').hasClass('of-detay') ) {
			
			$('.sepet .e-detay').text('Birim Detayı Göster');
			$('.dt-sepet').addClass('of-detay');
			
			setCookie('sepetbirim','of');
			
		}
		else{
			
			$('.sepet .e-detay').text('Birim Detayı Gizle');
			$('.dt-sepet').removeClass('of-detay');

			setCookie('sepetbirim','on');
		}

		e.preventDefault();
		return false;
	})


	$(document).on('click','.btn-mod li a',function(){
		
		const e = $(this);

		let rel = $(e).attr('rel');
		let val = $(e).attr('val');
		let tag = 'BM'+rel;
		let div = '#'+tag;
		let cof = $(div).data('set') ? $(div).data('set') : { body:true } ;
		

		if( cof.body ){

			for ( var i=1; i <= 7; i++){

				$('body').removeClass(tag+'-'+i);
			}

			$('body').addClass(tag+'-'+val);
		}

		
		$('#BMF'+rel).val(val);
		$(div+' .cxt-r b').text($(e).text());
		
	
		$(div+' .cxt-r > i').removeClass().addClass($(e).attr('ico'));
		$(div+' .bm-send .btn').text($(e).attr('lab'));
		

		$(div).attr('mod',val);
	
		return false;
	})

}

















function display(resize,newDocSize)
{
	if(newDocSize) doc_update();
	
	if(resize)
	{
	   
	    waitForFinalEvent(function(){
	   		tema(true);
	   	},800, "some unique string");
	}
}


/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
@ Resize Update   */

function doc_update() {
	
	set.doc.y	= Math.round($(document).height());
	set.doc.x	= Math.round($(document).width());	
}
/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
@ Tema Update   */

function mediasizemod(resize){
	
		
	var j = 'ms' ; 									// 0376
	
	j = set.win.x > set.media.ms ?  'xs' : j ;  	// 0568
	j = set.win.x > set.media.xs ?  'sm' : j ;		// 0768
	j = set.win.x > set.media.sm ?  'md' : j ;		// 1024
	j = set.win.x > set.media.md ?  'lg' : j ;		// 1280
	
	set.user.media = j ;
	//console.log(set.user.media);
}
/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
@ Tema Update   */

function tema(time){

	if(time)
	{
			
		mediasizemod();
		kit('RootStyle');
		
		return false
	}
	
	kit('RootStyle');
	mediasizemod();

	$('#code-builds').removeClass('hidden');

}

function trig(){
	
	if( app.mods[app.mod].on ) return false;

	console.log('trig');
	
	__ft_input_load();

}
class Context {
	
	constructor(){
		
		let _this = this;

		this.sets();

		$(document).on('click','.context .cxt-u li a',(e)=> {

			//_('.context .cxt-u li a').on('click',(e)=> {
			
			this.of();
		});

		$(document).on('click','.context .cxt-r',(e)=> {
		
			// _('.context .cxt-r').on('click',(e)=> {
			// e = e.target;

			e = e.currentTarget;
			
			let el = e.parentNode;
			
			
			this.set 	= el.data('cxt') ?  el.data('cxt') :  { id: el.attr('rel') ? el.attr('rel') : 1 } ;
			this.btn 	= e;
			this.el 	= el;

			if( !this.el.isClass('cxt-on') ){
				
				this.on();
			}
			
		});
		
		$(document).on('click','.cxt-o',(e)=> {
			
			//_('.cxt-o').on('click',(e) => {
			
			e.stopPropagation();
			_this.of(true);
		});


		document.addEventListener('keydown', function(e) {
			
			if( _this.open && e.keyCode==27 ){ 
				
				_this.of(true);
			}
		});

    }
	
	
    on(){
		
		this.el.onClass('cxt-on');

		if(this.set.id)  _('html').attr('cxt',this.set.id);
        
        _('html').onClass('cxt');
		
		let unscr = this.set.unscr ? false : true;
		
		if(unscr) _('html').onClass('un-scr');
		
		this.open =true;
    }
    
	
	of(cancel){
		
		if( fs.tab.sub ){

			if(fs.tab.box){
				
				_tab_con();
			}

			if(cancel) 	_tab_prev();	
			if(!cancel) _tab_subs();	

		}

    	_('html').unClass('cxt').unAttr('cxt');
		
		this.el.unClass('cxt-on');

		let unscr = this.set.unscr ? false : true;

		if(unscr) _('html').unClass('un-scr');
		
		this.sets();
	}


	sets() {
		
		
		this.mouse  = 'click';
        this.open   = false;
        this.set    = false;
        this.btn 	= false;
        this.el  	= false;
	}

}




fs.info  	= {
	
	open 	: false,
	case 	: {
		1 	: {  stat : false, name:'market-start', key : 1 },
		2 	: {  stat : false, name:'market-reyon', key : 2 }
	}
}



function _tema_info() {

	var info,u; 

	
	info = localStorage.getItem('info') ? $.parseJSON(localStorage.getItem('info')) : fs.info.case;

	_ti_destory();

	u 	 = set.page;

	if( u.cat == 'market' && u.sub == 'urun'  && !info[1].stat ) { fs.info.open=1; $('#h').addClass('on-info-1'); window.setTimeout(function(){ $('#h').addClass('st-info')},2000); }
	if( u.cat == 'market' && u.sub == 'reyon' && !info[2].stat ) { fs.info.open=2; $('#h').addClass('on-info-2'); window.setTimeout(function(){ $('#h').addClass('st-info')},2000); }

	//$('.e-info').off().on('click',function(e){

	$(document).on('click','.e-info',function(e){
	
		var s;

		e.preventDefault();
		
		s = $(this).data('set');

		if( s.sema == 'market-start' ){

			$('#h').addClass('of-info');
			
			window.setTimeout(function(){
				
				$('#h').removeClass('on-info-'+s.key);
				$('#h').removeClass('of-info');
				
				fs.info.open = false;

				info[1].stat = true;
				
				localStorage.setItem('info',JSON.stringify(info));

			},700)

		}

	})

}

function _ti_destory() { 

	if(!fs.info.open) return false;
	
	$('#h').removeClass('on-info-'+fs.info.open);
	$('#h').removeClass('st-info of-info');
	noScroll(false);
	fs.info.open= false;

}
/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
@  tema > slide */

fs.slide = {'media':false,'count':0,'span':{},'spanmedia':{},'surum':4,'storage':false};

if( localStorage.slide){

	fs.slide.storage = JSON.parse(localStorage.slide);
	if( fs.slide.storage.surum != fs.slide.surum ){
		
		localStorage.removeItem("slide");
		fs.slide.storage = false;
	}
}

function _tema_slide(slide){


	if( ( fs.slide.media == set.user.media) ) return false;

	fs.slide.media = set.user.media;

	//if( fs.slide.count > 0 || fs.slide.storage) {
	if( fs.slide.count > 0 ) {
		 
		
		//var v = fs.slide.count > 0 ? fs.slide.span : fs.slide.storage.span;
		var v = fs.slide.span;
	
		$.each(v,function(key,val) {
			
			slick_each(false,val);
	    });     
	}
	else {
		
		if(slide){
			
			slick_each(slide);
		}
		else {
			
			$('.slide').each(function(i){
				slick_each($(this));
			})
		}
		
		
		//localStorage.setItem("slide", JSON.stringify({'surum':fs.slide.surum, 'span':fs.slide.span}));  
	}
}

function slick_each(e,cache){

	//console.log('slick_each');

	var data,kur,j,id,active,it;

	if ( cache ){
		
		//console.log('cache slide');	
		
	
		j  	  	= cache ;
		id 	 	= j.id;

		active  = fs.slide.spanmedia[""+id+""] ? fs.slide.spanmedia[""+id+""] : false ;	
		
		// console.log(id+':'+ active); 
		// console.log(cache);	  
	}
	else {

		
		//console.log('dom slide');

		fs.slide.count = ( fs.slide.count+1 );

		data  	= new Object($(e).data('set'));
		id 		= $(e).attr('id');
		it		= id.replace("slide-", "");
		active  = false; 
		
		j 		= { 

			id 			: id,
			dom 		: {
				div 	: '#'+id,
				list 	: $('#'+it+'-list').length ? '#'+it+'-list' : false,
				dots 	: $('#'+it+'-dots').length ? '#'+it+'-dots' : false,
				prev 	: $('#'+it+'-prev').length ? '#'+it+'-prev' : false,
				next 	: $('#'+it+'-next').length ? '#'+it+'-next' : false
			},
			dots 		: {
				over 	: (typeof(data.dots)!=='undefined' && data.dots.over) ? true : false,
				link 	: (typeof(data.dots)!=='undefined' && data.dots.link) ? true : false,
				css 	: (typeof(data.dots)!=='undefined')? data.dots.css : '' ,
				htm 	: (typeof(data.dots)!=='undefined')? data.dots.htm :  false ,
			}, 
			active 			: false, 
			slidestoshow 	: data.slidestoshow ?  data.slidestoshow : false, 
			responsive  	: data.responsive ? data.responsive : false,
			adaptive   	 	: data.adaptive ? true : false,
			autoplay  		: data.autoplay ? true : false,
			vertical   	 	: data.vertical ? true : false,
			media 			: data.media ?  data.media : false,
			native 			: data.native ?  data.native : false,
			lazyLoad 		: data.lazyLoad ? data.lazyLoad : false,
			lzy				: data.lzy ? true : false,
			blazy			: data.blazy ? true : false,
			speed			: data.speed ? data.speed : 300,
			cssease			: data.cssease ? data.cssease : 'ease',
			centerMode 		: data.centerMode ? true : false ,
			variableWidth 	: data.variableWidth ? true : false,
			infinite 		: data.infinite ? true : false,
			kur 			: false,
			section			: data.section ? data.section : false
		}
	}


	j.kur    = mediakur(j.media);

	fs.slide.span[""+id+""] = (j);
	
	if(j.kur) {
		
		//console.log('kura girdi');
		
		//console.log(active)

		if(!active) {
			
			//console.log('aktif degil ilk kurulum yapti');

			var slickset = {
				prevArrow 		: j.dom.prev,
				nextArrow 		: j.dom.next,
				appendDots 		: j.dom.dots,
				dotsClass 		: j.dots.css,
				vertical    	: j.vertical ? true : false ,
				verticalSwiping : j.vertical ? true : false ,
				slidesToShow   	: j.slidestoshow ? j.slidestoshow : 1,
				slidesToScroll 	: j.slidestoshow ? j.slidestoshow : 1,
				autoplay 		: j.autoplay,
	  			responsive  	: j.responsive ? slick_response(j.responsive) : false,
				dots 			: true,
				adaptiveHeight  : j.adaptive,
				lazyLoad 		: j.lazyload,
				centerMode 		: j.centerMode,
				variableWidth 	: j.variableWidth,
				infinite 		: j.infinite
			}

			if(j.dots.link) {
				
				slickset['customPaging'] = function (slider, i){
					
				   	var e = $('#'+j.id).find('.list .slick-slide[data-slick-index='+i+']'),
					val = $(e).data('dots') ?  $(e).data('dots') : (i+1), 
					css = $(e).data('name') ?  'class="dots-'+$(e).data('name')+'"' : '' ,
					url = $(e).attr('href') ?  $(e).attr('href') : $(e).attr('data-href');

					return '<a href="'+url+'" '+css+'>'+val+'</a>';

				};
			}  


			if(j.dots.htm) {

				slickset['customPaging'] = function (slider, i){
					
					return j.dots.htm == 'i' ? '<i></i>' : j.dots.htm;
				};
			}
		 	
 			//console.log(j); 
			$(j.dom.list).on('init',function(){
	           	
	           	//console.log(id+" slick install");

	           	if( !$(j.dom.div).hasClass('on') ) $(j.dom.div).addClass('on');
				
				$('#'+id).find('.dots .after').remove();

				// slick_track_slide(j.section, 0);

	           	//slick_view(j);
	        })

			$(j.dom.list).slick(slickset);
			
			//fs.slide.span[""+id+""].active = true;

			fs.slide.spanmedia[""+id+""] = true;

			if(j.dots.over) {
				
				$('#'+id).find('.dots ul li').on('mouseover', function(){
   	 				$(j.dom.list).slick('goTo', $(this).index(),true);
				});
			} 
		
			$('#'+id).find('.ctrl a').click(function(){
				
				
				$(j.dom.list).addClass('ctrl-on');

				$(j.dom.list).on('afterChange', function(event, slick, currentSlide){
					clearTimeout(slide_ctrl_click);
					var slide_ctrl_click = window.setTimeout(function(){
						$(j.dom.list).removeClass('ctrl-on');
					},400)
				});
			});

			$(j.dom.list).on('afterChange', function(event, slick, currentSlide){
				
				if(j.blazy) { 
					bLazy.revalidate();
				}
			});


			if(j.lzy) {
				
				var ItemsLzy = $(j.dom.list).find('.lzy');

				$(j.dom.div).hover(function(){ 
					
					slick_lzy( j.dom.div,ItemsLzy);
				}) 

				$(j.dom.list).on('afterChange', function(event, slick,currentSlide){

					slick_lzy( j.dom.div, ItemsLzy);
				});

				$(j.dom.div).bind('touchstart touchend', function(e) {

			      	slick_lzy( j.dom.div,ItemsLzy); 
			    });

		        if(cssua.ua.mobile) {

			    	slick_lzy( j.dom.div,ItemsLzy); 
			    };
			}
		}
	}
	else {
		
		
		//console.log('kurdan cikti');

		if(active) {
			
			//console.log('kuru bozdu');

			$(j.dom.list).slick('unslick');

			fs.slide.spanmedia[""+id+""] = false;
		}
		
	
		if( j.native && j.lzy ) {
			
			if(mediakur(j.native) ) {

				slick_native(j.dom.div,j.dom.list);
			}
		}
	}
}



function slick_response(i){

	

	var j = {
		'4321'	: [
			{ breakpoint: 961,settings: {slidesToShow:3, slidesToScroll:3}},
			{ breakpoint: 767,settings: {slidesToShow:2, slidesToScroll:2}},
			{ breakpoint: 420,settings: {slidesToShow:1, slidesToScroll:1}} 
		],
		'321'	: [
			{ breakpoint: 961,settings: {slidesToShow:3, slidesToScroll:3}},
			{ breakpoint: 767,settings: {slidesToShow:2, slidesToScroll:2}},
			{ breakpoint: 530,settings: {slidesToShow:1, slidesToScroll:1}} 
		] 
	}
	
	return j[i];
}


function slick_view(j,event,slick,currentSlide){
	var item = $('#'+j.id).find('.item.slick-active');
	if( !$(item).hasClass('view-on') ){
		$(item).addClass('view-on');
	}
} 

function slick_lzy(span,items,skip){
	
	if( !$(span).hasClass('on-lzy') ){
		var y = true;
		
		$(items).each(function(i){
			
			y = ( skip && i < skip) ? false : true;
			
			if(y){

				$(this).attr('src',$(this).data('lzy'));	
				$(this).removeAttr('data-lzy');		
			}
			
		});
		$(span).addClass('on-lzy'); 
	}
}

function slick_native(slide,list){

	//slick_track_slide(j, event, slick, currentSlide, event)

	var f = $(list).find('.item:nth-child(2) .real');
	$(f).attr('src',$(f).data('lzy'));
	$(f).removeAttr('data-lzy'); 

	var ItemsLzy = $(list).find('.lzy');

	$(slide).bind('touchstart touchend',function(e){
		slick_lzy(slide,ItemsLzy,1);
	});	
}
/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
@ tema > tab */

function _tema_tab(){
	
	$('.tab-nav a').click(function(e){
		
		var tabgroup   = $(this).data('tab'),
			tabscript  = $(this).data('script') ? $(this).data('script') : false,
			tabindex   = $(this).index();
		
		console.log(tabgroup);
		
		$('.tab-nav a').removeClass('on');
		$(this).addClass('on');


		$('.tab-'+tabgroup+' > *').removeClass('on');
		$('.tab-'+tabgroup+' > *:nth-child('+(tabindex+1)+')').addClass('on');

		if(tabscript) eval(tabscript+"()");

		e.preventDefault();
	})
}
function unArry(arr,key,index){
	$(arr).each(function(i,v){
		if ( !index && v == key ) { delete arr[i]; arr.splice(i, 1); }
		if ( index && i == key ) { delete arr[i]; arr.splice(i, 1); }
	})
	return arr;
}
			
function isKey(obj,key) {
	
	return obj.indexOf(key) != -1 ? true : false; 

}
function block_load(scop,url,clear){
	
	if(!app.session) return false;

	if( app.user.mod==3 ){

		console.log('User Mod 3 (Cari) oldugu icin cariye gore content yukleme devre disi kaldi');
		return false;
	}
	
	$('.block-load').each(function(e){
		
		var e  = $(this);
		var s  = $(e).data('set');
		
		var all   = scop ? true : false;
		
		if( !scop || scop == s.name ){
			
			_bl_open(scop,s);
			
			window.setTimeout(function(){ 
				
				url = url ? url : s.url;

			
				$.post(url,{ output:( s.out ? s.out : false ) },function(data){
					
					data = (typeof data =='object') ? data : $.parseJSON(data);
					
					if(data.err){
						
						$(e).html('');
						
						if( data.err == 'session' ) session({js:{name :'block_load',param :scop}});
					
						_bl_exit(scop,s)

						return false;
					}


					$(e).html(data.body);

					if(s.onBody=='all'){

						$('body').addClass(data.meta.class.body);
						_onBodyLod(false);
					}

					app.cari.sepet = data.app.sepet ? data.app.sepet : false ;
					
					
					let pc = data.meta.page;
					
					if(pc.mod=='sepet') app.data.entry = data.entry; 
					if(pc.sub=='urun')  app.data.entry = data.entry; 
					if(pc.cat=='cek')   app.data.entry = data.entry;

					if( s.js=='page' ){
						
						data.app.block = true;

						eval('_page_'+data.app.mod+'(data.app)');
					}
					else{

						if(s.js) eval(s.js);
					}

					if(fs.lazyLoad) fs.lazyLoad.update();

					_bl_exit(scop,s);

				});

			},300) 		
		}
	})
}




function _bl_open(scop,s) {
	
	//$('html').addClass('bl-on');
	
	if(s.onBody)  _onBodyLod(true);
	
	if(s.onBody=='all'){

		_onBodyHas(false);
		_onBodyLod(true);
	}

	if( scop =='cari' && set.page.sub == 'urun') { 

		$('html').addClass('load-url out')
	}
}



function _bl_exit(scop) {
	
	/*
	window.setTimeout(function(){ 
		
		$('html').removeClass('bl-on');

	},300);*/



	if( scop =='cari' ) {  
		
		if( set.page.sub == 'urun' ){
			window.setTimeout(function(){ 
				$('html').removeClass('load-url out');
			},700) 			
		}

		if(!app.session) return false;
		
		_sepet_load();
		
		
	}
}

function base64(id,out) {
	var reader = new FileReader();
	reader.onload = function(){
		var dataURL = reader.result;
		$(out).val(dataURL);
	};
	return reader.readAsDataURL(document.getElementById(id).files[0]);
};
// sil
/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
@  Scroll To */


function capa(json)
{
	var set = json ;
	
	set.hiz  = (!set.hiz)? 	400 	: set.hiz;
	set.pay	 = (!set.pay)? 	0 		: set.pay;
	set.run	 = (!set.run)? false 	: set.run;
		
		

	if ( (!set.top) && (!set.dom) ) { console.log('capa icin dom veya top set\'in degeri gerekli'); return false  }	

	set.top  = (!set.top)? (($(set.dom).offset().top)-set.pay) : set.top;

	

	var scrollElem=scrollableElement('html','body');

	if(set.hiz > 1) {
		$(scrollElem).animate({scrollTop:set.top},set.hiz,function(){
			if(set.run) eval(set.run+"()");
		});
	}
	else {
		$(scrollElem).scrollTop(set.point);
	}
	
}
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}
function css(e,c,on,time){
	
	if(time){
		
		window.setTimeout(function(){
			if(on) $(e).addClass(c); else $(e).removeClass(c);	
		},time)
		
		return false;
	}

	if(on) $(e).addClass(c); else $(e).removeClass(c);

	

}


// sil
function dateTime(){

	var d = new Date();
	
	var Y  = d.getFullYear();
	var M  = (d.getMonth()+1).toString().padStart(2,'0');
	var X  = d.getDate().toString().padStart(2,'0');
	
	var h = d.getHours().toString().padStart(2,'0');
	var m = d.getMinutes().toString().padStart(2,'0');
	var s = d.getSeconds().toString().padStart(2,'0');	

	return Y+'-'+M+'-'+X+' '+h+':'+m+':'+s;
}


function dateDiff(one, two) {

	let dt1 = new Date(one);
	let dt2 = new Date(two);
	
	return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
}


function err(opt){

	let SwalOpt = { 
		
		customClass 	: {
			container   : 'sw-err'
		},
		width 			: 400,
		text 			: ''
	} 
	
	SwalOpt.text = 'Bir sorun oluştu, tekrar deneyiniz';
	
	Swal.fire(SwalOpt);
}
fs.find = {}

function find(input,j){

	if( !j || !j.span ){
		
		//console.log('err : find(this,j) j.span yok !');
		return false;
	}



 	let name  = $(input).attr('name').replace('find-','');
 	let span, item, val,str, on, i;

 	span = document.getElementById(j.span);
	//item = span.querySelectorAll(j.item ? j.item : 'li');
	
	
	item = document.querySelectorAll(j.item ? j.item : '#'+j.span+' > li');
	
	str  = input.value.toUpperCase();
	
	on   = fs.find[j.span] ? fs.find[j.span] : false;
	
	$('.find-'+name+' input').val(input.value);
 
	if (str && !on) { 

		if(j.snc) $('.find-'+name).addClass('on');
		if(j.js)  eval('_find_'+name+'(true)');
		
		span.classList.add("iskey"); 
		fs.find[j.span] = true ; 

		if( $('.tab-find-cek').hasClass('on') ) $('.tab-find-cek').addClass('op').removeClass('on');

	}
	
	
	if(!str &&  on) { 
		
		for(let i = item.length - 1; i >= 0; i-- ){ 

			item[i].classList.remove("onkey");
		}

		if(j.snc) $('.find-'+name).removeClass('on');
		if(j.js)  eval('_find_'+name+'(false)');
		
		span.classList.remove("iskey");
		
		if( $('.tab-find-cek').hasClass('op') ) $('.tab-find-cek').addClass('on').removeClass('op');

		fs.find[j.span] = false;
		return false;
	}

	
	for (i = 0; i < item.length; i++) {
	  
	  	let scop = j.scop=='root' ? item[i] : item[i].getElementsByTagName( j.scop ? j.scop : 'a' )[0];
	 	
	 	let text = scop.textContent || scop.innerText;

		if ( text.toUpperCase().indexOf(str) > -1 ){
			
			item[i].classList.add("onkey");
	    }
	    else {

			item[i].classList.remove("onkey");;
	    }
	    
	}

}

function _find_reset(g){


	let j = g.js ;
	let r = g.rel ;
	let n = '.find-'+r;
	let i = n+' input';
	
	$(n).removeClass('on');
	$(i).val('');
	
	if(j) eval('_find_'+r+'(false)');
	
	$('.tab-find-'+r).addClass('on').removeClass('op');

	$('#list-'+r+' > .onkey').removeClass('onkey');
	$('#list-'+r).removeClass('iskey');
	
	fs.find['list-'+r] = false;
}




function goBack() {
	window.history.back();	
}
var signaturePad;
var hasSignature;

function imza(){
	
	

	var canvas = document.getElementById('imza-pad');

	signaturePad = new SignaturePad(canvas, {
		backgroundColor: 'rgb(255, 255, 255)' ,
		onEnd: function() {
        	hasSignature = true;
        }
	});


	var clearButtonAction = function () {
	    hasSignature = false;
	    signaturePad.clear();
	}

	
	function resizeCanvas() {

		if (hasSignature) {
            var signatureCopy = signaturePad.toDataURL();
        }

	    var ratio =  Math.max(window.devicePixelRatio || 1, 1);
	    canvas.width = canvas.offsetWidth * ratio;
	    canvas.height = canvas.offsetHeight * ratio;
	    canvas.getContext("2d").scale(ratio, ratio);

	   if (hasSignature) {
            signaturePad.fromDataURL(signatureCopy);
        } else {
            // signaturePad doesn't watch canvas and needs to be told it's clear now
            signaturePad.clear(); 
        }
	}

	window.onresize = resizeCanvas;
	resizeCanvas();

	


	$(document).on('click','.imza-clear',function(){
		signaturePad.clear();
	})

}


function imzaHas(){

	return signaturePad.isEmpty();
}


function imzaClear(){
	
	signaturePad.clear();
}

function imzaData(){

	const data = signaturePad.toData();

	return data;
}


// Draws signature image from an array of point groups




function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);

}

function isset(str){
	return (typeof str !== 'undefined') ? true : false;
}

function kdv(a,b){ 
	return (( a * b)/100)+a
}
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
	
	


/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
@  Media kurma anahtarı : v.1.0 */

function mediakur(j) {

	var kur=true;

	if(j){ 
		
		var eksen = j.substr(2, 1);
		var media = j.substr(0, 2);
		var size ;
		
		if( eksen=='+' ) { 
			
			switch(media){
    			case 'ms' : size = 0; break;
    			case 'xs' : size = set.media['ms']; break;
    			case 'sm' : size = set.media['xs']; break;
    			case 'md' : size = set.media['sm']; break;
    			case 'lg' : size = set.media['md']; break;
 			}
		}
		
		if( eksen=='+') { kur = set.win.x > size ? true : false }
		if( eksen=='-') { kur = (set.win.x < (set.media[media] + 1 )) ? true : false }
	}
	
	return kur;
}
/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
@ noScroll */



fs.noScroll = false;

function noScroll(action){
	
	if(action) {
		
		fs.noScroll = $(window).scrollTop();
	
		$('#h').addClass('no-scroll');
		
		_pb_destory();
	}
	else {
		
		$('#h').removeClass('no-scroll');
		
		waitForFinalEvent(function(){

			//capa({ hiz:400, top:fs.noScroll });
			
			$(window).scrollTop(fs.noScroll);	
			
			fs.noScroll= false;
			
   		},100, "..");

   		pull_refresh();
	}

}

/* nParse    : Number Parse
@  Desc      : Format'i number'a cevir */

function nPar(strg,isNum) {
   
   if ( isNum && isNumeric(strg) ) return strg;

    var strg = strg || "";
    var decimal = '.';
    strg = strg.replace(/[^0-9$.,]/g, '');
    if(strg.indexOf(',') > strg.indexOf('.')) decimal = ',';
    if((strg.match(new RegExp("\\" + decimal,"g")) || []).length > 1) decimal="";
    if (decimal != "" && (strg.length - strg.indexOf(decimal) - 1 == 3) && strg.indexOf("0" + decimal)!==0) decimal = "";
    strg = strg.replace(new RegExp("[^0-9$" + decimal + "]","g"), "");
    strg = strg.replace(',', '.');
    return parseFloat(strg);

}


/* nFor   : Number Format 
@  Soruce : https://gist.github.com/xiel/5688446
@  Desc   : Number'i Format'a cevir */

function nFor(number, decimals, decPoint, thousandsSep,num) {
    
    decimals = ( set.page.cat == 'market' || set.page.mod == 'sepet' ) ? app.market.onda  :  decimals;
    
    //decimals = Math.abs(decimals) || ( decimals === false ? 2 : decimals );
    
    decimals = decimals || decimals===0 ? Math.abs(decimals) : 2;

    number = parseFloat(number);

    if (!decPoint || !thousandsSep) {
        decPoint = ',';
        thousandsSep = '.';
    }

    var roundedNumber = Math.round(Math.abs(number) * ('1e' + decimals)) + '';
    
    while (roundedNumber.length < decimals) {
        roundedNumber = '0' + roundedNumber;
    }

    var numbersString = decimals ? (roundedNumber.slice(0, decimals * -1) || 0) : roundedNumber;
    var decimalsString = decimals ? roundedNumber.slice(decimals * -1) : '';
    var formattedNumber = "";

    while (numbersString.length > 3) {
        formattedNumber += thousandsSep + numbersString.slice(-3)
        numbersString = numbersString.slice(0, -3);
    }

    if (decimals && decimalsString.length === 1) {
        while (decimalsString.length < decimals) {
            decimalsString = decimalsString + decimalsString;
        }
    }

    var str = (number < 0 ? '-' : '') + numbersString + formattedNumber + (decimalsString ? (decPoint + decimalsString) : '');

    return num ? str.replace(',','') : str;
}



/* nFor   : Number Html Format 
@  Soruce : https://gist.github.com/xiel/5688446
@  Desc   : Number'i Format'a cevir */

function nHtm(str) {
   
    str = nFor(str);
    str = str.split(",");
    
    return '<span>'+str[0]+'</span><sup>,'+str[1]+'</sup>';
}


/* nFix  : Number Fix 
@  Desc  : Number'i odanlik kesim yapar yine number olarak doner */

function nFix(number,hane){

   hane = hane ? hane : 2;
   return parseFloat(number.toFixed(hane));
}


function nFit(num){

    let n;
    n = num.toString();
    n = n.split(".");
    
    if(!n[1]) return num;

    let onda = n[1] ? n[1].substr(0,2) : false;

    n = Number(n[0]+'.'+onda);

    return n;
}


/* mKur  : Money Kur
@  Desc  : Para kur turlerine gore donus yapar */

function mKur(str,id,span){
    
    if(id) {

        switch (id) {
            case 0:  $str = '₺'; break;
            case 1:  $str = '$'; break;
            case 2:  $str = '€'; break;
            case 6:  $str = 'f'; break;
            default: $str = '₺'; break;
        }    
    }
    
    let chf = '₣';

    if( span ){

        chf = span.chf == 'ico' ? '<i class="icon-franc"></i>'      : chf;
        chf = span.chf == 'htm' ? '<dd class="chf">f<i>i</i></dd>'  : chf;
        chf = span.chf == 'txt' ? '₣'                               : chf;
    }

    str = ( str == 'CHF' ) ? chf : str;

    return str;
}

/* percent_diff  
@  Desc  : A ve B arası yuzde farki */

function percent_diff(a,b){

    var int = 100 - (100/a)*b;
    
    int =  int > 0 ? int : 0 ;

    return nFix(int);
}

/* percent_diff  
@  Desc  : B yüzde kac inmis  */

function percent_disc(a,b,c,num){

   
    var int =  c ? ((100/a)*b) : 100 - ((100/a)*b);
    
    int =  int > 0 ? int : 0 ;

    return num ? int : nFix(int);
}





function ofPoint(e){

	e = e ? $(e) : $('html');
	$(e).addClass('of-point');
	
}

function onPoint(e){
	
	e = e ? $(e) : $('html');
	$(e).removeClass('of-point');
}


fs.refresh = true;

let refresh;

function pull_refresh(){
	
	refresh = PullToRefresh.init({
		mainElement: 'body',
		triggerElement: '#reload',
		onRefresh() {
			
			if(fs.refresh) {
				$('html').addClass('query');
				window.location.reload();
			}
		}
	});
}

function _pb_destory() { 
	
	refresh.destroy();
}



function reset(){

}
/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
@ Screen */

function screen(is,no){
	
	no = !no ? 'one' : no;
	var cs = 'ovrly-'+no;
		
	if(is) $('html').addClass(cs); else $('html').removeClass(cs);
}
function scrollableElement(els) { for (var i = 0, argLength = arguments.length; i <argLength; i++){var el = arguments[i],$scrollElement = $(el);if ($scrollElement.scrollTop()> 0){return el;}else{$scrollElement.scrollTop(1);var isScrollable = $scrollElement.scrollTop()> 0;$scrollElement.scrollTop(0);if (isScrollable){ return el;}}}return [];}

/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
@  Serialize to Object */

$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
}
fs.stick = {}

function stick(v,p,of){

	fs.stick[v] = false;

	var r = $(window).scrollTop();
	var s = fs.stick[v];
	var c = 'stick-'+v;

	var obj = {c:c,v:v,p:p,of:of};

	if( r < (v-1) && s  ) stickOf(obj);
	if( r > (v-1) && !s ) stickOn(obj);

	$(window).scroll(function(event){
		
		r = $(window).scrollTop();
		s = fs.stick[v];

		if( r < (v-1) && s  ) stickOf(obj);
		if( r > (v-1) && !s ) stickOn(obj);
	});
}


function stickOf(obj){
	


	$('body').removeClass(obj.c); 
	
	if(obj.of) $(obj.p).addClass('of');

	var time =  obj.of ? obj.of : 0 ;

	clearTimeout(runTime)

	var runTime =  window.setTimeout(function(){ 
		
		$(obj.p).removeClass('on of');
		
		fs.stick[obj.v] = false;

	},time);

}


function stickOn(obj){

	$('body').addClass(obj.c);
	
	$(obj.p).addClass('on');

	fs.stick[obj.v] = true

}


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
@ ShowValues : Php de ki strpos gibi kullan   */


function str_pos (haystack, needle, offset)
{
  var i = (haystack + '').indexOf(needle, (offset || 0));
  return i === -1 ? false : i;
}
function ucFirst(string) {
	
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function capitalize(str) {

	let words   = str.split(' ');
	let newstr  = new Array();
  
	$.each(words, function(i, word){ 
		newstr[i] = word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
	})

	return newstr.join(' ');
}
$(document).on('click','.under',function(e){
	let text = 'Bu bölüm geliştiriliyor';

	Swal.fire({
		text 		: $(this).data('mesaj') ? $(this).data('mesaj') : text,
		width 		: 350,
		customClass	: {
		 	popup 	: 'sw-ios sw-note sw-ok'
		}
	})

	return false; 
})
function href(name, value){

  var href = window.location.href;
  var regex = new RegExp("[&\\?]" + name + "=");
  
  if(regex.test(href)){

    regex = new RegExp("([&\\?])" + name + "=\\d+");
    window.location.href = href.replace(regex, "$1" + name + "=" + value);
  }
  else{
    
    if(href.indexOf("?") > -1)
      window.location.href = href + "&" + name + "=" + value;
    else
      window.location.href = href + "?" + name + "=" + value;
  }
  
}
function delcss(e,k){ e.classlist.remove(k) }
function addcss(e,k){ e.classlist.add(k) }







/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
@ Time Triger  */


var waitForFinalEvent = (function () {
	
	var timers = {};
	
	return function (callback, ms, uniqueId) {
		if (!uniqueId){
		  uniqueId = "Don't call this twice without a uniqueId";
		}
		if (timers[uniqueId]) {
		  clearTimeout (timers[uniqueId]);
		}
		
		timers[uniqueId] = setTimeout(callback, ms);
	};

})();
function wait_task(name,time){
	console.log(name);
	waitForFinalEvent(function(){
   		console.log('run');
   		eval(name+"()");
   	},time,"some unique string");
}
function webView(data){
	
	console.log(data);

 //  window.webkit.messageHandlers.nativeapp.postMessage(data);
}
var form = _fx_set({make:'create'});

function _fx_set(opt){
	
	let setForm  ={

		submit		: false,  
		data 		: false,
		field		: {},
		name		: 'main',
		prefix 		: false,  
		suffix 		: false,
		sent 		: false,  
		err 		: false, 		
		js			: false, 
		e           : false,
		confirm 	: false,
		feed   		: {
			api 	: 'Üzgünüz işlem gerçekleştirilemedi, sayfayı bir kez yenileyip tekrar denemenizi öneririz.'
		}
	}

	if(opt.make == 'create') return setForm;
	if(opt.make == 'reset')  form = setForm;
}

function form_post(){
	
	$(document).on('submit','form.fx',function(event){
	
		ofPoint();

		event.preventDefault();

		$(this).removeClass('run');

		var e = $(this);
		var s = $(e).data('set')  ? $(e).data('set')  : false ;
		
		// @ Confirm

		if(!form.confirm && s.confirm ){
			
			fx_confirm(e,s); 
			return false;
		}

		form.confirm = false;


		// @ Form Json Data Olustur
		
		form.name   	= $(e).attr('name') ? $(e).attr('name') : form.name;
		form.e  		= '#fx-'+form.name;

		form.prefix		= form.name == 'main' ? '' : '-'+form.name;
		form.suffix		= form.name == 'main' ? '' : form.name+'-';
		
		form.submit  	= '#fx'+form.prefix+' .submit'; 

		form.err		= s.err ? s.err : form.err;
		form.js 		= s.js  ? s.js  : form.js;

		form.sent 		= false;
		
		
		// @ post set verisi 
	
		let type = ( s && s.type ) ? s.type : ( ( $(e).attr('enctype') == 'multipart/form-data' ) ? 'FD' : false );
		let post = { url :s.url ? s.url : $(e).attr('action'), data:false }
		
		// @ post action

		post.url  = post.url ?  post.url : '' ;

		// @ post data icin type formata bul
		
	
		$.each($(e).serializeArray(), function(key, v){
			form.field[v.name]= v.value;
		});


		post.data = (type=='SA') ? $(e).serializeArray() : post.data;
		post.data = (type=='FD') ? new FormData(this)	 : post.data;	
		post.data = post.data 	 ? post.data 			 : $(e).serialize();


		
		// @ post type format formData ise gerekli setleri ekle

		if( type=='FD' ){

			post.enctype 	 = 'multipart/form-data';
			post.contentType = false;
			post.processData = false;
		}

		// @ form data extornal relation add

		if(s.rel){
			
			$.each($('.fx-rel-'+form.name), function(key,val){
				
				let rt = $(val).attr('type');

				if(rt == 'file') post.data.append($(val).attr('name'),$(val)[0].files[0]); 
				if(rt != 'file') post.data.append($(val).attr('name'),$(val).val()); 
			})		
		}
		
		// @ form dataya post.data verisini at

		form.data = post.data;

	
		// @ In : Post'a girmeden once calisacak olan fonksiyolar
		
		_fx_in();

		if(form.js) { 
			
			let fxIn = (form.js === true) ? eval('_fx_in_'+form.name+'()') : eval(form.js); 
			
			if(s.valid && !fxIn ) {
				
				_fx_out(true);
				
				onPoint();
				console.log('valid olmadı');
				return false;
			}

			post.data = form.data;
		}

		console.log('fx in den cikti');

		ofPoint();

		
		// @ post'a basla

		$.post(post).done(function(json){
			
			form.data 	= (typeof json =='object') ? json : $.parseJSON(json);
			form.sent   = true;

			clearTimeout(say);

			var say = window.setTimeout(function(){
				
				_fx_out(); 

				if(form.js){

					var out = ( form.js === true ) ? eval('_fx_out_'+form.name+'()') : eval(form.js);
				}
				
			},600);

		});

	});


	$(document).on('click','.fx-submit',function(event){
		
		$('form[name="'+$(this).attr('rel')+'"]').submit();
	})


	$('form.fx.run').submit();

}

function _fx_in(){
	 
	$(form.e).removeClass('send-on nosent posted');
	$(form.e).addClass('load');

	$('html').removeClass(form.suffix+'form-nosent');
	$('html').addClass(form.suffix+'form-load');


	// if ( form.resultnote ){ 
	// 	$(form.resultnote).text('Lütfen Bekleyin') 
	// }
	
	$(form.submit).attr('disabled','disabled');
	$(form.submit).blur();

	// if($(form.submit).attr('data-load'))
	// {
	// 	$(form.submit).attr('value',$(form.submit).attr('data-load'));	
	// }

	return true;
}


function _fx_out(fxIn) {

	
	console.log('post cikti');

	$('html').removeClass(form.suffix+'form-load');
	

	$(form.e).removeClass('load');

	$(form.e+' .hata').removeClass('hata');
	
	$(form.submit).removeAttr('disabled');
	
	if(fxIn) return false;


	var data = form.data;

	if( !data.result ) {

		$('html').addClass(form.suffix+'form-nosent');
		
		$(form.e).addClass('send-on nosent');

		if( form.err ){

			$.each(data.errors, function(key, value){
				
				$(form.e+' .f-'+key).addClass('hata');
			})	
		}

		if(form.feedback) _fx_feedback();

	}
	else {
		
		
		$('html').addClass(form.suffix+'form-posted');
		
		$(form.e).addClass('send-on posted');
		
		//$(form.e)[0].reset();

		if($(form.submit).attr('data-load')){
			
			$(form.submit).attr('value',$(form.submit).attr('data-value'));
		}
	}

	onPoint();
	


	return true;
}

function fx_confirm(e,s){
	
	onPoint();

	Swal.fire({
  
		confirmButtonText 	: 'Gönder',
		cancelButtonText  	: 'Vazgeç',
		text 				: s.confirm,
		reverseButtons 		: true,
		showCancelButton	: true,
		customClass 		: {
			popup 	: 'sw-ios sw-note sw-confirm',

		}
	}).then((result) => {
		
		if(!result.value) return false;
		
		form.confirm = true;
		$(e).submit();

	});
}

function _fx_feedback(){
}




// if ( form.resultnote ){ 

	// 	var str = form.data.message ?  form.data.message : 'Kırmızı alanları düzeltelim'
	// 	$(form.resultnote).text(str)
	// }
	//_fsa_tema();

// function _fsa_tema(){
	
// 	if( form.box ) _tema_form_box();
	
// };




function form_type(){


	if ($().datepicker) { 

		$('.datepicker-here.go').datepicker({
			
			onSelect: function(formattedDate, date, inst) {
				var url = $(inst.el).data('perma')+'/'+formattedDate;
				window.location = url;
			}
			
		})
	}

	
	$(document).on('focus','.field-find input',function(){
		// console.log('focus');
		$(this).parent().addClass('focus');
	})

	$(document).on('blur','.field-find input',function(){
		
		// console.log('blur 0');

		let e = $(this).parent();
		window.setTimeout(function(){
			// console.log('bulur 1');
			$(e).removeClass('focus');
		},200) 		

	})

	$(document).on('click','.field-find .find-reset',function(){

		_find_reset({
			
			js   : ($(this).attr('js') ? true : false),
			rel  : $(this).attr('rel')
		});

	})


	// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

	$(document).on('click','.e-val',function(){

		$($(this).attr('rel')).val($(this).attr('value'));
	})

	// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

	$(document).on('click','input.check',function(event){
		
		event.stopPropagation();

		var el = $(this).parent();
		
		if($(this).is(':checked')){

			$(this).prop( "checked",true);
			$(el).addClass('on');
		}
		else{
			
			$(this).prop( "checked",false);
			$(el).removeClass('on');	
		}
	})


	
	// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
	
	$(document).on('click','mask-switch',function(event){

		event.stopPropagation();
	
	 	if ( !$(this).hasClass('on') ) {

	    	$('#field-'+$(this).data('name')).prop('checked', true);
			$(this).children('s').text('ON');
	    	$(this).addClass('on');
	   	}
	  	else { 

	    	$('#field-'+$(this).data('name')).prop('checked', false);
			$(this).children('s').text('OFF');
	    	$(this).removeClass('on');
	  	}
	})

	// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

	$(document).on('click','input.radio',function(){
		
		if($(this).is(':checked'))
		{
			name= $(this).attr('name');
			
			$('input[name="'+name+'"]').parent().removeClass('on');;
			$(this).parent().addClass('on');
		}
		else
		{
			$(this).parent().removeClass('on');	
		}
	})
	
	// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
	
	__ft_input_load();

	// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

	
	
	$(document).on('blur','input.e-upper',function(event){

		var str = $(this).val(),
		words   = str.split(' '),
		newstr  = new Array();
	  
		$.each(words, function(i, word){ 
			newstr[i] = word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
		})

		$(this).val(newstr.join(' '));
	});

	$(document).on('blur','.e-emoji-unset',function(event){

		$(this).val(un_emoji($(this).val()));
	})
	
}

function un_emoji (string) {
  var regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
  return string.replace(regex, '');
}

function uppertext(e){

	var str = $(e).val(),
	words   = str.split(' '),
	newstr  = new Array();
  
	$.each(words, function(i, word){ 
		newstr[i] = word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
	})

	$(e).val(newstr.join(' '));
}


function __ft_input_load(){

	if ($().mask) { 
		
		
		$('input.mask-money[onda=4]').mask('#.##0,0000',{reverse: true});
		$('input.mask-money[onda=2]').mask('#.##0,00',{reverse: true});

		$("input.mask-phone").mask("0(999) 999 99 99");
		$("input.mask-birth").mask("99.99.9999");
		//$("input.mask-number").mask("999");
		//$('.mask-num').mask('##0');
		$('.mask-num[maxlength=5]').mask('99999');
		$('.mask-num[maxlength=4]').mask('9999');
		$('.mask-num[maxlength=3]').mask('999');
		$('.mask-num[maxlength=2]').mask('999');
		$('.mask-num[maxlength=1]').mask('999');
		
		$('.mask-cek').mask("999 99 99"); //{reverse: true}

	}

	/*
	if ($().inputmask) { 
	

		$("input.numeric").inputmask("numeric"); 	
		$("input").inputmask();
	}
	*/


	if ($().numeric) {
		
		$("input.numeric").numeric();	 
	}

}
/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/* @ nav count : sayısal birim içeren field alanı icin kontrol  */

fs.navcnt = nav_count('create');


function nav_count(rst){

	
	/*
	@  rst : ayarları olusturm veya resetle  */

	if(rst){
		
		let con = { name:false,eksi:0,arti:0,temp:0, range:false }
		
		if ( rst =='create') return con;
		
		fs.navcnt = con;

		return false;
	}

	
	/*
	@  nav count butunlar tıklanırsa burası calisir, bu butonlar arti eksi varsa ondalik
	@  butonlarından olusur */

	$(document).on('click','nav.count button',function(event){
	
		event.preventDefault();
		
		var nav,arr,snc;

		nav = $(this).parent();
		arr = $(nav).data('set');
		
		//console.log(arr);

		arr = (typeof arr =='object') ? arr : $.parseJSON(arr);

		//console.log(arr);

		//JSON.parse()

		var f = {

			max 	: arr.max ? nPar(arr.max) : $(arr.field).attr('max') ? nPar($(arr.field).attr('max')) : false,
			min  	: arr.min ? nPar(arr.min) : $(arr.field).attr('min') ? nPar($(arr.field).attr('min')) : 0,
			val 	: nPar($(arr.field).val()),
			range   : { e:false, onda:false},
			name    : arr.field.replace("#",''),
			islem 	: $(this).attr('rel'),
			oran 	: 1,
			onda 	: $(arr.field).attr('onda')

		};

		//console.log(f);
		
		if( fs.navcnt.name != arr.field ) nav_count('reset');
		
		fs.navcnt.temp = f.val;
	
		if(arr.range) {
			
			f.range.e 	 = '.count-range[rel='+f.name+']';
			f.range.onda = f.range.e+' .onda';
		}

		if( arr.type == 'money' && f.islem == 'onda' ) {

			if( !$(this).hasClass('on') ) {
				
				if(arr.range) $(f.range.e).addClass('onda');

				$(this).addClass('on');
				arr['onda'] = true;

			}
			else {

				if(arr.range) $(f.range.e).removeClass('onda');

				$(this).removeClass('on');
				arr['onda'] = false;
			}
		
			$(nav).attr('data-set',JSON.stringify(arr));

			return false;
		}	
		
		
		/*
		@  arr.type : para formatı ve onda varsa eksi / arti oranini setliyoruz   */

		if( arr.type == 'money') {
			
			f.oran = arr.onda ? ( f.onda=='4' ? 0.0001 : 0.01) : f.oran;

			//console.log(f.oran);	
		}

		/*  
		@ nav count -  arttirma islemi geldi  */

		if( f.islem == 'arti' ){
		
			snc = f.val + f.oran;
			
			//console.log(snc);

			/*
			@ arttirma degeri max sınırı kontrolunu yapiyoruz  */

			if( snc == f.max || snc > f.max ) {

				if(!$(this).hasClass('pause'))
				{
					$(this).addClass('pause'); 	// @ max icin arttirma yi kapa 
					_nc_out(arr,f,f.max);      	// @ maximun degeri ver
				}
				
				/* 
				@ arttirma kapanmasi halinde ısrarla tıklanmaya devam edilmesi icin
				@ uyarı mesaj dondurulmek isteniyor ise gir */

				if( arr.msj && fs.navcnt.arti > 0  ){

					var msj = arr.msj.arti.replace('#1',f.max);

					Swal.fire ({
						confirmButtonText 	: 'Tamam',
						text 				: msj
					});
				}

				fs.navcnt.arti++;

				$(nav).children('.eksi').removeClass('pause');
				return false;
			}

			fs.navcnt.arti = 0;
			$(nav).children('.eksi').removeClass('pause');
			
			_nc_out(arr,f,snc)
		}
		
		
		/*  
		@ nav count -  eksiltme islemi geldi  */

		if( f.islem == 'eksi' ){

			snc = f.val - f.oran;
		
			if( snc == f.min || snc < f.min ) {
				
				if(!$(this).hasClass('pause'))
				{

					$(this).addClass('pause');   // @ max icin arttirma yi kapa 
					_nc_out(arr,f,f.min) 		//  @ maximun degeri ver
				}

				/* 
				@ arttirma kapanmasi halinde ısrarla tıklanmaya devam edilmesi icin
				@ uyarı mesaj dondurulmek isteniyor ise gir */

				if( arr.msj && fs.navcnt.eksi > 0  ){
					
					var msj = arr.msj.eksi.replace('#1',f.min);

					Swal.fire ({

						confirmButtonText 	: 'Tamam',
						text 	: msj
					});
				}

				fs.navcnt.eksi++;

				$(nav).children('.arti').removeClass('pause');

				return false;
			}

			fs.navcnt.eksi = 0;
			$(nav).children('.arti').removeClass('pause');

			_nc_out(arr,f,snc);
		}

		return false;
	});

	
	/*
	@  nav count range
	@  butonlarından olusur */


	
	$(document).on('input','.count-range input',function(){

		let r = fs.navcnt.range;

		if(!r){
			
			let olay = $(this).hasClass('onda') ? 'onda' : 'sayi';
			
			fs.navcnt.range = {

				sayi : olay == 'sayi' ? '#'+$(this).attr('id') : '#'+$(this).prev().attr('id'),
	 			onda : olay == 'onda' ? '#'+$(this).attr('id') : '#'+$(this).next().attr('id'),	
	 			js   : $(this).parent().attr('js'),
	 			olay : olay
			}
	 	}
	 	
	 	if ( r.olay=='sayi' ) { 

			_nc_range_onda(r.onda,r.sayi)
		}


		if ( r.olay=='onda' ) {
			
			let n = $(r.sayi).val().split('.')[0]+'.'+$(this).val();
			$(r.sayi).val(n);
		}

		if(r.js){
			
			eval(r.js+'(r.olay)');	
		}
	
	})

	$(document).on('blur touchend','.count-range input',function(){
		
		nav_count('reset');
	})
}





/* 
 @ Nav Count - Range Barı Onda 
 @ Degisen fiyat sonrası onda maksimun ayarını formatlar */

function _nc_range_onda(onda,sayi){

	const max = $(sayi).attr('max').split('.');
	const num = $(sayi).val().split('.');
	
	if(!num[1]) return false;

	$(onda).val(num[1].length == 1 ? num[1]+'0' : num[1])

	if(num[0]==max[0]){ 
		
		$(onda).attr('max',max[1]);
	}
	else{

		$(onda).attr('max',99);	
	}	
}

/* 
 @ Nav Count - Out
 @ Arti eksi degeri degisiklik sonrasi input, html ve json degiskenleri formatlar  */

function _nc_out(arr,f,snc){
	
	let val = ( arr.range || arr.type != 'money') ? snc : nFor(snc,f.onda);
	$(arr.field).val(val);

	if(arr.out){
		
		let out = arr.type=='money' ? nFor(snc) : snc;
		$(arr.out).html(out)	

		//console.log(out);
	}

	if(arr.js){

		let j = { val:snc }; if(arr.id) j.id = arr.id;
		console.log(j);
		eval(arr.js+'(j)');
	}

	if(arr.range){

		_nc_range_onda(f.range.onda,arr.field);	
	}
	
	fs.navcnt.temp=0;
}




/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/* @ nav select : select formu sıralı kontrol eden navigasyon  */

function nav_select(){

	
	$(document).on("click",'nav.select button',function(event){
		
		event.preventDefault();
		
		var nav,arr,snc;

		nav = $(this).parent();
		arr = $(nav).data('set');

		var f = {
			islem 	: $(this).attr('rel'),
			val 	: $(arr.field).val(),
		};

		if ( f.islem =='next' ){

			snc = $(arr.field+' option[value='+f.val+']').next('option');
		}
		else{

			snc = $(arr.field+' option[value='+f.val+']').prev('option');
		}

		if ( snc.length==0 ) return false;

		snc = $(snc).attr('value');
			
		$(arr.field).val(snc);

		if(arr.js) eval(arr.js+"()");

		

	});
}

/* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
@  Madal */

fs.modal = { 
	last 		: { box:false, tab:9 },
	tab 		: {},
	box 		: {},
	set 		: {
		
		'urun' 		: { name:'urun', 	js: true, id:true, key:true, before:'_mu_before(s)' },
		'cek' 		: { name:'cek',  	js: true, id : true },
		'cek-add' 	: { name:'cek-add', js: true },
		'cek-banka' : { name:'cek-banka',	js:true  },
		
		'prms' 	: { name:'prms',js:true,on: false,  }, // promosyon
		'numu' 	: { name:'numu',js:true,on: false,  }, // numune
		'arac' 	: { name:'arac',js:true,on: false,  }, // arac
	},
	prev  		: false,
	next  		: false,
	temp 		: { prev:[] , next:[]}
	
};


function modal(){
	

	$(document).on('click','.modal-prev', function(e){
		
		// let s = $(this).data('modal');
		// if( s.before) return false;

		fs.modal.prev = true;

		_modal_of('prev');
	})


	$(document).on('click','.modal-next', function(e){
		
		let s = $(this).data('modal');

		if( s.before) return false;

		fs.modal.next = true;
		_modal_of('next');
	})


	$(document).on('click','.modal-close', function(e){
		
		_modal_of();
	})


	$(document).keydown(function(e){
		
		if( e.keyCode==27 ){ 
			
			_modal_of();
		}
	})


	$(document).on('click','.modal-prev,.modal-next,.modal-show,.modal-link a,.modal-list > *', function(event){
	
		if(!app.session && !app.guest) { session(); return false; }

		// linki oldur
		event.preventDefault();

		// e: element, s: set ayarlari
		let e,s,sa,sb;

		// this element
		e = $(this);

		// s : modal set ayarlari data-modal al 
		s = $(e).data('modal');
		
		// child ta touch hareket varsa iptal
		if(fs.touchs) return false;


		// next prev islem ise al

		let prev = $(e).hasClass('modal-prev') ? true : false ;
		let next = $(e).hasClass('modal-next') ? true : false ;

		fs.modal.prev = prev;
		fs.modal.next = next;


		// edit mod acik ise iptal

		if( !prev && !next ){

			if(fs.app.edit && (!s || ( s && !s.edit ))) return false;
		}
	
		// modal action 

		let action = false ;

		action =  prev ? 'prev' : ( next ? 'next' : action);
		action = !action && $(e).hasClass('modal-show') ? 'show' : action ;
		action = !action && $(e).parent().hasClass('modal-list') ? 'list' : 'link';

		// s : modal set ayarlari data-modal al 

		s = (!s && action == 'list' ) ? $(e).parent().data('modal') : s;
		

		// s : extend bagla

		s = s && s.extend ? fs.modal.set[s.extend] : s;
		
		// alt list modallar da extend set bagi araniyor ise gir

		if( (action=='list' || action=='link') && $(e).attr('set') ) {
		
			let _extend ; 

			_extend = $(e).attr('set');
			_extend = fs.modal.set[_extend] ? Object.assign({},fs.modal.set[_extend]) : $('.set-'+_extend).data('modal');
 			
 			// this click'de data-modal var ise onu extend modal ile merge et 

 			if(_extend) s = _modal_set_merge(e,s,_extend); else {

 				console.log('error: extend bagi bulunamadi');
 			}
		}
	
	
		// attr modal
		
		if(!s ){
		
		
			let _s = _modal_set_find('modal',e,action);

			s =  _s ? ( fs.modal.set[_s] ? Object.assign({},fs.modal.set[_s])  : { name : _s } ) : false;
			
			if(s) s = _modal_set_merge(e,null,s);

		}


		// prev modal

		if( !s.name ){

			if( prev ) {

				let p = fs.modal.temp.prev;

				p  = p.length > 0 ? p[(p.length-1)] : false ;
				s  = s ? { ...s, ...p} : p;
			}
		}

		//console.log(s);
		
		if(!s.prev && !s.next){

			if(prev) s.prev = true;
			if(next) s.next = true; 
		}

	

		//console.log(s);
		if( s.before ) { if ( !eval(s.before) ) return false; else { if( prev || next ) _modal_of(prev ? 'prev' : 'next') } }
		if( s.openit ) { if ( !eval(s.openit) ) return false; else { if( prev || next ) _modal_of(prev ? 'prev' : 'next') } }

		
		if(!s) { 
			
			console.log('error : modal set bos');
			return false 
		}


		if ( !s.ajax ){

			_modal_on(s); 
		}
		else {

			// modal ajax content ise
			
			var ajxLoad,ajxModal,ajxTime;
			
			ajxLoad   = '#modal-ajax .data';
			ajxModal  = '#modal-ajax';
			ajxTime   = 0;


			$(ajxModal).addClass('load');

			if( !$('html').hasClass('on-modal') ){ 
			
				_modal_on(s);
			}
			else {

				$(ajxLoad).slideUp('fast');	
				ajaxTime = 500;
			}

			var prefix = str_pos($(e).attr('href'),'ttp://')? '' : set.page.url ;

			window.setTimeout(function(){

				$(ajxLoad).html('');

				$.get(prefix+$(e).attr('href'),{ ajax:true, modal:true },function(data) {
					
					$(ajxLoad).html(data);
					
					window.setTimeout(function(){
						
						$(ajxLoad).slideDown('fast');		
						$(ajxModal).removeClass('load');

					},500);

				})	

			},ajaxTime);
			
		}


	});

}

function _modal_set_find(f,e,action){

	let s = false;

	if( f =='modal' ){

		s = $(e).attr('modal') ;
		s = (!s && action == 'list' ) ? $(e).parent().attr('modal') : s;
		s = (!s && action == 'link' ) ? $(e).parent().attr('modal') : s;
		s = (!s && action == 'link' ) ? $(e).parent().parent().attr('modal') : s;
		s = (!s && action == 'link' ) ? $(e).parent().parent().parent().attr('modal') : s;

		return s;
	}

}


function _modal_set_merge(e,s,obj){

	if( obj.attr ){ 

		$.each( obj.attr, function( key, v ) {
		
			if( v == 2 ) obj[key] = $(e).parent().parent().attr(key);
			if( v == 1 ) obj[key] = $(e).parent().attr(key);
			if( v == 0 ) obj[key] = $(e).attr(key);

		});

			delete obj.attr;
	}

	if( obj.key ){
		
		let v = obj.key;

		if( typeof(v)=='object' ){
			
			if( v.u == 2 ) obj.key = $(e).parent().parent().attr(v.t);
			if( v.u == 1 ) obj.key = $(e).parent().attr(v.t);
			if( v.u == 0 ) obj.key = $(e).attr(v.t);	
		}
		else{

			obj.key = $(e).attr('key');	
		}
		
		obj.key = obj.key ? obj.key: false; 
	}

	if( obj.id ) obj.id = $(e).attr('id');	
	

	s = s ? { ...s, ...obj} : obj;

	return s;

}


function _modal_on(s){

	let m = Object.assign({}, fs.modal);

	let name =  s.name ? s.name : 'ajax'; 	
	let span = '#modal-'+name; 		

	if( s.of == 'last' ) _modal_of();		

	if( fs.modal.box[name] ) {
		
		return false; 
	};

	if( Object.keys(m.tab).length == 0 ) {
		
		//$('html').addClass('on-modal');					
		$('html').addClass(s.css);					
	}

	s.open = true;
	
	m.last.tab 			= m.last.tab+1;
	m.tab[m.last.tab] 	= name;
	m.box[name]  	   	= s;
	m.last.box			= s.name;

	if( m.last.tab > 10 ){
		
		$('#modal-'+m.tab[(m.last.tab-1)]).addClass('blur');
	}

	$(span).addClass('on').attr('index',m.last.tab);
	
	clearTimeout(one_time);
	
	var one_time = window.setTimeout(function(){
			
		window.setTimeout(function(){
			$('html').addClass('on-modal');
		},20)

		$(span).addClass('on-start');
	},65)

	if( name == 'ajax' && s.format ) { 

		$(span).addClass('f-'+s.format);
	}

	if(s.js) {
		
		if (s.js === true ) eval('_modal_'+(name.replace('-','_'))+'_js(s)'); else  eval(s.js);
	}


	if(s.prev){

		fs.modal.temp.prev = unArry(fs.modal.temp.prev,(fs.modal.temp.prev.length-1),true);
	}


	fs.modal.prev = false;
	fs.modal.next = false;
}


function _modal_of(get){
	
	var m  = Object.assign({}, fs.modal);
	
	if ( $('#gallery').hasClass('pswp--open') ) return false;

	if (Swal.isVisible()) return false;

	if (!m.last.box) return false;
	
 	let name 	= get && get.modal ? get.modal : m.last.box
	let path 	= '#modal-'+name;
	let e 		= m.box[name];
	
	$(path).addClass('on-close');

	if( m.next){ 

		let obj =  Object.assign({},m.box[name]);

		delete obj.open;
		delete obj.prev;
		delete obj.next;

		m.temp.prev.push(obj);
	}

	
	if( !m.next && !m.prev ){

		m.temp.prev = [];
		m.temp.next = [];
	} 
	
	m.prev = false;
	m.next = false;
	
	if( Object.keys(m.tab).length == 1 ) {
		
		$('html').removeClass('on-modal m-in m-'+name);		
	}
	
	
	
	if( name == 'ajax') $(path+' .data').html('');

	e.open = false; 
	
	fs.modal.box[name] = e;


	if(e.js){
		
		if (e.js === true ) { eval('_modal_'+(name.replace('-','_'))+'_js(get)'); } else  eval(e.js);
	}

	delete m.box[m.last.box];
	
	var tab = m.last.tab;

	if( tab > 9 ) delete m.tab[m.last.tab];

	tab = tab-1;

	m.last.box = tab > 9 ? m.tab[tab] : false ;
	m.last.tab = tab > 9 ? tab		  : 9 ; 


	$('#modal-'+m.tab[tab]).removeClass('blur');

	fs.modal = m;

	clearTimeout(of_time);

	var of_time  = window.setTimeout(function(){
		$(path).removeClass('on on-close on-start');
	},400)
}
fs.touchs = false;


fs.dt 	= {
	
	e 					: '.ul-table',
	li 					: '.ul-table .tbody > li:not(.of)',
	for 				: '.ul-table.on-chk.t-1 .tbody > li:not(.of)',
	id 					: '.ul-table .tbody > li[id]',
	checkbox  			: '.ul-table .tbody > li:not(.of) input.check',
	td 					: { ctrl:true, kdv:false, adet:'brm',name:false },
	checkeds 			: { tot:0,val:[]},
	action				: {
		unSelect		: { text : false, button: false, callback:false },
		unRecord		: { text : false, button: false, callback:false },
		unSwipeRecord	: { callback:false },
		publish 		: { text : false, button: false, callback:false },
		trash 			: { text : false, button: false, callback:false,width:false },
		rel 			: { js: false }
	},

	touch 				:{
		e           	: '.ul-table .touch-us',
		tutsec 			: {
			open 		: false,
			stat 		: false,
			time 		: false,
		},
		cekbar 			: false,
		ceksil 			: {
			open 		: false, 	
		    as          : false,
		    size 		: 400, 
		    stat        : 'pull',
		    text        :  {
		        e       : '.t-start > .touch-as .t-ceksil span',
		        pull    : 'Silmek için önce sola çekin',
		        stop    : 'Yeterli ! Silmeyi tamamlamak için bırakın',
		    }
		}	
	}
	
	//'on_view' 	: 1 ,
	//'remove' 		: '.ul-table .rmv a',
	//'thumb' 		: '.ul-table .thumb',
	//'views' 		: { 1 : 'Tekli Satır', 2 : 'Ufak Blok', 3 : 'Büyük Blok' },
	//'nav_head' 	: '.bc-head .dt-ctrl',
	//'nav_side' 	: '.bc-side',
}


function table(){
	
	var dt = fs.dt ; 

	fs.dt.touch.ceksil.size = ((set.win.x*60)/100);

	fs.dt.touch.ceksil.open = $('.ul-table').hasClass('f-ceksil') ? true : false;
	fs.dt.touch.tutsec.open = $('.ul-table').hasClass('f-tutsec') ? true : false;

	if(fs.run.table) return false;
	fs.run.table = true;



	/* --  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  -- */
	/* @ Gallery  */	

	// $('.ul-table').lightGallery({selector : '.thumb a',share: false,thumbnail: false,autoplay:false,download:false,autoplayControls:false});
	


	/* --  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  -- */
	/* @  li label for click */	
	

	$(document).on("click",dt.for,function(e){
		
		

		$('#c-'+$(this).attr('id')).click();

	})



	/* --  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  -- */
	/* @  td kdv */	

	$(document).on('click','.e-tdKdv',function(e){

		
		if($(dt.e).hasClass('no-kdv')) return false;

		var o = dt.td;
		

		if(o.kdv) { 
			
			$('.cxt-edit .e-tdKdv').text('MwSt\'siz Toplamı Göster');
			$('.dt-tutar').removeClass('of-kdv');
			$(dt.e).removeClass('of-kdv');
			
			o.kdv= false;
		}
		else {
			
			$('.cxt-edit .e-tdKdv').text('MwSt Dahil Toplam Göster');
			$('.dt-tutar').addClass('of-kdv');
			$(dt.e).addClass('of-kdv');
			
			o.kdv= true;
		}

		e.preventDefault();
		return false;
	})


	$(document).on('click','.e-tdBrm',function(e){

		
		// if($(dt.e).hasClass('of-brm')) return false;

		var o = dt.td;
		
		if( o.adet == 'brm') { 
			
				
			$(dt.e).addClass('of-brm');
			
			o.adet = 'urn' ;
		}
		else {
			
			$(dt.e).removeClass('of-brm');
			o.adet= 'brm';
		}

		e.preventDefault();
		return false;
	})



	


	/* --  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  -- */
	/* @  td edit's */	

	$(document).on('click','.e-tdEdit',function(e){
		
		// console.log( getCookie(fs.dt.td.name+'_ctrl'));
		// console.log( fs.dt.td.edit );
		// fs.dt.td.edit = cookie != fs.dt.td.edit ? getCookie(fs.dt.td.name+'_edit') : fs.dt.td.edit ;
		
		let cookie;

		cookie = getCookie(fs.dt.td.name+'ctrl');
		cookie = (cookie=='') ? 'on' : cookie ;

		var o = fs.dt.td;
		
		console.log(o.ctrl);

		o.ctrl = o.ctrl ? 'on' : 'of';

		console.log(o.ctrl);
		console.log(cookie);


		o.ctrl = cookie != o.ctrl ? cookie : o.ctrl;

		

		if(o.ctrl == 'on'){ 
			
			$('.cxt-edit .e-tdEdit').text('Adet Kontrolünü Aç');
			
			setCookie(o.name+'ctrl','of');		
			// o.ctrl= false;

			$(dt.e).addClass('of-edit');
			fs.dt.td.ctrl = false;
		}
		else {
			
			$('.cxt-edit .e-tdEdit').text('Adet Kontrolünü Kapat');
			$(dt.e).removeClass('of-edit');
			
			setCookie(o.name+'ctrl','on');
			// o.ctrl= true;

			fs.dt.td.ctrl = true;
		}

		e.preventDefault();
		return false;
	})



	/* --  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  -- */
	/* @  filter controls */
	
	$('.dtc-filter').on("click",function(){

		if( !$('.dt-filter').hasClass('on') ) {
			//_tcs_on('dt-filter');
		}
		else {
			//_tcs_of();
		}
	})



	/* --  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  -- */
	/* @  view mod control */

	$('.dtc-view a').on("click",function(){
		
		var a,b,c,o;
		
		o 	=  $(this).hasClass('next') ? 'next' : 'prev';
		a   =  fs.dt.on_view;
		b   =  o == 'next' ? a+1 : a-1;
		c   =  dt.views[b];

		
		$(dt.e).removeClass('t-'+a);
		$(dt.e).addClass('t-'+b);
		
		$('.dtc-view .sum').text(c);
		fs.dt.on_view = b;

		if( b == 1 ) { $('.dtc-view .prev').addClass('off'); } else { $('.dtc-view .prev').removeClass('off'); }
		if( b == 3 ) { $('.dtc-view .next').addClass('off'); } else { $('.dtc-view .next').removeClass('off'); }

	});


	/* --  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  -- */
	/* @  dtc rel */


	$(document).on("click",".dtc-rel-reset",function(){
		
		$('.dtc-rel a').removeClass('on');
		$('.dt-list').attr('rel','');
		$('.dt-list').attr('sort','');

		if( fs.dt.action.rel.js) eval(fs.dt.action.rel.js+'("reset")');

	});


	$(document).on("click",".dtc-rel a",function(){
		

		$('.dtc-rel a').removeClass('on');
		$(this).addClass('on');

		let e = $(this);

		
		let sort  = $(this).attr('sort') ? $(this).attr('sort') : false ;
		let rel   = $(this).attr('rel')  ? $(this).attr('rel')  : false ;
		
		if(sort) { $('.dt-list').attr('sort',sort); $('.dt-list').attr('rel','') }
		if(rel)  { $('.dt-list').attr('rel',rel);   $('.dt-list').attr('sort','') }

		let get = rel ? rel : sort;

	
		if(fs.dt.action.rel.js) eval(fs.dt.action.rel.js+'(get,e)');

	});


	/* --  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  -- */
	/* @  all & un selects control */

	$(document).on("click",".dtc-checks",function(){
		
		if(!$(this).hasClass('on')){

			_dt_on_select();
		}
		else{
			
			_dt_of_select();
		}
	});



	/* --  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  -- */
	/* @ record remove */ /*

	$(document).on('click',dt.remove,function(){
		
		var v = dt.action.unRecord;

		swal({

		  text 		: v.text  ? v.text 	 :  "Bu kaydı silmek istediğiniz den emin misiniz ?",
		  buttons 	: v.button ? v.button :  true,
		  dangerMode : true

		})
		.then((willDelete) =>{
			if(v.callback) eval(v.callback+'()');
		});
	}) */


	_dt_select_remove();
	_dt_record_check();
	_dt_swipe_remove();
	_dt_trash_remove();
	_dt_publish_on();
	_dt_publish_of();
	
}






/* --  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  -- */
/* @ publish active */ 	

function _dt_publish_on(){

	var dt = fs.dt;

	$('.dtc-on-publish').on("click",function(){
		
		
		Swal.fire({
	  
			confirmButtonText 	: v.button ? v.button[1] : true,
			cancelButtonText  	: v.button ? v.button[0] : true,
			text 				: v.text ? v.text : "Seçilen kayıtları yayınlamak istediğiniz den emin misiniz ?",
			width 				: 458,
			reverseButtons 		: true,
			showCancelButton	: true,
			customClass 		: {
				confirmButton 	: 'remove'
			}
		})
		.then((result) => {
			
				if (result.value)  if(v.callback) eval(v.callback+'()');
		});

		
	})
}


/* --  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  -- */
/* @ publish passive */ 

function _dt_publish_of(){

	var dt = fs.dt;

	$('.dtc-no-publish').on("click",function(){

		Swal.fire({
	  
			confirmButtonText 	: v.button ? v.button[1] : true,
			cancelButtonText  	: v.button ? v.button[0] : true,
			text 				: v.text ? v.text : "Seçilen kayıtlar yayından kaldırmak istediğiniz den emin misiniz ?",
			width 				: 458,
			reverseButtons 		: true,
			showCancelButton	: true,
			customClass 		: {
				confirmButton 	: 'remove'
			}
		})
		.then((result) => {
			
				if (result.value)  if(v.callback) eval(v.callback+'()');
		});

		
	})
}



/* --  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  -- */
/* @ select remove */ 

function _dt_select_remove(){
	
	var dt = fs.dt;

	$(document).on('click','.dtc-remove',function(){

		var c = dt.checkeds.tot;

		if( c.tot !='all' &&  c.tot < 1) return false;

	
		var v = dt.action.unSelect;

		
		Swal.fire({
	  
			confirmButtonText 	: v.button ? v.button[1] : 'Sil',
			cancelButtonText  	: v.button ? v.button[0] : 'Vazgeç',
			text 				: v.text ? v.text : "Seçilen kayıtları silmek istediğiniz den emin misiniz ?",
			width 				: 320,
			reverseButtons 		: true,
			showCancelButton	: true,
			customClass 		: {
				confirmButton 	: 'remove',
				popup 			: 'sw-ios sw-note sw-confirm'
			}
		})
		.then((result) => {
			
			if (result.value)  if(v.callback) eval(v.callback+'()');

		});

		
		/*
		swal({
		  text 			: v.text ? v.text :  "Seçilen kayıtları silmek istediğiniz den emin misiniz ?",
		  buttons 		: v.button ? v.button :  true,
		  dangerMode	: true,
		})
		.then((willDelete) => {
			if (willDelete) {
				
				if(v.callback) eval(v.callback+'()');
			}
		});
		*/
	})
}



/* --  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  -- */
/* @ trash remove */

function _dt_trash_remove(){
	
	var dt = fs.dt;

	$(document).on('click','.dtc-trash',function(){
		
		var v = dt.action.trash;

		Swal.fire({
	  
			confirmButtonText 	: v.button ? v.button[1] : 'Hepsini Sil',
			cancelButtonText  	: v.button ? v.button[0] : 'Vazgeç',
			text 				: v.text ? v.text : "Tüm içeriği silmek istediğinizden emin misiniz ?",
			width 				: v.width ? v.width : 320,
			reverseButtons 		: true,
			showCancelButton	: true,
			customClass 		: {
				confirmButton 	: 'remove',
				popup 	: 'sw-ios sw-note sw-confirm',

			}
		})
		.then((result) => {
			
				if (result.value)  if(v.callback) eval(v.callback+'()'); else return false;
		});
	})
}



/* --  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  -- */
/* @ record checkbox click  */

function _dt_record_check(){

	var dt = fs.dt;
	

	$(document).on("click",dt.checkbox,function(){

		var check = fs.dt.checkeds; 
		var v 	  = $(this).val();
		var e 	  = $(this);
		
			

		if( $(this).is(':checked') ){
			
			$( '#'+v).addClass('checked');
			
			if( check.tot==0 ) {
				
				$(fs.dt.e).addClass('checked-on');
			}
			
			check.tot = check.tot + 1;
			check.val.push(v);
			
			$('.dtc-checkeds').removeClass('hidden');
		}
		else {

			$( '#'+v).removeClass('checked');
			
			check.val = unArry(check.val,v);
			check.tot = check.tot - 1;
			
			if( check.tot==0 ) { 
				
				$('.dtc-checkeds').addClass('hidden');
				$(dt.e).removeClass('checked-on');
			}
			
		}

		fs.dt.checkeds = check;

		//_dt_checked_bar();

	});
}



function _dt_on_select(){
	
	
	var dt = fs.dt;

	$(dt.e+' .tbody > li:not(.of) .mask-check').addClass('on');
	$(dt.e).addClass('checked-on');
	$(dt.li).addClass('checked');
	
	$(dt.checkbox).prop('checked', true);
	
	fs.dt.checkeds.tot = "all"; // $(dt.li).size();
	fs.dt.checkeds.val = "all";  
	
	$('.dtc-checks .in').text('Seçimi Kaldır');	
	$('.dtc-checks').addClass('on');	

	// $(dt.nav_head+' .dtc-checks').addClass('on');
	// $(dt.nav_head+' .dtc-checks').children('a').text('Hiçbirini Seçme');	

	// $(dt.nav_side+' .dtc-checks').addClass('on');
	// $(dt.nav_side+' .dtc-checks .in').text('Hiçbirini Seçme');	

	$('.dtc-checkeds').removeClass('hidden');

	_dt_checked_after();
	
}

function _dt_of_select(){

	var dt = fs.dt;

	$(dt.e+' .mask-check').removeClass('on');
	$(dt.e).removeClass('checked-on');
	$(dt.li).removeClass('checked');
	$(dt.checkbox).prop('checked', false);
	
	fs.dt.checkeds.tot = 0;
	fs.dt.checkeds.val = [];

	// check
	
	$('.dtc-checks .in').text('Hepsini Seç');
	$('.dtc-checks').removeClass('on');		
	
	//$(dt.nav_head+' .dtc-checks').removeClass('on');
	//$(dt.nav_head+' .dtc-checks').children('a').text('Hepsini Seç');	

	//$(dt.nav_side+' .dtc-checks').removeClass('on');
	//$(dt.nav_side+' .dtc-checks .in').text('Hepsini Seç');

	//_tcs_of();	

	$('.dtc-checkeds').addClass('hidden'); 

	_dt_checked_after();
	 
}

function _dt_checked_after(){
	
	$('.bc-side .dt-check blockquote b b ').text(fs.dt.checkeds.tot);

	if(fs.dt.checkeds.tot > 1){
		$('.bc-side .dt-check').addClass('cok');
	}
	else{

		$('.bc-side .dt-check').removeClass('cok');
	}
}


function _dt_checked_bar(){
	
	_dt_checked_after();

	if(fs.dt.checkeds.tot > 0){
		//_tcs_on('dt-check');	
	}
	else{
		//_tcs_of();		
	}
	
}

function _dt_td_chk(e){
	
	if(e) {

		$(fs.dt.e).addClass('on-chk');
	}
	else {
	
		$(fs.dt.e).removeClass('on-chk');
		_dt_of_select();
		fs.dt.checkeds.val = [];
		fs.dt.checkeds.tot = 0;
	}
}


function _dt_swipe_remove(){


	var j   = fs.dt.touch;
	var sil = fs.dt.touch.ceksil;
	var tut = fs.dt.touch.tutsec;
	
    $(j.e).swipe({
       	
       	
        swipeStatus:function(event, phase, direction, distance, duration, fingerCount){
            
          
            if(!fs.app.edit) {

            	var e = $(this);
			    
	            // -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
	            
	            if( phase=='start') {
	                
	                sil = fs.dt.touch.ceksil;
	                tut = fs.dt.touch.tutsec;

	                $(e).parent().addClass('t-start');
	                
	                sil.as = $(e).next();

					if(tut.open){
						
						clearTimeout(tut.time);

						tut.time = window.setTimeout(function(){ 
							
							console.log('edit'); 

							if( !fs.modal.last.box ) {

								_app_mod_edit()
							}

				   		},1000);
				   	}
	            }

	            
	            if( phase!='start') { clearTimeout(tut.time) }
				
				if(!sil.open) { return true } 


	            // -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
	           
	            if( phase=='move' &&  direction == 'left' ) { 

	            	$('html').addClass('back-gray');

					tut.stat  = false;
					fs.touchs = true;
		        }

				// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -

				
				fs.refresh = (phase=='move' && direction == 'left' && !fs.refresh ) ? false :  fs.refresh;

				if( phase=='end' || phase == 'cancel'  && fs.refresh) { 
				    
				    window.setTimeout(function(){ 
				        fs.refresh=true
				    },1000);
				}
				
				// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
	          
	            if( direction == 'left'){

	                //if( distance < ((set.win.x*60)/100)) {
	                if( distance < sil.size ) {
	                    
	                    if (sil.stat == 'stop') {
	                       
	                        window.setTimeout(function(){  $(sil.text.e).removeClass('fadeIn') },500)
	                        $(sil.text.e).text(sil.text.pull).addClass('fadeIn');
	                        $(sil.as).removeClass('t-end');
	                        
	                        sil.stat = 'pull';
	                    }
	                }
	                else{
	                    
	                    if (sil.stat == 'pull'){

	                        window.setTimeout(function(){ $(sil.text.e).removeClass('fadeIn') },500)
	                        $(sil.text.e).text(sil.text.stop).addClass('fadeIn');
	                        $(sil.as).addClass('t-end');
	                        
	                        sil.stat = 'stop';
	                    }
	                }
	                    
	                // -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -

	                if( phase!="end" ) $(e).css('left','-'+distance+'px');

					// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -

	                
	                if( phase=="end" ) {
	  
	                    $(e).css('left','-'+100+'%');

	                    var fn = fs.dt.action.unSwipeRecord.callback;
 
	                    if(fn) {
	                    	var p  = $(e).parent(); 
	                    	var id = $(p).attr('data-id') ? $(p).attr('data-id') : $(p).attr('id');
	                    	eval(fn+'(id)');
	                    }

	                    
						j.ceksil = sil;
						j.tutsec = tut;

	                    _dt_sr_end(e,j,phase);

						
	                }
	            	
	            	/* /   /   /   /   /   /   /   /   /   /   /   /   /   /   /   /   / */

	                if ( phase=="cancel" ) {
 
	                    $(e).css('left',0);
	                   
	                    j.ceksil = sil;
						j.tutsec = tut;

	                    _dt_sr_end(e,j,phase);
												
				    }
			    }
	        }
	    },
        allowPageScroll : 'vertical',
        threshold 		: sil.size
    });

}

function _dt_sr_end(e,j,phase){


	var sil = j.ceksil;
	var tut = j.tutsec;

	// json	 reset
	clearTimeout(tut.time);

	tut.stat = false;
	fs.touchs   = true;

	
	$(e).addClass('anim');


	window.setTimeout(function() { 
        
       	
       	// silme onay verildi ise

        if( phase == 'end'){
        	
        	$(e).parent().addClass('remove')
        }

        // dom reset
        $(fs.dt.touch.ceksil.as).removeClass('t-end');
        $(e).parent().removeClass('t-start'); 
        $('html').removeClass('back-gray');
        $(e).removeClass('anim'); 
		
		// json reset
       	sil.as = false
       	fs.touchs = false;
       	
       	j.ceksil = sil;
		j.tutsec = tut;

		fs.dt.touch = j;
		
    },320)
}

function _tema_form_box(){

	$(form.e).find('.notification button').click(function(){
		
		$(form.e).addClass('off');

		window.setTimeout(function(){
			$(form.e).removeClass('send-on nosent posted off');  
			$('html').removeClass(form.name+'-nosent');
			
			//screen(false);

   		},500);

	})
}