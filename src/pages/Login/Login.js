import { useContext, useEffect, useReducer } from "react";
import { useHistory } from "react-router";
import { Global } from "../../contexts/Global";

const Login = () =>{
    const reducer = (prev,next) => ({...prev,...next});
    const { user , setUser } = useContext(Global);
    useEffect(() => {
        console.log(user);
    },[user]);

    const history = useHistory();

    const[{username, password , error}, setState]= useReducer(reducer,
    {    
        username:'',
        password:'',
    });
    const onInputChange = (e) => {
        const inputName = e.target.name;
        const value = e.target.value;
        setState({ [inputName] : value });
    };
    
    const onSubmit = (e) =>{
        e.preventDefault();
        if (username === 'shimaa' && password === '1234') {
            setUser({ username, password});
            localStorage.setItem('username', username);
            setState({username:'',password:''});
            history.push('/home');
            return;
        }
            setState({error: 'Username or password is not valid'});
        }

    return (
    <div className="container">
        <form onSubmit={onSubmit}>
            <div class="form-group">
                <label>Username </label>
                <input name="username" type="text"  class="form-control" onChange={onInputChange} value={username}/>
            </div>          
           <div class="form-group">
              <label>Password</label>
              <input name="password" type="password" class="form-control" onChange={onInputChange} value={password}/>
           </div>
           
            <br/>
            <br/>
            <input type="submit" class="btn btn-primary" value="Login"/>
            <h3>{error}</h3>
        </form>
    </div>
    )
};

export default Login;

