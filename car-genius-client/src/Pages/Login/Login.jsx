import { AiOutlineGoogle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import login from "../../assets/images/login/login.svg";
import PrimaryButton from "../../Shared/Buttons/PrimaryButton";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content justify-between lg:gap-64 flex-col md:flex-row">
        <div className=" ">
          <img src={login} alt="" className="w-1/2 md:w-full mx-auto" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 text-center">
          <form className="card-body text-center">
            <h1 className="text-3xl  font-bold">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <PrimaryButton>Sign In</PrimaryButton>
            </div>
          </form>
          <div className="mb-6">
            <p>or sign in with</p>
            <div className="flex justify-center py-4 gap-4 text-[#FF3811] text-xl">
              <AiOutlineGoogle />
              <BsFacebook />
              <FaLinkedinIn />
            </div>
            <p>
              Have an Account? <Link className=" text-[#FF3811]">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
