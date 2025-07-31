import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { MdDashboard, MdLibraryBooks, MdPeople, MdPersonAdd } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { to: "/dashboard/dashboardhome", label: "Dashboard", icon: <MdDashboard size={22} /> },

    { to: "/dashboard/Books", label: "ADD BOOKS", icon: <MdLibraryBooks size={22} /> },
    { to: "/dashboard/BookList", label: "TOTAL BOOKS", icon: <MdLibraryBooks size={22} /> },
    { to: "/dashboard/issuepage", label: "ISSUE BOOKS", icon: <FaBookOpen size={22} /> },
    { to: "/dashboard/memebers", label: "MEMBERS", icon: <MdPeople size={22} /> },
    { to: "/dashboard/signup", label: "ADD ADMIN", icon: <MdPersonAdd size={22} /> },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Hamburger menu only on mobile */}
      {!sidebarOpen && (
        <button
          className="md:hidden fixed top-3 left-2 z-50  p-2  "
          onClick={() => setSidebarOpen(true)}
          aria-label="Open sidebar"
        >
          <CiMenuBurger size={28} />
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 min-h-screen w-64 bg-white shadow-lg z-40 transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:static md:translate-x-0 md:w-64 md:block
        `}
      >
        {/* Close button for mobile sidebar */}
        <div className="flex items-center md:hidden p-4 border-b mt-3">
          <button
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
            className="fixed top-1 right-3"
          >
            <IoMdClose size={28} />
          </button>
        </div>

        <ul className="mt-8 space-y-2 px-4 py-4">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.to}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-100 text-gray-700 font-medium transition"
                onClick={() => setSidebarOpen(false)}
              >
                {item.icon}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Page Content */}
      <main className="flex-1 p-6 md:ml-64 transition-all duration-300">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
