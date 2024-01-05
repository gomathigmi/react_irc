import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Login(){
    return(
        <div>
            <form style={{padding:"75px"}}>
            <h2>Login</h2>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required/>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required/>
            <Button
        color="inherit"
        component={Link}
        to="/"
        style={{ height: '56px', fontSize: '0.9rem',backgroundColor:'#9c27b0',color:"white" }}
      >
        Login
      </Button>
            
            <p>Don't have an account?<Link to="/Register">Register here</Link></p>
            </form>
        </div>
    );
}
export default Login;