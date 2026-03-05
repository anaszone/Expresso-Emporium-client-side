import React, { useContext } from "react"; 
import { Link, useNavigate } from "react-router"; 
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate(); 

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        Swal.fire({
          title: "Welcome Back! ☕",
          text: "Login Successful",
          icon: "success",
          confirmButtonColor: "#331A15"
        });
        
        form.reset();
        
        
        navigate("/");

        const lastLoggedAt = result.user?.metadata?.lastSignInTime;
        const userUpdateInfo = { email, lastLoggedAt };

        fetch("http://localhost:3000/users", {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(userUpdateInfo),
        });
      })
      .catch((error) => {
        Swal.fire("Error", error.message, "error");
      });
  };

  return (
   
    <div className="min-h-screen bg-[#F4F3F0] flex items-center justify-center p-4 md:p-8">
      
     
      <div className="bg-white border border-[#D2B48C] rounded-xl shadow-2xl w-full max-w-md p-6 md:p-10">
        
        <div className="text-center mb-8">
         
          <h2 className="text-3xl md:text-4xl font-serif text-[#374151] mb-2">Sign In</h2>
          <p className="text-gray-500 text-sm md:text-base">
            Welcome back! Please enter your details.
          </p>
        </div>

        <form onSubmit={handleSignIn} className="space-y-5 md:space-y-6">
          {/* Email Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base md:text-lg font-semibold mb-1 block text-[#374151]">
                Email Address
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 bg-[#F4F3F0] border-none rounded-md focus:ring-2 focus:ring-[#D2B48C] outline-none"
              required
            />
          </div>

          {/* Password Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base md:text-lg font-semibold mb-1 block text-[#374151]">
                Password
              </span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full p-3 bg-[#F4F3F0] border-none rounded-md focus:ring-2 focus:ring-[#D2B48C] outline-none"
              required
            />
            <div className="text-right mt-2">
              <a href="#" className="text-xs md:text-sm text-[#D2B48C] hover:underline">
                Forgot password?
              </a>
            </div>
          </div>

          {/* Sign In Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-[#D2B48C] border-2 border-[#331A15] text-[#331A15] font-serif text-lg md:text-xl py-3 rounded-md hover:bg-[#331A15] hover:text-white transition-all active:scale-95"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Footer Link */}
        <div className="mt-8 text-center border-t border-gray-100 pt-6">
          <p className="text-gray-600 text-sm md:text-base">
            New to Coffee Shop?{" "}
            <Link
              to="/signup"
              className="text-[#D2B48C] font-bold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <Link
            to="/"
            className="text-xs md:text-sm text-gray-400 hover:text-[#331A15] inline-flex items-center gap-2 transition-colors"
          >
            &larr; Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;