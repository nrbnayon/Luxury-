import { Typography } from "@material-tailwind/react";
import {
  GithubAuthProvider,
  sendPasswordResetEmail,
  // signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../Firebase/firebase.config";
import { useContext, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaSquareGooglePlus } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const githubProvider = new GithubAuthProvider();
  const [googleLoginUser, setGoogleLoginUser] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const emailRef = useRef(null);
  const navigate = useNavigate();
  const { signInUser, loginWithGoogle } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const userCredential = await signInUser(email, password);
      const user = userCredential.user;

      if (user.emailVerified) {
        console.log(user);
        setLoginError("Login Successful");
        e.target.reset();
        navigate("/blogs");
      } else {
        alert("Verify email before login");
      }
    } catch (error) {
      if (
        error.code === "auth/wrong-password" ||
        error.code === "auth/user-not-found"
      ) {
        setLoginError("Invalid email or password");
      } else {
        setLoginError(error.message);
      }
    }
  };
  const handleForgetPassword = async () => {
    const email = emailRef.current.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      console.log("Email is required");
      return;
    } else if (!emailRegex.test(email)) {
      console.log("Invalid email format");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      console.log("Password reset email sent successfully");
    } catch (error) {
      console.error("Error sending password reset email:", error);
    }
  };

  const handleGoogleSignIn = () => {
    loginWithGoogle()
      .then((result) => {
        // console.log("SignIn Success", result.user);
        const newUser = result.user;
        setGoogleLoginUser(newUser);
        navigate("/blogs");
      })
      .catch((error) => {
        setLoginError(error.message);
      });
    console.log("Google login");
  };
  console.log("google state", googleLoginUser);
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log("SignIn github Success", result.user);
        const newUser = result.user;
        setGoogleLoginUser(newUser);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-100 my-6 rounded-xl">
      <div className="card w-1/2 mx-auto shadow-lg my-6 bg-base-200">
        <form onSubmit={handleLogin} className="card-body">
          <h1 className="text-3xl text-center lg:text-5xl font-bold">
            Welcome to Book Vibe!
          </h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              placeholder="Enter your email"
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
              name="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a
                onClick={handleForgetPassword}
                href="#"
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </a>
            </label>
            {loginError && <p>{loginError}</p>}
            <div className="mt-4">
              <button className="btn btn-primary w-full">Login</button>
            </div>
          </div>

          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Link
              as="a"
              to="/signup"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
            >
              Sign up now
            </Link>
          </Typography>
          <h3>Continue With </h3>
          <div className="flex w-full justify-between">
            <button
              onClick={handleGithubSignIn}
              className="btn btn-primary  flex items-center justify-center mt-4"
            >
              <FaGithub className="mr-1" />
              GitHub
            </button>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-primary flex items-center justify-center mt-4"
            >
              <FaSquareGooglePlus className="mr-1" />
              Google
            </button>
            <button className="btn btn-primary  flex items-center justify-center mt-4">
              <FaFacebook className="mr-1" />
              Facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
