import { LogOut, LogOutIcon } from 'lucide-react'
LogOutIcon
import React, { useCallback } from 'react'
import { userAuthStore } from '../store/useAuthstore'

const LogOutButton = () => {

    const {logOut,} = userAuthStore()

    const handleLogOut = useCallback(
      () => {
        logOut()
      },
      [logOut],
    )
    
  return (
    <div>
        <button onClick={handleLogOut} className='flex gap-2 hover:text-blue-500 hover:underline'>
        LOGOUT
      <LogOut></LogOut>
      </button>
      
    </div>
  )
}

export default LogOutButton
