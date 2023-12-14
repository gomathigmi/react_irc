import './Registration.css';
import { Link } from "react-router-dom";
function Registration(){
        let Register = () => {
            alert('Registration successful!');
          };
    return(
        <div class="split-screen">
            <div class="left-side" id='l'>
                <h2>Welcome to Bus Ticket Booking</h2>
                <p>Explore the world with our convenient bus services.</p>
            </div>
            <div class="right-side">
                <form id="registrationForm">
                 <h2>Registration</h2>
                 <label for="firstname">First name:</label>
                 <input type="text" id="firstname" name="firstname" required></input>
                 <label for="username">Last name:</label>
                 <input type="text" id="lastname" name="lastname" required></input>
                 <label for="">Mobile Number:</label>
                 <input type="text" id="lastname" name="lastname" required></input>
                 <label for="email">Email ID:</label>
                 <input type="email" id="email" name="email" required></input>
                 <label for="password">Password:</label>
                 <input type="password" id="password" name="password" required></input>
                 <label for="confirmpassword">Confirm Password:</label>
                 <input type="password" id="confirmpassword" name="confirmpassword" required></input>
                 <button type="button" onClick={Register}>Register</button>
                 <p>
                    Already have an account?<Link to="/">Login here</Link>
                </p>
                </form>
            </div>
        </div>
    );
}
export default Registration;