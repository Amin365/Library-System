import React, { useEffect, useState } from 'react'
import { FiAlertTriangle, FiEdit2, FiEye, FiPlus, FiTrash2 } from 'react-icons/fi'
import { createMember, getMembers } from '../lib/member'
import { useNavigate } from 'react-router'
import { FaSearch } from 'react-icons/fa'
import toast from 'react-hot-toast'
import { useAuth } from '../context/AuthContext'
import { RiWifiOffLine } from "react-icons/ri";
const Members = () => {
    const [Member, setMembers] = useState([])
    const [Addmember, setMember] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)
    const [name, setname] = useState('')
    const [career, setcareer] = useState('')
    const [tell, settell] = useState('')
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState("")
    const [searchVisible, setSearchVisible] = useState(false)
    const [isOnline, setIsOnline] = useState(navigator.onLine)

    const filteredmember = Member.filter((member) =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    const{user}=useAuth()

    const handlesumbit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)
        try {
            await createMember({ name, career, tell })

            const data = await getMembers()
            setMembers(data)
            setMember(false)
            setname('')
            setcareer('')
            settell('')


            toast.success('Member created successfully!')


        } catch (error) {
            console.error("Error adding member:", error)
            setError("Failed to add member. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }
     const FetchMembers = async () => {
            try {
                setIsLoading(true)
                const data = await getMembers()
                setMembers(data)

            } catch (error) {
                setError(error.message)
            } finally {
                setIsLoading(false)
            }
        }



    useEffect(() => {
        if(user){
 FetchMembers()
        }else{
            navigate('/dashboard/DashboardHome')
        }

        
       
    }, [user])
     useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true)
            FetchMembers() 
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
                
                
                 error ? (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                        <FiAlertTriangle className="mx-auto h-12 w-12 text-red-500 mb-4" />
                        <h3 className="text-lg font-medium text-red-800 mb-2">{error}</h3>
                        <button
                            onClick={FetchMembers}
                            className="mt-4 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors duration-200"
                        >
                            Try Again
                        </button>
                    </div>
                ) : Member.length === 0 ? (
                    <div className="bg-white rounded-xl shadow-md p-12 text-center">
                        <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                            <FiPlus className="h-10 w-10 text-green-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">No Member Yet</h2>
                        <p className="text-gray-500 max-w-md mx-auto mb-8">
                            You haven't created any Member yet.
                        </p>
                        <button
                            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition-colors duration-200"
                            onClick={() => setMember(true)}
                        >
                            <FiPlus className="mr-2" />
                            Create Your First Member
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="ml-4 sm:px-6 lg:px-8 mb-4">
                            <div className="flex flex-col md:flex-row justify-around items-center mb-16">
                                <div className=''>
                                    <h1 className="md:text-4xl text-2xl font-bold   mb-4">Manage Your Members</h1>
                                    <p className="text-black mb-4 text-center">
                                        Create, edit, and manage your Members
                                    </p>
                                </div>
                                <button
                                    className="mt-4 md:mt-0 inline-flex items-center px-6 py-3 bg-white text-green-600 rounded-xl shadow-md hover:bg-green-50 transition-colors duration-200"
                                    onClick={() => setMember(true)}
                                >
                                    <FiPlus className="mr-2" />
                                    Add New Member
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl overflow-hidden shadow-md p-4">

                            <div className="mb-6 flex flex-wrap gap-4 items-center p-3">
                                <button className="p-2 text-2xl" onClick={() => setSearchVisible(!searchVisible)}>
                                    <FaSearch className="text-green-500 text-3xl" />
                                </button>

                                {searchVisible && (
                                    <input
                                        type="search"
                                        placeholder="Search the Name of The Member here ..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="flex-1 min-w-[200px] px-4 py-2 border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                )}
                            </div>
                            <div className="mb-3 px-3 py-2 flex items-center gap-2">
                <span className="font-bold">Total Members</span>
                <span className="px-2.5 py-0.5 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                    {Member.length}
                </span>
            </div>

                            <div className="overflow-y-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Career</th>
                                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Telephone</th>
                                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Date Joined</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {filteredmember.map((member) => (
                                            <tr key={member.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 truncate max-w-xs">{member.name}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.career}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">{member.tellephone}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                                                    {new Date(member.created_at).toLocaleDateString()}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right">
                                                    <div className="flex justify-end space-x-2">
                                                        <button className="p-2 text-indigo-600 hover:text-indigo-800 rounded-full hover:bg-blue-50" title="View">
                                                            <FiEye />
                                                        </button>
                                                        <button className="p-2 text-green-600 hover:text-green-800 rounded-full hover:bg-green-50" title="Edit">
                                                            <FiEdit2 />
                                                        </button>
                                                        <button className="p-2 text-red-600 hover:text-red-800 rounded-full hover:bg-red-50" title="Delete">
                                                            <FiTrash2 />
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
            {
                Addmember && (
                    <div
                        className="fixed inset-0 bg-[rgba(0,0,0,0.6)] flex items-center justify-center z-50"
                        onClick={() => setMember(false)}
                    >
                        <div
                            className="bg-white rounded-xl shadow-xl max-w-md w-full p-6"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="text-center mb-6">
                                <h1 className="text-2xl font-bold">Add Member</h1>
                                <p className="text-gray-600 mt-2">Join our community and start sharing your ideas</p>
                            </div>

                            <form onSubmit={handlesumbit}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-semibold mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                        placeholder="Name of Member"
                                        value={name}
                                        onChange={(e) => setname(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-semibold mb-2">Career</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                        placeholder="Bsc/Master"
                                        value={career}
                                        onChange={(e) => setcareer(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-semibold mb-2">Telephone</label>
                                    <input
                                        type="number"
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                        placeholder="Enter their number"
                                        value={tell}
                                        onChange={(e) => settell(e.target.value)}
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 disabled:opacity-50"
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Creating Member...' : 'Create Member'}
                                </button>
                            </form>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Members
