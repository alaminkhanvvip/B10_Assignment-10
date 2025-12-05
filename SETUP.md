# CrowdCube Setup Guide

## Prerequisites
- Node.js installed
- MongoDB Atlas account
- Firebase project

## Backend Setup

1. Navigate to backend folder:
```bash
cd crowdcube-backend
```

2. Install dependencies:
```bash
npm install
```

3. Update `.env.local` with your MongoDB URI:
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

4. Start the server:
```bash
npm run dev
```

## Frontend Setup

1. Navigate to client folder:
```bash
cd crowdcube-client
```

2. Install dependencies:
```bash
npm install
```

3. Update `.env.local` with your Firebase config:
```
VITE_APIKEY=your_firebase_api_key
VITE_AUTHDOMAIN=your_firebase_auth_domain
VITE_PROJECTID=your_firebase_project_id
VITE_STORAGEBUCKET=your_firebase_storage_bucket
VITE_MESSAGINGSENDERID=your_firebase_messaging_sender_id
VITE_APPID=your_firebase_app_id
```

4. Start the development server:
```bash
npm run dev
```

## Firebase Setup

1. Go to Firebase Console (https://console.firebase.google.com/)
2. Create a new project
3. Enable Authentication > Sign-in method > Email/Password and Google
4. Copy your config keys to `.env.local`
5. Add your deployment domain to authorized domains

## MongoDB Setup

1. Create a MongoDB Atlas account
2. Create a new cluster
3. Create a database named `crowdcube`
4. Create collections: `campaigns` and `donations`
5. Get your connection string and add to backend `.env.local`

## Sample Data

To populate your database with sample campaigns, you can use the `sample-data.json` file in the backend folder. Import it to your MongoDB `campaigns` collection.

## Deployment

### Backend (Vercel)
```bash
cd crowdcube-backend
vercel
```

### Frontend (Netlify/Firebase)
```bash
cd crowdcube-client
npm run build
# Deploy the dist folder
```

## Important Notes

- Make sure both frontend and backend are running
- Update API URLs in frontend if deploying to production
- Don't commit `.env.local` files to Git
- Enable CORS on backend for your frontend domain
