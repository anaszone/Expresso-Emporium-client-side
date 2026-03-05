import React, { useContext } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const SignUp = () => {
 
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const creationTime = result.user?.metadata?.creationTime;
        const lastSignInTime = result.user?.metadata?.lastSignInTime;

        const newUser = {
          name,
          email,
          creationTime: creationTime,
          lastLoggedAt: lastSignInTime,
        };

        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "Success",
                text: "Account Created Successfully! ☕",
                icon: "success",
                confirmButtonColor: "#331A15"
              });
              form.reset();
            }
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
          <h2 className="text-3xl md:text-4xl font-serif text-[#331A15] mb-2">Sign Up</h2>
          <p className="text-gray-500 text-sm md:text-base">
            Create an account to enjoy our premium coffee blends!
          </p>
        </div>

        <form onSubmit={handleSignUp} className="space-y-4 md:space-y-5">
       
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base md:text-lg font-semibold mb-1 block text-[#374151]">
                Your Name
              </span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 bg-[#F4F3F0] border-none rounded-md focus:ring-2 focus:ring-[#D2B48C] outline-none transition-all"
              required
            />
          </div>

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
              className="w-full p-3 bg-[#F4F3F0] border-none rounded-md focus:ring-2 focus:ring-[#D2B48C] outline-none transition-all"
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
              className="w-full p-3 bg-[#F4F3F0] border-none rounded-md focus:ring-2 focus:ring-[#D2B48C] outline-none transition-all"
              required
            />
          </div>

          {/* Sign Up Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-[#D2B48C] border-2 border-[#331A15] text-[#331A15] font-serif text-lg md:text-xl py-3 rounded-md hover:bg-[#331A15] hover:text-white transition-all shadow-md active:scale-95"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* Footer Link */}
        <div className="mt-8 text-center border-t border-gray-100 pt-6">
          <p className="text-gray-600 text-sm md:text-base">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-[#D2B48C] font-bold hover:underline"
            >
              Sign In
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

export default SignUp;