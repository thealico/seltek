<div class="case">
	
	<div class="in">

		<div class="sub-us">
			<ol class="row gut-2 center tab-nav">
				<li class="on"  data-tab="head"><a href="#">1 Tab  <i class="ss-gizmo ss-navigatedown"></i></a></li>
				<li  data-tab="head"><a href="#">2 Tab <i class="ss-gizmo ss-navigatedown"></i></a></li>
			</ol>
		</div>
		
		<div class="sub-as">
			
			<div class="tab-con tab-head h">
				
				<?php for ($t=1; $t < 3; $t++): ?>

				<div class="row ns h <?php echo $t==1 ? 'on' : '' ?>">
					
					<div class="col nav nav-us">

						<ol class="scr-y hide-scr scr-touch">
							<?php for ($i=1; $i < 10; $i++): ?>
								<li <?php  echo $i==1? 'class="on"' : '' ?>><a href="#"><?php echo $t ?> - Item Menu <?php echo $i ?></a></li>
							<?php endfor ?>
						</ol>

					</div>
					
					<div class="col nav nav-as">
						<?php for ($i=1; $i < 10; $i++): ?>
						<ol class="scr-y hide-scr scr-touch <?php echo $i==1 ? 'on' : '' ?>" rel=" <?php echo $i ?>">
							<?php for ($s=1; $s < 4; $s++): ?>
							<li><a href="#"><?php echo $t ?> - Sub Menu <?php echo $i ?>.<?php echo $s ?></a></li>
							<?php endfor ?>
						</ol>
						<?php endfor ?>
					</div>

					<div class="col new">
						<div class="scr-y hide-scr">	
							<h4>Menu Content Caption</h4>
							<figure class="mask-ratio crop mt-15 mb-15 ">
								<img src="<?php echo path('img/16.9.png')?>" class="mask"/>
								<img src="<?php echo path('img/bos.16.9.png')?>" class="real"/>
							</figure>
							<summary>Embed quality into product design and engineering and downstream production productivity.</summary>
						</div>

					</div>

				</div>

				<?php endfor ?>

			</div>

		</div>

	</div>


</div>