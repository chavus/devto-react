import React, { useEffect } from "react";
import LeftAside from "../../components/postDetailLeftAside";
import api from "../../lib/api"

import "./style.scss"

import {
    // Main,
    // Aside,
    // Section,
} from 'reactstrap'

function PostDetail(){

    useEffect(async ()=>{
        const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMTk0NjUzNzMzNTIwMTBlMDYyOTY3ZSIsImlhdCI6MTYzMTY3NDc5MCwiZXhwIjoxNjMyMjc5NTkwfQ.ZWG2xqDggdGLunQtNmh9bNudZcQNFJT-Vyia6k_9fbg"
        const postId = "611adb6ef0c6b3d17bdfd9b8"
        // let res = await api.addComment("611adb6ef0c6b3d17bdfd9b8",{
        //     content: "commentario1 Chava 1",
        //     userName:"611946e973352010e0629681",
        //     creationDate:"2021-08-17T05:00:00.000Z",
        //     reactionsCounter:0
        // },jwtToken)
        // console.log(res)
    },[])

    return(
        <main className="container-xl custom-container">
            <h1>This is the Post Detail page</h1>
            <div className="row">
                <aside className="col-12 col-md-1">
                    <LeftAside/>
                </aside>
                <section className="col-12 col-md-11 col-lg-8 post-detail">
                    <h1>Section</h1>
                </section>
                <aside className="d-none d-lg-block d-xl-block col-lg-3 col-xl-3">
                    <h1>Right Aside</h1>
                </aside>
            </div>
        </main>
    // Pasted from previous
    

    )
}

export default PostDetail