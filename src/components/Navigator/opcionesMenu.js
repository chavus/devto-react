import React, { useState, useEffect } from "react";
import {
  Link,
} from "react-router-dom";

import {
  FcLike,
} from "react-icons/fc";
import{
  GrFormClose,
}from "react-icons/gr";
import { IoLogoTwitter, IoLogoFacebook, IoLogoGithub } from "react-icons/io";
import { RiInstagramFill, RiTwitchLine } from "react-icons/ri";
import "./burgerBar.scss"



function OpcionesMenu() {

    return (
        <>

            <li>
                <Link to="/"><span><img src="images/icons/home.svg" alt=""/></span>Home</Link>
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
            
                <h5>Other</h5>
            

            <li>
                <Link to="/code"><span><img src="images/icons/code-of-conduct.svg" alt=""/></span>Code of Conduct</Link>
            </li>
            <li>
                <Link to="/privacy"><span><img src="images/icons/privacy-policy.svg" alt="" /></span>Privacy Policy</Link>
            </li>
            <li>
                <Link to="/terms"><span><img src="images/icons/terms-of-use.svg" alt=""/></span>Terms of use</Link>
            </li>
                     
            <div className="leftBar-social hidden">
                    <Link to="/twitter"><span> <IoLogoTwitter /></span></Link>
                    <Link to="/facebook"><span> <IoLogoFacebook /></span></Link>
                    <Link to="/github"><span> <IoLogoGithub /></span></Link>
                    <Link to="/instagram"><span><RiInstagramFill /></span></Link>
                    <Link to="/twitch"><span> <RiTwitchLine /></span></Link>
            </div>  

    </>
    )
}

export default OpcionesMenu
