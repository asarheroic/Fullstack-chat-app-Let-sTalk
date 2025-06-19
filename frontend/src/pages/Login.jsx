import React, { useCallback, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userAuthStore } from '../store/useAuthstore'
import { Eye, EyeOff } from 'lucide-react'


const Login = () => {
  const navigate= useNavigate()

  const { isLoggingin ,logIn} = userAuthStore()

  const [showPassword, setshowPassword] = useState(false)


  const [data, setData] = useState({
    email : "",
    password : "",
  })

  

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      
        await logIn(data)
        
     
      
      
    },
    [logIn ,navigate,data],
  )
  
  return (
    <div className="h-screen bg-gradient-to-br from-cyan-700 to-zinc-900 flex items-center justify-center px-4">

<div  className="text-2xl  font-bold text-shadow-2xs top-5 left-5 fixed ">
            <Link className= 'flex items-center' to="/">
              <img width="90" height="100" src="../logo.png" />
              <h1>Let'sTalk</h1>

              </Link>
          </div>
      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl border border-gray-600">
        
        {/* Left Section */}
        <div className="bg-rose-500 flex flex-col justify-center items-center text-white p-10 text-center"
        style={{
          backgroundImage: `url('/bglogin.jpg')`,
          backgroundPosition: 'bottom right',
          backgroundRepeat: 'no-repeat', // optional
          backgroundSize: 'cover', // optional, adjust as needed
          
        }}>
          <h1 className="text-4xl font-bold mb-4">Welcome Back 👋</h1>
          <p className="text-lg">Log in to continue your conversations.</p>
        </div>
  
        {/* Right Section - Login Form */}
        <div className="bg-white p-10 flex flex-col justify-center">
          <div className="flex flex-col items-center mb-6">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-2">Login to your account</h2>
            <Link
                className="text-slate-500 text-sm underline hover:text-blue-500"
                to={"/signup"}
              >
                Don't have an account
              </Link>
          </div>
  
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="e.g. xyz@gmail.com"
                className="bg-gray-100 border border-gray-300 text-sm rounded-md focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5"
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
  
            {/* Password Input */}
            <div className="flex flex-col gap-1">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className='flex '>
                <input
                  id="password"
                  type={!showPassword ? "text" : "password" }
                  className="bg-gray-100 border border-gray-300 text-sm rounded-l-lgfocus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  onChange={(e) => setData({ ...data, password: e.target.value })} 
                />
                <button
                  type="button"
                  className=" flex items-center rounded-r-lg bg-gray-100 border border-gray-300 text-sm  focus:ring-blue-500 focus:border-blue-500"
                  onClick={ () => {
                    setshowPassword(prev => !prev)
                  }}
                >
                  {showPassword ? (
                    <EyeOff className="size-5 text-base-content/40 m-2" />
                  ) : (
                    <Eye className="size-5 text-base-content/40 m-2" />
                  )}
                </button>

                </div>
              
              </div>
  
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full text-white bg-indigo-800 hover:bg-black transition-colors font-semibold rounded-lg text-sm px-5 py-3 mt-2"
              disabled={isLoggingin}
            >
              {isLoggingin ? "Loading..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login
