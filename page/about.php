<?php 
	
	$set = array(
		'title' => 'Hakkında',
		'class' => 'about',
		'cat'   => '',
		'sub' 	=> '',
		'mod' 	=> 'about'
	);

?>

<?php include('../inc/header.php') ?>
	
	<div class="head-bar row ns between">
		<div class="con flex yc	">
			<nav class="map-links">
				<ul>
					<li><a href="#">Home</a></li>
					<li class="on"><i>/</i><a href="#">Hakkımızda</a></li>
				</ul>
			</nav>
		</div>
	</div>


	<div class="base-body con">
		
		<div class="us py-35">
			
			<div class="body-head f-1">
				<h1>Hakkımızda</h1>		
				<summary class="py-5">Seltek is a leading manufacturer of measurement and control systems for flat products industries. Special sensors based on isotope and x-ray sources are used to measure thickness, basis weight or ash content.</summary>
			</div>

			<div class="cover row ns my-30">
				
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
			
			<div class="word f-2">
				<p>Seltek is a leading manufacturer of measurement and control systems for flat products industries. Special sensors based on isotope and x-ray sources are used to measure thickness, basis weight or ash content. Near infrared (NIR) sensors are used to measure moisture and thickness. Microwave sensor is used to measure moisture. Contacting and non-contacting caliper sensors are used to measure thickness. Laser sensors are also used to measure thickness in certain processes; sometimes in combination with other complimentary sensors.</p>
				<p>All sensors are products of state of the art technology. Scanning frames, which carry these sensors along the width of the web are extremely robust and reliable.</p>
				<p>Beckhoff® PLC is at the center of the electronics used together with a Windows® PC. Off-the-shelf components, which are procured from the best suppliers on the market make the systems very reliable, secure and economical to maintain. System availability is excellent. Remote troubleshooting is available together with fast personal support.</p>
				<p>With precise, accurate and reliable systems, customers can monitor their process with ease and control it manually or automatically. Being very competitively priced, the return on investment on Seltek systems is usually very short even for small scale operations.</p>
			</div>

		</div>

		
		<div class="as row gut-2 py-70">
				
			<div class="sol col-8">
				
				<section class="sec-posts f-4 c-mask-ratio crop">
					<?php for ($i=0; $i < 4 ; $i++):?>
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
				
				<section class="sec-posts h f-1 mask-ratio crop	">
					<article class="col">
						<a href="#">
							<figure class="mb-20 ">
								<img src="<?php echo path('img/16.9.png')?>" class="mask"/>
								<img src="<?php echo path('img/bos.16.9.png')?>" class="real"/>
							</figure>
							<h3 class="mb-10">Design and Engineering</h3>
							<summary class="mb-50">Embed quality into product design and engineering to ensure component manufacturability and downstream production productivity.</summary>
							<span class="more"><span>Learn More <i class="ss-gizmo  ss-right"></i></span><hr/></span>
						</a>
					</article>
				</section>

				

			</div>
		</div>

	</div>






<?php include('../inc/footer.php') ?>