

export default function LeftAside(){
    return(
        <div class="post-detail-actions">
					<button class="action heart" id="reactions-btn">
						<span class="icon">
							<img src="img/icons/heart-action.svg" alt="like"></img>
						</span>
						<span class="counter" id="reactions-count">100</span>
					</button>
					<button class="action unicorn">
						<span class="icon">
							<img src="img/icons/unicorn-action.svg" alt="unicorn"></img>
						</span>
						<span class="counter">500</span>
					</button>
					<button class="action save">
						<span class="icon">
							<img src="img/icons/save-action.svg" alt="save"></img>
						</span>
						<span class="counter">60</span>
					</button>
					<button class="action more">
						<span class="icon">
							<img src="img/icons/more-action.svg" alt="like"></img>
						</span>
					</button>
				</div>
    )
}