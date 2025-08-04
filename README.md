

# 📚 Library Management System

A modern web application designed to efficiently manage library operations, including member registration, book issuing, return tracking, and real-time monitoring. Built with **React**, **Tailwind CSS**, and **Supabase**, this system offers a responsive interface, intuitive controls, and robust functionality tailored for both administrators and users.

---

## 🔍 Overview

This Library Management System allows you to:

* Register and manage library members
* Issue and return books with due dates
* Track and search issued books
* Export records to PDF
* Authenticate users via Supabase Auth
* Display real-time status and counters

---

## 🚀 Live Demo

🔗 [Live Website](https://library-system-ruby.vercel.app/)



---

## 🛠️ Technology Stack

| Layer         | Technologies                       |
| ------------- | ---------------------------------- |
| Frontend      | React, Tailwind CSS                |
| Backend       | Supabase (Database, Auth, Storage) |
| State Mgmt    | React Context API                  |
| Notifications | `react-hot-toast`                  |
| PDF Export    | jsPDF                              |
| Icons         | React Icons                        |

---

## ✨ Key Features

* **Authentication & Security**

  * User login and session management via Supabase Auth
  * Protected routes for authorized access only

* **Member Management**

  * Add, update, and delete members
  * Search and filter member data

* **Book Issue & Return System**

  * Issue books with return deadlines
  * Track issued and returned books per member

* **Smart Dashboard**

  * Real-time statistics (total members, books, active issues)
  * Offline status detection

* **Data Export**

  * Export member and issue records to PDF for offline usage

* **Responsive Design**

  * Fully optimized for desktop, tablet, and mobile screens

---

## ⚙️ Installation & Setup

### Prerequisites

* Node.js (v14 or above)
* A Supabase project ([https://supabase.com](https://supabase.com))

### Steps

```bash
# Clone the repository
git clone https://github.com/Amin365/Library-System
cd Library-System

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Environment Variables

Create a `.env.local` file and add your Supabase credentials:

```env
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

---

## 📸 Screenshots
![](<src/assets/Screenshot (79).png>)


---

## 🤝 Contributing

We welcome contributions that enhance this project.

### To Contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push the branch (`git push origin feature/your-feature-name`)
5. Open a Pull Request with a clear description

Please ensure your code follows the existing style and includes relevant comments/documentation.



📬 Contact
If you have any questions, feedback, or suggestions:
Email:Aminbashir07@gmail.com



