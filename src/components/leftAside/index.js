import React, { useState } from "react";
import {
  FcLike,
} from "react-icons/fc";
import{
  GrFormClose,
}from "react-icons/gr";

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
  const [more, setmore] = useState(false);
  const toggle = () => {
    setmore(!more);
  };
  return (
    <>
      <aside className="leftBar">
        <nav className="leftBar__menu">
          <header>
            <h3>DEV Community</h3>
          </header>
          <ul>
            <li>
              <a href="/home"><span><img src="images/icons/home.svg" alt=""/></span>Home</a>
            </li>
            <li>
              <a href="/reading"><span><img src="images/icons/readinglist.svg" alt=""/></span>Reading List</a>
            </li>
            <li>
              <a href="/list"><span><img src="images/icons/listings.svg" alt=""/></span>Listings</a>
            </li>
            <li>
              <a href="/podcast"><span><img src="images/icons/podcasts.svg" alt=""/></span>Podcasts</a>
            </li>
            <li>
              <a href="/videos"><span><img src="images/icons/videos.svg"alt=""/></span>Videos</a>
            </li>
            <li>
              <a href="/tags"><span><img src="images/icons/tags.svg" alt=""/></span>Tags</a>
            </li>
            <li className={more ? "more hidden" : "more"}>
              <i></i>
              <a href="/#" onClick={toggle}>
                More...
              </a>
            </li>

            <div className={more ? "list" : "list hidden"}>
              <li>
                <a href="/FAQ"><span><img src="images/icons/faq.svg" alt=""/></span>FAQ</a>
              </li>
              <li>
                <a href="/DEV"><span><img src="images/icons/dev-shop.svg" alt=""/></span>DEV Shop</a>
              </li>
              <li>
                <a href="/sponsors"><span><FcLike /></span>Sponsors</a>
              </li>
              <li>
                <a href="/about"><span><img src="images/icons/about.svg" alt=""/></span>About</a>
              </li>
              <li>
                <a href="/contact"><span><img src="images/icons/contact.svg" alt=""/></span>Contact</a>
              </li>
              <header>
                <h3>Other</h3>
              </header>

              <li>
                <a href="/code"><span><img src="images/icons/code-of-conduct.svg" alt=""/></span>Code of Conduct</a>
              </li>
              <li>
                <a href="/privacy"><span><img src="images/icons/privacy-policy.svg" alt="" /></span>Privacy Policy</a>
              </li>
              <li>
                <a href="/terms"><span><img src="images/icons/terms-of-use.svg" alt=""/></span>Terms of use</a>
              </li>
             
            </div>
          </ul>
        </nav>

        <div className={more ? "leftBar__social" : "leftBar__social hidden"}>
          <a href="/twitter">
            <span><img src="images/icons/twitter.svg" alt="twitter"/></span>
          </a>
          <a href="/facebook">
            <span><img src="images/icons/facebook.svg" alt="facebook"/></span>
          </a>
          <a href="/github">
            <span><images src="images/icons/github.svg" alt="github"/></span>
          </a>
          <a href="/instagram">
            <span><img src="images/icons/instagram.svg" alt="instagram"/></span>
          </a>
          <a href="/twitch">
            <span><img src="images/icons/twitch.svg" alt="twitch"/></span>
          </a>
        </div>
        <nav className="leftBar__taglist">
          <header>
            <h3>My Tags</h3>
            <span><img src="images/aside1/losbuenos/engrande.svg" alt="#"/></span>
          </header>
          <ul>
            {tags.map((tag, id) => {
              return (
                <li key={id}>
                  <a href="/#">#{tag}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {props.burgerMenu && (
        <div className="hamburger">
          <div className="hamburger__content">
            <header>
              <h2>DEV Community</h2>
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
              <a href="/home"><span><img src="images/icons/home.svg" alt=""/></span>Home</a>
            </li>
            <li>
              <a href="/reading"><span><img src="images/icons/readinglist.svg" alt=""/></span>Reading List</a>
            </li>
            <li>
              <a href="/list"><span><img src="images/icons/listings.svg" alt=""/></span>Listings</a>
            </li>
            <li>
              <a href="/podcast"><span><img src="images/icons/podcasts.svg" alt=""/></span>Podcasts</a>
            </li>
            <li>
              <a href="/videos"><span><img src="images/icons/videos.svg"alt=""/></span>Videos</a>
            </li>
            <li>
              <a href="/tags"><span><img src="images/icons/tags.svg" alt=""/></span>Tags</a>
            </li>
            <li className={more ? "more hidden" : "more"}>
              <i></i>
              <a href="/#" onClick={toggle}>
                More...
              </a>
            </li>

            <div className={more ? "list" : "list hidden"}>
              <li>
                <a href="/FAQ"><span><img src="images/icons/faq.svg" alt=""/></span>FAQ</a>
              </li>
              <li>
                <a href="/DEV"><span><img src="images/icons/dev-shop.svg" alt=""/></span>DEV Shop</a>
              </li>
              <li>
                <a href="/sponsors"><span><FcLike /></span>Sponsors</a>
              </li>
              <li>
                <a href="/about"><span><img src="images/icons/about.svg" alt=""/></span>About</a>
              </li>
              <li>
                <a href="/contact"><span><img src="images/icons/contact.svg" alt=""/></span>Contact</a>
              </li>
              <header>
                <h3>Other</h3>
              </header>

              <li>
                <a href="/code"><span><img src="images/icons/code-of-conduct.svg" alt=""/></span>Code of Conduct</a>
              </li>
              <li>
                <a href="/privacy"><span><img src="images/icons/privacy-policy.svg" alt="" /></span>Privacy Policy</a>
              </li>
              <li>
                <a href="/terms"><span><img src="images/icons/terms-of-use.svg" alt=""/></span>Terms of use</a>
              </li>
             
            </div>
          </ul>
        </nav>
              <div className={more ? "leftBar__social" : "leftBar__social hidden"}>
                <a href="/twitter"><span><img src="images/icons/twitter.svg" alt="twitter"/></span></a>
                <a href="/facebook"><span><img src="images/icons/facebook.svg" alt="facebook"/></span></a>
                <a href="/github"><span><images src="img/icons/github.svg" alt="github"/></span></a>
                <a href="/instagram"><span><img src="img/icons/instagram.svg" alt="instagram"/></span></a>
                <a href="/twitch"><span><img src="images/icons/twitch.svg" alt="twitch"/></span></a>
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
