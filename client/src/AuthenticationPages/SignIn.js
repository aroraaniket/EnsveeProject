import React,{useState ,useEffect} from 'react'
import RightPic from '../assests/images/Right.png'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../action/Auth';
//import { useNavigate } from 'react-router-dom';
function SignIn(props) {

console.log(props); 
//let navigate = useNavigate();
	const [formData,SetformData]=useState({
		
		email:'',
		password:'',
	
	})

	const AuthData = useSelector((state) => state.AuthData);
	const { loading, isAuthenticated } = AuthData;

	const dispatch = useDispatch();
	

	

	
	 
	
const onChange=(e)=>{
	SetformData({ ...formData, [e.target.name]: e.target.value });
}

	
	const SubmitHandler=async (e)=>{
		e.preventDefault();
	const {email,password}=formData;
		dispatch(signin(email,password));
		
	}
	

	
	useEffect(() => {
		if (isAuthenticated) {
  
		 
		  props.history.push('/getUser');
			}
	   
		return () => {
		  //
		};
	  }, [isAuthenticated]);


    return (loading ?
		<div>
			loading
		</div> :
        <div className="page-content">
		<div className="form-v2-content">
		
		<div className="form-right">
			<form onSubmit={SubmitHandler} className="form-detail" action="#" method="post" id="myform">
				<h2>Sign In 
				<Link to="/signin"
				style={{textDecoration:"none"}}
				><p>Welcome, we missed you!</p></Link>
				</h2>
				
				<div className="form-row">
					<label for="your_email">Your Email</label>
					<input type="text" name="email" id="your_email" 
					className="input-text" 
					placeholder="Enter you Email" 
					value={formData.email}
					onChange={(e)=>onChange(e)}
					required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" />
				</div>
				<div className="form-row">
					<label for="password">Password</label>
					<input type="password" name="password" id="password" className="input-text" placeholder="Enter you password" 
					value={formData.password}
					onChange={(e)=>onChange(e)}
					required />
				</div>
				
				<div className="form-row-last">
					<input type="submit" name="signin" className="signin mb-2" value="Sign In" />
					<span style={{fontSize:"14px"}}>New User ?<Link to="/"> SignUp</Link></span>
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

export default SignIn
