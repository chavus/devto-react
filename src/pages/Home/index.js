import React from 'react'

import LeftSidebar from "../components/LeftSidebar"
import RightSidebar from "../components/RightSidebar"
import Content from "../../components/Content"

const Home = ()=> {
    return(

        <div>
            <main className="main-container">
                <LeftSidebar/>
                <Content/>
                <RightSidebar/>
            </main>
        </div>
    )

}

export default Home