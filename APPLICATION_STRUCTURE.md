# 🏗️ CrowdCube Application Structure

## 📂 Complete File Tree

```
CrowdcubeV01/
│
├── 📄 README.md                      # Main project overview
├── 📄 QUICK_START.md                 # 5-minute setup guide
├── 📄 SETUP.md                       # Detailed setup instructions
├── 📄 PROJECT_SUMMARY.md             # Complete implementation details
├── 📄 DEPLOYMENT_GUIDE.md            # Deployment instructions
├── 📄 FINAL_CHECKLIST.md             # Pre-submission checklist
├── 📄 FEATURES.md                    # Detailed feature documentation
├── 📄 APPLICATION_STRUCTURE.md       # This file
│
├── 📁 crowdcube-backend/             # Express.js Backend
│   ├── 📄 index.js                   # Main server file (all routes)
│   ├── 📄 package.json               # Backend dependencies
│   ├── 📄 .env.local                 # MongoDB credentials (not in git)
│   ├── 📄 .gitignore                 # Git ignore rules
│   ├── 📄 vercel.json                # Vercel deployment config
│   ├── 📄 sample-data.json           # Sample campaign data
│   └── 📄 API_REFERENCE.md           # API documentation
│
└── 📁 crowdcube-client/              # React Frontend
    ├── 📁 public/
    │   └── vite.svg
    │
    ├── 📁 src/
    │   ├── 📁 components/            # Reusable UI components
    │   │   ├── Navbar.jsx            # Navigation bar with auth
    │   │   ├── Footer.jsx            # Footer component
    │   │   └── CampaignCard.jsx      # Campaign card with See More
    │   │
    │   ├── 📁 context/               # Global state management
    │   │   └── AuthContext.jsx       # Firebase auth context
    │   │
    │   ├── 📁 pages/                 # All page components
    │   │   ├── Home.jsx              # Home page (public)
    │   │   ├── Login.jsx             # Login page (public)
    │   │   ├── Register.jsx          # Register page (public)
    │   │   ├── AllCampaigns.jsx      # All campaigns table (public)
    │   │   ├── CampaignDetails.jsx   # Campaign details (private)
    │   │   ├── AddCampaign.jsx       # Add campaign form (private)
    │   │   ├── MyCampaign.jsx        # User's campaigns (private)
    │   │   ├── UpdateCampaign.jsx    # Update campaign (private)
    │   │   ├── MyDonations.jsx       # User's donations (private)
    │   │   └── NotFound.jsx          # 404 page
    │   │
    │   ├── 📁 routes/                # Route protection
    │   │   └── PrivateRoute.jsx      # Private route wrapper
    │   │
    │   ├── 📁 utils/                 # Utility functions
    │   │   └── api.js                # Centralized API calls
    │   │
    │   ├── 📁 assets/                # Static assets
    │   │   └── react.svg
    │   │
    │   ├── 📄 App.jsx                # Main app with routing
    │   ├── 📄 main.jsx               # React entry point
    │   ├── 📄 index.css              # Global styles
    │   └── 📄 firebase.config.js     # Firebase configuration
    │
    ├── 📄 package.json               # Frontend dependencies
    ├── 📄 .env.local                 # Firebase credentials (not in git)
    ├── 📄 .gitignore                 # Git ignore rules
    ├── 📄 README.md                  # Client README
    ├── 📄 vite.config.js             # Vite configuration
    ├── 📄 eslint.config.js           # ESLint configuration
    └── 📄 index.html                 # HTML entry point
```

## 🔄 Application Flow

### User Journey Map

```
┌─────────────────────────────────────────────────────────────┐
│                         LANDING                              │
│                      Home Page (/)                           │
│  • Banner/Slider                                            │
│  • 6 Running Campaigns with "See More" buttons             │
│  • How It Works section                                     │
│  • Success Stories section                                  │
└────────────┬────────────────────────────────────────────────┘
             │
             ├──► Not Logged In ──► Login/Register
             │                      │
             │                      └──► Authentication Success
             │                           │
             └──────────────────────────┘
                                    │
                    ┌───────────────┴───────────────┐
                    │                               │
            ┌───────▼────────┐            ┌────────▼─────────┐
            │  PUBLIC PAGES  │            │  PRIVATE PAGES   │
            └───────┬────────┘            └────────┬─────────┘
                    │                               │
        ┌───────────┼───────────┐      ┌───────────┼──────────────┐
        │           │           │      │           │              │
    ┌───▼───┐  ┌───▼────┐  ┌──▼───┐ ┌▼────┐  ┌───▼───┐  ┌──────▼──────┐
    │ Home  │  │  All   │  │Login │ │ Add │  │  My   │  │     My      │
    │       │  │Campaign│  │      │ │Camp.│  │ Camp. │  │  Donations  │
    └───┬───┘  └───┬────┘  └──────┘ └──┬──┘  └───┬───┘  └─────────────┘
        │          │                    │         │
        │          │                    │         │
        └──────────┴────────────────────┴─────────┘
                           │
                    ┌──────▼──────┐
                    │  Campaign   │
                    │   Details   │
                    │  (Private)  │
                    └──────┬──────┘
                           │
                    ┌──────▼──────┐
                    │   Donate    │
                    │   Action    │
                    └─────────────┘
```

## 🗄️ Database Structure

### MongoDB Collections

```
crowdcube (database)
│
├── campaigns (collection)
│   └── Document Schema:
│       {
│         _id: ObjectId,
│         image: String (URL),
│         title: String,
│         type: String (personal issue | startup | business | creative ideas),
│         description: String,
│         minDonation: Number,
│         deadline: String (ISO Date),
│         userEmail: String,
│         userName: String,
│         createdAt: String (ISO Date)
│       }
│
└── donations (collection)
    └── Document Schema:
        {
          _id: ObjectId,
          campaignId: String,
          campaignTitle: String,
          campaignImage: String (URL),
          minDonation: Number,
          userEmail: String,
          userName: String,
          donatedAt: String (ISO Date)
        }
```

## 🔌 API Endpoints Map

```
Backend Server (http://localhost:5000)
│
├── GET /                              # Health check
├── GET /health                        # Database health check
│
├── Campaign Endpoints
│   ├── GET /data                      # Get all campaigns
│   ├── GET /data?limit=6              # Get limited campaigns
│   ├── GET /data/:id                  # Get single campaign
│   ├── GET /my-campaigns?email=       # Get user's campaigns
│   ├── POST /add-campaign             # Create new campaign
│   ├── PUT /update-campaign/:id       # Update campaign
│   └── DELETE /delete-campaign/:id    # Delete campaign
│
└── Donation Endpoints
    ├── POST /donations                # Create donation
    └── GET /my-donations?email=       # Get user's donations
```

## 🎨 Component Hierarchy

```
App.jsx
│
├── AuthProvider (Context)
│   │
│   └── BrowserRouter
│       │
│       ├── Toaster (Global notifications)
│       │
│       └── Routes
│           │
│           ├── Route: / (Home)
│           │   ├── Navbar
│           │   ├── Home
│           │   │   ├── Banner/Carousel
│           │   │   ├── Running Campaigns Section
│           │   │   │   └── CampaignCard (x6)
│           │   │   ├── How It Works Section
│           │   │   └── Success Stories Section
│           │   └── Footer
│           │
│           ├── Route: /login
│           │   ├── Navbar
│           │   ├── Login
│           │   └── Footer
│           │
│           ├── Route: /register
│           │   ├── Navbar
│           │   ├── Register
│           │   └── Footer
│           │
│           ├── Route: /campaigns
│           │   ├── Navbar
│           │   ├── AllCampaigns (Table)
│           │   └── Footer
│           │
│           ├── Route: /campaign/:id (Private)
│           │   ├── PrivateRoute
│           │   │   ├── Navbar
│           │   │   ├── CampaignDetails
│           │   │   └── Footer
│           │
│           ├── Route: /add-campaign (Private)
│           │   ├── PrivateRoute
│           │   │   ├── Navbar
│           │   │   ├── AddCampaign (Form)
│           │   │   └── Footer
│           │
│           ├── Route: /my-campaign (Private)
│           │   ├── PrivateRoute
│           │   │   ├── Navbar
│           │   │   ├── MyCampaign (Table)
│           │   │   └── Footer
│           │
│           ├── Route: /update-campaign/:id (Private)
│           │   ├── PrivateRoute
│           │   │   ├── Navbar
│           │   │   ├── UpdateCampaign (Form)
│           │   │   └── Footer
│           │
│           ├── Route: /my-donations (Private)
│           │   ├── PrivateRoute
│           │   │   ├── Navbar
│           │   │   ├── MyDonations (Cards)
│           │   │   └── Footer
│           │
│           └── Route: * (404)
│               └── NotFound (No Navbar/Footer)
```

## 🔐 Authentication Flow

```
User Action
    │
    ├──► Register
    │    ├── Validate password (uppercase, lowercase, 6+ chars)
    │    ├── Create user in Firebase
    │    ├── Update profile (name, photo)
    │    ├── Set user in AuthContext
    │    └── Redirect to home
    │
    ├──► Login (Email/Password)
    │    ├── Sign in with Firebase
    │    ├── Set user in AuthContext
    │    └── Redirect to previous page or home
    │
    ├──► Login (Google)
    │    ├── Sign in with Google popup
    │    ├── Set user in AuthContext
    │    └── Redirect to previous page or home
    │
    └──► Logout
         ├── Sign out from Firebase
         ├── Clear user from AuthContext
         └── Redirect to home
```

## 🛡️ Private Route Protection

```
User tries to access private route
    │
    ├──► Loading state?
    │    └── Show spinner
    │
    ├──► User authenticated?
    │    ├── YES → Render protected component
    │    └── NO → Redirect to /login
    │              └── Save intended destination
    │                  └── Return after login
```

## 📊 Data Flow Examples

### Creating a Campaign
```
User (AddCampaign.jsx)
    │
    ├── Fill form
    ├── Submit
    │
    └──► Frontend
         ├── Validate form
         ├── Add user email/name
         ├── POST /add-campaign
         │
         └──► Backend (index.js)
              ├── Receive data
              ├── Insert to campaigns collection
              ├── Return success
              │
              └──► Frontend
                   ├── Show success toast
                   └── Redirect to /my-campaign
```

### Donating to Campaign
```
User (CampaignDetails.jsx)
    │
    ├── Click "Donate Now"
    │
    └──► Frontend
         ├── Check deadline
         ├── Valid? → Create donation object
         ├── POST /donations
         │
         └──► Backend (index.js)
              ├── Receive donation data
              ├── Insert to donations collection
              ├── Return success
              │
              └──► Frontend
                   └── Show success toast
```

## 🎯 Key Implementation Highlights

### See More Button (Requirements 6 & 12)
```
Location 1: Home.jsx → CampaignCard.jsx
    <Link to={`/campaign/${campaign._id}`}>See More</Link>

Location 2: AllCampaigns.jsx
    <Link to={`/campaign/${campaign._id}`}>See More</Link>

Both redirect to: /campaign/:id (CampaignDetails.jsx)
```

### Running Campaigns Filter
```javascript
// Home.jsx
const runningCampaigns = campaigns.filter(
  c => new Date(c.deadline) > new Date()
);
```

### Deadline Validation
```javascript
// CampaignDetails.jsx
if (new Date(campaign.deadline) < new Date()) {
  toast.error('Campaign deadline has passed!');
  return;
}
```

### Sort Functionality
```javascript
// AllCampaigns.jsx
const sorted = [...campaigns].sort((a, b) => 
  sortAsc ? a.minDonation - b.minDonation : b.minDonation - a.minDonation
);
```

## 📦 Dependencies

### Frontend (package.json)
```json
{
  "dependencies": {
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-router-dom": "^6.x",
    "firebase": "^10.x",
    "axios": "^1.x",
    "react-hot-toast": "^2.x",
    "react-icons": "^5.x",
    "tailwindcss": "^4.1.17",
    "daisyui": "^5.5.5"
  }
}
```

### Backend (package.json)
```json
{
  "dependencies": {
    "express": "^4.18.2",
    "mongodb": "^7.0.0",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1"
  }
}
```

## 🚀 Deployment Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    User's Browser                        │
└────────────────────┬────────────────────────────────────┘
                     │
                     │ HTTPS
                     │
┌────────────────────▼────────────────────────────────────┐
│              Netlify/Firebase Hosting                    │
│              (React Frontend)                            │
│              https://crowdcube-app.netlify.app          │
└────────────────────┬────────────────────────────────────┘
                     │
                     │ API Calls
                     │
┌────────────────────▼────────────────────────────────────┐
│              Vercel Serverless                           │
│              (Express Backend)                           │
│              https://crowdcube-backend.vercel.app       │
└────────────────────┬────────────────────────────────────┘
                     │
                     │ MongoDB Driver
                     │
┌────────────────────▼────────────────────────────────────┐
│              MongoDB Atlas                               │
│              (Cloud Database)                            │
│              • campaigns collection                      │
│              • donations collection                      │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│              Firebase Authentication                     │
│              • Email/Password                            │
│              • Google OAuth                              │
└─────────────────────────────────────────────────────────┘
```

## ✅ Implementation Status

**All Features**: ✅ Complete
**All Requirements**: ✅ Implemented
**Documentation**: ✅ Comprehensive
**Testing**: ⏳ Ready for your testing
**Deployment**: ⏳ Ready to deploy

## 🎉 Summary

Your CrowdCube application is:
- ✅ Fully implemented
- ✅ Well-documented
- ✅ Production-ready
- ✅ Assignment-compliant
- ✅ Ready to deploy

**Next Step**: Follow QUICK_START.md to test locally!
