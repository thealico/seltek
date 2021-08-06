<?php 
	
	$set = array(
		'title' => '',
		'class' => 'product list',
		
		'cat'   => 'product',
		'sub' 	=> 'list',
		'mod' 	=> ''
	);

?>

<?php include('../inc/header.php') ?>
	
	<div class="head-bar row ns between">
		<div class="con flex yc	">
			<nav class="map-links">
				<ul>
					<li><a href="#">Home</a></li>
					<li class="on"><i>/</i><a href="#">Ürünler</a></li>
				</ul>
			</nav>
		</div>
	</div>


	<div class="base-body con">
		
		<div class="us py-35">
			
			<h1>Ürünler</h1>		

			<div class="word f-3 py-5">
				<p>Seltek Kalite Ölçüm ve Kontrol Sistemleri (QCS), 6 adede kadar tarama çerçevesi ve 24 sensör barındırabilir. Her tarayıcıda en fazla 6 sensör bulunabilir. Tarayıcılar, diferansiyel ölçüm çözümleri kullanan kritik süreçler için "aynı nokta ölçümü" modunda çalıştırılabilir. Tarayıcılar, ana CPU'ya ve birbirlerine bir Ethernet ağı üzerinden bağlanır. Elektronik, Beckhoff PLC'lere ve Beckhoff endüstriyel bilgisayarlarına dayanmaktadır. </p>
				<p>İnsan Makine Arayüzü, C# ve MS SQL'e dayanmaktadır. Kapsamlı raporlama seçenekleri mevcuttur. Sistemler, piyasadaki en iyi tedarikçilerden temin edilen hazır bileşenlerden yapılmıştır ve müşteriler gerçek uzun vadeli tedarik garantisine sahiptir.</p>
			</div>
			

			<?php
		
				$slick 			=  [

					'has_dots' 	=> true,
					'has_ctrl' 	=> true,
					'infinite' 	=> true,
					'autoplay' 	=> false,
					'dots' 	 	=> [
						'htm'  	=> 'i'
					]
				];
			?>

			<div class="cover my-25 slide f-1" id="slide-c"  data-set='<?php echo json_encode($slick) ?>'>
				
				<div class="list" id="c-list">
					
					<?php for ($i=0; $i < 3 ; $i++):?>
					<a href="#" >
						
						<div class="row ns">
							<div class="sol col-4 flex mc">
								<div class="w-80">
									<h5 class="mb-10">Hakkımızda</h5>
									<blockquote>Hakkımızda. En son haberleri okuyun, etkinliklerimize göz atın. İdealinizdeki kariyeri bulun.</blockquote>
								</div>
							</div>

							<div class="sag col">
								<figure>
									<img src="<?php echo path('img/about-cover.jpg') ?>" alt="" />
								</figure>
							</div>
						</div>
					</a>

					<?php endfor ?>

				</div>

				<div class="con">
					<nav class="dots plb t-2" id="c-dots"></nav>
				</div>

				<nav class="ctrl f-2 min">
					<a href="#" id="c-prev" class="prev plb"><i class="ss-gizmo ss-left"></i></a>
					<a href="#" id="c-next" class="next prb"><i class="ss-gizmo ss-right"></i></a>
				</nav>

			</div>

			
		</div>

		
		<div class="as row gut-2 py-50">
				
			<div class="sol col-8">
				
				<section class="sec-posts f-4 c-mask-ratio crop">
					<?php for ($i=0; $i < 6 ; $i++):?>
					<article class="col">
						<a href="#" class="row gut-2">
							<figure>
								<img src="<?php echo path('img/16.9.png')?>" class="mask"/>
								<img src="<?php echo path('img/bos.16.9.png')?>" class="real"/>
							</figure>
							<div class="col">
								<h3 class="mb-10">Design and Engineering</h3>
								<summary class="mb-5">Embed quality into product design and engineering to ensure component manufacturability and downstream production productivity.</summary>
								<span class="mores uf-9">More <i class="ss-gizmo  ss-right"></i></span>
							</div>
						</a>
					</article>
					<?php endfor ?>
				</section>

			</div>
			
			<div class="sag col-4 pl-25">
				
				<section class="sec-posts f-1 mask-ratio crop">
					<article class="col">
						<a href="#">
							<h3 class="mb-10">Çözümler</h3>
							<summary class="mb-20">Hexagon Manufacturing Intelligence'ın sektörünüze, uygulamanıza, tesisinize ve benzersiz iş gereksinimlerinize özel üretim çözümleri sağlamak için üreticilerle nasıl işbirliği içinde çalıştığını öğrenin.</summary>
							<span class="more"><span>More <i class="ss-gizmo  ss-right"></i></span><hr/></span>
						</a>
					</article>
				</section>

				<section class="sec-posts f-1 mask-ratio crop	">
					<article class="col">
						<a href="#">
							<figure class="mb-20 ">
								<img src="<?php echo path('img/16.9.png')?>" class="mask"/>
								<img src="<?php echo path('img/bos.16.9.png')?>" class="real"/>
							</figure>
							<h3 class="mb-10">Design and Engineering</h3>
							<summary class="mb-50">Embed quality into product design and engineering to ensure component manufacturability and downstream production productivity.</summary>
							<span class="more"><span>More <i class="ss-gizmo  ss-right"></i></span><hr/></span>
						</a>
					</article>
				</section>

				

			</div>
		</div>

	</div>






<?php include('../inc/footer.php') ?>