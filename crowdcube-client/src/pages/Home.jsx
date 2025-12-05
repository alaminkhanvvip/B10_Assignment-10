import { useEffect, useState } from 'react';
import axios from 'axios';
import CampaignCard from '../components/CampaignCard';

const Home = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/data?limit=6')
      .then(res => {
        const runningCampaigns = res.data.filter(c => new Date(c.deadline) > new Date());
        setCampaigns(runningCampaigns.slice(0, 6));
      })
      .catch(err => {
        setError('Failed to load campaigns');
        console.error('Error loading campaigns:', err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="alert alert-error">
          <span>{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[600px] bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white space-y-6">
            <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">Fund Your Dreams</h1>
            <p className="text-xl md:text-2xl text-white/90">Join thousands of creators bringing their ideas to life through community support</p>
            <div className="flex gap-4 pt-4">
              <a href="/add-campaign" className="btn btn-lg bg-white text-purple-600 hover:bg-gray-100 border-0">Start Campaign</a>
              <a href="/campaigns" className="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-purple-600">Explore</a>
            </div>
          </div>
        </div>
      </div>

      {/* Running Campaigns */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Running Campaigns</h2>
            <p className="text-lg text-base-content/70">Support innovative projects making a difference</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaigns.map(campaign => (
              <CampaignCard key={campaign._id} campaign={campaign} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-base-200 to-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-4xl">🎯</div>
              <h3 className="text-2xl font-bold">Create Campaign</h3>
              <p className="text-base-content/70">Share your idea with the world and set your funding goal</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-4xl">💰</div>
              <h3 className="text-2xl font-bold">Get Funded</h3>
              <p className="text-base-content/70">Receive support from backers who believe in your vision</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-4xl">🚀</div>
              <h3 className="text-2xl font-bold">Make It Happen</h3>
              <p className="text-base-content/70">Bring your project to life and make an impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">1,200+</div>
              <div className="text-lg font-semibold mt-2">Total Campaigns</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">$2.5M</div>
              <div className="text-lg font-semibold mt-2">Funds Raised</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">15,000+</div>
              <div className="text-lg font-semibold mt-2">Happy Backers</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
