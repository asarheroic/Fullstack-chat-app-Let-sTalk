import React, { useCallback } from 'react'
import Sidebar from '../components/Sidebar'
import NoChat from '../components/NoChat'
import { useChatStore } from '../store/useChatStore'
import Chats from '../components/Chats'
import Header from '../components/Header'



const MessagePage = () => {

  const { getUsers, users, getMessages, isUsersloading,selectedUser } = useChatStore()


  

  return (
    <div className="h-screen bg-base-200">
      <Header></Header>
      <div className="flex items-center justify-center pt-5 pb-20 px-4">
        <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar  />

            
          
            {!selectedUser ? <NoChat /> : <Chats />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessagePage
