import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'


const Homepage = () => {
  return (
    <div className='h-screen flex flex-col '>
      
        <div>
       <Header></Header>
       <div className="min-h-screen bg-base-200 flex flex-col md:flex-row items-center justify-center p-6 gap-10">
      
      <div className="max-w-xl text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-base-content">
          Connect Instantly.<br />
          Chat Seamlessly.
        </h1>
        <p className="text-base-content text-lg">
        Let'sTalk is a sleek and secure messaging platform designed for real-time, one-on-one conversations. Whether you're catching up with a friend or collaborating privately, Let'sTalk keeps chats flowing seamlessly. With the ability to send messages, share images, and update your profile picture, it's everything you need for personal communication.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
        <div className="flex gap-4">
      <Link
        to="/signup"
        className="btn text-white bg-[#1A73E8] hover:bg-[#1669d4] border-none rounded-full px-6"
      >
        Get Started
      </Link>
      <Link
        to="/login"
        className="btn  border border-zinc-500 hover:bg-white hover:text-black rounded-full px-6"
      >
        Login
      </Link>
    </div>
        </div>
      </div>

      <div className="bg-base-100 rounded-box p-4 shadow-xl w-full max-w-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Chats</h2>
          <button className="btn btn-sm btn-circle btn-ghost">+</button>
        </div>
        <div className="space-y-3">
          <div className="chat chat-start">
            <div className="chat-bubble">Hello!</div>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-primary">Hi there!</div>
          </div>
          <div className="chat chat-start">
            <div className="chat-bubble">How are you?</div>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-primary">I'm good, how about you?</div>
          </div>
          <div className="chat chat-start">
            <div className="chat-bubble">Doing great, thanks!</div>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-primary">That's good to hear.</div>
          </div>
        </div>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Type a message..."
            className="input input-bordered w-full"
          />
        </div>
      </div>
    </div>
       

        </div>
      </div>
    
  )
}

export default Homepage
