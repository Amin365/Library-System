import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { FiEye } from 'react-icons/fi';
import { IoReturnDownBackSharp } from 'react-icons/io5';
import { RiWifiOffLine } from 'react-icons/ri';
import { getAllIssues, } from '../lib/issue';
import { Link } from 'react-router';

const MainIssue = () => {
  const[Issue,setIssue]=useState([])
  const [searchTerm, setSearchTerm] = useState("")
      const [searchVisible, setSearchVisible] = useState(false)
      const [isOnline, setIsOnline] = useState(navigator.onLine)
      const[Download,setDownload]=useState(false)
        const [isLoading, setIsLoading] = useState(false)
          const [error, setError] = useState(null)
          const[Selectedissue,setSelectedissue] =useState(null)

      
    const filteredIssue = Issue.filter((issue) =>
        issue.name.toLowerCase().includes(searchTerm.toLowerCase()))

    const FetchIssue =async()=>{
      try {
        setIsLoading(true)

        const data =await getAllIssues()
        setIssue(data)
        
      } catch (error) {
        setError(error.message)
        
      }finally{
        setIsLoading(false)
      }

    }
     useEffect(()=>{
      FetchIssue()

     },[])

      
   

      useEffect(() => {
            const handleOnline = () => {
                setIsOnline(true)
                FetchIssue() 
            }
            const handleOffline = () => {
                setIsOnline(false)
            }
    
            window.addEventListener('online', handleOnline)
            window.addEventListener('offline', handleOffline)
    
            return () => {
                window.removeEventListener('online', handleOnline)
                window.removeEventListener('offline', handleOffline)
            }
        }, [])
    
  return (
      <div className="max-w-7xl mx-auto py-6">
                {
                    isLoading ? (
                        <div className="flex justify-center items-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700"></div>
                        </div>
                    ) : !isOnline ?(
                    <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                            <RiWifiOffLine className="mx-auto h-12 w-12 text-red-500 mb-4"  />
                            <h3 className="text-lg font-medium text-red-800 mb-2">  You are offline. Please check your internet connection.</h3>
                            <button
                               
                                className="mt-4 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors duration-200"
                            >
                                Try Again
                            </button>
                        </div>
                    
                    ):
                    
                    
                      (
                        <div>
                            <div className="ml-4 sm:px-6 lg:px-8 mb-4">
                                <div className="flex flex-col md:flex-row justify-around items-center mb-16">
                                    <div className=''>
                                        <h1 className="md:text-4xl text-2xl font-bold   mb-4"> Book Issue Management</h1>
                                        <p className="text-black mb-4 text-center">
                                           Easily manage issued books and track return dates. View who borrowed each book and stay organized.


                                        </p>
                                    </div>
                                   
                                </div>
                            </div>
    
                            <div className="bg-white rounded-xl overflow-hidden shadow-md p-4">
                            <Link
                   to="/dashboard/DashboardHome"
                   className="inline-flex items-center px-6 py-1 rounded-full bg-green-100 text-green-500 font-semibold  transition-colors duration-200 mb-4"
                 >
                  <IoReturnDownBackSharp  className="  p-2 text-5xl" />
                     Back to the Dashboard
                  
                 </Link>
                          
                            
                          
                           
    
                           
                           
    
                            
    
                                <div className="mb-6 flex flex-wrap gap-4 items-center p-3">
                                    <button className="p-2 text-2xl" onClick={() => setSearchVisible(!searchVisible)}>
                                        <FaSearch className="text-green-500 text-3xl" />
                                    </button>
    
                                    {searchVisible && (
                                        <input
                                            type="search"
                                            placeholder="Name ..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="flex-1 min-w-[200px] px-4 py-2 border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
                                        />
                                    )}
                                </div>
                                <div className="mb-3 px-3 py-2 flex items-center gap-2">
                    <span className="font-bold">Total Issue</span>
                    <span className="px-2.5 py-0.5 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                        {Issue.length}
                    </span>
                </div>
    
                                <div className="overflow-y-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Book Name</th>
                                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Tellephone</th>
                                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Created Date</th>
                                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Returned Date</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {filteredIssue.map((issue) => (
                                                <tr key={issue.id} className="hover:bg-gray-50">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 truncate max-w-xs">{issue.name}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{issue.book_name}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">{issue.tellephone}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                                                        {new Date(issue.created_at).toLocaleDateString()}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                                                        {new Date(issue.return_data).toLocaleDateString()}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right">
                                                        <div className="flex justify-end space-x-2">
                                                            <button className="p-2 text-indigo-600 hover:text-indigo-800 rounded-full hover:bg-blue-50" title="View"
                                                            onClick={()=>{
                                                                setDownload(true);
                                                                setSelectedissue(issue)
                                                                
                                                                }
                                                            
                                                            
                                                            }
                                                           
    
                                                            >
                                                                <FiEye />
                                                            </button>
                                                           
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )
                }
    
                {/* ✅ Modal is always available when Addmember is true */}
               
                 {Download && Selectedissue && (
                                    <div
                                        className="fixed inset-0 bg-[rgba(0,0,0,0.6)] flex items-center justify-center p-4 z-50"
                                        onClick={() => setDownload(false)}
                                    >
                                        <div
                                            className="bg-white rounded-xl shadow-xl max-w-md w-full p-6"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <div id="book-details-pdf" className="mb-4">
                                                <h2 className="text-xl font-semibold mb-2">
                                                🧍 Name: {Selectedissue.name}
                                                </h2>
                                                <p className="text-gray-700 mb-1">👨‍💻 career: {Selectedissue.book_name}</p>
                                                <p className="text-gray-700 mb-1">📞 Telephone: {Selectedissue.tellephone}</p>
                                                <p className="text-gray-500 text-sm">
                                                    🗓️ Added on: {new Date(Selectedissue.created_at).toLocaleDateString()}
                                                </p>
                                                <p className="text-gray-500 text-sm">
                                                    🗓️ Return Date : {new Date(Selectedissue.return_data).toLocaleDateString()}
                                                </p>
                                            </div>
                                            <div className="flex justify-end space-x-2">
                                                <button
                                                    // onClick={handleDownload}
                                                    className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                                                >
                                                    📥 Download PDF
                                                </button>
                                                <button
                                                    onClick={() => setDownload(false)}
                                                    className="mt-4 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
                                                >
                                                    Close
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                               
    
            </div>
  )
}

export default MainIssue

