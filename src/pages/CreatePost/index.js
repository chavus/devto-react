import React, {useEffect} from "react";
import{ Link, useHistory } from "react-router-dom"
import getUserData from "../../lib/auth";

function CreatePost(props){
    const history = useHistory()

    useEffect(()=>{
        const userData = getUserData()
        if (!userData){
            console.log("user not logged in")
            history.push('/login')
        }
        props.changeIsCreatePost(true)
    },[])

    return(

            <Link className="dropdown-item" to="/">Main</Link>

        // <h1>This is the CreatePost page</h1>
    )
}

export default CreatePost