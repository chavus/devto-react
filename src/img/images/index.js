import main from "../../img/photos/main card img.jpg"
import courtesity from "img/coursesity.png"
import loggedAvatar from "img/logged-in-avatar.webp"
import profile1 from "images/main/profile1.jpeg"
import sick from "../../img/pics/sick.jpg"
import karen from "../../img/pics/karen.jpeg"
import alfred from "../../img/pics/alfred.jpg"
import michael from "../../img/pics/me and michael.jpg"

export default function MainSection(){
    return(
        <>
            <div class="card">
                <img src={ main } class="card-img-top"
                    alt="" id="cover-image"/>
                <div class="card-body">
                    <img src= { courtesity } alt="coursesity"/> Coursesity
                    <h1 class="card-text font-weight-bold" id="title" name="title">React Libraries To Use In 2021:
                        15 Top Picks</h1>
                </div>
                <div class="pl-4" id="tags-list">
                    <button class="btn-card-2 text" type="button">#webdev</button>
                    <button class="btn-card-3 text" type="button">#beginners</button>
                    <button class="btn-card-4 text" type="button">#javascript</button>
                    <button class="btn-card-5 text" type="button">#reactnative</button>

                </div>
                <div class="card-format pt-3 pl-4">
                    <img class="img-yash mr-2 mt-3" src= { profile1 }
                        alt="yash tiwari" id="user-image"/>
                        <span id="user-name">YashTiwari</span>
                        <span class="date-txt" id="post-date">Jun 13</span>
                        <span class="date-txt" id="read-time">7</span>
                        <span class="date-txt">min read</span>
                    <div class="card-text">
                        <p class="card-txt-2 mt-3" id="content" name="content">
                            Content
                        </p>
                    </div>
                    <div class="d-none">
                        <h4 class="font-weight-bold">Discussions (1)</h4>
                        <form>
                            <img class="img-discussion" src= { sick }
                                alt="xochitl"/>
                            <textarea name="" id="" cols="50" rows="10"
                                placeholder="Add to the discussion."></textarea>
                            <div class="invalid-feedback">
                                Please provide a valid city.
                                </div>
                        </form>


                        <div>
                            <img class="img-discussion" src={ karen }
                                alt="karen"/>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Discussion section --> */}

            <article class="discussion-section pl-3 pr-3 pt-3 pb-3 mt-5 pl-m-4 pr-m-4 pl-xl-5 pr-xl-5 bg-white rounded">
                <div class="discussion-title-button d-flex justify-content-between">
                    <h2>Discussion (<span class="comments-qty">1</span>)</h2>
                    <button type="button" class="btn btn-outline-secondary">Subscribe</button>
                </div>
                <div class="discussion-comment-box d-flex mt-3">
                    <img class="rounded-circle mr-2" width="24px" height="24px" src= { loggedAvatar } alt="chava"/>
                    <form class="comment-form">
                        <div class="input-group">
                            <textarea class="form-control" placeholder="Add to the discussion" id="comment-input"></textarea>
                            <div class="invalid-feedback">
                                Huh? You didn't enter text, please do it!
                                </div>
                            <div class="valid-feedback">
                                Thanks for your comment!
                            </div>
                        </div>
                        <div class="mt-2">
                            <button class="btn btn-primary btn-submit rounded" type="button" id="add-comment-btn"><b>Submit</b></button>
                            <button class="btn btn-secondary rounded" type="button"><b>Preview</b></button>
                        </div>
                    </form>
                </div>
                <div class="comment-container">
                    {/* <!-- <div class="comment-box pt-3 d-flex">
                        <div class="pfp-collapse-images pr-md-0 d-flex mr-2 flex-column">
                            <img class="rounded-circle" width="24px" height="24px" src="img/comment-person.png" alt="karen"/>
                            <img class="mt-1" width="24px" height="24px" src="img/collapsed-icon.svg" alt="collapsed"/>
                        </div>
                        <div class="comment-info col-11 pl-md-0">
                            <div class="card">
                                <div class="card-body pt-1">
                                    <div class="comment-person-info d-flex">
                                        <p class="card-text"><small class="text-muted"> <b>Sylvia Snowed</b></small></p>
                                        <p class="card-text pl-1"><small class="text-muted"> June 12</small></p>
                                    </div>
                                    <p>
                                        Was this revelated to you in a dream?
                                    </p>
                                </div>
                            </div>
                            <div class="comment-interaction">
                                <button type="button" class="btn btn-light bg-white"><img src="img/heart-icon.svg" alt="heart" /> <span class="font-weight-normal" >2</span> likes</button>
                                <button type="button" class="btn btn-light bg-white"><img src="img/comments-icon.svg" alt="comment" />0</button>
                            </div>
                        </div>
                    </div> --> */}
            </div>
            <button class="save mt-3 ml-4 d-none" id="toogle-show-comments">Show all <span class="comments-qty"></span> comments</button>
            </article>

            {/* <!---------------------------------------------------------------2nd DIV TOÑO--------------------------------------------------------------------------------> */}
            <div class="card mt-3 bg-post p-2">
                <h3 class="p-3 mt-2 title">Read next</h3>
                <div class="d-flex c-header mt-3">
                    <div class="ml-3 mb-3">
                        <img src={ alfred } alt="" class="pt-card"/>
                    </div>
                    <div class="d-flex c-name ml-2">
                        <a href="#" class="ps-list">
                            <h5>Don´t use Singleton Pattern in your unit
                                tests</h5>
                        </a>
                        <p>Alfredo Pizana - June 10</p>
                    </div>
                </div>
                <div class="d-flex c-header mt-3">
                    <div class="ml-3 mb-3">
                        <img src={ karen } alt="" class="pt-card"/>
                    </div>
                    <div class="d-flex c-name ml-2">
                        <a href="#" class="ps-list">
                            <h5>I have no idea what i´m doing</h5>
                        </a>
                        <p>Silvia Snow - June 9</p>
                    </div>
                </div>
                <div class="d-flex c-header mt-3">
                    <div class="ml-3 mb-3">
                        <img src={ michael } alt=""
                            class="pt-card"/>
                    </div>
                    <div class="d-flex c-name ml-2">
                        <a href="#" class="ps-list">
                            <h5>I hope get to finish kodemia´s bootcamp</h5>
                        </a>
                        <p>Antonio Ibarra - Jun 5</p>
                    </div>
                </div>
                <div class="d-flex c-header mt-3">
                    <div class="ml-3 mb-3">
                        <img src={ sick } alt="" class="pt-card"/>
                    </div>
                    <div class="d-flex c-name ml-2">
                        <a href="#" class="ps-list">
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