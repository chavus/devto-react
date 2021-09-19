import heartAction from "../../img/icons/heart-action.svg"
import unicornAction from "../../img/icons/unicorn-action.svg"
import saveAction from "../../img/icons/save-action.svg"
import moreAction from "../../img/icons/more-action.svg"


export default function LeftAside(props){
	
    return(
        <div class="post-detail-actions">
					<button class="action heart" id="reactions-btn" onClick={ props.likePost }>
						<span class="icon">
							<img src={ heartAction } alt="like"></img>
						</span>
						<span class="counter" id="reactions-count"> {props.positiveReactionsCount} </span>
					</button>
					<button class="action unicorn">
						<span class="icon">
							<img src={ unicornAction } alt="unicorn"></img>
						</span>
						<span class="counter">500</span>
					</button>
					<button class="action save">
						<span class="icon">
							<img src={ saveAction } alt="save"></img>
						</span>
						<span class="counter">60</span>
					</button>
					<button class="action more">
						<span class="icon">
							<img src={ moreAction } alt="like"></img>
						</span>
					</button>
				</div>
    )
}