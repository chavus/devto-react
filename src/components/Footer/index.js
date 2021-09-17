import React from 'react'
import './styles.scss'
import facebook from '../../img/socialnetworks/facebook.svg'
import github from '../../img/socialnetworks/github.svg'
import instagram from '../../img/socialnetworks/instagram.svg'
import twitch from '../../img/socialnetworks/twitch.svg'
import twitter from '../../img/socialnetworks/twitter.svg'

const  Footer = ()=> {
    return(

        <footer className="bg-gray ml-0 mr-0 vw-100 navbar-fixed-bottom">
		<div className="container-sm custom-container d-flex">
			<div className="row mt-3 ">
				<nav className="col-12 ">
					<div className="d-flex flex-wrap justify-content-center">
						<a href="#" className="post-list">Home</a>
						<a href="#" className="post-list">Listings</a>
						<a href="#" className="post-list">Podcasts</a>
						<a href="#" className="post-list">Videos</a>
						<a href="#" className="post-list">Tags</a>
						<a href="#" className="post-list">Code of Conduct</a>
						<a href="#" className="post-list">FAQ</a>
						<a href="#" className="post-list">DEV Shop</a>
						<a href="#" className="post-list">Sponsors</a>
						<a href="#" className="post-list">About</a>
						<a href="#" className="post-list">Privacy Poacy</a>
						<a href="#" className="post-list">Terms of use</a>
						<a href="#" className="post-list">Contact</a>
						<a href="#" className="post-list"><span>Create Post</span></a>
					</div>

				</nav>
			</div>

			<div className="pt-2 pb-2 social-icons"> 
				<a href="https://twitter.com/thepracticaldev" target="_blank"
					className="" rel="noopener">
					<img src={twitter} alt="twitter"/>
				</a>
				<a href="https://facebook.com/thepracticaldev" target="_blank">
					<img src={facebook} alt="facebook"/>
				</a>
				<a href="https://github.com/thepracticaldev" target="_blank">
					<img src={github} alt="github"/>
				</a>
				<a href="https://instagram.com/thepracticaldev" target="_blank"
					className="crayons-link crayons-link--secondary mx-2" rel="noopener">
					<img src={instagram} alt="instagram"/>
				</a>
				<a href="https://twitch.com/thepracticaldev" target="_blank"
					className="crayons-link crayons-link--secondary mx-2" rel="noopener">
					<img src={twitch} alt="twitch"/>

				</a>
			</div>
			<div className="f-divider pt-1 pb-2"></div>
			<p className="f-size"><span>DEV Community </span>-A constructive and inclusive social network for software. With you every
				step
				of your journey</p>
			<p className="f-size">Built on<span> Forem </span>-the<span> open source </span>software that powers <span> DEV </span>and
				other
				inclusive communties commuties.</p>
			<p className="f-size">Made with love and<span> Ruby on Rails. </span>DEV Community 2016-2021.</p>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
				role="img" aria-labelledby="a50wz97mz5gmig7iz9e15galmubn0vpu"
				className="crayons-icon crayons-icon--default">
				<title id="a50wz97mz5gmig7iz9e15galmubn0vpu">Forem logo</title>
				<g clip-path="url(#clip0)" fill="#1AB3A6">
					<path
						d="M4.603 1.438a8.056 8.056 0 017.643 5.478 8.543 8.543 0 00-3.023 5.968H8.054C3.606 12.884 0 9.296 0 4.87V1.468a.03.03 0 01.03-.03h4.573zM23.97 6.515a.03.03 0 01.03.03v2.833c0 4.11-3.354 7.442-7.491 7.442h-2.881v5.726h-2.305V14.53l.022-1.145c.294-3.843 3.526-6.87 7.469-6.87h5.155z">
					</path>
				</g>
				<defs>
					<clipPath id="clip0">
						<path fill="#fff" d="M0 0h24v24H0z"></path>
					</clipPath>
				</defs>
			</svg>
		</div>
	</footer>
    )

}

export default Footer
