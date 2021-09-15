import React from 'react'

const LeftSidebar = ()=> {
    return(

        <aside class="d-none d-md-block col-sm-4 col-xl-3">
				<nav class="d-flex icons section-list collapse" id="section-list" aria-expanded="false">
					<a href="#" class="item-list">
						<span><img src="img/icons/home.svg" alt=""/></span>Home</a>
					<a href="#" class="item-list">
						<span><img src="img/icons/readinglist.svg" alt=""/></span>Reading List</a>
					<a href="#" class="item-list">
						<span><img src="img/icons/listings.svg" alt=""/></span>Listings</a>
					<a href="#" class="item-list">
						<span><img src="img/icons/podcasts.svg" alt=""/></span>Podcasts</a>
					<a href="#" class="item-list">
						<span class="crayons-icon crayons-icon--default"><img src="img/icons/videos.svg"
								alt=""/></span>Videos</a>
					<a href="#" class="item-list">
						<span><img src="img/icons/tags.svg" alt=""/></span>Tags</a>
					<a href="#" class="item-list">
						<span><img src="img/icons/code-of-conduct.svg" alt=""/></span>Code of Coduct</a>
					<a href="#" class="item-list">
						<span><img src="img/icons/faq.svg" alt=""/></span>FAQ</a>
					<a href="#" class="item-list">
						<span><img src="img/icons/dev-shop.svg" alt=""/></span>DEV Shop</a>
					<a href="#" class="item-list">
						<span><img src="img/icons/about.svg" alt=""/></span>About</a>
					<a href="#" class="item-list">
						<span><img src="img/icons/privacy-policy.svg" alt=""/></span>Privacy Policy</a>
					<a href="#" class="item-list">
						<span><img src="img/icons/terms-of-use.svg" alt=""/></span>Terms of use</a>
					<a href="#" class="item-list">
						<span><img src="img/icons/contact.svg" alt=""/></span>Contact</a>
				</nav>
				<div class="view-more-sections">
					<button data-toggle="collapse" data-target="#section-list">More...</button>
				</div>
				<div class="mt-3 tags">
					<div class="d-flex tag-header">
						<h5>My Tags</h5>
					   <img src="images/aside1/losbuenos/engrande.svg" alt="#"/>
					</div>
					<nav class="d-flex icons section-list">
					  <a href="#" class="item-list">#javascript</a>
					  <a href="#" class="item-list">#css</a>
					  <a href="#" class="item-list">#dotnet</a>
					  <a href="#" class="item-list">#npm</a>

					 </nav>
				  </div>
				
				<div class="a-l-card mt-5">
					<img class="ad-img-left" src="img/photos/ads.png" alt="aside-ad"/>
					<p class="a-l-txt-color">Do you have your <br/>sticker pack yet?</p>
				</div>
		</aside>
    )

}

export default LeftSidebar
