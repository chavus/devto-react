import React from 'react'
import {
    Link,
  } from "react-router-dom";


function Navbar() {
    return (
        <div>
           <header className="fixed-top">
                <div className="container-xl custom-container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <div className="navbar-left d-flex align-items-center">
                                    <button className="navbar-toggler d-flex d-md-none" type="button"
                                        data-toggle="collapse" data-target="#sidebar"
                                        aria-controls="navbarProfileInfo" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <Link to="index.html" class="site-logo" aria-label="DEV Community Home">
                                        <svg width="50" height="40" viewBox="0 0 50 40"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect width="50" height="40" rx="3"> </rect>
                                            <path fill="white"
                                                d="M19.099 23.508c0 1.31-.423 2.388-1.27 3.234-.838.839-1.942 1.258-3.312 1.258h-4.403V12.277h4.492c1.31 0 2.385.423 3.224 1.27.846.838 1.269 1.912 1.269 3.223v6.738zm-2.808 0V16.77c0-.562-.187-.981-.562-1.258-.374-.285-.748-.427-1.122-.427h-1.685v10.107h1.684c.375 0 .75-.138 1.123-.415.375-.285.562-.708.562-1.27zM28.185 28h-5.896c-.562 0-1.03-.187-1.404-.561-.375-.375-.562-.843-.562-1.404V14.243c0-.562.187-1.03.562-1.404.374-.375.842-.562 1.404-.562h5.896v2.808H23.13v3.65h3.088v2.808h-3.088v3.65h5.054V28zm7.12 0c-.936 0-1.684-.655-2.246-1.965l-3.65-13.758h3.089l2.807 10.804 2.808-10.804H41.2l-3.65 13.758C36.99 27.345 36.241 28 35.305 28z">
                                            </path>
                                        </svg>
                                    </Link>

                                </div>
                                <form className="seach">
                                    <input className="form-control " type="search" placeholder="Search..." aria-label="Search..." id="search"/>
                                    <Link className="search-button" to="/search"><i><img src="/images/icons/search.svg" alt="search"/></i></Link>
                                </form>
                                <div className="navbar-right d-flex  align-items-center">
                                    <button onclick="window.location.href='New.html';"
                                        className="btn btn-primary btn-create-post d-none d-md-flex">Create
                                        Post</button>
                                    <Link to="/search" class="d-flex d-md-none"><img src="images/icons/search.svg" alt="search"/></Link>
                                  
                                        <Link className="icons-links" to=""><img src="/images/icons/connect.svg" alt="connect"/></Link>
                                        <Link className="icons-links" to=""><img src="/images/icons/notifications.svg" alt="notifications"/></Link>
                                  
                                   

                                    <div className="nav-item dropdown">

                                        <button id="navbarScrollingDropdown"
                                            className="nav-link dropdown-toggle profile-badge"
                                            type="button" data-toggle="dropdown"
                                            data-target="#navbarProfileInfoToggler"
                                            aria-controls="navbarSidebarToggler"
                                            aria-expanded="false"
                                            aria-label="Toggle navigation">
                                            <span className="circle-badge">
                                                <img className="crayons-avatar__image"
                                                    alt="profile image"
                                                    id="nav-profile-image"
                                                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--IjCb_ILa--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/647885/81bdd7eb-d4eb-4f9e-94a3-0ce06183465b.png"/>
                                            </span>
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">

                                            <li>
                                                <a id="first-nav-link" href="#">

                                                    <span
                                                        className="fw-medium block">alfredopizana</span>
                                                    <small
                                                        className="fs-s color-base-50">@alfredopizana</small>

                                                </a>
                                            </li>
                                            <li><a className="dropdown-item"
                                                    href="#">Dashboard</a></li>
                                            <li><a className="dropdown-item" href="New.html">Create
                                                    Post</a></li>
                                            <li><a className="dropdown-item" href="#">Reading
                                                    List </a></li>
                                            <li><a className="dropdown-item"
                                                    href="#">Settings</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Sign
                                                    Out</a></li>
                                        </ul>
                                    </div>
                                </div>

                            </nav>
                        </div>
                    </div>
                </div>
            </header> 
        </div>
    )
}

export default Navbar
