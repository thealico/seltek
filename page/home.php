<?php 
	
	$set = array(
		'title' => '',
		'class' => 'home',
		'cat'   => '',
		'sub' 	=> '',
		'mod' 	=> 'home'
	);

?>

<?php include('../inc/header.php') ?>


	
<section class="sec-cover">
	
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

	<div class="slide" id="slide-c"  data-set='<?php echo json_encode($slick) ?>'>
		
		<div class="list" id="c-list">
			
			<a href="#">
				<img src="<?php echo path('upload/06-web.jpg') ?>" class="web"/>
				
				<div class="sum">
					<div class="con">
						<div class="txt">
							<div>
								<div>
									<h3>Can you measure it? Let's find out!</h3>
									<p>Subscribe to our video series where we will be answering the questions we hear time and time again, Can I measure it?</p>
									<span> More <i class="ss-gizmo ss-right"></i></span>
								</div>
							</div>
						</div>
					</div> 
					<s class="us"></s>
					<s class="as"></s>
				</div>

			</a>

			<a href="#">
				<img src="<?php echo path('upload/05-web.jpg') ?>" class="web"/>
				
				<div class="sum">
					<div class="con">
						<div class="txt">
							<div>
								<div>
									<h3>Can you measure it? Let's find out!</h3>
									<p>Subscribe to our video series where we will be answering the questions we hear time and time again, Can I measure it?</p>
									<span> More <i class="ss-gizmo ss-right"></i></span>
								</div>
							</div>
						</div>
					</div> 
					<s class="us"></s>
					<s class="as"></s>
				</div>

			</a>
			
		</div>
		
		<?php /*
		<div class="shape">
			<s class="us"></s>
			<s class="as"></s>
			<s class="os"></s>
		</div>
		*/ ?>

		
		<div class="con">
			<nav class="dots prb t-2" id="c-dots"></nav>
		</div>

		<nav class="ctrl">
			<a href="#" id="c-prev" class="prev plb"><i class="ss-gizmo ss-left"></i></a>
			<a href="#" id="c-next" class="next prb"><i class="ss-gizmo ss-right"></i></a>
		</nav>
	</div>

</section>

<div class="box-one con py-65">

	<section class="sec-posts f-1">
		<div class="row-3 c-mask-ratio gut-2 crop">
			<?php for ($i=0; $i < 6 ; $i++):?>
			<article class="col">
				<a href="#">
					<figure class="mb-20">
						<img src="<?php echo path('img/16.9.png')?>" class="mask"/>
						<img src="<?php echo path('img/bos.16.9.png')?>" class="real"/>
					</figure>
					<h3 class="mb-10">Design and Engineering</h3>
					<summary class="mb-50">Embed quality into product design and engineering to ensure component manufacturability and downstream production productivity.</summary>
					<span class="more plb"><span>Learn More <i class="ss-gizmo  ss-right"></i></span><hr/></span>
				</a>
			</article>
			<?php endfor ?>
		</div>

	</section>

</div>


<div class="box-tre">
	
	<div class="con row-3 gut-2">
		
		<div class="col f-1 one py-40">
			
			<section class="sec-posts f-2 uf-5 h pb-65">
				<h3 class="mb-30">Lastet News</h3>
				<ul>
					<li><a href="#"><h4>McLaren Racing accelerates F1 car development with optimal use  materials</h4><time>23 HAZ 2021</time></a></li>
					<li><a href="#"><h4>McLaren Racing accelerates F1 car development with optimal use  materials</h4><time>23 HAZ 2021</time></a></li>
					<li><a href="#"><h4>McLaren Racing accelerates F1 car development with optimal use  materials</h4><time>23 HAZ 2021</time></a></li>
					<li><a href="#"><h4>McLaren Racing accelerates F1 car development with optimal use  materials</h4><time>23 HAZ 2021</time></a></li>
				</ul>
				<span class="more plb"><span>Learn More <i class="ss-gizmo  ss-right"></i></span><hr/></span>
			</section>

		</div>
		
		<div class="col f-1 two py-40">
			
			<section class="sec-posts f-3 h pb-65">
				
				<h3 class="mb-30">Upcoming Events</h3>
				
				<ul class="ay uf-5">
					<li>
						<h5>EKI</h5>
						<ol>
							<li>
								<div><span>26</span></div>
								<div>
									<a href="#">
										<h4>Automotive Engineering Exposition 2021</h4>
										<span>Japonya</span>
									</a>
								</div>
							</li>
						</ol>
					</li>
					<li>
						<h5>MAY</h5>
						<ol>
							<li>
								<div><span>26 - 31</span></div>
								<div>
									<a href="#">
										<h4>Automotive Engineering Exposition 2021</h4>
										<span>Yokohama, Japonya</span>
									</a>
								</div>
							</li>
						</ol>
					</li>
					<li>
						<h5>TEM</h5>
						<ol>
							<li>
								<div><span>29</span></div>
								<div>
									<a href="#">
										<h4>Automotive Engineering Exposition 2021</h4>
										<span>Yokohama</span>
									</a>
								</div>
							</li>
						</ol>
					</li>
					<li>
						<h5>AGU</h5>
						<ol>
							<li>
								<div><span>13 - 25</span></div>
								<div>
									<a href="#">
										<h4>Make it Smarter America Tour</h4>
										<span>Çek Cumhuriyeti</span>
									</a>
								</div>
							</li>
							<li>
								<div><span>25 - 26</span></div>
								<div>
									<a href="#">
										<h4>Seminar Pc - Dmis 2021</h4>
										<span>Kenya</span>
									</a>
								</div>
							</li>
						</ol>
					</li>
				</ul>
				
				<span class="more plb"><span>Learn More <i class="ss-gizmo  ss-right"></i></span><hr/></span>

			</section>

		</div>

		<div class="col tre">
			
			<section class="sec-irt h py-40 px-25">
				
				<div class="h">

					<h3 class="mb-30">Find Contact</h3>
					
					<div class="one">
						<address>Hexagon Manufacturing Intelligence 250 Circuit Drive North Kingstown, Rhode Island,02852 United States</address>
						<ul>
							<li><span>T<i>:</i> </span><span>+1 401.886.2000</span></li>
							<li><span>F<i>:</i> </span><span>+1 401.886.2727</span></li>
						</ul>
					</div>

					<div class="two pt-60">
						<h4 class="mb-20">Locate an office near you</h4>
						<p>Hexagon Manufacturing Intelligence has offices and partners across the globe ready to offer sales and technical services. Find the office closest to you.</p>
					</div>

					<span class="more plb"><span><a href="#">All Locations <i class="ss-gizmo ss-right"></i></a></span><hr/></span>

				</div>

			</section>

		</div>

	</div>

</div>





<?php include('../inc/footer.php') ?>