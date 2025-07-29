import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted:', { email, password });
  };

  return (
    // <div className="min-h-2.5 flex flex-col items-center justify-center bg-white p-4">
      <div className="flex flex-col items-center bg-white py-32"> 
      <div className="text-center mb-8">
        <h2 className="text-2xl font-normal">MASUK</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="w-full max-w-xs">
        <div className="relative mb-6">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(email === '')}
            className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black peer"
            required
          />
          <label 
            htmlFor="email"
            className={`absolute left-3 transition-all duration-200 pointer-events-none
              ${isEmailFocused || email ? 'top-0 text-xs bg-white px-1 -translate-y-1/2' : 'top-1/2 transform -translate-y-1/2'}
              ${isEmailFocused ? 'text-black' : 'text-gray-500'}
              peer-focus:top-0 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1 peer-focus:-translate-y-1/2 peer-focus:text-black`}
          >
            Email
          </label>
        </div>
        
        <div className="relative mb-6">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(password === '')}
            className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black peer"
            required
          />
          <label 
            htmlFor="password"
            className={`absolute left-3 transition-all duration-200 pointer-events-none
              ${isPasswordFocused || password ? 'top-0 text-xs bg-white px-1 -translate-y-1/2' : 'top-1/2 transform -translate-y-1/2'}
              ${isPasswordFocused ? 'text-black' : 'text-gray-500'}
              peer-focus:top-0 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1 peer-focus:-translate-y-1/2 peer-focus:text-black`}
          >
            Password
          </label>
        </div>
        
        <div className="mb-6 text-right">
          <a href="#" className="text-sm text-gray-600 hover:underline">Lupa Password?</a>
        </div>
        
        <button
          type="submit"
          className="w-full bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black mb-4 tracking-widest"
        >
          Masuk
        </button>
        
        <div className="text-center">
          <a href="#" className="text-sm text-gray-600 hover:underline">Buat Akun</a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
