# 🎯 CrowdCube - Crowdfunding Platform

A modern, full-stack crowdfunding platform built with React and Node.js. Create campaigns, accept donations, and manage your fundraising journey.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account
- Firebase project

### Installation

**1. Clone & Install**
```bash
git clone <repository-url>
cd B10_Assignment-10
```

**2. Backend Setup**
```bash
cd crowdcube-backend
npm install
```

Create `.env.local`:
```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

**3. Frontend Setup**
```bash
cd crowdcube-client
npm install
```

Create `.env.local`:
```env
VITE_APIKEY=your_firebase_api_key
VITE_AUTHDOMAIN=your_firebase_auth_domain
VITE_PROJECTID=your_firebase_project_id
VITE_STORAGEBUCKET=your_firebase_storage_bucket
VITE_MESSAGINGSENDERID=your_firebase_messaging_sender_id
VITE_APPID=your_firebase_app_id
VITE_API_URL=http://localhost:5000
```

**4. Run Application**
```bash
# Terminal 1 - Backend
cd crowdcube-backend
npm run dev

# Terminal 2 - Frontend
cd crowdcube-client
npm run dev
```

Visit `http://localhost:5173`

## ✨ Features

- 🔐 **Authentication** - Email/password & Google sign-in
- 📝 **Campaign Management** - Create, update, delete campaigns
- 💰 **Donations** - Secure donation tracking system
- 🔍 **Filtering & Sorting** - Find campaigns by type, sort by amount
- 📱 **Responsive Design** - Works on all devices
- 🎨 **Modern UI** - Built with Tailwind CSS & DaisyUI
- 🔒 **Private Routes** - Protected pages for authenticated users
- ⚡ **Real-time Updates** - Instant feedback with toast notifications

## 🛠️ Tech Stack

**Frontend**
- React 19
- React Router DOM
- Firebase Authentication
- Tailwind CSS + DaisyUI
- Axios
- React Hot Toast

**Backend**
- Node.js + Express
- MongoDB
- CORS

## 📁 Project Structure

```
B10_Assignment-10/
├── crowdcube-client/
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── context/         # Auth context provider
│   │   ├── pages/           # Page components
│   │   ├── routes/          # Route protection
│   │   └── config/          # Configuration files
│   └── .env.local
└── crowdcube-backend/
    ├── index.js             # Express server
    └── .env.local
```

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/data` | Get all campaigns |
| GET | `/data/:id` | Get campaign by ID |
| GET | `/my-campaigns?email=` | Get user's campaigns |
| POST | `/add-campaign` | Create new campaign |
| PUT | `/update-campaign/:id` | Update campaign |
| DELETE | `/delete-campaign/:id` | Delete campaign |
| POST | `/donations` | Add donation |
| GET | `/my-donations?email=` | Get user's donations |

## 📄 License

MIT License - feel free to use this project for learning purposes.

## 👨‍💻 Author

Built with ❤️ for Programming Hero Assignment.
