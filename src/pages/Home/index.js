import React from 'react'

import LeftAsideB from "../../components/leftAside"
import RightSidebar from "../../components/rightAside"
import Content from "../../components/content"

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