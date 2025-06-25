import { create } from "zustand";
import { axiosinstance } from "../lib/axios";
import toast from "react-hot-toast";
import { userAuthStore } from "./useAuthstore";

export const useChatStore = create((set,get) => ({
  messages :[],
  users:[],
  selectedUser : null,
  isUsersLoading: false,
  isMessageLoading : false,
  isSelectedUser : false,

  

  getUsers : async () => {
    set({isUsersLoading : true })
    try {
        
        const res = await axiosinstance.get('/message/users')
    set({users : res.data})
    
    } catch (error) {
        toast.error(error.response?.data?.message || "Something went wrong")

    }finally{set({isUsersLoading : false})}
  },

  getMessages : async (userId) => {
    set({isMessageLoading : true})
    try {
        
        const res = await axiosinstance.get(`/message/${userId}`)
        set({messages : res.data})
        
    } catch (error) {
        toast.error(error.response?.data?.message || "Something went wrong")
    } finally{set({isMessageLoading : false})}

  },

  sendMessage : async (messageData) => {
    const {selectedUser , messages} = get()
    try {
    const res = await  axiosinstance.post(`/message/send/${selectedUser._id}`, messageData)
      // set({messages : [...messages,res.data]})// my code

      set((state) => ({
        messages: [...state.messages, res.data]
      }));//ask chatgpt so this one using message at that moment prev one was a snapshot
      
    } catch (error) {
      toast.error(error.response?.data?.message || "Message not sent")
    }
  }
  ,


  setSelectedUser : (selectedUser)=> {
    set({ selectedUser}),
    set({isSelectedUser : true})
  },

  listenMessages :  () => {
    const {selectedUser} = get()
    if(!selectedUser) {
      return
    }

    const socket =userAuthStore.getState().socket

    socket.on('newMessage' ,  (newMsg) => {
      set((state) => ({
        messages: [...state.messages, newMsg],
      }));
    }
    )
  },

  unListenMessages : () => {
    const socket =userAuthStore.getState().socket
    
    socket.off('newMessage')
  }
  
  
  
  


})
)
