import React, { useState } from 'react'
import { FiEdit2, FiEye, FiPlus, FiTrash2 } from 'react-icons/fi'


const Members = () => {
    const [Addmember, setMember] = useState(false)
      const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)
    const[name,setname]=useState('')
    const[career,setcareer]=useState('')
    const[tell,settell]=useState('')

    return (
        <div className=" max-w-7xl mx-auto py-6 ">
            <div className="ml-4  sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col md:flex-row justify-around items-center">
                    <div>
                        <h1 className="md:text-4xl text-2xl font-bold mb-2 text-center">Manage Your Members</h1>
                        <p className="text-black text-center ">
                            Create, edit, and manage your published and draft articles
                        </p>
                    </div>
                    <button
                        to="/editor"
                        className="mt-4 md:mt-0 inline-flex items-center px-6 py-3 bg-white text-green-600 rounded-xl shadow-md hover:bg-orange-50 transition-colors duration-200"
                        onClick={()=>setMember(!Addmember)}
                    >
                        <FiPlus className="mr-2" />
                        Add New Member
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md">

                <div className="overflow-y-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Title
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Date
                                </th>

                                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Comments
                                </th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {/* {member.map(article => ( */}

                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900 truncate max-w-xs">

                                    </div>
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-500">

                                    </div>
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    <div className="text-sm text-gray-500">

                                    </div>
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap text-right">
                                    <div className="flex justify-end space-x-2">
                                        <button

                                            className="p-2 text-indigo-600 hover:text-indigo-800 rounded-full hover:bg-blue-50"
                                            title="View Article"
                                        >
                                            <FiEye />
                                        </button>

                                        <button

                                            className="p-2 text-orange-600 hover:text-orange-800 rounded-full hover:bg-orange-50"
                                            title="Edit Article"
                                        >
                                            <FiEdit2 />
                                        </button>


                                        <button
                                            // onClick={() => confirmDelete(article)}
                                            className="p-2 text-red-600 hover:text-red-800 rounded-full hover:bg-red-50 cursor-pointer"
                                            title="Delete Article"
                                        >
                                            <FiTrash2 />
                                        </button>

                                    </div>
                                </td>

                            </tr>
                            {/* ))} */}
                        </tbody>

                    </table>

                </div>
                {
  Addmember && (
    <div
      className="fixed inset-0 bg-[rgba(0,0,0,0.6)]  flex items-center justify-center z-50"
      onClick={() => setMember(false)} // clicking outside closes the modal
    >
      <div
        className="bg-white rounded-xl shadow-xl max-w-md w-full p-6"
        onClick={(e) => e.stopPropagation()} // prevent click inside modal from closing
      >
        {/* Modal content */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Add Member</h1>
          <p className="text-gray-600 mt-2">Join our community and start sharing your ideas</p>
        </div>

        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
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
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
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
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter their number"
              value={tell}
              onChange={(e) => settell(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200 disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  )
}

               


            </div>
        </div>

    )
}

export default Members
