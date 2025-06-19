import React, { useCallback, useEffect, useState } from 'react'
import { Users } from 'lucide-react'
import { useChatStore } from '../store/useChatStore'
import avatar from '../assets/picture.webp'
import SIdeBarSkeleton from './SIdeBarSkeleton'

const Sidebar = () => {

  const { getUsers, users,  isUsersloading , selectedUser , isSelectedUser,setSelectedUser } = useChatStore()

  useEffect(() => {
      
    getUsers()



  }, [getUsers])

  
  

  if (isUsersloading) {
    return (
      <div>
        <SIdeBarSkeleton/>
      </div>

    )
  }

  return (
    <aside className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200">
      <div className="border-b border-base-300 w-full p-5">
        <div className="flex items-center gap-2">
          <Users className="size-6" />
          <span className="font-medium hidden lg:block">Contacts</span>
        </div>
        <div className="mt-3 hidden lg:flex items-center gap-2">
          <label className="cursor-pointer flex items-center gap-2">
            
          </label>
          <span className="text-xs text-zinc-500"></span>
        </div>
      </div>

      <button className="overflow-y-auto w-full py-3  ">
        {users.map((user) => {
          return < div onClick ={() => {
            setSelectedUser(user)
          }
          } key={user._id}   className={`flex items-center relative gap-1 p-2 mx-auto lg:mx-0 ${(selectedUser?._id === user._id ? "bg-base-300" : " ")}`}>
            <img

              className="size-12 object-cover rounded-full"

              src={user.profilePic || avatar}
            />
            <div className="hidden lg:block text-left min-w-0">
              <div className="font-medium truncate">{user.name}</div>
              <div className="text-sm text-zinc-400">
              </div>
            </div>

          </div>

          {/* User info - only visible on larger screens */ }

        }

        )}

      </button>





    </aside>
  )
}

export default Sidebar
