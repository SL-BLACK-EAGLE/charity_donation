import { React } from "react";
import { MdEmail, MdLock } from "react-icons/md";
import "./style.css";

const SignIn = () => {
  return (
    <>
      <div className="bg-SignIn_BG_1 bg-cover bg-no-repeat w-[100vw] h-[100vh] flex justify-center items-center">
        <div class="wrapper">
          <div class="form-box">
            <h2>Login</h2>
            <form>
              <div class="input-box">
                <MdEmail class="icon" />
                <input type="email" required />
                <label>Email</label>
              </div>
              <div class="input-box">
                <MdLock class="icon" />
                <input type="password" required />
                <label>Password</label>
              </div>
              <div class="remember-forgot">
                <label>
                  <input type="checkbox" />
                  Remember me
                </label>
                <a href="#">Forgot Password?</a>
              </div>
              <button type="submit" class="btn">
                Login
              </button>
              <div class="login-register">
                <p>
                  Don't have an account? <a href="#">Register</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
