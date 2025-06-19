import React, { useCallback, useEffect, useState } from 'react'
import { userAuthStore } from '../store/useAuthstore'
import { useNavigate,Link } from 'react-router-dom'
import { Eye,EyeOff } from 'lucide-react'


const Signup = () => {
  const navigate = useNavigate()
  const [showPassword, setshowPassword] = useState(false)
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const { isSigningup, signUp } = userAuthStore()






  const handlesubmit = useCallback(async (e) => {
    e.preventDefault()

    await signUp(data)
    
  }




    , [data, signUp, navigate])

    const toggleShowPass = () => {
      setshowPassword(prev => !prev)
    }
    


    return (
      <div className="h-screen bg-gradient-to-br from-slate-600 to-gray-900 flex items-center justify-center px-4">
        <div  className="text-2xl  font-bold text-shadow-2xs top-1 left-3 fixed ">
            <Link className= 'flex items-center' to="/">
              <img width="90" height="100" src="../logo.png" />
              <h1>Let'sTalk</h1>

              </Link>
          </div>
        <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl border border-gray-600">
          
          <div className=" flex flex-col justify-center items-center text-white p-10 text-center "
           style={{
            backgroundImage: `url('/bgsignup.png')`,
           
            backgroundRepeat: 'no-repeat', 
            
          }}
          >
            <h1 className="text-4xl font-bold mb-4">Welcome to Let'sTalk</h1>
            <p className="hidden sm:block text-lg ">Your private, seamless chat experience starts here.</p>
          </div>
    
          {/* Right Section - Signup Form */}
          <div className="bg-white p-10 flex flex-col justify-center">
            <div className="flex flex-col items-center mb-6">
              <h2 className="text-3xl font-extrabold text-gray-800 mb-2">Create an account</h2>
              <Link
                className="text-slate-500 text-sm underline hover:text-blue-500"
                to={"/logIn"}
              >
                Already have an account?
              </Link>
            </div>
    
            <form className="flex flex-col gap-4" onSubmit={handlesubmit}>
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="e.g. Ankita"
                  className="bg-gray-100 border border-gray-300 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
              </div>
    
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="e.g. xyz@gmail.com"
                  className="bg-gray-100 border border-gray-300 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
                  onClick={toggleShowPass}
                >
                  {showPassword ? (
                    <EyeOff className="size-5 text-base-content/40 m-2" />
                  ) : (
                    <Eye className="size-5 text-base-content/40 m-2" />
                  )}
                </button>

                </div>
              
              </div>
    
              <button
                type="submit"
                className="w-full text-white bg-gray-800 hover:bg-black transition-colors font-semibold rounded-lg text-sm px-5 py-3 mt-2"
                disabled={isSigningup}
              >
                {isSigningup ? "Loading..." : "Create Account"}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
    
}

export default Signup
