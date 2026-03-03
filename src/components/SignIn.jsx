import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const SignIn = () => {

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        
        // এখানে আপনার Firebase বা Auth logic লিখবেন
        // উদাহরণ:
        // signIn(email, password)
        // .then(result => {
        //    Swal.fire('Success', 'Login Successful', 'success');
        // })
    }

    return (
        <div className="min-h-screen bg-[#F4F3F0] flex items-center justify-center p-8">
            <div className="bg-white border border-[#D2B48C] rounded-lg shadow-xl w-full max-w-md p-10">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-serif text-[#374151] mb-2">Sign In</h2>
                    <p className="text-gray-500">Welcome back! Please enter your details.</p>
                </div>

                <form onSubmit={handleSignIn} className="space-y-6">
                    {/* Email Field */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold mb-2 block text-[#374151]">Email Address</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full p-3 bg-[#F4F3F0] border-none rounded-md focus:outline-[#D2B48C]"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold mb-2 block text-[#374151]">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="w-full p-3 bg-[#F4F3F0] border-none rounded-md focus:outline-[#D2B48C]"
                            required
                        />
                        <div className="text-right mt-2">
                            <a href="#" className="text-sm text-[#D2B48C] hover:underline">Forgot password?</a>
                        </div>
                    </div>

                    {/* Sign In Button */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full bg-[#D2B48C] border-2 border-[#331A15] text-[#331A15] font-serif text-xl py-3 rounded-md hover:bg-[#b89a74] transition-all"
                        >
                            Sign In
                        </button>
                    </div>
                </form>

                {/* Footer Link */}
                <div className="mt-8 text-center">
                    <p className="text-gray-600">
                        New to Coffee Shop?{' '}
                        <Link to="/signup" className="text-[#D2B48C] font-bold hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </div>

                {/* Back to Home */}
                <div className="mt-6 text-center">
                    <Link to="/" className="text-sm text-gray-400 hover:text-[#374151] flex items-center justify-center gap-2">
                        &larr; Back to home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignIn;