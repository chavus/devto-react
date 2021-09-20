import main from "../../img/photos/main card img.jpg"
import courtesity from "../../img/images/coursesity.png"
import loggedAvatar from "../../img/images/logged-in-avatar.webp"
import profile1 from "../../img/images/profile1.jpeg"
import sick from "../../img/pics/sick.jpg"
import karen from "../../img/pics/karen.jpeg"
import alfred from "../../img/pics/alfred.jpg"
import michael from "../../img/pics/me and michael.jpg"

import PostComment from '../postComment'

import { useState } from 'react'

export default function MainSection(props){
    // const [collapsed, setCollapsed] = useState(true)
    
    const { collapsed,setCollapsed } = props

    function listComments(){
        return postData.comments.map(comment => { return <PostComment
            comment = { comment }
     /> })
    }

    const postData = props.postData
    return(
        <>
            <div className="card">
                <img src={ postData.coverImage } className="card-img-top"
                    alt="" id="cover-image"/>
                <div className="card-body">
                    <img src= { courtesity } alt="coursesity"/> Coursesity
                    <h1 className="card-text font-weight-bold" id="title" name="title">{ postData.title }</h1>
                </div>
                <div className="px-4" id="tags-list">
                    {
                        postData.tagsList.map(tag => <button className="btn-card-2 text" type="button">{ tag }</button>
                        )
                    }            

                </div>
                <div className="card-format pt-3 px-4">
                    <img className="img-yash mr-2 mt-3" src= 'https://picsum.photos/200/300'
                        alt="yash tiwari" id="user-image"/>
                        <span id="user-name">{ postData.writer.userName }</span>
                        <span className="date-txt" id="post-date">{ postData.readablePublishedDate }</span>
                        <span className="date-txt" id="read-time">{postData.readingTimeMinutes}</span>
                        <span className="date-txt">min read</span>
                    <div className="card-text">
                        <p className="card-txt-2 mt-3" id="content" name="content">
                            { postData.content }
                        </p>
                    </div>
                </div>
            </div>

            {/* <!-- Discussion section --> */}

            <article className="discussion-section p-4 mt-5 pl-m-4 pr-m-4 pl-xl-5 pr-xl-5 bg-white rounded">
                <div className="discussion-title-button d-flex justify-content-between">
                    <h2>Discussion (<span className="comments-qty">{ postData.comments.length }</span>)</h2>
                    <button type="button" className="btn btn-outline-secondary">Subscribe</button>
                </div>
                <div className="discussion-comment-box d-flex mt-3 px-0">
                    <img className="rounded-circle mr-2" width="24px" height="24px" src= { loggedAvatar } alt="chava"/>
                    <form className="comment-form m">
                        <div className="input-group">
                            <textarea className="form-control" placeholder="Add to the discussion" id="comment-input" value={ props.comment } onChange={ props.handleInputChange }onFocus={ props.onCommentClick }></textarea>
                            <div className="invalid-feedback">
                                Huh? You didn't enter text, please do it!
                                </div>
                            <div className="valid-feedback">
                                Thanks for your comment!
                            </div>
                        </div>
                        <div className="mt-2">
                            <button className="btn btn-primary btn-submit rounded" type="button" id="add-comment-btn"  onClick={ props.addComment }><b>Submit</b></button>
                            <button className="btn btn-secondary rounded mx-3" type="button"><b>Preview</b></button>
                        </div>
                    </form>
                </div>
                <div className="comment-container">
                    {/* //Comment */}
                    { collapsed ?
                        listComments().slice(0,2) :
                        listComments()
                    }
                    {
                        listComments().length > 2 &&
                        <button className="mx-4" onClick= { ()=>(setCollapsed(!collapsed)) }>{ collapsed ? "See more" : "See less"}</button>
                    }
            </div>
            <button className="save mt-3 ml-4 d-none" id="toogle-show-comments">Show all <span className="comments-qty"></span> comments</button>
            </article>

            {/* <!---------------------------------------------------------------2nd DIV TOÑO--------------------------------------------------------------------------------> */}
            <div className="card mt-3 bg-post p-4">
                <h3 className="p-3 mt-2 title">Read next</h3>
                <div className="d-flex c-header mt-3">
                    <div className="ml-3 mb-3">
                        <img src={ alfred } alt="" className="pt-card"/>
                    </div>
                    <div className="d-flex c-name ml-2 ">
                        <a href="#" className="ps-list">
                            <h5>Don´t use Singleton Pattern in your unit
                                tests</h5>
                        </a>
                        <p>Alfredo Pizana - June 10</p>
                    </div>
                </div>
                <div className="d-flex c-header mt-3">
                    <div className="ml-3 mb-3">
                        <img src={ karen } alt="" className="pt-card"/>
                    </div>
                    <div className="d-flex c-name ml-2">
                        <a href="#" className="ps-list">
                            <h5>I have no idea what i´m doing</h5>
                        </a>
                        <p>Silvia Snow - June 9</p>
                    </div>
                </div>
                <div className="d-flex c-header mt-3">
                    <div className="ml-3 mb-3">
                        <img src={ michael } alt=""
                            className="pt-card"/>
                    </div>
                    <div className="d-flex c-name ml-2">
                        <a href="#" className="ps-list">
                            <h5>I hope get to finish kodemia´s bootcamp</h5>
                        </a>
                        <p>Antonio Ibarra - Jun 5</p>
                    </div>
                </div>
                <div className="d-flex c-header mt-3">
                    <div className="ml-3 mb-3">
                        <img src={ sick } alt="" className="pt-card"/>
                    </div>
                    <div className="d-flex c-name ml-2">
                        <a href="#" className="ps-list">
                            <h5>What's the difference between var, let and
                                const keywords?</h5>
                        </a>
                        <p>Xochitl Moreno - May 30</p>
                    </div>
                </div>

            </div>
        </>
    )
}