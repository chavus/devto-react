import React, { useState, useEffect } from "react";
import {
  Link,
} from "react-router-dom";

import "./_leftaside.scss"

import {
  FcLike,
} from "react-icons/fc";
import{
  GrFormClose,
}from "react-icons/gr";
import { IoLogoTwitter, IoLogoFacebook, IoLogoGithub } from "react-icons/io";
import { RiInstagramFill, RiTwitchLine } from "react-icons/ri";

import { useLocation } from "react-router-dom"

const tags = [
  "css",
  "webdev",
  "react",
  "python",
  "javascript",
  "html",
  "css",
  "aws",
  "testing",
  "beginners",
  "python",
  "git",
  "vscode",
  "npm",
  "mongo",
  "ubuntu",
  "angular",
  "begginers"
];

const LeftAsideB = (props) => {

 // const [userData, setUserData] = useState(null)
 const userData = props.userData
 console.log(userData)
 const location = useLocation()

 useEffect(()=>{
     console.log(location.pathname)
 },[])

  const [more, setmore] = useState(false);
  const toggle = () => {
    setmore(!more);
  };
  return (
    <>

      <aside className="leftBar">
      {!userData && 
      <div className="card card-aside">
          <div className="cardbody">
            <div className="card-text">
              <h5><span>DEV Community</span> is a community of 694,903 amazing developers</h5>
              <p className="login-text-card">We're a place where coders share, stay up-to-date and grow their careers.</p>
              <div className="login-actions">
                <Link className="blue-login-action" to="#">Create new account</Link>
                <Link className="grey-login-action" to="/login">Log in</Link>
              </div>
             
            </div>
          </div>
        </div>
      }
        <nav className="leftBar__menu">
        
        <header className="left-titles">
              <h5>DEV Community</h5>
        </header>
          <ul>
           
            <li>
              <Link to="/home"><span><img src="/images/icons/home.svg" alt=""/></span>Home</Link>
            </li>
            <li>
              <Link to="/reading"><span><img src="images/icons/readinglist.svg" alt=""/></span>Reading List</Link>
            </li>
            <li>
              <Link to="/list"><span><img src="images/icons/listings.svg" alt=""/></span>Listings</Link>
            </li>
            <li>
              <Link to="/podcast"><span><img src="images/icons/podcasts.svg" alt=""/></span>Podcasts</Link>
            </li>
            <li>
              <Link to="/videos"><span><img src="images/icons/videos.svg"alt=""/></span>Videos</Link>
            </li>
            <li>
              <Link to="/tags"><span><img src="images/icons/tags.svg" alt=""/></span>Tags</Link>
            </li>
            <li className={more ? "more hidden" : "more"}>
              <i></i>
              <Link to="/#" onClick={toggle}>
                More...
              </Link>
            </li>

            <div className={more ? "list" : "list hidden"}>
              <li>
                <Link to="/FAQ"><span><img src="images/icons/faq.svg" alt=""/></span>FAQ</Link>
              </li>
              <li>
                <Link to="/DEV"><span><img src="images/icons/dev-shop.svg" alt=""/></span>DEV Shop</Link>
              </li>
              <li>
                <Link to="/sponsors"><span><FcLike /></span>Sponsors</Link>
              </li>
              <li>
                <Link to="/about"><span><img src="images/icons/about.svg" alt=""/></span>About</Link>
              </li>
              <li>
                <Link to="/contact"><span><img src="images/icons/contact.svg" alt=""/></span>Contact</Link>
              </li>
            
              <header className="left-titles">
                <h5>Other</h5>
              </header>
            
              <li>
                <Link to="/code"><span><img src="images/icons/code-of-conduct.svg" alt=""/></span>Code of Conduct</Link>
              </li>
              <li>
                <Link to="/privacy"><span><img src="images/icons/privacy-policy.svg" alt="" /></span>Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms"><span><img src="images/icons/terms-of-use.svg" alt=""/></span>Terms of use</Link>
              </li>
             
            </div>
            </ul>
        </nav>

        <div className={more ? "leftBar__social" : "leftBar__social hidden"}>
          <Link to="/twitter">
            <span> <IoLogoTwitter /></span>
          </Link>
          <Link to="/facebook">
            <span> <IoLogoFacebook /></span>
          </Link>
          <Link to="/github">
            <span><IoLogoGithub /></span>
          </Link>
          <Link to="/instagram">
            <span><RiInstagramFill /></span>
          </Link>
          <Link to="/twitch">
            <span><RiTwitchLine /></span>
          </Link>
        </div>

        <nav className="leftBar__taglist">
          <header className="left-titles">
          {!userData && 
            <h5>Popular Tags</h5>}
          {userData && 
            <h5>My Tags</h5>}
            <span><img src="/images/aside1/losbuenos/engrande.svg" alt=""/></span>
          </header>
          <ul>
            {tags.map((tag, id) => {
              return (
                <li key={id}>
                  <Link to="/#">#{tag}</Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="sticker-card">
        <img class="ad-img-left" src="images/photos/ads.png" alt="aside-ad"/>
					<p class="a-l-txt-color">Do you have your sticker pack yet?</p>
        </div>
      </aside>

      {props.burgerMenu && (
        <div className="hamburger">
          <div className="hamburger__content">
            <header>
              <h5>DEV Community</h5>
              <button onClick={() => props.closeMenu()}>
                <GrFormClose />
              </button>
            </header>

            <div className="hamburger__content__items">
            <nav className="leftBar__menu">
              <header>
                <h3>DEV Community</h3>
              </header>
                <ul>
                  <li>
                    <Link to="/home"><span><img src="images/icons/home.svg" alt=""/></span>Home</Link>
                  </li>
                  <li>
                    <Link to="/reading"><span><img src="images/icons/readinglist.svg" alt=""/></span>Reading List</Link>
                  </li>
                  <li>
                    <Link to="/list"><span><img src="images/icons/listings.svg" alt=""/></span>Listings</Link>
                  </li>
                  <li>
                    <Link to="/podcast"><span><img src="images/icons/podcasts.svg" alt=""/></span>Podcasts</Link>
                  </li>
                  <li>
                    <Link to="/videos"><span><img src="images/icons/videos.svg"alt=""/></span>Videos</Link>
                  </li>
                  <li>
                    <Link to="/tags"><span><img src="images/icons/tags.svg" alt=""/></span>Tags</Link>
                  </li>
                  <li className={more ? "more hidden" : "more"}>
                    <i></i>
                    <Link to="/#" onClick={toggle}>
                      More...
                    </Link>
                  </li>

                  <div className={more ? "list" : "list hidden"}>
                    <li>
                        <Link to="/FAQ"><span><img src="images/icons/faq.svg" alt=""/></span>FAQ</Link>
                    </li>
                    <li>
                        <Link to="/DEV"><span><img src="images/icons/dev-shop.svg" alt=""/></span>DEV Shop</Link>
                    </li>
                    <li>
                        <Link to="/sponsors"><span><FcLike /></span>Sponsors</Link>
                    </li>
                    <li>
                        <Link to="/about"><span><img src="images/icons/faq.svg" alt=""/></span>About</Link>
                    </li>
                    <li>
                        <Link to="/contact"><span><img src="images/icons/contact.svg" alt=""/></span>Contact</Link>
                    </li>
                    <header>
                        <h5>Other</h5>
                    </header>

                    <li>
                      <Link to="/code"><span><img src="images/icons/code-of-conduct.svg" alt=""/></span>Code of Conduct</Link>
                    </li>
                    <li>
                      <Link to="/privacy"><span><img src="images/icons/privacy-policy.svg" alt="" /></span>Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/terms"><span><img src="images/icons/terms-of-use.svg" alt=""/></span>Terms of use</Link>
                    </li>
                  </div>
                </ul>
              </nav>
              <div className={more ? "leftBar__social" : "leftBar__social hidden"}>
                <Link to="/twitter"><span> <IoLogoTwitter /></span></Link>
                <Link to="/facebook"><span> <IoLogoFacebook /></span></Link>
                <Link to="/github"><span> <IoLogoGithub /></span></Link>
                <Link to="/instagram"><span><RiInstagramFill /></span></Link>
                <Link to="/twitch"><span> <RiTwitchLine /></span></Link>
              </div>
            </div>
          </div>

          <div className="hamburger overlay"></div>
        </div>
      )}
    </>
  );
};

export default LeftAsideB;
