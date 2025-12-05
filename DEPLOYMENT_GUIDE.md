# 🚀 Deployment Guide

## Backend Deployment (Vercel)

### Step 1: Prepare Backend
```bash
cd crowdcube-backend
```

### Step 2: Install Vercel CLI (if not installed)
```bash
npm install -g vercel
```

### Step 3: Deploy
```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- Project name? **crowdcube-backend**
- Directory? **./crowdcube-backend**
- Override settings? **N**

### Step 4: Add Environment Variables
```bash
vercel env add MONGODB_URI
```
Paste your MongoDB connection string

### Step 5: Redeploy with Environment Variables
```bash
vercel --prod
```

### Step 6: Note Your Backend URL
Example: `https://crowdcube-backend.vercel.app`

---

## Frontend Deployment (Netlify)

### Step 1: Update API URLs
Open each file and replace `http://localhost:5000` with your Vercel backend URL:

Files to update:
- `src/pages/Home.jsx`
- `src/pages/AllCampaigns.jsx`
- `src/pages/CampaignDetails.jsx`
- `src/pages/AddCampaign.jsx`
- `src/pages/MyCampaign.jsx`
- `src/pages/UpdateCampaign.jsx`
- `src/pages/MyDonations.jsx`

Example:
```javascript
// Before
axios.get('http://localhost:5000/data')

// After
axios.get('https://crowdcube-backend.vercel.app/data')
```

### Step 2: Build the Project
```bash
cd crowdcube-client
npm run build
```

### Step 3: Deploy to Netlify

#### Option A: Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

#### Option B: Netlify Dashboard
1. Go to https://app.netlify.com/
2. Click "Add new site" > "Deploy manually"
3. Drag and drop the `dist` folder
4. Wait for deployment

### Step 4: Add Environment Variables in Netlify
1. Go to Site settings > Environment variables
2. Add all Firebase config variables:
   - `VITE_APIKEY`
   - `VITE_AUTHDOMAIN`
   - `VITE_PROJECTID`
   - `VITE_STORAGEBUCKET`
   - `VITE_MESSAGINGSENDERID`
   - `VITE_APPID`

### Step 5: Redeploy
If using dashboard: Trigger a new deploy
If using CLI: Run `netlify deploy --prod` again

### Step 6: Note Your Frontend URL
Example: `https://crowdcube-app.netlify.app`

---

## Alternative: Frontend Deployment (Firebase Hosting)

### Step 1: Install Firebase CLI
```bash
npm install -g firebase-tools
```

### Step 2: Login to Firebase
```bash
firebase login
```

### Step 3: Initialize Firebase Hosting
```bash
cd crowdcube-client
firebase init hosting
```

Select:
- Use existing project
- Public directory: **dist**
- Single-page app: **Yes**
- Automatic builds: **No**

### Step 4: Build and Deploy
```bash
npm run build
firebase deploy --only hosting
```

---

## Post-Deployment Configuration

### 1. Update Firebase Authorized Domains
1. Go to Firebase Console
2. Authentication > Settings > Authorized domains
3. Add your Netlify/Firebase Hosting domain
4. Example: `crowdcube-app.netlify.app`

### 2. Update Backend CORS (if needed)
If you get CORS errors, update `crowdcube-backend/index.js`:

```javascript
app.use(cors({
  origin: ['https://crowdcube-app.netlify.app', 'http://localhost:5173'],
  credentials: true
}));
```

Redeploy backend:
```bash
vercel --prod
```

### 3. Test Everything
- [ ] Home page loads
- [ ] Can register/login
- [ ] Can add campaign
- [ ] Can view campaigns
- [ ] Can donate
- [ ] Can update/delete own campaigns
- [ ] All images load
- [ ] No console errors

---

## GitHub Setup

### Create Two Repositories

#### Client Repository
```bash
cd crowdcube-client
git init
git add .
git commit -m "Initial commit: CrowdCube client setup"
git branch -M main
git remote add origin YOUR_CLIENT_REPO_URL
git push -u origin main
```

Make 15+ commits with meaningful messages:
```bash
git add .
git commit -m "feat: add authentication with Firebase"
git push

git add .
git commit -m "feat: implement campaign listing page"
git push

git add .
git commit -m "feat: add campaign details with donate functionality"
git push

# Continue with more commits...
```

#### Server Repository
```bash
cd crowdcube-backend
git init
git add .
git commit -m "Initial commit: CrowdCube backend setup"
git branch -M main
git remote add origin YOUR_SERVER_REPO_URL
git push -u origin main
```

Make 8+ commits with meaningful messages:
```bash
git add .
git commit -m "feat: setup Express server with MongoDB"
git push

git add .
git commit -m "feat: add campaign CRUD endpoints"
git push

git add .
git commit -m "feat: implement donation system"
git push

# Continue with more commits...
```

---

## Commit Message Examples

### Client Commits
1. "Initial commit: Project setup with Vite and React"
2. "feat: add Firebase authentication configuration"
3. "feat: implement AuthContext for state management"
4. "feat: create Navbar with conditional rendering"
5. "feat: build Home page with banner and campaigns"
6. "feat: add CampaignCard component with See More button"
7. "feat: implement Login and Register pages"
8. "feat: create Campaign Details page with donate feature"
9. "feat: add All Campaigns page with sort functionality"
10. "feat: implement Add Campaign form"
11. "feat: create My Campaign page with update/delete"
12. "feat: add Update Campaign functionality"
13. "feat: implement My Donations page"
14. "feat: create 404 Not Found page"
15. "style: add responsive design for mobile devices"
16. "fix: implement deadline validation on donation"
17. "docs: update README with project information"

### Server Commits
1. "Initial commit: Express server setup"
2. "feat: configure MongoDB connection"
3. "feat: add campaign CRUD endpoints"
4. "feat: implement get campaigns with limit"
5. "feat: add user-specific campaign endpoints"
6. "feat: create donation system endpoints"
7. "feat: add environment variables support"
8. "feat: implement health check endpoints"
9. "fix: update error handling for all routes"
10. "docs: add API documentation"

---

## Final Checklist

- [ ] Backend deployed to Vercel
- [ ] Frontend deployed to Netlify/Firebase
- [ ] Environment variables configured
- [ ] Firebase authorized domains updated
- [ ] All features working on live site
- [ ] No console errors
- [ ] Responsive on mobile
- [ ] Client repo has 15+ commits
- [ ] Server repo has 8+ commits
- [ ] README.md updated with live URL

---

## Submission URLs

After deployment, you'll submit:

1. **Client GitHub Repository**: `https://github.com/yourusername/crowdcube-client`
2. **Server GitHub Repository**: `https://github.com/yourusername/crowdcube-backend`
3. **Live Website**: `https://crowdcube-app.netlify.app`

---

## 🎉 Congratulations!

Your CrowdCube application is now live and ready for submission! 🚀
