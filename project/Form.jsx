import './Form.css';
import { Link } from "react-router-dom";
function Form(){
    let login = () => {
        alert('Login successful!');
      };
    return(
        <div class="login-container">
            <h2>LOGIN</h2>
            <form>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required></input>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required></input>
                <button type="button" onClick={login}>Login</button>
                <p>
                    Don't have an account?<Link to="/registration">register here</Link>
                </p>
            </form>
        </div>
    );
}
export default Form;