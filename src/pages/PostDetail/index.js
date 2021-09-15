import React, { useEffect } from "react";
import api from "../../lib/api"

function PostDetail(){

    useEffect(async ()=>{
        const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMTk0NjUzNzMzNTIwMTBlMDYyOTY3ZSIsImlhdCI6MTYzMTY3NDc5MCwiZXhwIjoxNjMyMjc5NTkwfQ.ZWG2xqDggdGLunQtNmh9bNudZcQNFJT-Vyia6k_9fbg"
        const postId = "611adb6ef0c6b3d17bdfd9b8"
        let res = await api.addComment("611adb6ef0c6b3d17bdfd9b8",{
            content: "commentario1 Chava 1",
            userName:"611946e973352010e0629681",
            creationDate:"2021-08-17T05:00:00.000Z",
            reactionsCounter:0
        },jwtToken)
        console.log(res)
    },[])

    return(
        <h1>This is the Post Detail page</h1>
    )
}

export default PostDetail