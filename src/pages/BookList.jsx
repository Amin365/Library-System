import React, { useEffect, useState } from 'react'
import { FiEdit2, FiEye, FiLoader, FiPlus, FiTrash2 } from 'react-icons/fi'
import { FaRegEdit } from "react-icons/fa";
import { deleteBook, getMyBooks, updateBook } from '../lib/books'
import { FaSearch } from 'react-icons/fa'
import { html2pdf } from 'html2pdf.js'

import { RiWifiOffLine } from 'react-icons/ri'
import toast from 'react-hot-toast'
import { Link } from 'react-router'
import { IoReturnDownBackSharp } from 'react-icons/io5'



function BookList() {
    const [Books, setBooks] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [searchTerm, setSearchTerm] = useState("");
    const [searchVisible, setSearchVisible] = useState(false);
    const [Download, setDownload] = useState(false)
    const [selectedBook, setSelectedBook] = useState(null)
    const [isOnline, setIsOnline] = useState(navigator.onLine)
    const [IsEditing, setEditing] = useState(false)
    const [EditBookData, setBookEdit] = useState({
        name: "",
        type: "",
        author: ""
    })
   const [confirmDelete, setConfirmDelete] = useState(false)
const [bookToDelete, setBookToDelete] = useState(null)
const [isDeleting, setIsDeleting] = useState(false)


const handleDelete = async () => {
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


    const handleEdit = (book) => {
        setBookEdit({
            name: book.name,
            type: book.type,
            author: book.authar_name

        })
        setSelectedBook(book)
        setEditing(true)
    }


    const HandleUpdate = async () => {
        try {
            await updateBook(selectedBook.id, EditBookData)
            setEditing(false)
            fetchBooks()
            toast("SuccessFully Updated")
        } catch (error) {
            toast("Failed to update book: " + err.message)
        }
    }




    const filteredBooks = Books.filter((book) =>
        book.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    console.log("books", Books)
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




    
    const handleDownload = () => {
        const element = document.getElementById("book-details-pdf")

        const options = {
            margin: 0.5,
            filename: `${selectedBook.name}_info.pdf`,
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        }

        html2pdf().set(options).from(element).save()
    }


    return (

        <div>
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
                ) :
                    !isOnline ? (
                        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                            <RiWifiOffLine className="mx-auto h-12 w-12 text-red-500 mb-4" />
                            <h3 className="text-lg font-medium text-red-800 mb-2">  You are offline. Please check your internet connection.</h3>
                            <button
                                onClick={fetchBooks}
                                className="mt-4 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors duration-200"
                            >
                                Try Again
                            </button>
                        </div>

                    ) : Books.length === 0 ? (
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
                        <div className="bg-white rounded-xl overflow-hidden shadow-md max-w-7xl mx-auto mt-10 p-4 ">
                         <Link
                                       to="/dashboard/DashboardHome"
                                       className="inline-flex items-center px-6 py-1 rounded-full bg-green-100 text-green-500 font-semibold  transition-colors duration-200 mb-4"
                                     >
                                      <IoReturnDownBackSharp  className="  p-2 text-5xl" />
                                         Back to the Dashboard
                                      
                                     </Link> 

                            {/* Search Section */}
                            <div className="mb-6 flex flex-wrap gap-4 items-center">
                                <button className="p-2 text-2xl" onClick={() => setSearchVisible(!searchVisible)}>
                                    <FaSearch className="text-green-500 text-3xl" />
                                </button>

                                {searchVisible && (
                                    <input
                                        type="search"
                                        placeholder="Search the Name of The book here ..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="flex-1 min-w-[200px] px-4 py-2 border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                )}
                            </div>

                            {/* Book Count */}
                            <div className="mb-3 px-3 py-2 flex items-center gap-2">
                                <span className="font-bold">Total Books</span>
                                <span className="px-2.5 py-0.5 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                                    {Books.length}
                                </span>
                            </div>

                            {/* Responsive Table */}
                            <div className=" overflow-x-auto">
                            
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Name of Books
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Type of Books
                                            </th>
                                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Author
                                            </th>
                                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Date Added
                                            </th>
                                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {filteredBooks.map((book) => (
                                            <tr key={book.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {book.name}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {book.Type}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                                                    {book.authar_name}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                                                    {new Date(book.created_at).toLocaleDateString()}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <div className="flex justify-end space-x-2">
                                                        <button
                                                            onClick={() => {
                                                                setSelectedBook(book);
                                                                setDownload(true);
                                                            }}
                                                            className="p-2 text-indigo-600 hover:text-indigo-800 rounded-full hover:bg-blue-50"
                                                            title="View Book"
                                                        >
                                                            <FiEye />
                                                        </button>
                                                        <button
                                                            onClick={() => handleEdit(book)}
                                                            className="p-2 text-green-600 hover:text-green-800 rounded-full hover:bg-green-50"
                                                            title="Edit Book"
                                                        >
                                                            <FaRegEdit />
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                setBookToDelete(book)
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
                            </div>

                            {/* Book Modal */}
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
                                                onClick={handleDownload}
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
                            {IsEditing && (
                                <div
                                    className="fixed inset-0 bg-[rgba(0,0,0,0.6)] flex items-center justify-center p-4 z-50"
                                    onClick={() => setEditing(false)}
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
                                                onClick={HandleUpdate}
                                                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                            >
                                                Save
                                            </button>
                                            <button
                                                onClick={() => setEditing(false)}
                                                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {confirmDelete && (
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
            setConfirmDelete(false)
            setBookToDelete(null)
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


                        </div>

                    )






            }

        </div>





    )
}

export default BookList
