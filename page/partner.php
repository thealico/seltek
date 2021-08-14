<?php 
	
	$set = array(
		'title' => 'Partnerler',
		'class' => 'partner list post-grup-1',
		
		'cat'   => 'partner',
		'sub' 	=> '',
		'mod' 	=> 'list'
	);

?>

<?php include('../inc/header.php') ?>
	
	<div class="head-bar row ns between">
		<div class="con flex yc	">
			<nav class="map-links">
				<ul>
					<li><a href="#">Home</a></li>
					<li class="on"><i>/</i><a href="#">Partnerler</a></li>
				</ul>
			</nav>
		</div>
	</div>


	<div class="base-body con">
		
		<div class="us py-35">
			
			<div class="body-head f-1">
				<h1>Partnerler</h1>		
				<div class="word f-2 py-5">
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>				
				</div>
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
									<h5 class="mb-10">Lorem Ipsum</h5>
									<blockquote>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</blockquote>
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

		
		<div class="as f-2 pb-50">
				
			<section class="sec-posts f-1 mask-ratio crop">
				<div class="row-3 gut-2">
					<?php for ($i=1; $i < 10 ; $i++):?>
					<article class="col">
						<figure class="mb-20">
							<span>
								<img src="<?php echo path('img/16.9.png')?>" class="mask"/>
								<img src="http://www.seltek.com/images/ortaklar/img_0<?php echo $i?>_th.jpg" class="real"/>
							</span>
						</figure>
						<h3 class="mb-10">Partnet <?php echo $i+1 ?></h3>
						<summary class="mb-50">Embed quality into product design and engineering to ensure component manufacturability productivity.</summary>						
					</article>
					<?php endfor ?>
				</div>
			</section>
		</div>

	</div>






<?php include('../inc/footer.php') ?>