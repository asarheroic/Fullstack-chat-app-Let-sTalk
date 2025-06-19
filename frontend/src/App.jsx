
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'


import Homepage from './pages/Homepage'
import SettingsPage from './pages/SettingsPage'
import ProfilePage from './pages/ProfilePage'
import { userAuthStore } from './store/useAuthstore'
import { useEffect } from 'react'
import Spinner from './components/Spinner'
import MessagePage from './pages/MessagePage'
import { Toaster } from 'react-hot-toast';
import {useThemeStore} from './store/useThemeStore'
import { LoaderCircle } from 'lucide-react'
import Login from './pages/Login'




function App() {

  const {authUser,checkAuth,isCheckingAuth} = userAuthStore()
  const {theme} =  useThemeStore()

  useEffect(() => {
    checkAuth()
  
  }, [checkAuth])
  

  if (isCheckingAuth) {
    return (
      <div  data-theme = {theme} className='h-screen flex justify-center items-center '>
       <LoaderCircle/>

      </div>
    )
  }
else {
  return (
    <div data-theme = {theme}>

      <BrowserRouter>
      <Routes>

        <Route path ='/' element ={authUser ? <MessagePage/> :  <Homepage/>  } ></Route>
        <Route path ='/signup' element ={!authUser ? <Signup/> : <MessagePage/>} ></Route>
        <Route path ='/login' element ={!authUser ? <Login/> : <MessagePage/>}></Route>
        <Route path ='/settings' element ={!authUser ? <Homepage/> :<SettingsPage></SettingsPage>}></Route>
        <Route path ='/profile' element ={ !authUser ? <Homepage/> : <ProfilePage></ProfilePage>}></Route>

        </Routes>
        </BrowserRouter>

        <Toaster position="top-right" reverseOrder={false} />
    </div>
  )
}
}

export default App
