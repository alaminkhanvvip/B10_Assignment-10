# 🚀 Quick Start Guide

## Step 1: Configure Firebase (5 minutes)

1. Go to https://console.firebase.google.com/
2. Click "Add project" or select existing project
3. Go to Authentication > Get Started
4. Enable "Email/Password" sign-in method
5. Enable "Google" sign-in method
6. Go to Project Settings (gear icon) > General
7. Scroll to "Your apps" > Web app
8. Copy the config values

9. Open `crowdcube-client/.env.local` and paste:
```env
VITE_APIKEY=your_api_key_here
VITE_AUTHDOMAIN=your_project_id.firebaseapp.com
VITE_PROJECTID=your_project_id
VITE_STORAGEBUCKET=your_project_id.appspot.com
VITE_MESSAGINGSENDERID=your_sender_id
VITE_APPID=your_app_id
```

## Step 2: Start Backend (1 minute)

Open Terminal 1:
```bash
cd crowdcube-backend
npm run dev
```

You should see:
```
✅ You successfully connected to MongoDB!
🚀 Server is running on port 5000
```

## Step 3: Start Frontend (1 minute)

Open Terminal 2:
```bash
cd crowdcube-client
npm run dev
```

You should see:
```
VITE ready in XXX ms
Local: http://localhost:5173/
```

## Step 4: Test the Application

1. Open http://localhost:5173/ in your browser
2. Click "Register" and create an account
3. You should be redirected to home page
4. Try adding a campaign (Add New Campaign)
5. View it in "My Campaign"
6. Test the "See More" button

## 🎯 Quick Test Checklist

- [ ] Home page loads
- [ ] Can register new user
- [ ] Can login
- [ ] Can add campaign
- [ ] "See More" redirects to details
- [ ] Can donate to campaign
- [ ] Can view my campaigns
- [ ] Can update campaign
- [ ] Can delete campaign
- [ ] Can view my donations

## 🐛 Troubleshooting

### Backend won't start
- Check MongoDB connection string in `.env.local`
- Make sure port 5000 is not in use

### Frontend won't start
- Check Firebase config in `.env.local`
- Make sure port 5173 is not in use
- Run `npm install` if packages are missing

### Can't login
- Check Firebase Authentication is enabled
- Check console for errors
- Verify Firebase config is correct

### API calls fail
- Make sure backend is running on port 5000
- Check browser console for CORS errors
- Verify API URLs in frontend code

### No campaigns showing
- Add sample data to MongoDB
- Check MongoDB connection
- Check browser console for errors

## 📝 Adding Sample Data

Option 1: Use MongoDB Compass
1. Open MongoDB Compass
2. Connect to your cluster
3. Select `crowdcube` database
4. Import `sample-data.json` to `campaigns` collection

Option 2: Use the App
1. Register/Login
2. Go to "Add New Campaign"
3. Fill the form and submit
4. Repeat to add more campaigns

## 🎨 Customization Tips

### Change Colors
Edit `crowdcube-client/src/index.css` - DaisyUI themes

### Change Logo
Edit `crowdcube-client/src/components/Navbar.jsx` - line with "CrowdCube"

### Change Banner
Edit `crowdcube-client/src/pages/Home.jsx` - carousel section

### Add More Campaign Types
Edit dropdown in `AddCampaign.jsx` and `UpdateCampaign.jsx`

## 🚀 Next Steps

1. ✅ Test all features locally
2. ✅ Commit to GitHub (15+ commits client, 8+ server)
3. ✅ Deploy backend to Vercel
4. ✅ Update API URLs in frontend
5. ✅ Deploy frontend to Netlify/Firebase
6. ✅ Add deployment domain to Firebase
7. ✅ Test live site
8. ✅ Submit assignment

## 💡 Pro Tips

- Use meaningful commit messages
- Test on mobile before deploying
- Check console for errors regularly
- Keep both terminals running while developing
- Use React DevTools for debugging
- Test private routes by logging out

## 🎉 You're All Set!

Your CrowdCube application is ready to go. Happy coding! 🚀
