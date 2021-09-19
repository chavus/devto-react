import appleFire from "../../img/icons/apple-fire.png"
import changuito from "../../img/images/changuito.jpg"
import faceSunglasses from "../../img/icons/face-sunglasses.svg"

export default function RightAside(){
    return(
        <div class=" sticky-top post-detail-profile">
					<div class="card box post-detail-profile-info">
						<div class="card-header">
							<img class="img-size" src="https://miro.medium.com/max/1400/1*qFqiylPdiqIJlDrXdiljKQ.jpeg"
								alt="Israel Salinas"></img>
							<h5 class="card-title" id="postUser">Israel Salinas</h5>
						</div>
						<div class="card-body">

							<p class="card-text">Making the best platform for all developers
								--<br/>http://thesmartcoder.dev
								<img class="laptop-icon" src={ changuito }
									alt=""></img> <br/>Programming is the best
								job in the
								world! Coder
								<img class="laptop-icon"
									src={ appleFire }
									alt="laptop-icon"></img>
								Writer
								<img class="laptop-icon"
									src= { faceSunglasses }
									alt="laptop-icon"></img><br/>Building an Empire
							</p>
							<button class="follow-btn" type="button">Follow</button>
							<ul class="list-style">
								<li><b class="simon-txt">WORK</b><br/>Maker <span
										class="card-span">at</span> The Smart
									Coder</li>
								<li><b class="simon-txt">LOCATION</b><br/>Remote</li>
								<li><b class="simon-txt" >JOINED</b><br/> <span id="joinDate">  </span></li>
							</ul>
						</div>
					</div>
					{/* <!----------------------------------------------------------------MORE FROM ISRAEL SALINAS---------------------------------------------------------> */}
					<div class="card mt-3">
						<div class="card-header font-weight-bold">
							<h5>More from <span class="c-text-color"></span>
							</h5>
						</div>
						<ul class="list-group list-group-flush">
							<li class="list-group-item">Lesser-Known Yet Still Popular Java
								Script Frameworks for
								Front-End Developers<span
									class="card-txt"><br/>#javascript #webdev
									#beginners</span>
							</li>
							<li class="list-group-item">10 Awesome Free Courses for Devs by
								Devs<span class="card-txt"><br/>#javascript #webdev
									#react #vue</span></li>
							<li class="list-group-item">Java vs. JavaScript - What is the
								Difference?<span class="card-txt"><br/>#javascript #java
									#webdev<br/>#todayilearned</span></li>
						</ul>
					</div>
				</div>
    )
}