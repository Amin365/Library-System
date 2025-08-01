import { useEffect, useState } from "react";
import { RiWifiOffLine } from "react-icons/ri";
import { getMembers } from "../lib/member";
import { getMyBooks } from "../lib/books";
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



function DashboardHome() {
  const [books, setBooks] = useState([])
  const [member, setMember] = useState([])
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  const [activeTab, setActiveTab] = useState("Today");
  const{profile}=useAuth()
  console.log("justo for testing",formatDistanceToNow)

  const chartData = {
  Today: [
    { name: "New Book", value: books.length },
    { name: "Issued", value: books.length - 1 },
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
      fetchBooks() // try again when back online
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
    fetchMembers()
  }, [])

  console.log('members:',member)






  return (
    <>
    <div className=" mx-auto max-w-9xl  mt-10  ">
      {
        isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700"></div>
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
            <div className=" max-w-7xl mx-auto ">
              <h1 className="mb-9 font-bold md:text-xl text-center text-sm ">Welcome to the Dashboard {profile?.username}</h1>
              <div className="flex gap-4 flex-wrap md:flex-cols   space-x-2 ">
                <div className="px-6 py-8 bg-white shadow-lg w-[90%] md:w-[29%] md:ml-0 ml-4 rounded-md">
                  <div className="flex items-center gap-12   ">
                    <div className="bg-green-100 p-3 rounded-lg ">
                      <IoBookOutline className="text-4xl text-green-500" />

                    </div>
                    <div>
                      <h3 className="text-2xl  text-gray-900 mb-2">Total Book</h3>
                      <h1 className="text-center text-1xl font-bold">  {books.length}</h1>
                    </div>
                  </div>
                </div>
                <div className="px-6 py-8 bg-white shadow-lg w-[90%] md:w-[29%] md:ml-0 ml-4 rounded-md">
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
                <div className="px-6 py-8 bg-white shadow-lg w-[90%] md:ml-0 ml-4 md:w-[29%] rounded-md">
                  <div className="flex items-center gap-12 py-1 px-2">
                    <div className="bg-green-100 p-4 rounded-lg ">
                      <IoBookOutline className="text-4xl text-green-500" />

                    </div>
                    <div>
                      <h3 className="text-2xl text-gray-900 mb-2">Total Issue </h3>
                      <h1 className="text-center text-1xl font-bold">  {books.length}</h1>
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
      !isOnline?(
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
            <RiWifiOffLine className="mx-auto h-12 w-12 text-red-500 mb-4" />
            <h3 className="text-lg font-medium text-red-800 mb-2">  You are offline. Please check your internet connection.</h3>
            <button

              className="mt-4 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors duration-200"
            >
              Try Again
            </button>
          </div>

      ): <div className="max-w-7xl mx-auto w-full">
        {/* 📊 Reports Chart with Tab Switcher */}
    <div className="bg-white shadow-lg rounded-xl p-6 mt-10 ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Reports Overview</h2>
        <div className="flex space-x-2 bg-gray-100 p-1 rounded-full">
          {["Today", "Last Week", "Last Month"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1 rounded-full text-sm font-medium ${
                activeTab === tab
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
        <h3 className="text-lg font-semibold mb-4 text-green-500 bg-green-100 rounded-lg inline px-2 py-3 mb-4">New Members</h3>
        <table className="w-full text-sm text-left text-gray-700 divide-y divide-gray-500 mt-6">
          <thead className="bg-gray-50">
            <tr>
            <th className="px-6 py-3 text-left text-sm  text-gray-900 uppercase tracking-wider font-bold">Name</th>

              <th  className="px-6 py-3 text-left text-sm  text-gray-900 uppercase tracking-wider font-bold">Date added</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {member.slice(-5).reverse().map((m, i) => (
              <tr key={i} className="border-b">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700 truncate max-w-xs">{m.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500 truncate max-w-xs">
                 {formatDistanceToNow(new Date(m.created_at),{ addSuffix: true })}
                
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4 text-green-500 bg-green-100 rounded-lg inline px-2 py-3 mb-4">New Books</h3>
        <table className="w-full text-sm text-left text-gray-700 divide-y divide-gray-500 mt-6">
          <thead className="bg-gray-50">
            <tr>
            <th className="px-6 py-3 text-left text-sm  text-gray-900 uppercase tracking-wider font-bold">Name Of Books</th>

              <th  className="px-6 py-3 text-left text-sm  text-gray-900 uppercase tracking-wider font-bold">Date Added</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {books.slice(-5).reverse().map((m, i) => (
              <tr key={i} className="border-b">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700 truncate max-w-xs">{m.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500 truncate max-w-xs"> 
                {formatDistanceToNow(new Date(m.created_at),{ addSuffix: true })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ New Books */}
     
    </div>
 

   </div>
    }
  


    </>
    
    
  );
}

export default DashboardHome;
