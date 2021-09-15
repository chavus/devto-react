import React from 'react'

<<<<<<< HEAD:src/pages/Home/index.js
import LeftSidebar from "../components/LeftSidebar"
import RightSidebar from "../components/RightSidebar"
import Content from "../../components/Content"
=======
import LeftAsideB from "../../components/leftAside"
import RightSidebar from "../../components/rightAside"
import Content from "../../components/content"
>>>>>>> main:src/pages/home.js

const Home = ()=> {
    return(

        <div>
            <main className="main-container">
                <LeftAsideB/>
                <Content/>
                <RightSidebar/>
            </main>
        </div>
    )

}

export default Home