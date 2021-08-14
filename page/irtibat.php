<?php 
	
	$set = array(
		'title' => 'Irtibat',
		'class' => 'contact post-grup-1',
		
		'cat'   => '',
		'sub' 	=> '',
		'mod' 	=> 'contact'
	);

?>

<?php include('../inc/header.php') ?>
	
	<div class="head-bar row ns between">
		<div class="con flex yc	">
			<nav class="map-links">
				<ul>
					<li><a href="#">Home</a></li>
					<li class="on"><i>/</i><a href="#">Irtibat</a></li>
				</ul>
			</nav>
		</div>
	</div>


	<div class="base-body con">
		
		<div class="us py-35">
			
			<div class="body-head f-3 pb-45">
				<h1>İrtibat</h1>		
				<p>You may contact us by the following phones and addresses.</p>				
			</div>


			<form name="msj" class="frm" method="post" action="" >
				
				<ul>
					
					<li class="ln row">

						<div class="fe col" id="fe-name">
							<input type="text" class="ft" name="name" placeholder="Ad Soyad" />
						</div>

						<div class="fe col" id="fe-mail">
							<input type="email" class="ft" name="mail" placeholder="E Posta" />
						</div>

						<div class="fe col" id="fe-tels">
							<input type="text" class="ft" name="tels" placeholder="Telefon" />
						</div>

					</li>

					<li class="ln">
						<div class="fe">
							<textarea name="mesaj" placeholder="Mesajınızı buraya yazabilirsiniz" rows="6" class="field rows locked"></textarea>
						</div>
					</li>

				</ul>

				<nav>
					<input type="submit" class="btn d r-6" value="Gönder">
				</nav>

			</form>
			
		</div>

		
		<div class="as pt-35 pb-65">
			
			
			<section class="row gut-2">
				
				<div class="col">
						
					<div class="sec-adres">
						<div>
							<h3>Seltek Factory</h3>
							<address>Çerkeşli İmes OSB. İmes Bulvarı No:8, 41455 Dilovası / Kocaeli <a href="https://www.google.com/maps?ll=40.853802,29.581615&z=12&t=m&hl=tr-TR&gl=TR&mapclient=embed&cid=4238722489979591079" target="_blank" tip="Haritada Göster" ><i class="ss-pika ss-location"></i></a></address>
							<ul>
								<li><b>Phone:</b> <a href="tel:902625023010">+90 (262) 502 3010</a></li>
								<li><b>Fax:</b>   <a href="tel:902625022430">+90 (262) 502 2430</a></li>
								<li><b>E-mail:</b>  info@seltek.com</li>
							</ul>
						</div>
						
						<a href="https://www.google.com/maps?ll=40.853802,29.581615&z=12&t=m&hl=tr-TR&gl=TR&mapclient=embed&cid=4238722489979591079" target="_blank">
							
							<img src="<?php echo path('img/cm1.png')?>" tip="Haritada Göster" />
							
						</a>

					</div>

				</div>
				<div class="col">
					
					<div class="sec-adres">
						
						<div>
							<h3>Singapore Office</h3>
							<address>60 Kaki Bukit Pl, Eunos TechPark #02-19 Singapore 415979 <a href="https://www.google.com/maps?ll=1.345389,103.905951&z=14&t=m&hl=tr-TR&gl=TR&mapclient=embed&cid=17472689178548224318" tip="Haritada Göster" target="_blank"><i class="ss-pika ss-location"></i></a></address>
							<ul>
								<li><b>Phone:</b> <a href="tel:6567486911">+65 6748 6911</a></li>
								<li><b>Fax:</b>   <a href="tel:6567486912">+65 6748 6912</a></li>
								<li><b>Email:</b>  info@seltek.com</li>
							</ul>
						</div>

						<a href="https://www.google.com/maps?ll=1.345389,103.905951&z=14&t=m&hl=tr-TR&gl=TR&mapclient=embed&cid=17472689178548224318" target="_blank">
							<img tip="Haritada Göster"  src="<?php echo path('img/cm2.png')?>"/>
						</a>

					</div>

				</div>
			</section>
			

		</div>

	</div>






<?php include('../inc/footer.php') ?>