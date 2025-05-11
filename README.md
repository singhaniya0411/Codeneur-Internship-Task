# 🔐 MERN User Authentication System

A full-stack authentication system built using the **MERN stack** (MongoDB, Express, React, Node.js). This project supports **user registration**, **login**, **password hashing**, **JWT-based authentication**, and includes a clean UI built with **Tailwind CSS**.

---

## 🚀 Features

- 🔒 User Sign Up with hashed password (bcrypt)
- 🔑 User Login with JWT authentication
- ✅ Protected routes using tokens
- 👁️ Show/Hide password toggle
- 🎨 Beautiful and responsive UI with Tailwind CSS
- 🌐 Connected to MongoDB database

---

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS, React Router, Axios, React Toastify
- **Backend:** Node.js, Express.js, MongoDB, Mongoose, bcryptjs, jsonwebtoken
- **Database:** MongoDB (Atlas)

---

## 📂 Project Structure

```
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/              
│   │   ├── components/          # React components (Login, SignUp, Dashboard)
│   │   ├── App.jsx              # Main App component with routes
│   │   ├── App.css, index.css   # Styling
│   │   ├── main.jsx             # Entry point
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── README.md
│
├── Backend/
│   ├── config/
│   │   └── db.js                # MongoDB connection
│   ├── model/
│   │   └── user.js              # Mongoose schema
│   ├── routes/
│   │   └── auth.js              # SignUp/Login routes
│   ├── server.js                # Entry point
│   ├── .env                     # Environment config
│   └── package.json
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/singhaniya0411/Codeneur-Task.git
cd Codeneur-Task
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in `/backend`:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Start Backend Server

```bash
nodemon server.js
```

### 5. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

### 6. Start React Frontend

```bash
npm run dev
```

The app will be running at:  
**Frontend:** `http://localhost:5173`  
**Backend:** `http://localhost:5000`

---

## ✅ How it Works

- On **Sign Up**, password is hashed using `bcrypt` and stored in MongoDB.
- On **Login**, entered password is verified using `bcrypt.compare`.
- A **JWT token** is generated and stored in `localStorage`.
- Token is used for authenticated requests.

---


## 🧪 Future Improvements

- Add Forgot Password feature
- Add Email Verification
- User Profile with Avatar upload
- Two-Factor Authentication

---

## 👤 Author

- **Your Name** — **Vishal Singhaniya**
