import { AiOutlineGoogle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import login from "../../assets/images/login/login.svg";
import PrimaryButton from "../../Shared/Buttons/PrimaryButton";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthHook } from "../../providers/Hooks/useAuthHook";
import axios from "axios";

const Login = () => {
  const { loginWithEmailPassword } = useAuthHook();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginWithEmailPassword(email, password)
      .then((userCredintial) => {
        const loggedUser = userCredintial.user;
        console.log(loggedUser);
        alert("login succesfully");

        // const user = { email };
        // axios
        //   .post("http://localhost:5000/jwt", user, { withCredentials: true })
        //   .then((res) => {
        //     console.log(res.data);
        //     if (res.data.success) {
        //       navigate(location?.state ? location.state : "/");
        //     }
        //   });

        // navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content justify-between lg:gap-64 flex-col md:flex-row">
        <div className=" ">
          <img src={login} alt="" className="w-1/2 md:w-full mx-auto" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 text-center">
          <form onSubmit={handleSignIn} className="card-body text-center">
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
              {`Don't have any account?`}{" "}
              <Link to="/sign-up" className=" text-[#FF3811]">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
