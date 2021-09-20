import collapsedIcon from "../../img/icons/collapsed-icon.svg"
import iconHeart from "../../img/icons/heart-icon.svg"
import loggedAvatar from "../../img/images/logged-in-avatar.webp"


export default function postComment(props){
        const comment = props.comment
         return (
            <div className="comment-box pt-3 d-flex">
                <div className="pfp-collapse-images pr-md-0 d-flex mr-2 flex-column">
                    <img className="rounded-circle" width="24px" height="24px" src={loggedAvatar} alt="karen"/>
                    <img className="mt-1" width="24px" height="24px" src={ collapsedIcon } alt="collapsed"/>
                </div>
                <div className="comment-info pl-md-0">
                    <div className="card">
                        <div className="card-body pt-1">
                            <div className="comment-person-info d-flex">
                                <p className="card-text"><small className="text-muted"> <b>{comment.readableUserName}</b></small></p>
                                <p className="card-text pl-1"><small className="text-muted"> {comment.readableCreationDate}</small></p>
                            </div>
                            <p>
                            {comment.content}
                            </p>
                        </div>
                    </div>
                    <div className="comment-interaction">
                        <button type="button" className="btn btn-light bg-white like-comment-btn" data-comment-id={comment._id} onClick={ props.likeComment }><img src={ iconHeart } alt="heart"  /><span className="font-weight-normal">{comment.reactionsCounter}</span> likes</button>
    
                    </div>
                </div>
            </div>
            )
        }