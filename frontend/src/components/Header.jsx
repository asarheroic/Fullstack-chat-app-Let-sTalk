import {  Settings } from 'lucide-react'
import React from 'react'
import {userAuthStore} from '../store/useAuthstore'
import { Link,  } from 'react-router-dom'



const Header = () => {
    const {authUser} = userAuthStore()

  
    

    return (
        <header className="flex items-center justify-between bg-gradient-to-br from-primary to-accent  px-6 border-b-2   border-b-gray-800">
          
          
          <div className="text-2xl  font-bold text-shadow-2xs">
            <Link className= 'flex items-center' to="/">
              <img width="90" height="100" src="../logo.png" />
              <h1>Let'sTalk</h1>

              </Link>
          </div>
    
          
          <div className="flex items-center gap-2 space-x-4">
            
            {!authUser ? (
              <>
                <Link to="/login" className=" font-medium hover:underline hover:text-blue-500">
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-1 border border-zinc-600 font-medium rounded hover:bg-blue-50"
                >
                  Signup
                </Link>
              </>
            ) : (
              <>
                <Link to="/settings" className="text-gray-600 gap-2 flex hover:text-blue-600">
                  <h1 className='hover:underline'>Settings</h1>
                  <Settings size={30} className='' />
                </Link>

                <Link to={'/profile'}>
                <img
                  src={authUser.profilePic || "/picture.webp"}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border border-gray-300 object-cover"
                /></Link>
              </>
            )}
          </div>
        </header>
      )
}

export default Header
