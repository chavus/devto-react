import React, { useState } from 'react'
import {FaDev} from "react-icons/fa"
import {BiMessageRoundedCheck} from "react-icons/bi"
import {RiNotification3Line} from "react-icons/ri"

const Navigation = ()=> {

    const [showMenu, setshowMenu] = useState(false)

    const toggle = () =>{
        setshowMenu(!showMenu)
    }

    return(

        <>
            <header className="header">
                <div className="headerContainer">
                    <a href="#" className="headerContainer__logo"><FaDev size="3.5rem"/></a>

                    <div className="headerContainer__searchBox">
                        <form action="">
                            <input type="text" placeholder="Search..." aria-label="search" />
                        </form>
                    </div>

                    <div className="headerContainer__right">
                        <button>Write a post</button>
                        <i><BiMessageRoundedCheck/></i>
                        <i><RiNotification3Line/></i>

                        <span onClick={toggle}><img src="https://picsum.photos/200" alt="Profile picture" /></span>
                    </div>

                </div>

                {/* <div className={showMenu? "dropdown-menu" : "dropdown-menu-close"}>

                    <ul>
                        <li onClick={toggle}>
                            <a href="/profile">
                                <div className="u-name">mwortegam</div>
                                <small className="u-name-id">@mwortegam</small>
                            </a>
                        </li>
                        <li onClick={toggle}>
                            <a href="/dashboard">Dashboard</a>
                        </li>
                        <li onClick={toggle}>
                            <a href="/post">Writing a Post</a>
                        </li>
                        <li onClick={toggle}>
                            <a href="/list">Reading list</a>
                        </li>
                        <li onClick={toggle}>
                            <a href="/settings">Settings</a>
                        </li>
                        <li onClick={toggle}>
                            <a href="/signout">Signout</a>
                        </li>
                    </ul>

                </div> */}

            </header>
        </>
    )

}

export default Navigation
