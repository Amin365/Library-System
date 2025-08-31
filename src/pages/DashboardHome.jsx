import { useEffect, useState } from "react";
import { RiWifiOffLine } from "react-icons/ri";
import { deleteMember, getMembers, updateMember } from "../lib/member";
import { deleteBook, getMyBooks, updateBook } from "../lib/books";
import { IoBookOutline } from "react-icons/io5";
import { IoPeopleSharp } from "react-icons/io5";
import { useAuth } from "../context/AuthContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { formatDistanceToNow } from 'date-fns'
import { FiEdit2, FiEye, FiLoader, FiTrash2 } from "react-icons/fi";
import { FaRegEdit } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { Link } from "react-router";
import { getAllIssues } from "../lib/issue";
function DashboardHome() {
  const [books, setBooks] = useState([])
  const [member, setMember] = useState([])
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  const [activeTab, setActiveTab] = useState("Today");
     const[Download,setDownload]=useState(false)
      const[selectedMember,setSelectedMember]=useState(null)
      const[IsEditingBook,setEditingBook]=useState(false)
      const[IsEditingmember,setEditingMember]=useState(false)
      const[MemberData,setMemberData]=useState({
          name:'',
          career:'',
          tellephone:''
      })
      const[issue,setIssue]=useState([])
        const [confirmDeleteBook, setConfirmDeleteBook] = useState(false)
        const [confirmDeleteMember, setConfirmDeleteMember] = useState(false)
          const [MemberDelete, setMemberToDelete] = useState(null)
          const [isDeleting, setIsDeleting] = useState(false)

        
       const [selectedBook, setSelectedBook] = useState(null)  
       const [bookToDelete, setBookToDelete] = useState(null)
         const [EditBookData, setBookEdit] = useState({
               name: "",
               type: "",
               author: ""
           })

          const FetchIssue = async()=>{
            const data=await getAllIssues()
            setIssue(data)
          }

          useEffect(()=>{
            FetchIssue()
          },[])
          const handleDelete = async () => {
            if (!MemberDelete) return
          
            setIsDeleting(true)
            try {
              await deleteMember(MemberDelete.id)
              setConfirmDeleteMember(false)
              setMemberToDelete(null)
              fetchMembers()
              toast.success('successfully Deleted')
            } catch (err) {
              toast.error("Failed to delete: " + err.message)
            } finally {
              setIsDeleting(false)
            }
          }
          
         const handleEdit=(member)=>{
              setMemberData({
                  name:member.name,
                  career:member.career,
                  tellephone:member.tellephone
              })
              setSelectedMember(member)
              setEditingMember(true)
          }
      const HandleUpdate=async()=>{
          try {
              await updateMember(selectedMember.id,MemberData)
              setEditingMember(false)
              fetchMembers()
                toast.success("SuccessFully Updated")
              
          } catch (error) {
              toast.error("Failed to update book: " + error.message)
              
          }
      }
const HandleDeleteBook = async () => {
  if (!bookToDelete) return

  setIsDeleting(true)
  try {
    await deleteBook(bookToDelete.id)
    setConfirmDelete(false)
    setBookToDelete(null)
    fetchBooks()
    toast.success('successfully Deleted')
  } catch (err) {
    toast.error("Failed to delete: " + err.message)
  } finally {
    setIsDeleting(false)
  }
}
   
const HandleEditBook = (book) => {
        setBookEdit({
            name: book.name,
            type: book.type,
            author: book.authar_name

        })
        setSelectedBook(book)
        setEditingBook(true)
    }


    const HandleUpdateBook = async () => {
        try {
            await updateBook(selectedBook.id, EditBookData)
            setEditingBook(false)
            fetchBooks()
            toast("SuccessFully Updated")
        } catch (error) {
            toast("Failed to update book: " + err.message)
        }
    }



  const { profile } = useAuth()
  const chartData = {
    Today: [
      { name: "New Book", value: books.length },
      { name: "Issued", value: issue.length - 1 },
      { name: "New Member", value: member.length },
      { name: "Not Returned", value: 2 },
    ],
    "Last Week": [
      { name: "New Book", value: 12 },
      { name: "Issued", value: 9 },
      { name: "New Member", value: 7 },
      { name: "Not Returned", value: 4 },
    ],
    "Last Month": [
      { name: "New Book", value: 40 },
      { name: "Issued", value: 31 },
      { name: "New Member", value: 25 },
      { name: "Not Returned", value: 10 },
    ],
  };

  const fetchBooks = async () => {
    try {
      setIsLoading(true)
      const data = await getMyBooks()
      setBooks(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {


    fetchBooks()
  }, [])

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true)
      fetchBooks() 
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

  useEffect(() => {
    fetchMembers()
  }, [])


  const fetchMembers = async () => {

    try {
      setIsLoading(true)
      const data = await getMembers()
      setMember(data)

    } catch (error) {
      setError(error.message)

    } finally {
      setIsLoading(false)
    }

  }


  console.log('members:', member)






  return (
    <>
      <div className=" mx-auto max-w-9xl  mt-10  ">
        {
          isLoading ? (
                <div className="w-full flex justify-center">
      <div className="w-7xl p-4 bg-white rounded-md shadow animate-pulse">
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-3"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-3"></div>
        <div className="h-4 bg-gray-300 rounded w-full mb-3"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
      </div>
    </div>
          ) : !isOnline ? (
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
              <RiWifiOffLine className="mx-auto h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-lg font-medium text-red-800 mb-2">  You are offline. Please check your internet connection.</h3>
              <button

                className="mt-4 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors duration-200"
              >
                Try Again
              </button>
            </div>

          ) :



            (
              <div className=" max-w-7xl mx-auto  ">
                <h1 className="mb-9 font-bold md:text-xl text-center text-sm ">Welcome to the Dashboard {profile?.username}</h1>
                <div className="flex gap-4 flex-wrap md:flex-cols   space-x-2 ">
                  <div className="px-6 py-8 bg-white shadow-lg w-full md:w-[29%] md:ml-0 ml-4 rounded-md">
                  
                    <div className="flex items-center gap-12   ">
                    
                      <div className="bg-green-100 p-3 rounded-lg ">
                        <IoBookOutline className="text-4xl text-green-500" />

                      </div>
                      <div className="">
                        <h3 className="text-2xl  text-gray-900 mb-2">Total Book</h3>
                        <h1 className="text-center text-1xl font-bold">  {books.length}</h1>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-8 bg-white shadow-lg w-full md:w-[29%] md:ml-0 ml-4 rounded-md">
                    <div className="flex items-center gap-12 ">
                      <div className="bg-green-100 p-4 rounded-lg ">
                        <IoPeopleSharp className="text-4xl text-green-500" />

                      </div>
                      <div>
                        <h3 className="text-2xl  text-gray-900 mb-2">Total Members</h3>
                        <h1 className="text-center text-1xl font-bold">  {member.length}</h1>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-8 bg-white shadow-lg w-full md:ml-0 ml-4 md:w-[29%] rounded-md">
                    <div className="flex items-center gap-12 py-1 px-2">
                      <div className="bg-green-100 p-4 rounded-lg ">
                        <IoBookOutline className="text-4xl text-green-500" />

                      </div>
                      <div>
                        <h3 className="text-2xl text-gray-900 mb-2">Total Issue </h3>
                        <h1 className="text-center text-1xl font-bold">  {issue.length}</h1>
                      </div>
                    </div>
                  </div>



                </div>
              </div>

            )
        }

        {/* Line Chart Section */}





      </div>
      {
        !isOnline ? (
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
            <RiWifiOffLine className="mx-auto h-12 w-12 text-red-500 mb-4" />
            <h3 className="text-lg font-medium text-red-800 mb-2">  You are offline. Please check your internet connection.</h3>
            <button

              className="mt-4 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors duration-200"
            >
              Try Again
            </button>
          </div>

        ) : <div className="max-w-7xl mx-auto w-full">
          {/* 📊 Reports Chart with Tab Switcher */}
          <div className="bg-white shadow-lg rounded-xl p-6 mt-10 ">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Reports Overview</h2>
              <div className="flex space-x-2 bg-gray-100 p-1 rounded-full">
                {["Today", "Last Week", "Last Month"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-1 rounded-full text-sm font-medium ${activeTab === tab
                        ? "bg-green-500 text-white"
                        : "text-gray-600 hover:bg-gray-200"
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData[activeTab]}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis allowDecimals={false} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#f9fafb",
                      borderColor: "#e5e7eb",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#10b981"
                    strokeWidth={3}
                    dot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 🧾 Recent Activity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {/* ✅ New Members */}
            <div className="bg-white p-6 rounded-lg shadow-md max-w-7xl mx-auto w-full">
              <h3 className="text-lg font-semibold mb-4 text-green-500 bg-green-100 rounded-lg inline px-2 py-3 ">New Members</h3>
              <table className="w-full text-sm text-left text-gray-700 divide-y divide-gray-500 mt-6">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm  text-gray-900 uppercase tracking-wider font-bold">Name</th>

                    <th className="px-6 py-3 text-left text-sm  text-gray-900 uppercase tracking-wider font-bold">Date added</th>
                    <th className="px-6 py-3 text-left text-sm  text-gray-900 uppercase tracking-wider font-bold">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {member.slice(-5).reverse().map((m, i) => (
                    <tr key={i} className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700 truncate max-w-xs">{m.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500 truncate max-w-xs">
                        {formatDistanceToNow(new Date(m.created_at), { addSuffix: true })}

                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <button
                            onClick={() => {
                                setSelectedMember(m);
                                setDownload(true);
                            }}
                            className="p-2 text-indigo-600 hover:text-indigo-800 rounded-full hover:bg-blue-50"
                            title="View Book"
                          >
                            <FiEye />
                          </button>
                          <button
                            onClick={() => handleEdit(m)}
                            className="p-2 text-green-600 hover:text-green-800 rounded-full hover:bg-green-50"
                            title="Edit Book"
                          >
                            <FaRegEdit />
                          </button>
                          <button
                            onClick={() => {
                                setMemberToDelete(m)
                                setConfirmDelete(true)
                            }}
                            className="p-2 text-red-600 hover:text-red-800 rounded-full hover:bg-red-50 cursor-pointer"
                            title="Delete Book"
                          >
                            <FiTrash2 />
                          </button>
                        </div>

                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
               <div className="flex justify-between mr-9 mt-4 ">
                <div></div>
                
                <Link to={'/dashboard/memebers'} className=" px-4 py-2 bg-green-100 text-green-500 rounded-full text-base flex items-center gap-1" >
                <GrView/>
                
                View All</Link>
               

              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4 text-green-500 bg-green-100 rounded-lg inline px-2 py-3 mb-4">New Books</h3>
              <table className="w-full text-sm text-left text-gray-700 divide-y divide-gray-500 mt-6">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm  text-gray-900 uppercase tracking-wider font-bold">Name Of Books</th>

                    <th className="px-6 py-3 text-left text-sm  text-gray-900 uppercase tracking-wider font-bold">Date Added</th>
                    <th className="px-6 py-3 text-left text-sm  text-gray-900 uppercase tracking-wider font-bold">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {books.slice(-5).reverse().map((m, i) => (
                    <tr key={i} className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700 truncate max-w-xs">{m.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500 truncate max-w-xs">
                        {formatDistanceToNow(new Date(m.created_at), { addSuffix: true })}
                      </td>
                       <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <button
                            onClick={() => {
                                setSelectedBook(m);
                                setDownload(true);
                            }}
                            className="p-2 text-indigo-600 hover:text-indigo-800 rounded-full hover:bg-blue-50"
                            title="View Book"
                          >
                            <FiEye />
                          </button>
                          <button
                            onClick={() => HandleEditBook(m)}
                            className="p-2 text-green-600 hover:text-green-800 rounded-full hover:bg-green-50"
                            title="Edit Book"
                          >
                            <FaRegEdit />
                          </button>
                          <button
                            onClick={() => {
                                setBookToDelete(m)
                                setConfirmDelete(true)
                            }}
                            className="p-2 text-red-600 hover:text-red-800 rounded-full hover:bg-red-50 cursor-pointer"
                            title="Delete Book"
                          >
                            <FiTrash2 />
                          </button>
                        </div>

                      </td>
                      
                    </tr>
                  ))}
                  
                </tbody>
              </table>
              <div className="flex justify-between mr-9 mt-4 ">
                <div></div>
                
                <Link to={'/dashboard/memebers'} className=" px-4 py-2 bg-green-100 text-green-500 rounded-full text-base flex items-center gap-1" >
                <GrView/>
                
                View All</Link>
               

              </div>
              
            </div>



          </div>


        </div>
      }

  {Download && selectedMember && (
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
                                            🧍 Name: {selectedMember.name}
                                            </h2>
                                            <p className="text-gray-700 mb-1">👨‍💻 career: {selectedMember.career}</p>
                                            <p className="text-gray-700 mb-1">📞 Telephone: {selectedMember.tellephone}</p>
                                            <p className="text-gray-500 text-sm">
                                                🗓️ Added on: {new Date(selectedMember.created_at).toLocaleDateString()}
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
                             {IsEditingmember && (
                                <div
                                    className="fixed inset-0 bg-[rgba(0,0,0,0.6)] flex items-center justify-center p-4 z-50"
                                    onClick={() => setEditingMember(false)}
                                >
                                    <div
                                        className="bg-white rounded-xl shadow-xl max-w-md w-full p-6"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <h2 className="text-xl font-bold mb-4">Edit Member</h2>

                                        <input
                                            type="text"
                                            value={MemberData.name}
                                            onChange={(e) => setMemberData({ ...MemberData, name: e.target.value })}
                                            placeholder="Book Name"
                                            className="w-full mb-3 px-4 py-2 border rounded"
                                        />
                                        <input
                                            type="text"
                                            value={MemberData.career}
                                            onChange={(e) => setMemberData({ ...MemberData, career: e.target.value })}
                                            placeholder="Book Type"
                                            className="w-full mb-3 px-4 py-2 border rounded"
                                        />
                                        <input
                                            type="text"
                                            value={MemberData.tellephone}
                                            onChange={(e) => setMemberData({ ...MemberData, tellephone: e.target.value })}
                                            placeholder="Author Name"
                                            className="w-full mb-3 px-4 py-2 border rounded"
                                        />

                                        <div className="flex justify-end space-x-2">
                                            <button
                                                onClick={HandleUpdate}
                                                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                            >
                                                Save
                                            </button>
                                            <button
                                                onClick={() => setEditingMember(false)}
                                                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                                                       {confirmDeleteMember && (
                              <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] flex items-center justify-center p-4 z-50">
                                <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
                                  <h3 className="text-xl font-bold text-gray-900 mb-4">Confirm Deletion</h3>
                                  <p className="text-gray-600 mb-6">
                                    Are you sure you want to delete "
                                    {MemberDelete?.name || 'Untitled Book'}"? This action cannot be undone.
                                  </p>
                            
                                  <div className="flex justify-end space-x-3">
                                    <button
                                      onClick={() => {
                                        setConfirmDelete(false)
                                        setMemberToDelete(null)
                                      }}
                                      disabled={isDeleting}
                                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                                    >
                                      Cancel
                                    </button>
                            
                                    <button
                                      onClick={handleDelete}
                                      disabled={isDeleting}
                                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center"
                                    >
                                      {isDeleting ? (
                                        <>
                                          <FiLoader className="animate-spin mr-2" />
                                          Deleting...
                                        </>
                                      ) : (
                                        <>
                                          <FiTrash2 className="mr-2" />
                                          Delete
                                        </>
                                      )}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )}

                             {Download && selectedBook && (
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
                                                                          📘 Book Name: {selectedBook.name}
                                                                      </h2>
                                                                      <p className="text-gray-700 mb-1">📚 Type: {selectedBook.Type}</p>
                                                                      <p className="text-gray-700 mb-1">✍️ Author: {selectedBook.authar_name}</p>
                                                                      <p className="text-gray-500 text-sm">
                                                                          🗓️ Added on: {new Date(selectedBook.created_at).toLocaleDateString()}
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
                                                      {IsEditingBook && (
                                                          <div
                                                              className="fixed inset-0 bg-[rgba(0,0,0,0.6)] flex items-center justify-center p-4 z-50"
                                                              onClick={() => setEditingBook(false)}
                                                          >
                                                              <div
                                                                  className="bg-white rounded-xl shadow-xl max-w-md w-full p-6"
                                                                  onClick={(e) => e.stopPropagation()}
                                                              >
                                                                  <h2 className="text-xl font-bold mb-4">Edit Book</h2>
                          
                                                                  <input
                                                                      type="text"
                                                                      value={EditBookData.name}
                                                                      onChange={(e) => setBookEdit({ ...EditBookData, name: e.target.value })}
                                                                      placeholder="Book Name"
                                                                      className="w-full mb-3 px-4 py-2 border rounded"
                                                                  />
                                                                  <input
                                                                      type="text"
                                                                      value={EditBookData.type}
                                                                      onChange={(e) => setBookEdit({ ...EditBookData, type: e.target.value })}
                                                                      placeholder="Book Type"
                                                                      className="w-full mb-3 px-4 py-2 border rounded"
                                                                  />
                                                                  <input
                                                                      type="text"
                                                                      value={EditBookData.author}
                                                                      onChange={(e) => setBookEdit({ ...EditBookData, author: e.target.value })}
                                                                      placeholder="Author Name"
                                                                      className="w-full mb-3 px-4 py-2 border rounded"
                                                                  />
                          
                                                                  <div className="flex justify-end space-x-2">
                                                                      <button
                                                                          onClick={HandleUpdateBook}
                                                                          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                                                      >
                                                                          Save
                                                                      </button>
                                                                      <button
                                                                          onClick={() => setEditingBook(false)}
                                                                          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                                                                      >
                                                                          Cancel
                                                                      </button>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      )}
                                                      {confirmDeleteBook && (
                            <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] flex items-center justify-center p-4 z-50">
                              <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Confirm Deletion</h3>
                                <p className="text-gray-600 mb-6">
                                  Are you sure you want to delete "
                                  {bookToDelete?.name || 'Untitled Book'}"? This action cannot be undone.
                                </p>
                          
                                <div className="flex justify-end space-x-3">
                                  <button
                                    onClick={() => {
                                      setConfirmDeleteBook(false)
                                      setBookToDelete(null)
                                    }}
                                    disabled={isDeleting}
                                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                                  >
                                    Cancel
                                  </button>
                          
                                  <button
                                    onClick={HandleDeleteBook}
                                    disabled={isDeleting}
                                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center"
                                  >
                                    {isDeleting ? (
                                      <>
                                        <FiLoader className="animate-spin mr-2" />
                                        Deleting...
                                      </>
                                    ) : (
                                      <>
                                        <FiTrash2 className="mr-2" />
                                        Delete
                                      </>
                                    )}
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}  



    </>


  );
}

export default DashboardHome;
