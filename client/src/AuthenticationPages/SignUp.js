import React from 'react'

function SignUp() {
	return (
		<div>
			hello
		</div>
	)
}

export default SignUp


/*import React, { Component } from 'react';

import { Field, formInputData, formValidation } from 'reactjs-input-validator';
import RightPic from '../assests/images/Right.png'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import { register } from '../action/Auth';
import { connect } from 'react-redux';
import axios from 'axios';
export default  class Register extends Component {




  constructor() {
    super();
    this.state = {
      data: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  








 
  handleChange(event, inputValue, inputName, validationState, isRequired) {
    const value = (event && event.target.value) || inputValue;
    const { data } = this.state;
    data[inputName] = { value, validation: validationState, isRequired };
    this.setState({
      data,
    });
  
    // if you want access to your form data
    const formData = formInputData(this.state.data); // eslint-disable-line no-unused-vars
    // tells you if the entire form validation is true or false
    const isFormValid = formValidation(this.state.data); // eslint-disable-line no-unused-vars
  }
 
  handleSubmit(event) {
    event.preventDefault();
    const isFormValid = formValidation(this.state.data);
	const { data } = this.state;
	console.log(data);
    if (isFormValid) {
      // do anything including ajax calls
	 // register({ name,email, password });
	 const config = {
		headers: {
		  'Content-Type': 'application/json',
		},
	  };
	 // const body = JSON.stringify(data);
	 //const {data}=axios.post('http://localhost:7000/api/users/register',body,config);
 
    } else {
      this.setState({ callAPI: true, shouldValidateInputs: !isFormValid });
    }
  }
 
  render() {
    const passwordValue = this.state.data.password && this.state.data.password.value;
 
    return (
		<div className="page-content">
		<div className="form-v2-content">
		
		<div className="form-right">
			<form   className="form-detail" action="#" method="post" id="myform">
				<h2>Sign UP 
				<Link to="/signin"
				style={{textDecoration:"none"}}
				><p>Don't have an account?</p></Link>
				</h2>
				<div className="form-row">
				<Field
              required
              label="Full Name" name="fullName" placeholder="Ivan Pavlo"
              onChange={this.handleChange}
              value={this.state.data.fullName}
              shouldValidateInputs={this.state.shouldValidateInputs}
            />
				</div>
			
				<div className="form-row">
				<Field
              validator="isEmail" required
              label="Email" name="email" placeholder="Email"
              onChange={this.handleChange}
              value={this.state.data.email}
              shouldValidateInputs={this.state.shouldValidateInputs}
            />
 
				</div>
				<div className="form-row">
				<Field
              validator="isAlphanumeric" required minLength={8}
              minLengthErrMsg="Short passwords are easy to guess. Try one with atleast 8 characters"
              label=" Password" name="password" type="password" placeholder="Enter you password"
              onChange={this.handleChange}
              value={this.state.data.password}
              shouldValidateInputs={this.state.shouldValidateInputs}
            />
					</div>
				<div className="form-row">
				<Field
              validator="equals" required comparison={passwordValue}
              validatorErrMsg="These passwords don't match. Try again?"
              label="Repeat Password" name="confirmPassword" type="password" placeholder="Enter you password"
              onChange={this.handleChange}
              value={this.state.data.confirmPassword}
              shouldValidateInputs={this.state.shouldValidateInputs}
            /></div>
			
				<div className="form-row-last">
					<input type="submit" name="register" className="register" value="Sign Up" />
				</div>
			</form>
			</div>
			<div className="form-left">
				<img src={RightPic} alt="form" />
			</div>
		
		</div>
	</div>
    );
  }
}


  


/*import React from 'react'
import RightPic from '../assests/images/Right.png'
import {Link} from 'react-router-dom'
import { Field } from 'reactjs-input-validator';
function SignUp() {
    return (
        <div className="page-content">
		<div className="form-v2-content">
		
		<div className="form-right">
			<form className="form-detail" action="#" method="post" id="myform">
				<h2>Sign UP 
				<Link to="/signin"
				style={{textDecoration:"none"}}
				><p>Don't have an account?</p></Link>
				</h2>
				<div className="form-row">
					<label for="full-name">Full Name</label>
					<input type="text" name="full_name" id="full_name" className="input-text" placeholder="Ivan Pavlo" />
				</div>
			
				<div className="form-row">
					<label for="your_email">Your Email</label>
					<input type="text" name="your_email" id="your_email" className="input-text" placeholder="Enter you Email"  required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" />
				</div>
				<div className="form-row">
					<label for="password">Password</label>
					<input type="password" name="password" id="password" className="input-text" placeholder="Enter you password" required />
				</div>
				<div className="form-row">
					<label for="comfirm-password">Repeat Password</label>
					<input type="password" name="confirm_password" id="confirm_password" placeholder="Enter you password" className="input-text" required />
				</div>
			
				<div className="form-row-last">
					<input type="submit" name="register" className="register" value="Sign Up" />
				</div>
			</form>
			</div>
			<div className="form-left">
				<img src={RightPic} alt="form" />
			</div>
		
		</div>
	</div>
    )
}

export default SignUp*/
