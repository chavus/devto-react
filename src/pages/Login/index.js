import React from "react";
import sunglasses from '../../img/icons/sunglasses.svg'
import heart from '../../img/icons/heart.svg'
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

function Login(){
    return(
        <>
            <div className="supermain-container-login">
            <Row className="main-container-login d-flex">
            <div className="container-login bg-light p-3">
            <Col xs='12' >
                    <div>
                        <h1 className="font-weight-bold text-center">Welcome to DEV Community</h1>
                        <p className="text-center"><span className="text-relevant">DEV Comunity</span> is a community of 693,496 amazing developers</p>
                    </div>
            <Col xs='12'>
                    <div className="group-btns d-flex flex-column">
                        <Button id="apple" className="mt-2" type="button" color="dark" size="lg" block>Continue whit Apple</Button>
                        <Button id="github" className="mt-2" type="button" color="secondary" size="lg" block>Continue whit GitHub</Button>
                        <Button id="twitter" className="mt-2" type="button"  size="lg" block>Continue whit Twitter</Button>
                    </div>
            </Col>       
                    <div className="mt-3">
                    <p className="text-center">Have a password? Continue with your email address</p>
                    </div>
            </Col>
            <Col xs='12'>
                <Form className="py-3">
                    <FormGroup className="mb-2">
                        <Label className="mb-2">Email</Label>
                        <Input className="text-here" name="email"/>
                    </FormGroup>
                    <FormGroup>
                        <Label className="mb-2">Password</Label>
                        <Input className="text-here" name="password"/>
                    </FormGroup>
                    <div className="mt-2">
                        <input type="checkbox"/>
                        <label> Remember me</label>
                    </div>
                    <Button id= "continue"className="mt-3" type="button" size="lg" block >Continue</Button>
                    <p className="text-center mt-3"><span className="text-relevant">I forgot my password</span></p>
                </Form>
            </Col>
                <div>
                    <div className="mt-3 mb-5">
                        <p class="text-center text-muted ">Open Source <img src={sunglasses} alt="sunglasses"/> • Free Forever <img src={heart} alt="heart"/></p>
                        <p class="text-center text-muted ">We strive for transparency and don't collect excess data.</p>
                    </div>
                </div>  
            </div>
            </Row>
            </div>
            <Footer/>
        </>
    )
}

export default Login