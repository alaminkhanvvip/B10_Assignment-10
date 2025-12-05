import { useEffect, useState } from 'react';
import axios from 'axios';
import CampaignCard from '../components/CampaignCard';

const Home = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [stats, setStats] = useState({ totalCampaigns: 0, fundsRaised: 0, happyBackers: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:5000/data'),
      axios.get('http://localhost:5000/donations')
    ])
      .then(([campaignsRes, donationsRes]) => {
        const allCampaigns = campaignsRes.data;
        const allDonations = donationsRes.data;
        
        const runningCampaigns = allCampaigns.filter(c => new Date(c.deadline) > new Date());
        setCampaigns(runningCampaigns.slice(0, 4));
        
        const totalFunds = allDonations.reduce((sum, d) => sum + (d.minDonation || 0), 0);
        setStats({
          totalCampaigns: allCampaigns.length,
          fundsRaised: totalFunds,
          happyBackers: allDonations.length
        });
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
      {/* Hero Carousel */}
      <div className="carousel w-full h-[600px]">
        {campaigns.slice(0, 4).map((campaign, index) => (
          <div key={campaign._id} id={`slide${index + 1}`} className="carousel-item relative w-full">
            <img 
              src={campaign.image} 
              alt={campaign.title}
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center text-white space-y-6 px-4 max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                  Fund Your Dreams
                </h1>
                <p className="text-xl md:text-2xl">
                  Join thousands of creators bringing their ideas to life through community support
                </p>
                <div className="flex gap-4 pt-4 justify-center">
                  <a href="/add-campaign" className="btn btn-lg btn-primary rounded-xl shadow-lg">Start Campaign</a>
                  <a href="/campaigns" className="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-purple-600 rounded-xl">Explore</a>
                </div>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href={`#slide${index === 0 ? campaigns.slice(0, 4).length : index}`} className="btn btn-circle">❮</a>
              <a href={`#slide${index === campaigns.slice(0, 4).length - 1 ? 1 : index + 2}`} className="btn btn-circle">❯</a>
            </div>
          </div>
        ))}
      </div>

      {/* Running Campaigns */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Running Campaigns</h2>
            <p className="text-lg text-base-content/70">Support innovative projects making a difference</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {campaigns.map(campaign => (
              <CampaignCard key={campaign._id} campaign={campaign} />
            ))}
          </div>
          <div className="text-center">
            <a href="/campaigns" className="btn btn-primary btn-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
              See More Campaigns
            </a>
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
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{stats.totalCampaigns}</div>
              <div className="text-lg font-semibold mt-2">Total Campaigns</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">${stats.fundsRaised.toLocaleString()}</div>
              <div className="text-lg font-semibold mt-2">Funds Raised</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">{stats.happyBackers}</div>
              <div className="text-lg font-semibold mt-2">Happy Backers</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
