import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { createIsue } from '../lib/issue';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { MdOutlineNotificationImportant } from 'react-icons/md';


const IssuePage = () => {
    const[name,setname]=useState('')
    const[Bookname,setbookname]=useState('')
    const[tell,settell]=useState('')
    const[returnData,setretunData]=useState('')
    const[cancelbtn,setcancelbtn]=useState(true)
     const [isLoading, setIsLoading] = useState(false)
      const [error, setError] = useState(null)
      const [success, setSuccess] = useState(false)
      const navigate =useNavigate()

      const handleSumbit= async(e)=>{
        e.preventDefault()
        setIsLoading(true)
        setError(null)
        try {
            await createIsue({name,Bookname,returnData,tell})
            setSuccess(true)
            setTimeout(() => {
                navigate('/')

                
            }, 3000);
            
        } catch (error) {
            
      toast.error("Failed to add book. Please try again",error)
            
        }finally{
            setIsLoading(false)
        }
      }



     if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center  px-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-green-500 text-7xl mb-4">✓</div>
            <h2 className="text-2xl font-bold mb-4">Form submitted successfully!</h2>
            <p className="text-gray-600 mb-4 text-base">
              🎉 Thank you! Your request has been
               successfully submitted. Our team is reviewing your 
               details and will get in touch with you within 24 hours. 
               In the meantime, feel free to browse more books or contact us if you have any questions.
            </p>
            
          </div>
        </div>
      </div>
    )
  }
  return (
     <div className='min-h-screen flex items-center justify-center  px-8'>
          <div className='max-w-xl md:max-w-md w-full'>
            {/* title and subtitle */}
            <div className='text-center mb-16'>
              <h1 className='text-3xl font-bold'>📚 Get the Book You Need.</h1>
              <p className='text-gray-600 mt-2'>Fill in the form and submit your request</p>
            </div>
            {/* form info */}
            <div className="bg-white rounded-lg shadow-md  md:px-2 py-6 px-1">

            {
                cancelbtn&&(
                    <div className='mb-6 relative p-4 bg-green-100 text-green-500 rounded-lg flex items-center gap-2 '>
                    {<MdOutlineNotificationImportant className='md:text-xl'/>}
                <h1 className='text-sm font-bold '>After submitting this form we will contact you in 24hrs</h1>
                <div className='absolute top-0 right-1 text-xl font-bold mb-2'
                onClick={()=>setcancelbtn(!cancelbtn)}
                
                >
                {<IoMdClose/>}

                </div>
            </div>

                )
            }
            
    
           
    
              <form onSubmit={handleSumbit} >
    
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                   Name:
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    required
                  />
                </div>
    
    
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="username">
                    Name of Book
                  </label>
                  <input
                    id="bookname"
                    type="text"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter Book Name"
                    value={Bookname}
                    onChange={(e) => setbookname(e.target.value)}
                    required
                  />
                </div>
    
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                    Telephone
                  </label>
                  <input
                    id="number"
                    type="number"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="+25191234566"
                    value={tell}
                    onChange={(e) => settell(e.target.value)}
                    required
                   
                  />
                
                </div>
    
    
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="confirmPassword">
                   Returned Date
                  </label>
                  <input
                    id="returned"
                    type="date"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    
                    value={returnData}
                    onChange={(e) => setretunData(e.target.value)}
                    required
                  />
                </div>
    
    
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-200 disabled:cursor-not-allowed disabled:bg-green-500"
                  disabled={isLoading}
                >
                  {isLoading ? 'Requesting Book...' : 'Request Book'}
    
                </button>
              </form>
    
           
    
            </div>
          </div>
        </div>
  )
}

export default IssuePage
