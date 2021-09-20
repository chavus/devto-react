import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom"
import sunglasses from '../../img/icons/sunglasses.svg'
import heart from '../../img/icons/heart.svg'
import api from '../../lib/api'
import{
    Form,
    FormGroup,
    Input,
    Label,
    Button,
    Col,
    Row
} from 'reactstrap'

import Footer from '../../components/Footer'

import './styles.scss'

function Login(props){
    const [formData, setFormData] = useState({})
    let history = useHistory()
    props.changeIsCreatePost(false)
    // const onContinueClick = props.onContinueClick

    function onInputChange(event){
        const value = event.target.value
        const name = event.target.name
        setFormData({...formData, [name]:value})
    }

    async function onContinueClick(){
        const resAuth = await api.authenticate(formData)
        if (resAuth.success){
            const token = resAuth.data.token
            const id = JSON.parse(window.atob(token.split(".")[1])).id
            const userJson = await api.getUserById(id, token)
            const userData = userJson.data.getSingleUser
            delete userData.password
            localStorage.setItem("userData",JSON.stringify({...userData, token}))
            console.log("Successfully logged in")          
            props.changeUserData(userData)
            history.push("/")
        }else{
            //Pintamos un error
        }
    }



    return(
        <>
            <div className="d-flex flex-column justify-content-center align-items-center supermain-container-login">
                <div className="bg-white rounded border p-4">
                    <h3 className=" title-bold font-weight-bold text-center">Welcome to DEV Community</h3>
                    <p className="text-center"><span className="text-relevant">DEV Comunity</span> is a community of 693,496 amazing developers</p>
                        <div className="group-btns d-flex flex-column">
                            <Button id="apple" className=" my-buttons mt-2" type="button" color="dark" size="lg" block>Continue whit Apple</Button>
                            <Button id="github" className=" my-buttons mt-2" type="button" color="secondary" size="lg" block>Continue whit GitHub</Button>
                            <Button id="twitter" className=" my-buttons mt-2" type="button"  size="lg" block>Continue with Twitter</Button>
                        </div>
                        <div className="mt-3">
                            <p className="text-center">Have a password? Continue with your email address</p>
                        </div>
                    <Form className="py-3 ">
                        <FormGroup className=" form-login mb-2">
                            <Label className="mb-2">Email</Label>
                            <Input className="text-here" type="text" name="email" onChange={ onInputChange }/>
                        </FormGroup>
                        <FormGroup>
                            <Label className="mb-2">Password</Label>
                            <Input className="text-here" type="text" name="password" onChange={ onInputChange} />
                        </FormGroup>
                            <div className="mt-2">
                                <input type="checkbox"/>
                                <label> Remember me</label>
                            </div>
                        <Button id= "continue"className=" my-buttons mt-3" type="button" size="lg" block  onClick={ onContinueClick }>Continue</Button>
                        <p className="text-center mt-3"><span className="text-relevant">I forgot my password</span></p>
                    </Form>
                </div>
                <div className="info-card pt-3 d-flex flex-column justify-content-center align-items-center text-center">
                    <p class="text-center text-muted ">Open Source <img src={sunglasses} alt="sunglasses"/> • Free Forever <img src={heart} alt="heart"/></p>
                    <p class="text-center text-muted ">We strive for transparency and don't collect excess data.</p>
                </div>
            </div>
            <Footer/>
              
        </>
    )
}

export default Login