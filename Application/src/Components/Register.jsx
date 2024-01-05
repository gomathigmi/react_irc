import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Register(){
    return(
        <div>
            <form id="registrationForm">
                 <h2>Registration</h2>
                 <label for="firstname">First name:</label>
                 <input type="text" id="firstname" name="firstname" required></input>
                 <label for="username">Last name:</label>
                 <input type="text" id="lastname" name="lastname" required></input>
                 <label for="">Mobile Number:</label>
                 <input type="number" id="mobilenumber" name="mobilenumber" required></input>
                 <label for="email">Email ID:</label>
                 <input type="email" id="email" name="email" required></input>
                 <label for="password">Password:</label>
                 <input type="password" id="password" name="password" required></input>
                 <label for="confirmpassword">Confirm Password:</label>
                 <input type="password" id="confirmpassword" name="confirmpassword" required></input>
                 <Button
        color="inherit"
        component={Link}
        to="/"
        style={{ height: '56px', fontSize: '0.9rem',backgroundColor:'#9c27b0',color:"white" }}
      >
        Register
      </Button>
                 <p>
                    Already have an account?<Link to="/Login">Login here</Link>
                </p>
                </form>
            
        </div>
    );
}
export default Register;