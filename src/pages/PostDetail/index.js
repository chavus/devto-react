import React, { useState, useEffect } from "react";
import { useParams, useHistory} from "react-router-dom"
import api from "../../lib/api"
import getUserData from "../../lib/auth";

import {
    Spinner
} from "reactstrap"

//Components
import LeftAside from "../../components/postDetailLeftAside";
import RightAside from "../../components/postDetailRightAside";
import MainSection from "../../components/postDetailMainSection";

import "./style.scss"

function PostDetail(props){
    const [ postData, setPostData ] = useState(null)
    const [ postComments, setPostComments ] = useState([])
    const [ comment, setComment] = useState("")
    const [userData, setUserData] = useState(null)
    const [collapsed, setCollapsed] = useState(true)


    const postId = useParams().id
    let history = useHistory()
    props.changeIsCreatePost(false)

    async function likePost(){
        if (!userData){
            history.push('/login')
        }else{
            const positiveReactionsCount = postData.positiveReactionsCount + 1
            setPostData( {...postData, positiveReactionsCount})
            const response = await api.updatePost(postId, {positiveReactionsCount}, userData.token)
        }
    }

    function handleInputChange(event){
        const value = event.target.value
        setComment(value)
    }

    async function addComment(event){
        const date = new Date()
        const [day, month] =[date.toString().split(" ")[2], date.toString().split(" ")[1]]
        const commentData = {
            content: comment,
            creationDate: date,
            readableCreationDate: `${month} ${day}`,
            userName: userData._id,
            reactionsCounter: 0,
        }
        console.log("commentData")
        console.log(commentData)
        const response = await api.addComment(postId, commentData, userData.token )
        const postDataRes = await api.getPostById(postId)
        console.log("postDataRes");
        console.log(postDataRes);
        const extendedPostData = await mapCommentsUsers(postDataRes, userData.token)
        console.log("extendedPostData")
        console.log(extendedPostData)
        setPostData(extendedPostData)
        setComment("")
        setCollapsed(false)
    }

    async function likeComment(event){
        if (!userData){
            history.push('/login')
        }else{
            const commentId = event.currentTarget.dataset.commentId
            console.log(commentId)
            let comments = [...postData.comments]
            console.log(comments)
            const commentIdx = comments.findIndex(comment => comment._id == commentId)
            console.log(commentIdx)
            comments[commentIdx].reactionsCounter = comments[commentIdx].reactionsCounter + 1
            console.log(comments)
            setPostData({...postData, comments})
            await api.updateComment(commentId, {reactionsCounter:comments[commentIdx].reactionsCounter}, userData.token)
        }
    }

    function onCommentClick(){
        !userData && history.push('/login')
    }

    useEffect(async ()=>{
        const userData = getUserData()
        setUserData(userData)
        const postDataRes = await api.getPostById(postId)
        const extendedPostData = await mapCommentsUsers(postDataRes, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMTk0NjUzNzMzNTIwMTBlMDYyOTY3ZSIsImlhdCI6MTYzMTkzNTE3MiwiZXhwIjoxNjMyNTM5OTcyfQ.zjjh8drORIg2FsjCN3FoWweLEZgwuj4w0bCRWc12xzQ")
        console.log(extendedPostData)
        setPostData(extendedPostData)
    },[])

    async function mapCommentsUsers(postData, tokenC){
        const users = await api.getAllUsers(tokenC)
        let extendedComments = postData.comments.map( comment => {
            const userNameId = comment.userName
            const user = users.filter(user => user._id == userNameId)[0].userName
            return {...comment, readableUserName: user}
        })
        return {...postData, comments: extendedComments}
    }

    return(
        

        <main className="container-xl custom-container">
        { !postData && <Spinner type="grow" color="primary" children=""/>}
        { postData  &&
            <div className="row">
                <aside className="col-12 col-md-1">
                    <LeftAside
                        positiveReactionsCount= { postData.positiveReactionsCount }
                        likePost = { likePost }
                        />
                </aside>
                <section className="col-12 col-md-11 col-lg-8 post-detail">
                    <MainSection
                    postData = { postData }
                    handleInputChange = { handleInputChange }
                    comment = { comment }
                    addComment = { addComment }
                    likeComment = { likeComment }
                    onCommentClick ={ onCommentClick }
                    collapsed = { collapsed }
                    setCollapsed = {setCollapsed}
                    />
                    
                </section> 
                <aside className="d-none d-lg-block d-xl-block col-lg-3 col-xl-3">
                    <RightAside
                    postData = { postData }
                    />
                </aside>
            </div>
        }
        </main>
    )
}

export default PostDetail

/*Pending
makes comments faster
handle authentication
collapse comments
input validation
colors of tags
Spinner
*/