import React from 'react'
import {Eye,EyeClosed} from 'lucide-react'
const Showpass = ({e}) => {
if(e){
  return (
    <div>
      <Eye></Eye>
    </div>
  )
}
return (
  <div>
    <EyeClosed></EyeClosed>
  </div>
)

}

export default Showpass
