import appleFire from "../../img/icons/apple-fire.png"
import changuito from "../../img/images/changuito.jpg"
import faceSunglasses from "../../img/icons/face-sunglasses.svg"
import moment from 'moment'

export default function RightAside(props){

	const {biography, joinDate, nationality, userName, name} = props.postData.writer

    return(
        <div class=" sticky-top post-detail-profile">
					<div class="card box post-detail-profile-info">
						<div class="card-header">
							<img class="img-size" src="https://picsum.photos/200/300"
								alt=""></img>
							<h5 class="card-title" id="postUser">{userName}</h5>
						</div>
						<div class="card-body">

							<p class="card-text">{biography}
							</p>
							<button class="follow-btn" type="button">Follow</button>
							<ul class="list-style">
								<li><b class="simon-txt">WORK</b><br/>Kodemia RULES, but i feel pretty tired</li>
								<li><b class="simon-txt">LOCATION</b><br/>{nationality}</li>
								<li><b class="simon-txt" >JOINED</b><br/> <span id="joinDate">{moment(joinDate).format('dddd Do MMMM YYYY')}</span></li>
							</ul>
						</div>
					</div>
					{/* <!----------------------------------------------------------------MORE FROM ISRAEL SALINAS---------------------------------------------------------> */}
					<div class="card mt-3">
						<div class="card-header font-weight-bold">
							<h5>More from {name} <span class="c-text-color"></span>
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