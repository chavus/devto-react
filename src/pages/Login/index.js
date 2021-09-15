import React from "react";

import{
    Form,
    FormGroup,
    Input,
    Label,
    Button,
    Col
} from 'reactstrap'

import './styles.scss'

function Login(){
    return(
        <>
            <div className="container bg-light mt-3 p-3">
            <Col xs="12">
                    <div>
                        <h1 className="font-weight-bold text-center">Welcome to DEV Community</h1>
                        <p className="text-center"><a href="/">DEV Comunity</a>is a community of 693,496 amazing developers</p>
                    </div>
                    <div className="group-btns d-flex flex-column">
                        <Button id="apple" className="mt-2" type="button" color="dark" size="lg" block>Continue whit Apple</Button>
                        <Button id="github" className="mt-2" type="button" color="secondary" size="lg" block>Continue whit GitHub</Button>
                        <Button id="twitter" className="mt-2" type="button" color="primary" size="lg" block>Continue whit Twitter</Button>
                    </div>
                    <div className="mt-3">
                    <p className="text-center">Have a password? Continue with your email address</p>
                    </div>
                <Form className="p-3">
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
                    <Button className="mt-3" type="button" color="primary" size="lg" block >Continue</Button>
                    <p className="text-center mt-3"><a href="#">I forgot my password</a></p>
                </Form>
            </Col>
                <div>
                    <div className="mb-5">
                        <p class="text-center text-muted ">Open Source  • Free Forever</p>
                        <p class="text-center text-muted ">We strive for transparency and don't collect excess data.</p>
                    </div>
                </div>  
            </div>
            
            <footer className="bg-gray mt-5 ml-0 mr-0">
            <div className="container-sm custom-container d-flex">
                <p className="f-size"><span>DEV Community </span>-A constructive and inclusive social network for software. With you every
                    step
                    of your journey</p>
                <p className="f-size">Built on<span> Forem </span>-the<span> open source </span>software that powers <span> DEV </span>and
                    other
                    inclusive communties commuties.</p>
                <p className="f-size">Made with love and<span> Ruby on Rails. </span>DEV Community 2016-2021.</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        role="img" aria-labelledby="a50wz97mz5gmig7iz9e15galmubn0vpu"
                        className="crayons-icon crayons-icon--default">
                        <title id="a50wz97mz5gmig7iz9e15galmubn0vpu">Forem logo</title>
                        <g clip-path="url(#clip0)" fill="#1AB3A6">
                            <path
                                d="M4.603 1.438a8.056 8.056 0 017.643 5.478 8.543 8.543 0 00-3.023 5.968H8.054C3.606 12.884 0 9.296 0 4.87V1.468a.03.03 0 01.03-.03h4.573zM23.97 6.515a.03.03 0 01.03.03v2.833c0 4.11-3.354 7.442-7.491 7.442h-2.881v5.726h-2.305V14.53l.022-1.145c.294-3.843 3.526-6.87 7.469-6.87h5.155z">
                            </path>
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <path fill="#fff" d="M0 0h24v24H0z"></path>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </footer>
        </>
    )
}

export default Login