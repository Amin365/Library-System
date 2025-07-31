
import  { useState } from 'react'
import { createBook } from '../lib/books'


function Books() {
  const[name, SetName] = useState('')
  const[type, setTypeBook] = useState('')
  const[author, setAuthor] = useState('')
   const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit=async (event)=>{
    event.preventDefault()  
    setIsLoading(true)
    setError(null)
    
    try {
      await createBook({ name, type, author })
      setSuccess(true)
      setTimeout(() => {
        window.location.href = '/dashboard/BookList' 
      }, 3000)

    } catch (error) {
      console.error("Error adding book:", error)
      setError("Failed to add book. Please try again.")
    } finally {
      setIsLoading(false)}


    }



  if (success) {
    return (
      <div className="min-h-screen  px-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-green-500 text-5xl mb-4">✓</div>
            <h2 className="text-2xl font-bold mb-2"> Adding New Book  </h2>
            <p className="text-gray-600 mb-4">
              Your Book has been added successfully. 
            </p>
            <p className="text-gray-500 text-sm">
              Redirecting to Book List page in a few seconds...
            </p>
          </div>
        </div>
      </div>
    )
  }
  return (
    
     
    
     
      <div className='min-h-screen  py-8  px-4'>
            <div className='max-w-md w-full'>
            
              <div className='text-center mb-10'>
                <h1 className='text-3xl font-bold'> 
                  Add New Book
                 </h1>
                <p className='text-gray-600 mt-2'>
                  Add a new book to the library by filling out the form below.
                </p>
              </div>
              {/* form info */}
              <div className="bg-white rounded-lg shadow-md p-8">
      
                {
                  error && (
                    <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
                      {error}
                    </div>
                  )
                }
      
      
                <form  onSubmit={handleSubmit}>
      
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                     Name of the Book
                    </label>
                    <input
                      id="Name"
                      type="text"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Enter the Name of the Book"
                      value={name}
                      onChange={(e) => SetName(e.target.value)}
                      required
                    />
                  </div>
      
      
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="username">
                     Type of the Book
                    </label>
                    <input
                      id="username"
                      type="text"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="write the type of the Book"
                      value={type}
                      onChange={(e) => setTypeBook(e.target.value)}
                      required
                    />
                  </div>
      
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                     author of the Book
                    </label>
                    <input
                      id="text"
                      type="text"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="write the author of the Book"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      required
                     
                    />
                    
                  </div>
      
      
                  
      
      
                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-200 disabled:cursor-not-allowed disabled:bg-green-500"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Adding New Book...' : 'Add New Book'}
      
                  </button>
                </form>
      
                
      
              </div>
            </div>
          </div>
        

  )
}

export default Books
