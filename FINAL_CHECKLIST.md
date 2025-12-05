# CrowdCube - Final Checklist Before Submission

## 🔧 Configuration (MUST DO FIRST!)

### Firebase Setup
- [ ] Create Firebase project at https://console.firebase.google.com/
- [ ] Enable Authentication > Email/Password
- [ ] Enable Authentication > Google Sign-in
- [ ] Copy Firebase config to `crowdcube-client/.env.local`:
  ```
  VITE_APIKEY=
  VITE_AUTHDOMAIN=
  VITE_PROJECTID=
  VITE_STORAGEBUCKET=
  VITE_MESSAGINGSENDERID=
  VITE_APPID=
  ```

### MongoDB Setup
- [ ] Verify MongoDB connection string in `crowdcube-backend/.env.local`
- [ ] Import sample data to `campaigns` collection (optional)
- [ ] Ensure `campaigns` and `donations` collections exist

## 🧪 Testing

### Authentication
- [ ] Register new user works
- [ ] Login with email/password works
- [ ] Google login works
- [ ] Logout works
- [ ] User photo and name display in navbar
- [ ] User state persists on page reload

### Home Page
- [ ] Banner/slider displays
- [ ] Shows 6 running campaigns (deadline not passed)
- [ ] "See More" button redirects to details page ✅
- [ ] Two extra sections display
- [ ] Responsive on mobile/tablet/desktop

### All Campaigns Page
- [ ] Shows all campaigns in table format
- [ ] Sort button works (ascending/descending)
- [ ] "See More" button redirects to details page ✅
- [ ] Responsive table

### Campaign Details Page (Private)
- [ ] Redirects to login if not authenticated
- [ ] Shows all campaign information
- [ ] Donate button works
- [ ] Shows error/toast if deadline passed ✅
- [ ] Donation saved to database

### Add Campaign Page (Private)
- [ ] Redirects to login if not authenticated
- [ ] Form validation works
- [ ] User email/name are read-only
- [ ] Campaign saved to database
- [ ] Success toast shows
- [ ] Redirects after submission

### My Campaign Page (Private)
- [ ] Shows only user's campaigns
- [ ] Update button works
- [ ] Delete button shows confirmation
- [ ] Delete removes campaign
- [ ] Table displays correctly

### Update Campaign Page (Private)
- [ ] Form pre-fills with existing data
- [ ] User email/name are read-only
- [ ] Update saves to database
- [ ] Success toast shows
- [ ] Redirects after update

### My Donations Page (Private)
- [ ] Shows only user's donations
- [ ] Card layout displays correctly
- [ ] Shows donation details

### 404 Page
- [ ] Shows for invalid routes
- [ ] No navbar/footer (as per requirements)
- [ ] "Go Home" button works

## 📱 Responsiveness
- [ ] Mobile view (< 768px)
- [ ] Tablet view (768px - 1024px)
- [ ] Desktop view (> 1024px)
- [ ] Navbar collapses on mobile
- [ ] All forms are usable on mobile

## 🔒 Security
- [ ] `.env.local` files in `.gitignore`
- [ ] No credentials in code
- [ ] Private routes protected
- [ ] Firebase config uses environment variables
- [ ] MongoDB URI uses environment variables

## 📝 Documentation
- [ ] README.md has 5+ bullet points
- [ ] README.md has website name
- [ ] README.md has live site URL (add after deployment)
- [ ] Code is clean and commented where needed

## 🚀 Deployment Preparation

### Backend (Vercel)
- [ ] `vercel.json` exists
- [ ] Environment variables set in Vercel dashboard
- [ ] Test deployed API endpoints
- [ ] Note deployed URL

### Frontend (Netlify/Firebase)
- [ ] Update API URLs to production backend URL
- [ ] Build succeeds (`npm run build`)
- [ ] Test deployed site
- [ ] Add deployment domain to Firebase authorized domains

## 📊 GitHub Requirements

### Client Repository
- [ ] Minimum 15 commits
- [ ] Meaningful commit messages
- [ ] `.gitignore` includes `.env.local`
- [ ] README.md complete

### Server Repository
- [ ] Minimum 8 commits
- [ ] Meaningful commit messages
- [ ] `.gitignore` includes `.env.local`

## ✨ Optional Challenges (Bonus Points)
- [ ] Dark/Light theme toggle
- [ ] Lottie React animations
- [ ] React-simple-typewriter
- [ ] React Awesome Reveal
- [ ] React-tooltip

## 📋 Submission Checklist
- [ ] Client-side GitHub repository URL
- [ ] Server-side GitHub repository URL
- [ ] Live website URL
- [ ] All features working on live site
- [ ] No console errors on live site
- [ ] Firebase domain authorized

## 🎯 Key Requirements Verification

### Main Requirements
1. ✅ Navbar with conditional rendering
2. ✅ Footer on all pages except 404
3. ✅ Home page with banner + running campaigns + 2 extra sections
4. ✅ Login page with email/password + Google
5. ✅ Register page with password validation
6. ✅ Add Campaign page (private)
7. ✅ Campaign Details page (private) with donate button
8. ✅ All Campaigns page with table and See More button
9. ✅ My Campaign page (private) with update/delete
10. ✅ Update Campaign page (private)
11. ✅ My Donations page (private) with card layout
12. ✅ 404 page
13. ✅ Loading spinner
14. ✅ Toast notifications (no default alerts)
15. ✅ Environment variables for Firebase & MongoDB
16. ✅ Responsive design
17. ✅ Private routes redirect to login

### Updated Requirements
- ✅ Requirement 6: "See More" button redirects to details page
- ✅ Requirement 12: "See More" button in All Campaigns redirects to details page
- ✅ Deadline validation on donation
- ✅ Sort by minimum donation amount

## 🎉 Ready to Submit!

Once all items are checked, your project is ready for submission!

**Important Notes:**
1. Test everything on the live site before submitting
2. Make sure Firebase authorized domains includes your deployment URL
3. Verify all API calls work with production backend
4. Check that all images load correctly
5. Test on different browsers (Chrome, Firefox, Safari)
