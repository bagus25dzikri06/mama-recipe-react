import React from 'react';
import style from '../assets/styles/styles';
import '../assets/styles/style.css';
import { Row, Col, Form, Input, Button } from 'reactstrap';

const Register = () => {
    return (
      <div>
         <Row>
           <Col md="6">
              <img style={style.imgFluid} src="../images/image15.jpg" alt="Sample photo" width="760" height="1417"/>
              <img style={style.mamaRecipe} src="../images/Group697.svg" alt="mama-recipe-wp" />
           </Col>
           <Col md="6">
              <div style={style.register} className="text-black">
                <h2 style={style.account} className="text-center mb-1">Let's Get Started!</h2>
                <p className="text-center mb-1">Create new account to access all features</p>
                <Form>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example1cg">Name</label>
                        <Input type="text" id="form3Example1cg" class="form-control form-control-lg" placeholder="Name"/>
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example3cg">E-mail Address</label>
                        <Input type="email" id="form3Example3cg" class="form-control form-control-lg" placeholder="E-mail Address"/>
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example4cg">Phone Number</label>
                        <Input type="password" id="form3Example4cg" class="form-control form-control-lg" placeholder="Phone Number"/>
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example4cdg">Create New Password</label>
                        <Input type="password" id="form3Example4cdg" class="form-control form-control-lg" placeholder="Create New Password"/>
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example4cdg">New Password</label>
                        <Input type="password" id="form3Example4cdg" class="form-control form-control-lg" placeholder="New Password"/>
                    </div>

                  <div class="form-check d-flex justify-content-center mb-5">
                      <Input
                          class="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3cg"
                      />
                      <label class="form-check-label" for="form2Example3g">
                          I agree all terms and conditions
                      </label>
                  </div>

                  <div class="d-flex justify-content-center">
                      <Button color="warning" size="lg" className="btn-block col-12">Register Account</Button>
                  </div>
          
                  <p class="text-center text-muted mt-5 mb-0">Already have an account? <a href="/login" class="fw-bold text-body"><u>Login here</u></a></p>
                </Form>
              </div>
           </Col>
         </Row>
      </div>
    );
};

export default Register;