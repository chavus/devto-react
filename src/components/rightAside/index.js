import React from 'react'
import './styles.scss'
import changelog from '../../img/photos/changelog.png'

const  RightSidebar = () => {
    return(
        
        <aside className="d-none d-xl-block">
			<div className="card div-card mt-2">
				<img className="img-aside-right" src={changelog} alt="changelog"/>
				<div className="card-body">
					<p className="">New Forem Changelog Entries!</p>
					<p className="c-text-color">"Lock Discussions on Posts"</p>
					<p className="c-text-color">"Accessibility Enhancements"</p>
				</div>
			</div>
            <div className="card mt-4">	
				<div class="card-header font-weight-bold a-right">
					<h5 className="text-bold mt-2">Listings</h5>
					<a href="#" class="post-l">See all</a>
				</div>
				<ul id="newsPost" class="list-group list-group-flush">
					<li className="list-group-item">Bomberland is live <span className="emoji1"></span>A competitive sandbox for practising machine learning
						<div>
							<p className="text-muted l-text">products</p>
						</div>
					</li>
					<li className="list-group-item">NotionMailer - a tool that allows to write, manage and send newsletters directly from Notion.
						<div>
							<p className="text-muted l-text">products</p>
						</div>
					</li>
					<li className="list-group-item">Freelance Full-Stack Web Developer
						<div>
							<p className="text-muted l-text">forhire</p>
						</div>
					</li>
					<li className="list-group-item">Top 5 Challenges of Remote Work Life Style
						<div>
							<p className="text-muted l-text">collabs</p>
						</div>
					</li>
					<li className="list-group-item"><span className="emoji2"></span>Become a freelance web developer with Freelance Newbie <span className="emoji2"></span>(promo code <span className="emoji3"></span>)
						<div>
							<p className="text-muted l-text">education</p>
						</div>
					</li>
					<div className="card-header font-weight-bold">
						<p className="text-center l-text mt-3">Create a Listing</p>
					</div>
				</ul>
			</div>

			<div className="card mt-4">	
				<div className="card-header font-weight-bold">
					<h5 className="text-bold mt-2">#news</h5>
				</div>
				<ul id="newsPost" class="list-group list-group-flush">
					<li className="list-group-item">Axie Infinity Clone Script | Create your NFT Gaming Platform Like Axie Infinity | Developcoins
						<div>
							<p className="text-muted l-text">1 comment</p>
						</div>
					</li>
					<li className="list-group-item">This week in Flutter #21
						<div>
							<button type="button bg-primary" class="btn-new">New</button>
						</div>
					</li>
					<li className="list-group-item">Announcing x-ray
						<div>
							<p className="text-muted l-text">2 comments</p>
						</div>
					</li>
					<li className="list-group-item">Game Dev Digest — Issue #110 - Give your game a makeover
						<div>
							<button type="button bg-primary" class="btn-new">New</button>
						</div>
					</li>
					<li className="list-group-item ">ForgeRock IPO! <span className="emoji1"></span>
						<div>
							<button type="button bg-primary" class="btn-new">New</button>
						</div>
					</li>
				</ul>
			</div>

			<div id="help"className="card mt-4">
				<div className="card-header font-weight-bold">
					<h5 className="text-bold mt-2">#help</h5>
				</div>
				<ul id="helpPost" class="list-group list-group-flush">
					<li className="list-group-item">When I create a post, how to automatically complete the tag metadata?
						<div>
							<button type="button bg-primary" class="btn-new">New</button>
						</div>
					</li>
					<li className="list-group-item">Esp-eye, what package / library do I use?
						<div>
							<button type="button bg-primary" class="btn-new">New</button>
						</div>
					</li>
					<li className="list-group-item">How to write a README
						<div>
							<p className="text-muted l-text">2 comments</p>
						</div>
					</li>
					<li className="list-group-item">How would I create a widget in react-native
						<div>
							<button type="button bg-primary" class="btn-new">New</button>
						</div>
					</li>
					<li className="list-group-item">Need a Web Developer? I'm here!
						<div>
							<button type="button bg-primary" class="btn-new">New</button>
						</div>
					</li>
				</ul>
			</div>

				<div className="card mt-4">
					<div className="card-header font-weight-bold">
						<h5 className="text-bold mt-2" >#discuss</h5>
					</div>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">Stop thinking about your work at night
							<div>
								<button type="button bg-primary" class="btn-new">New</button>
							</div>
						</li>
						<li className="list-group-item">Should You Really be Coding in Dark Mode?
							<div>
								<p className="text-muted l-text">11 comments</p>
							</div>
						</li>
						<li className="list-group-item">What was your win this week?
							<div>
								<p className="text-muted l-text">13 comments</p>
							</div>
						</li>
						<li className="list-group-item">How I got 1000 followers on DEV
							<div>
								<p className="text-muted l-text">4 comments</p>
							</div>
						</li>
						<li className="list-group-item">How do you stay up to date with the latest developments
							in tech?
							<div>
								<p className="text-muted l-text">35 comments</p>
							</div>
						</li>
					</ul>
			</div>
	    </aside>
        
    )

}

export default RightSidebar
