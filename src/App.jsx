import { Route, Routes } from "react-router";

import Isuepage from "./pages/Isuepage";
import DashboardHome from "./pages/DashboardHome";
import DashboardLayout from "./pages/DashboardLayout";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { AuthProvider } from "./context/AuthContext";
import UnAuthenticatedRoute from "./components/AnouthicatedRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import ProfilePage from "./pages/ProfilePage";
import  { Toaster } from 'react-hot-toast';
import Books from "./pages/Books";
import Members from "./pages/Members";
import BookList from "./pages/BookList";

function App() {
  return (
    <AuthProvider>
      <div>
        <Header />

        <main>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={
              <UnAuthenticatedRoute>
                <SignIn />
              </UnAuthenticatedRoute>
            } />
            <Route
              path="profile"
              element={

                <ProtectedRoute>
                <ProfilePage/>
                </ProtectedRoute>
              }
            />

           

            {/* Dashboard Layout with nested routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
              <DashboardLayout />

              </ProtectedRoute>
              
              }>
              <Route path="dashboardhome" element={<DashboardHome />} />
              <Route path="issuepage" element={<Isuepage />} />
               <Route path="signup" element={

                <SignUp />
             
            } />
            <Route path="Books" element={<Books />} />
            <Route path="memebers" element={<Members />} />
            <Route path="BookList" element={<BookList />} />
              
            </Route>
          </Routes>
        </main>
      </div>
      <Toaster

        position="top-right"
        toastOptions={{
          style: {
            borderRadius: '12px',
            background: '#fff',
            color: '#333',
            padding: '12px 16px',
            fontWeight: 500,
            boxShadow: '0 8px 30px rgba(0,0,0,0.1)'
          },
          success: {
            iconTheme: {
              primary: '#22c55e',
              secondary: '#d1fae5',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fee2e2',
            },
          },
        }}
      />

    </AuthProvider>
  );
}

export default App;
