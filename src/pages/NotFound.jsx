import React, { useState } from 'react'
import { TiWarning } from "react-icons/ti";
import { Link } from 'react-router';

function NotFound() {
    
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center p-6">
        <div className="flex justify-center mb-4 text-yellow-500">
          <TiWarning size={80} />
        </div>
        <h1 className="text-5xl font-bold text-red-600 mb-4">403 - Forbidden</h1>
        <p className="text-lg text-gray-700 mb-2">
          You don’t have permission to access this page.
        </p>
        <p className="text-md text-gray-500 mb-6">
          If you have access, please sign in to continue.
        </p>
        <link
          to={'/dashboard'}
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Sign In
        </link>
      </div>
    </div>
  )
}

export default NotFound;
