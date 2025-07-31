import React, { useState } from "react"
import { FiPlus } from "react-icons/fi"


const HomePage = () => {
     const [Addmember, setMember] = useState(false)
  return (
    <div>
         <div className="bg-white rounded-xl shadow-md p-12 text-center">
                                <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <FiPlus className="h-10 w-10 text-green-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">No Member Yet</h2>
                                <p className="text-gray-500 max-w-md mx-auto mb-8">
                                    You haven't created any Member yet. 
                                </p>
                                <button
                                    to="/editor"
                                    className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition-colors duration-200"
                                     onClick={()=>setMember(!Addmember)}
                                >
                                    <FiPlus className="mr-2" />
                                    Create Your First Member
                                </button>
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

        <form >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Name of Member"
            //   value={name}
            //   onChange={(e) => setname(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Career</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Bsc/Master"
            //   value={career}
            //   onChange={(e) => setcareer(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Telephone</label>
            <input
              type="number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter their number"
            //   value={tell}
            //   onChange={(e) => settell(e.target.value)}
              required
            />
          </div>

          {/* <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? 'Creating Meber...' : 'Create Member'}
          </button> */}
        </form>
      </div>
    </div>
  )
}
    </div>
 

  )
}

export default HomePage
