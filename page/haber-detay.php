<?php 
	
	$set = array(
		'title' => 'Freedom to measure with Volvo - Haber',
		'class' => 'haber detay post-detay f1',
		
		'cat'   => 'haber',
		'sub' 	=> '',
		'mod' 	=> 'detay'
	);

?>

<?php include('../inc/header.php') ?>
	
	<div class="head-bar row ns between">
		<div class="con flex yc	">
			<nav class="map-links">
				<ul>
					<li><a href="#">Home</a></li>
					<li><i>/</i><a href="#">Haberler</a></li>
					<li class="on"><i>/</i><a href="#">Otomotiv</a></li>
				</ul>
			</nav>
		</div>
	</div>


	<div class="base-body con">
		
		<div class="us py-40">
			<div class="post-head">
				<h1>Freedom to measure with Volvo</h1>
				<p>Productivity gains from prototyping through volvo car factories around  production with the AT960, LAS-XL and T-Scan 5</p>
			</div>
		</div>

		<div class="as row gut-2 pb-70">
			
			<div class="conbox col-8">
				
				<div class="post-foto mb-30">
					<figure class="mask-ratio crop">
						<img src="<?php echo path('img/16.9.png')?>" class="mask"/>
						<img src="<?php echo path('img/bos.16.9.png')?>" class="real"/>
					</figure>
				</div>
				
				<div class="post-text word f-2 mb-60">
					<p>An aircraft structure is a lightweight structural ecosystem made from circular frames, linear stringers, and skin panels – either machined or formed from sheet metal. Each structural component must be manufactured and accurately assembled to become the safe modern aircraft we fly in today.</p>
					<p>Hexagon Manufacturing Intelligence’s multidisciplinary structural simulation and analysis solutions have been widely used in the aerospace industry for more than 40 years. We have helped aircraft designers calculate the ideal aircraft structure design to handle the internal and external loads required to fly aerodynamically and efficiently.</p>
					<p>With passenger traffic doubling and pressure to reduce ecological impact on the planet also greater than ever, Hexagon has also developed tools for coupled simulation, lightweight composite material simulation and additive manufacturing. These simulation solutions have unique potential to help designers overcome these major challenges and design structures for new generations of aircraft.</p>
					<p>Aircraft structure parts can include fuselage panels of over 40 square metres, as well as 10 or more metre structural spars and large assembly brackets. Manufacturing such large components makes anticipating process deviation to reduce production time essential in the ramp up of structural components production for the aerospace industry.</p>
					<p>Shop-floor metrology tools, including non-contact inspection technologies, allow Hexagon customers to monitor the production process and manage the quality of the produced part along their manufacturing workflow. Our robust solutions are designed to function in challenging shop-floor conditions, such as dusty and noisy aircraft structure plants. From handheld 3D scanners to the world’s most accurate laser trackers and the largest bridge and gantry CMMs, our portfolio offers metrology equipment for everything from micron measurement to surface quality checks on aircraft skin panels.</p>
					<p>Metrology is also increasingly embedded in aircraft structure manufacturing plants, including the use of wireless machine tool probes for measurement within machining centres. Hexagon also offers a range of laser-tracker based robotic positioning solutions to help tool integrators and aerospace manufacturers automate workstations. This enables aircraft manufacturers to ramp up aero-structure production by bringing speed and accuracy to the shop floor.</p>
				</div>

				


				<div class="acord">
					
					<?php  $cats = ['Havacılık','Otomotiv','Enerji','Medikal','Sanayi']; ?>

					<?php $s=1; foreach ($cats as $key => $value):  ?>

					<details <?php echo ($s <= 2) ? 'open' : '' ?>>
    					<summary><?php echo $value ?> <span class="prb"><i>+</i><i>-</i></span></summary>
    					<section class="sec-posts f-5 pt-15 pb-40 mask-ratio crop">
							<div class="row-2 gut-2">
								<?php for ($i=0; $i < 4 ; $i++):?>
								<article class="col pb-30">
									<a href="#">
										<figure class="mb-20 ">
											<img src="<?php echo path('img/16.9.png')?>" class="mask"/>
											<img src="<?php echo path('img/bos.16.9.png')?>" class="real"/>
										</figure>
										<h4 class="mb-10">Lorem Title <?php echo $i+1 ?></h4>
										<summary class="mb-15">Embed quality into product design and engineering to ensure component manufacturability and downstream production productivity.</summary>
									</a>
									<span class="more plb f-2"><a href="#"> <i class="ss-gizmo ss-index"></i> <?php echo $value ?></a></span>
								</article>
								<?php endfor ?>
							</div>
						</section>
    				</details>

    				<?php $s++; endforeach ?>

				</div>


			</div>


			<div class="sidbox col-4 pl-25 line yl">
					
					<section class="cart-adres">
						<div>
							<h5>Seltek Ticaret ve Sanayi Ltd.Sti.</h5>
							<h6>Merkez Ofis, Showroom</h6>
							<address>Alaaddinbey Mah. 636.Sok. No:2 Otomasyon Plaza, NİLTİM, Nilüfer 16110 Bursa Turkey</address>

							<ul>
								<li><b>T:</b> +90 850 466 44 64</li>
								<li><b>F:</b> +90 850 466 45 65</li>
							</ul>
						</div>
						<hr class="line-x my-25"/>
					</section>



					<section class="sec-posts f-1 mask-ratio crop">
						<article>
							<a href="#">
								<figure class="mb-20 ">
									<img src="<?php echo path('img/16.9.png')?>" class="mask"/>
									<img src="<?php echo path('img/bos.16.9.png')?>" class="real"/>
								</figure>
								<h3 class="mb-10">Lorem Title</h3>
								<summary class="mb-50">Embed quality into product design and engineering to ensure component manufacturability and downstream production productivity.</summary>
								<span class="more"><span>More <i class="ss-gizmo  ss-right"></i></span><hr/></span>
							</a>
						</article>
					</section>


					<section class="sec-posts f-1 mask-ratio crop">
						<article>
							<a href="#">
								<figure class="mb-20 ">
									<img src="<?php echo path('img/16.9.png')?>" class="mask"/>
									<img src="<?php echo path('img/bos.16.9.png')?>" class="real"/>
								</figure>
								<h3 class="mb-10">Lorem Title</h3>
								<summary class="mb-50">Embed quality into product design and engineering to ensure component manufacturability and downstream production productivity.</summary>
								<span class="more"><span>More <i class="ss-gizmo  ss-right"></i></span><hr/></span>
							</a>
						</article>
					</section>


			</div>


		</div>



		
		
	</div>






<?php include('../inc/footer.php') ?>