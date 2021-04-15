import{ useContext, useReducer } from 'react';
import { Global } from '../../contexts/Global';

const Login=()=>{
    const reducer=(prev,next)=>({...prev,...next});
    const {setUser} = useContext(Global);

    const[{username,password},setState]=useReducer(reducer,{username:'', password:''});
    const onInputChange=(e)=>{
        let inputName=e.target.name;
        let value=e.target.value;
        console.log(e.target.value);
        setState({[inputName]:value});
    }
    const onSubmit=(e) => e.preventDefault();
    return(
        <div className="container">
           <form onSubmit={onSubmit}>
               <label> Username</label>
               <input  name='username' type="text" onChange={onInputChange}/>
               <br/>
               <br/>
               <label> Password</label>
               <input  name='password' type="password" onChange={onInputChange}/>
               <br/>
               <br/>
               <input type="submit"/>
           </form>
        </div>
    )
}

export default Login ;
