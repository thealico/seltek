<?php 
	
	$set = array(
		'title' => 'Haberler',
		'class' => 'haber list post-grup-1',
		
		'cat'   => 'haber',
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
					<li class="on"><i>/</i><a href="#">Haberler</a></li>
				</ul>
			</nav>
		</div>
	</div>


	<div class="base-body con">
		
		<div class="us py-35">
			
			<div class="body-head f-3">
				<h1>Haberler</h1>		
				<p>Ölçüm ve kontrol sistemlerinin lider üreticisi Seltek şirketiize ve sektörümüze dair tüm gelişmeleri, bildirimleri ve tüm etkinleri bu sayfamızdan takip edebilirsiniz</p>				
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
			
			<?php 

				$cats = ['Havacılık','Otomotiv','Enerji','Medikal','Sanayi'];

			?>

			
			<div class="acord">
				
				<?php $s=1; foreach ($cats as $key => $value):  ?> 
				<details <?php echo ($s <= 2) ? 'open' : '' ?>>
    				<summary><h3><?php echo $value ?></h3><span class="prb"><i>+</i><i>-</i></span></summary>
					<section class="sec-posts f-5 mask-ratio crop pt-20 pb-60" group="<?php echo $value?>">
						<div class="row-3 gut-2">
							<?php for ($i=0; $i < 3 ; $i++):?>
							<article class="col pb-30">
								<a href="#">
									<figure class="mb-20 ">
										<img src="<?php echo path('img/16.9.png')?>" class="mask"/>
										<img src="<?php echo path('img/bos.16.9.png')?>" class="real"/>
									</figure>
									<h4 class="mb-10">News <?php echo $i+1 ?></h4>
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

	</div>






<?php include('../inc/footer.php') ?>