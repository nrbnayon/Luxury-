import { Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateProfile, loading, profileUpdating } =
    useContext(AuthContext);

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const username = form.get("username");
    const photourl = form.get("photourl");
    const email = form.get("email");
    const password = form.get("password");
    const cpassword = form.get("cpassword");
    const terms = e.target.terms.checked;
    setError("");
    if (password !== cpassword) {
      setError("Passwords do not match");
      return;
    } else if (password.length < 6) {
      setError("Passwords should be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
      setError(
        "Password Should need At least one uppercase and one lowercase letter."
      );
      return;
    }
    if (!terms) {
      setError("Need to accept our terms and condition");
      return;
    }
    // try {
    //   const result = await createUser(email, password);
    //   await updateProfile(result.user, {
    //     displayName: username,
    //     photoURL: photourl,
    //   });
    //   toast.success("Register Successful");
    //   navigate("/");
    // } catch (error) {
    //   setError(error.message);
    // }
    try {
      const result = await createUser(email, password);
      await updateProfile(result.user, {
        displayName: username,
        photoURL: photourl,
      });
      toast.success("Register Successful");
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="hero min-h-screen bg-base-300 rounded-xl">
      <div className="card w-full md:w-2/3 lg:w-1/2 mx-auto shadow-lg bg-base-200">
        <form onSubmit={handleRegister} className="card-body">
          <h1 className="text-xl text-center md:text-3xl font-bold">
            Register a new Account
          </h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter your full name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Profile Url</span>
            </label>
            <input
              type="text"
              name="photourl"
              placeholder="Enter profile image url"
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
              name="email"
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative flex items-center w-full">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create a password"
                className="input input-bordered w-full pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-0 h-full flex items-center justify-center p-2"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <div className="relative flex items-center w-full">
              <input
                type={showPassword ? "text" : "password"}
                name="cpassword"
                placeholder="Confirm your password"
                className="input input-bordered w-full pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-0 h-full flex items-center justify-center p-2"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <div className="form-control">
            <label className="flex gap-1">
              <input
                type="checkbox"
                // defaultChecked
                name="terms"
                className="checkbox checkbox-info"
              />
              <span className=" text-left">
                Accepts our <a href="#">terms and conditions</a>
              </span>
            </label>
          </div>
          <div className="mt-4">
            <button
              className="btn btn-primary w-full"
              disabled={loading || profileUpdating}
            >
              Register
            </button>
          </div>
          {error && <p>{error}</p>}
          <Typography variant="small" className="mt-6 flex justify-center">
            Already have an account?
            <Link
              as="a"
              to="/login"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
            >
              Login here
            </Link>
          </Typography>
        </form>
      </div>
    </div>
  );
};
export default Register;
