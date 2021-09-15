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
        <div className="container bg-light mt-3 p-3">
        <Col xs="12">
                <div>
                    <h1 className="font-weight-bold text-center">Welcome to DEV Community</h1>
                    <p className="text-center"><a href="/">DEV Comunity</a>is a community of 693,496 amazing developers</p>
                </div>
                <div className="group-btns d-flex flex-column">
                    <Button className="mt-2" type="button" color="dark" size="lg" block>Continue whit Apple</Button>
                    <Button className="mt-2" type="button" color="secondary" size="lg" block>Continue whit GitHub</Button>
                    <Button className="mt-2" type="button" color="primary" size="lg" block>Continue whit Twitter</Button>
                </div>
                <div className="mt-3">
                <p className="text-center">Have a password? Continue with your email address</p>
                </div>
            <Form className="p-3 mt-1">
                <FormGroup className="mb-3">
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
                <div className="">
			        <p class="text-center text-muted ">Open Source  • Free Forever</p>
                    <p class="text-center text-muted ">We strive for transparency and don't collect excess data.</p>
				</div>
            </div>  
        </div>
    )
}

export default Login