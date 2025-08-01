import React, { useState } from 'react'
import { CiHome, CiMenuBurger } from 'react-icons/ci'
import { FaRegUser, FaUser } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { MdLogout } from 'react-icons/md'
import { RxDashboard } from 'react-icons/rx'
import { SiBookstack } from 'react-icons/si'
import { Link } from 'react-router'
import { useAuth } from '../context/AuthContext'


const Header = () => {
    const{isLoggedIn,profile,Logout,user}=useAuth()
      const [IsMenuOpen, setIsMenuOpen] = useState(false)
    const [IsDropDownOpen, setIsDropDownOpen] = useState(false)
    
   console.log("what we have the profile",user)
  return (
    <div>
    <header className='bg-white shadow'>
    <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
    <div className='flex  justify-between h-16'>
        
         <div className='flex ml-8'>
                        <div className='flex items-center  '>
                            <Link to={'/'}
                                className='text-2xl font-bold text-green-600'
                            >AMB</Link>
                        </div>
                        <nav className='items-center flex ml-8 space-x-4'>
                            <Link to={'/'} className='inline-flex items-center px-1 pt-1 border-b-2 border-green-500 text-base font-medium text-gray-900 capitalize pointer-curser'>Home</Link>
                            <Link to={'/dashboard/dashboardhome'} className='inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-base font-medium text-gray-900 capitalize'>dashboard</Link>
                        </nav>
                    </div>

                     <div className='flex items-center space-x-1'>

                        {
                            isLoggedIn?(
                                <>
                                 <div>
                                       
                                    </div>
                                    <div className='relative  '>
                                    <button
                                            className='w-10 h-10 bg-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white flex items-center justify-center ml-12'
                                          onClick={()=>setIsDropDownOpen(!IsDropDownOpen)} 
                                          
                                          
                                        >
                                            {
                                               <img src={profile?.avatar_url} className='w-10 h-10 rounded-full ' /> 
                                            }
                                        </button>
                                        {
                                            IsDropDownOpen&&(
                                                  <div className='absolute right-0 w-90 bg-white shadow-lg mt-4 py-6 rounded-md px-3 space-y-1 z-50'
                                                  onMouseLeave={() => setIsDropDownOpen(false)}
                                                >
                                                <div className=' px-4 py-2 flex items-center gap-2 space-x-2'>
                                                    <div className='w-15 h-15  bg-blue-100 rounded-full '>
                                                        <img src={profile?.avatar_url} className='w-15 h-15 rounded-full'/>
                                                    </div>
                                                    <div>
                                                        <h1 className='block text-gray-900 text-base font-bold'  > {profile?.username}</h1>
                                                     <p className='text-sm block'>{user?.email}</p>
                                                    </div>
                                                        
                                                    </div>
                                                
                                                    <div className=' px-4 py-2 flex items-center gap-2 space-x-2 space-y-2'>
                                                   <div className='text-2xl bg-green-100 text-green-600 p-3 rounded-lg'>
                                                     <RxDashboard />
                                                   </div>
                                                   <div>
                                                      <Link to={'/dashboard/dashboardhome'}
                                                     className='block text-gray-500 hover:bg-gray-100'  >Dashboard</Link>
                                                     <p className='text-sm block'>Go to your main dashboard</p>
                                                   </div>
                                                      
                                                    </div>
                                                 
                                                    <div className=' px-4 py-2 flex items-center gap-2 space-x-2'>
                                                    <div className='text-2xl bg-blue-100 text-blue-600 p-3 rounded-lg'>
                                                        <FaRegUser />
                                                    </div>
                                                    <div>
                                                        <Link to={'/profile'}
                                                     className='block text-gray-500 hover:bg-gray-100'  >Profile</Link>
                                                     <p className='text-sm block'>Manage Your Account and preference</p>
                                                    </div>
                                                        
                                                    </div>
                                                    
                                                    <div className=' px-4 py-2 flex items-center gap-2 space-x-2 '>
                                                    <div className='text-2xl bg-rose-100 text-rose-400 p-3 rounded-lg'>
                                                        <SiBookstack />

                                                    </div>
                                                    <div>
                                                        <Link className='block  text-gray-500 '>Manage Books</Link>

                                                     <p className='text-sm block'>Add,Delete and Edit your Books</p>
                                                    </div>
                                                    
                                                    </div>
                                                    

                                                    <div className=' px-4 py-2 hover:bg-rose-200 rounded-md flex items-center gap-2 space-x-2'>
                                                    <div className='text-2xl bg-rose-100 text-rose-400 p-3 rounded-lg'>
                                                        <MdLogout />
                                                    </div>
                                                    <div  onClick={()=>Logout()}>
                                                          <Link className='block mb-1 text-red-500'>Log out</Link>
                                                     <p className='text-sm block text-red-500'>sign out your account</p>
                                                    </div>
                                                     
                                                    </div>
                                                   
                                                </div>
                                            )
                                        }
                                    

                                        
                                    </div>

                                </>
                                

                            ): (
                                <div className='space-x-4'>
                                    
                                    <Link to={'/signin'}
                                        className=' sm:inline-flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-md text-green-600 bg-white hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-green-500'
                                    > Sign In</Link>
                                    
                                </div>
                            )
                        }
                     </div>

                     {/* <div className='-ml-2  items-center justify-center hidden'>
                        <button className='inline-flex justify-center items-center rounded-md text-gray-800 p-2 font-bold'
                            onClick={() => setIsMenuOpen(!IsMenuOpen)}
                        >
                            {
                                IsMenuOpen ? <IoMdClose className='font-bold text-2xl' /> : <CiMenuBurger className='text-2xl ' />
                            }
                        </button>
                    </div> */}

                    


      
    </div>

    </div>
     {
                IsMenuOpen && (
                    <div className=' hidden py-4 md:flex'>
                        <div className='space-y-1 pb-3 pt-2'>
                          
 </div>
                            {isLoggedIn && (
                                <>
                                 <div className=' px-4 py-2 flex items-center gap-2 space-x-2 space-y-2 '>
                                                   <div className='text-2xl bg-green-100 text-green-600 p-3 rounded-lg'>
                                                     <RxDashboard />
                                                   </div>
                                                   <div>
                                                      <Link to={'/dashboard/dashboardhome'}
                                                     className='block text-gray-500 hover:bg-gray-100'  >Dashboard</Link>
                                                     <p className='text-sm block'>Go to your main dashboard</p>
                                                   </div>
                                                      
                                                    </div>
                                                 
                                                    <div className=' px-4 py-2 flex items-center gap-2 space-x-2'>
                                                    <div className='text-2xl bg-blue-100 text-blue-600 p-3 rounded-lg'>
                                                        <FaRegUser />
                                                    </div>
                                                    <div>
                                                        <Link to={'/profile'}
                                                     className='block text-gray-500 hover:bg-gray-100'  >Profile</Link>
                                                     <p className='text-sm block'>Manage Your Account and preference</p>
                                                    </div>
                                                        
                                                    </div>
                                                    
                                                    <div className=' px-4 py-2 flex items-center gap-2 space-x-2 '>
                                                    <div className='text-2xl bg-rose-100 text-rose-400 p-3 rounded-lg'>
                                                        <SiBookstack />

                                                    </div>
                                                    <div>
                                                        <Link className='block  text-gray-500 '>Manage Books</Link>

                                                     <p className='text-sm block'>Add,Delete and Edit your Books</p>
                                                    </div>
                                                    
                                                    </div>
                                                    

                                                    <div className=' px-4 py-2 hover:bg-rose-200 rounded-md flex items-center gap-2 space-x-2'>
                                                    <div className='text-2xl bg-rose-100 text-rose-400 p-3 rounded-lg'>
                                                        <MdLogout />
                                                    </div>
                                                    <div onClick={Logout}>
                                                          <Link className='block mb-1 text-red-500  ' >Log out</Link>
                                                     <p className='text-sm block text-red-500'>sign out your account</p>
                                                    </div>
                                                     
                                                    </div>
 
                                </>
                                    
                            )}

                            {!isLoggedIn && (
                                <div>
                                <div className=' px-4 py-2 flex items-center gap-2 space-x-2 space-y-2'>
                                                   <div className='text-2xl bg-green-100 text-green-600 p-3 rounded-lg'>
                                                    <CiHome />
                                                   </div>
                                                   <div>
                                                      <Link to={'/'}
                                                     className='block text-gray-500 hover:bg-gray-100'  >Home</Link>
                                                     <p className='text-sm block'>Go to your Home page</p>
                                                   </div>
                                                      
                                                    </div>
                                                    <div className=' px-4 py-2 hover:bg-rose-200 rounded-md flex items-center gap-2 space-x-2'>
                                                    <div className='text-2xl bg-rose-100 text-rose-400 p-3 rounded-lg'>
                                                        <MdLogout />
                                                    </div>
                                                    <div>
                                                          <Link className='block mb-1 text-red-500  '>Log out</Link>
                                                     <p className='text-sm block text-red-500'>sign out your account</p>
                                                    </div>
                                                     
                                                    </div>
 

                                </div>
                            )}
                       
                    </div>
                )
            }

    </header>
      
    </div>
  )
}

export default Header
