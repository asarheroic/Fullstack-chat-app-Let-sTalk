import {create} from 'zustand'
import { axiosinstance } from '../lib/axios'
import {toast} from 'react-hot-toast'
import {io} from 'socket.io-client'

const Base_URL = `${import.meta.env.VITE_BASE_URL}`

export const userAuthStore = create((set,get) => ( {
  authUser : null ,
  isSigningup : false,
  isLoggingin : false,
  isUpdatingProfile: false,

  isCheckingAuth : true,
  socket : null,


  onlineUsers : null,
  

  checkAuth : async () => {

    
    set({ isCheckingAuth: true });
    try {
       const res = await axiosinstance.get('/auth/check')
        set({authUser : res.data})

        get().socketConnect()
    } catch (error) {
        set({authUser : null })
        toast.error("Unauthorized")

    }finally{
     
        set({isCheckingAuth : false})

    }
  },


  signUp : async (data) => {
    set({isSigningup : true})
     try {
      const res = await axiosinstance.post('/auth/signup',data) 
      set({authUser:res.data})
      set({isSigningup : false})
      get().socketConnect()
      toast.success("Account create successfully")

     } catch (error) {
      console.log('error in signup',error);

      toast.error(error.response?.data?.error|| "Something went wrong")

    set({isSigningup: false})

      
      
     }finally{set({isSigningup : false})}
  },

  logIn : async (data) => {
    set({isLoggingin : true})
    try {
      const res = await axiosinstance.post('/auth/login',data)
      set({authUser:res.data})
      get().socketConnect()
      toast.success("Log in successully")
    set({isLoggingin : false})

    } catch (error) {
      console.log("login error" ,error);
      toast.error(error.response?.data?.error || "Something went wrong")

    set({isLoggingin : false})

    }finally{set({isLoggingin : false})}
  },


  updateProfile : async (data) => {
    set({isUpdatingProfile: true})

    try {
      const res = await axiosinstance.put('/auth/update',data)
      set({authUser : res.data})
      toast.success("Updated succesfully")
    } catch (error) {
      toast.error(error.response?.data?.error || "Something went wrong")

    }finally{
      set({isUpdatingProfile : false})
    }
  },

  logOut : async () => {
    try {
      const res = await axiosinstance.post('/auth/logout')
      set({authUser : null})
      toast.success("You are logged out")

    } catch (error) {
      console.log('logout error',error );
      toast.error("Can't be logout")
    }
  },
  

  socketConnect : () => {
    const {authUser} = get()
    if (!authUser && get().socket?.connected) {
      return;
    }

    const socket = io(Base_URL , {
      query:{
        userId : authUser._id
      }
    })
    socket.connect()
    set({socket:socket})

    socket.on('getOnlineUsers', (users) => {
      set({onlineUser : users })
    }
    )


  },

  dissconnectSocket :() => {
    if (get().socket?.connected) {
      get().socket.disconnect()
    }
  }
  

  
})
)

