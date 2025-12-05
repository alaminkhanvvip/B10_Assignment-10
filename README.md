# 🎯 CrowdCube - Complete Crowdfunding Platform

> **📚 [VIEW COMPLETE DOCUMENTATION INDEX](INDEX.md)** - Navigate all documentation easily

> **🚀 [START HERE](START_HERE.md)** - Begin your journey in 3 steps

---

## 📚 Quick Documentation Links

- **[QUICK_START.md](QUICK_START.md)** - Get up and running in 5 minutes
- **[SETUP.md](SETUP.md)** - Detailed setup instructions
- **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** - Complete feature list and implementation details
- **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** - Step-by-step deployment to Vercel and Netlify
- **[FINAL_CHECKLIST.md](FINAL_CHECKLIST.md)** - Pre-submission checklist
- **[API_REFERENCE.md](crowdcube-backend/API_REFERENCE.md)** - Backend API documentation

## 🚀 Quick Start

### 1. Configure Firebase
Update `crowdcube-client/.env.local` with your Firebase credentials

### 2. Start Backend
```bash
cd crowdcube-backend
npm run dev
```

### 3. Start Frontend
```bash
cd crowdcube-client
npm run dev
```

### 4. Open Browser
Navigate to `http://localhost:5173`

## ✨ Key Features Implemented

✅ **See More Button** - Redirects to campaign details page (Requirements 6 & 12)
✅ **Running Campaigns** - Filters campaigns by deadline
✅ **Deadline Validation** - Prevents donations to expired campaigns
✅ **Sort Functionality** - Sort campaigns by donation amount
✅ **Private Routes** - Protected pages with authentication
✅ **CRUD Operations** - Full campaign management
✅ **Donation System** - Track user donations
✅ **Responsive Design** - Mobile, tablet, desktop support
✅ **Toast Notifications** - User-friendly feedback
✅ **Loading States** - Spinner for async operations

## 📁 Project Structure

```
CrowdcubeV01/
├── crowdcube-client/          # React Frontend
│   ├── src/
│   │   ├── components/        # Reusable components
│   │   ├── context/           # Auth context
│   │   ├── pages/             # All page components
│   │   ├── routes/            # Private route wrapper
│   │   └── utils/             # API utilities
│   └── .env.local             # Firebase config
└── crowdcube-backend/         # Express Backend
    ├── index.js               # Main server file
    ├── sample-data.json       # Sample campaigns
    └── .env.local             # MongoDB config
```

## 🛠️ Technologies

### Frontend
- React 19
- React Router DOM
- Firebase Authentication
- Tailwind CSS + DaisyUI
- Axios
- React Hot Toast
- React Icons

### Backend
- Node.js + Express
- MongoDB
- CORS
- Dotenv

## 📝 Assignment Requirements Status

### Main Requirements (All ✅)
1. ✅ Navbar with conditional rendering
2. ✅ Footer on all pages except 404
3. ✅ Home page with banner + running campaigns + 2 extra sections
4. ✅ Login with email/password + Google
5. ✅ Register with password validation
6. ✅ Add Campaign (private route)
7. ✅ Campaign Details (private) with donate button
8. ✅ All Campaigns with table and See More button
9. ✅ My Campaign (private) with update/delete
10. ✅ Update Campaign (private)
11. ✅ My Donations (private) with card layout
12. ✅ 404 page without navbar/footer
13. ✅ Loading spinner
14. ✅ Toast notifications
15. ✅ Environment variables
16. ✅ Responsive design
17. ✅ Private route protection

### Updated Requirements (All ✅)
- ✅ Requirement 6: See More button redirects to details page
- ✅ Requirement 12: See More in All Campaigns redirects to details
- ✅ Deadline validation on donation
- ✅ Sort by minimum donation amount

## 🎯 Next Steps

1. **Configure Firebase** - Add your credentials to `.env.local`
2. **Test Locally** - Follow QUICK_START.md
3. **Make Commits** - 15+ client, 8+ server
4. **Deploy** - Follow DEPLOYMENT_GUIDE.md
5. **Submit** - Client repo, server repo, live URL

## 📞 Support

If you encounter any issues:
1. Check QUICK_START.md for common problems
2. Verify environment variables are set correctly
3. Ensure both backend and frontend are running
4. Check browser console for errors

## 🎉 Ready to Go!

Your complete CrowdCube application is set up and ready. Follow the QUICK_START.md guide to begin testing!

---

**Assignment Category**: Tulip
**Project**: CrowdCube - Crowdfunding Platform
**Status**: ✅ Complete and Ready for Deployment
