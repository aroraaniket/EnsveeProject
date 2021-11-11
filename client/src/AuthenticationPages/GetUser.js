import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { logout } from '../action/Auth';
//import { useNavigate } from 'react-router-dom';
function GetUser(props) {
   // let navigate = useNavigate();
    const AuthData = useSelector((state) => state.AuthData);
	const { loading, user ,error} = AuthData;
const dispatch =useDispatch();
const Logout=async ()=>{

   await dispatch(logout());
  // navigate('/signin',{ replace: true });
   props.history.push('/signin');
}

    return (loading ?
        <div>
loading..
        </div>:
       
       <div class=" text-center "
       style={{margin: "230px auto 180px"}}>
  <div class="card-header">
    
  </div>
  <div class="card-body">
    <h2 class="card-title">Hello , {user && user.name}</h2>
    <div className="form-row-last">
                            <input onClick={()=>Logout()} type="submit"  className="logout" value="logout" />
                        </div>
  </div>
 
</div>
       
       )
}

export default GetUser
