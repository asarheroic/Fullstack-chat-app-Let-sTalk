import { Image,Send, X } from 'lucide-react'
import React, { useCallback, useRef, useState } from 'react'
import { useChatStore } from '../store/useChatStore'
import toast from 'react-hot-toast'


const MessageInput = () => {
  const [text, setText] = useState("")
  const [imagePreview, setImagePreview] = useState(null)
  const fileInputRef = useRef()

  const {sendMessage} = useChatStore()

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file")
      return;
    }

    const reader = new FileReader()
    reader.onload = () => {
      setImagePreview(reader.result)
    }
    reader.readAsDataURL(file)
    

    
  }

  const removeImage = () => {
    setImagePreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value=""
    }


  }
  
  
  const handleSendMessage = 
      async(e) => {
        e.preventDefault()
        if (!text.trim() &&  !imagePreview) {
          return
        }
          try {
           await sendMessage({
            text: text.trim(),
            image :imagePreview
           })

           // clear
           setText("")
           setImagePreview(null)
           if (fileInputRef.current) {
            fileInputRef.current.value  = ""
           }

          } catch (error) {
            console.log('Failed to send message',error);
          }
      }
      
    
  


  return (
    
    <div className="p-4 w-full">
      {imagePreview && (
        <div className="mb-3 flex items-center gap-2">
          <div className="relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-20 h-20 object-cover rounded-lg border border-zinc-700"
            />
            <button
              onClick={removeImage}
              className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-base-300
              flex items-center justify-center"
              type="button"
            >
              <X className="size-3" />
            </button>
          </div>
        </div>
      )}
      <form onSubmit={handleSendMessage} > 
        <div className='flex gap-4 p-2 m-2 items-center '> 
        <input 
        type="text" 
        value={text}
        placeholder='Type a message....' 
        className='w-full input input-bordered rounded-lg input-sm sm:input-md '
        onChange={(e) => {
          setText(e.target.value)
        }
        } />

                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                  
                />

                <button type='button' 
                className={`hidden sm:flex btn btn-circle 
                ${imagePreview ? "text-emerald-500" : "text-zinc-400"}`}
                onClick={() => {
                  fileInputRef.current?.click()
                }

                }>
                <Image size={30} className=" bg-base-200" />

                </button>

        <button type='submit' className='flex border-base-300 border-1 btn-circle w-15 rounded-full text-center justify-center items- bg-base-200 hover:bg-zinc-300 '
         disabled={!text.trim() && !imagePreview}>
          <Send size={25} className='m-1' /></button>
        </div>
      </form>
    </div>
  )
}


export default MessageInput
