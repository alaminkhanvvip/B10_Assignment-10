import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './context/AuthContext';
import PrivateRoute from './routes/PrivateRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AllCampaigns from './pages/AllCampaigns';
import CampaignDetails from './pages/CampaignDetails';
import AddCampaign from './pages/AddCampaign';
import MyCampaign from './pages/MyCampaign';
import UpdateCampaign from './pages/UpdateCampaign';
import MyDonations from './pages/MyDonations';
import NotFound from './pages/NotFound';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
          <Route path="/login" element={<><Navbar /><Login /><Footer /></>} />
          <Route path="/register" element={<><Navbar /><Register /><Footer /></>} />
          <Route path="/campaigns" element={<><Navbar /><AllCampaigns /><Footer /></>} />
          <Route path="/campaign/:id" element={<PrivateRoute><Navbar /><CampaignDetails /><Footer /></PrivateRoute>} />
          <Route path="/add-campaign" element={<PrivateRoute><Navbar /><AddCampaign /><Footer /></PrivateRoute>} />
          <Route path="/my-campaign" element={<PrivateRoute><Navbar /><MyCampaign /><Footer /></PrivateRoute>} />
          <Route path="/update-campaign/:id" element={<PrivateRoute><Navbar /><UpdateCampaign /><Footer /></PrivateRoute>} />
          <Route path="/my-donations" element={<PrivateRoute><Navbar /><MyDonations /><Footer /></PrivateRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
