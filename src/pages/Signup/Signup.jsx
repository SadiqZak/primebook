import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { signupUser } from '../../store/authSlice'


const Signup = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [userInput, setUserInput] = useState({firstName:"", lastName:"", userName:"", password:""})

    const signUpHandler =(e)=>{
        e.preventDefault();
        dispatch(
            signupUser({username:userInput.userName, password:userInput.password, firstName:userInput.firstName, lastName:userInput.lastName })
        )
        navigate("/");
    }

  return (
    <div  className='login-container'>
        <div className="login-right">
            <div className="login-wrapper">
                <h4>Please signup to continue to PrimeBook</h4>
                <form onSubmit={signUpHandler} classname="login-form" action="">
                <div className="flex-dir-column-login">
                    First Name:
                    <input type="text" onChange={(e)=>setUserInput({...userInput, firstName:e.target.value})}  className="login-inp"/>
                </div>
                <div className="flex-dir-column-login">
                    Last Name:
                    <input type="text"  onChange={(e)=>setUserInput({...userInput, lastName:e.target.value})}  className="login-inp"/>
                </div>
                <div className="flex-dir-column-login">
                    User Name:
                    <input type="text"  onChange={(e)=>setUserInput({...userInput, userName:e.target.value})} className="login-inp" />
                </div>
                <div className="flex-dir-column-login">
                    Password:
                    <input type="password"  onChange={(e)=>setUserInput({...userInput, password:e.target.value})}  className="login-inp"/>
                </div>
                <div  className="flex-dir-column-login pd-tp-1">
                    <button className="login-btn">Sign up</button>
                </div>
                </form>
                <div>Already a user? <Link to='/login'>Login here</Link> </div>
            </div>
        </div>
    </div>
  )
}

export default Signup