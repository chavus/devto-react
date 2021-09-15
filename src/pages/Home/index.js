import React from 'react'
import {
    Row
} from 'reactstrap'

import LeftAsideB from "../../components/leftAside"
import RightSidebar from "../../components/rightAside"
import Content from "../../components/content"
import Footer from '../../components/Footer'

const Home = ()=> {
    return(

       <>
            <main className="main-container d-flex">
                
                    <LeftAsideB/>
                    <Content/>
                    <RightSidebar/>
                
            </main>
           <Footer/>
        </>   
    )

}

export default Home