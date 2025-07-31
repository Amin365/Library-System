import React from 'react'
import { FiEdit2, FiEye, FiPlus, FiTrash2 } from 'react-icons/fi'

const HomePage = () => {
  return (
    <div>
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
                                        abdi
    
                                        </div>
                                    </td>
    
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500">
                                        hello
    
                                        </div>
                                    </td>
    
                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                        <div className="text-sm text-gray-500">
                                        he
    
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                        <div className="text-sm text-gray-500">
                                        he
    
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
      
    </div>
  )
}

export default HomePage
