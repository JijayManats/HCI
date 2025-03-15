"use client"; 

import Image from "next/image";
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  
  const staticEmail = "sample@gmail.com";
  const staticPassword = "password123";
  
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    if (email === staticEmail && password === staticPassword) {
      
      setError("Connected.");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', 
        alignItems: 'center', height: '100vh',
        backgroundImage: "url('/bg.webp')", backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }}>

      {/* Login Form Container */}
      <div className="bg-[#99CCFF] shadow-lg rounded-lg p-8 w-150">
        {/* Logo Section */}
        <div className="flex justify-center mb-4">
          <Image 
            src="/download-removebg-preview.png" 
            alt="Programming Logo"
            width={200} 
            height={200}  
          />
        </div>
        <h1 className="text-3xl font-bold font-serif text-center text-[#004C99] mb-4">Welcome Back!</h1>
        <p className="text-center font-serif text-gray-800 mb-6">Sign in to your account to continue</p>

        {/* Error Message */}
        {error && <p className="text-red-500 font-serif text-center mb-4">{error}</p>}

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 font-serif bg-white border border-[#248BD6] rounded-md focus:outline-none focus:ring-2 focus:ring-[#83B8FF]"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 font-serif bg-white border border-[#248BD6] rounded-md focus:outline-none focus:ring-2 focus:ring-[#83B8FF]"
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-sm text-gray-800">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-[#B266FF] font-serif text-sm hover:underline">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#B266FF] text-white py-2 rounded-md hover:bg-[#0F6BAE] transition duration-300"
          >
            Sign in
          </button>
        </form>

        <p className="text-center text-sm text-gray-800 mt-4">
          Don’t have an account? <a href="#" className="text-[#B266FF] hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}