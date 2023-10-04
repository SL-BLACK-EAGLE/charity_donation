import { React } from "react";
import { MdEmail, MdLock } from "react-icons/md";
import { FaFlag, FaPhoneVolume, FaUserLarge } from "react-icons/fa6";
import "./style.css";



const SignUp = () => {

  return (
    <>
      <div className="bg-SignIn_BG bg-cover bg-no-repeat w-[100vw] h-[100vh] flex justify-center items-center">
        <div className="wrapper ">
          <p className="font-rubik font-bold text-[2.5rem] text-white text-center mt-[5rem]">Registration</p>
          <form>
            <div className="flex ml-[3rem] mt-[2rem]">
              <div className=" w-[13rem] h-[2.5rem] border-b-2 border-[#162938]">
                <input type="text" placeholder="First Name" className="placeholder-white w-[11.5rem] h-[2.5rem] bg-transparent border-none outline-none font-rubik font-[1rem]" />
                <FaUserLarge className="text-white mt-[-1.7rem] ml-[12rem]" />
              </div>
              <div className=" w-[13rem] h-[2.5rem] border-b-2 border-[#162938] ml-[2rem]">
                <input type="text" placeholder="Last Name" className="placeholder-white  w-[11.5rem] h-[2.5rem] bg-transparent border-none outline-none font-rubik font-[1rem]" />
                <FaUserLarge className="text-white mt-[-1.7rem] ml-[12rem]" />
              </div>
            </div>

            <div className="flex mt-[2rem] ml-[3rem]">
              <div className=" w-[13rem] h-[2.5rem] border-b-2 border-[#162938]">
                <input type="email" placeholder="Email Address" className="placeholder-white w-[11.5rem] h-[2.5rem] bg-transparent border-none outline-none font-rubik font-[1rem]" />
                <MdEmail className="text-white mt-[-1.7rem] ml-[12rem]" />
              </div>
              <div className=" w-[13rem] h-[2.5rem] border-b-2 border-[#162938] ml-[2rem]">
                <input type="text" placeholder="Mobile Number" className="placeholder-white w-[11.5rem] h-[2.5rem] bg-transparent border-none outline-none font-rubik font-[1rem]" />
                <FaPhoneVolume className="text-white mt-[-1.7rem] ml-[12rem]" />
              </div>
            </div>

            <div className="flex mt-[2rem] ml-[3rem]">
              <div className=" w-[13rem] h-[2.5rem] border-b-2 border-[#162938]">
                <input type="password" placeholder="Password" className="placeholder-white w-[11.5rem] h-[2.5rem] bg-transparent border-none outline-none font-rubik font-[1rem]" />
                <MdLock className="text-white mt-[-1.7rem] ml-[12rem]" />
              </div>
              <div className=" w-[13rem] h-[2.5rem] border-b-2 border-[#162938] ml-[2rem]">
                <input type="password" placeholder="Confirm Password" className="placeholder-white w-[11.5rem] h-[2.5rem] bg-transparent border-none outline-none font-rubik font-[1rem]" />
                <MdLock className="text-white mt-[-1.7rem] ml-[12rem]" />
              </div>
            </div>

            <div className="flex mt-[2rem] ml-[3rem]">
              <div className=" w-[13rem] h-[2.5rem] border-b-2 border-[#162938]">
                <input type="text" placeholder="username" className="placeholder-white w-[11.5rem] h-[2.5rem] bg-transparent border-none outline-none font-rubik font-[1rem]" />
                <FaUserLarge className="text-white mt-[-1.7rem] ml-[12rem]" />
              </div>
              <div className=" w-[13rem] h-[2.5rem] border-b-2 border-[#162938]  ml-[2rem]">
                <select id="countries" className=" w-[11.5rem] h-[2.5rem] bg-transparent border-none outline-none font-rubik font-[1rem]" >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
                <FaFlag className="text-white mt-[-1.7rem] ml-[12rem]" />
              </div>
              
            </div>
      
              <button type="submit" class="btn">
                Register
              </button>
              <div class="login-register">
                <p>
                  Already have an account? <a href="#">Login</a>
                </p>
              </div>



          </form>

        </div>
      </div>
    </>
  );
};
export default SignUp;