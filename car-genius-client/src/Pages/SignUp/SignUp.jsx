import { updateProfile } from "firebase/auth";
import login from "../../assets/images/login/login.svg";
import { useAuthHook } from "../../providers/Hooks/useAuthHook";
import PrimaryButton from "../../Shared/Buttons/PrimaryButton";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { userByEmailPassword, user } = useAuthHook();

  // console.log(userByEmailPassword);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    userByEmailPassword(email, password)
      .then((userCredintial) => {
        console.log();
        userCredintial.user;

        updateProfile(userCredintial.user, {
          displayName: name,
        });

        console.log(user);
        alert(`${name} sign up succesfully`);
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
          <form onSubmit={handleSignUp} className="card-body text-center">
            <h1 className="text-3xl  font-bold">Sign Up</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
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
              <PrimaryButton>Sign Up</PrimaryButton>
            </div>
          </form>
          <div className="mb-6">
            <p>
              Have an Account?{" "}
              <Link to="/login" className=" text-[#FF3811]">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
