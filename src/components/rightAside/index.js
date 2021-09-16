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
				<div className="card-header font-weight-bold">
					<h4>#news</h4>
				</div>
				<ul id="newsPost" class="list-group list-group-flush"></ul>
			</div>

			<div id="help"className="card mt-4">
				<div className="card-header font-weight-bold">
					<h4>#help</h4>
				</div>
				<ul id="helpPost" class="list-group list-group-flush"></ul>
			</div>

				<div className="card mt-4">
					<div className="card-header font-weight-bold">
						<h4>#discuss</h4>
					</div>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">ALPHA REACT 18 HAS ARRIVED
							<div>
								<button type="button bg-primary" class="btn-new">New</button>
							</div>
						</li>
						<li className="list-group-item">Should You Really be Coding in Dark Mode?
							<div>
								<p className="text-muted l-text">11 comments</p>
							</div>
						</li>
						<li className="list-group-item">What was your win this week0?
							<div>
								<p className="text-muted l-text">10 comments</p>
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
