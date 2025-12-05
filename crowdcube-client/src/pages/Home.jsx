import { useEffect, useState } from 'react';
import axios from 'axios';
import CampaignCard from '../components/CampaignCard';

const Home = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/data?limit=6')
      .then(res => {
        const runningCampaigns = res.data.filter(c => new Date(c.deadline) > new Date());
        setCampaigns(runningCampaigns.slice(0, 6));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      {/* Banner */}
      <div className="carousel w-full h-96 rounded-lg my-8">
        <div className="carousel-item relative w-full">
          <div className="hero min-h-full bg-gradient-to-r from-purple-500 to-pink-500">
            <div className="hero-content text-center text-white">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">Fund Your Dreams</h1>
                <p className="py-6">Join thousands of creators bringing their ideas to life</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Running Campaigns */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-center mb-8">Running Campaigns</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map(campaign => (
            <CampaignCard key={campaign._id} campaign={campaign} />
          ))}
        </div>
      </section>

      {/* Extra Section 1 */}
      <section className="my-12 bg-base-200 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-6">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="font-bold text-xl">Create Campaign</h3>
            <p>Share your idea with the world</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="font-bold text-xl">Get Funded</h3>
            <p>Receive support from backers</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="font-bold text-xl">Make It Happen</h3>
            <p>Bring your project to life</p>
          </div>
        </div>
      </section>

      {/* Extra Section 2 */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-center mb-6">Success Stories</h2>
        <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
          <div className="stat">
            <div className="stat-title">Total Campaigns</div>
            <div className="stat-value">1,200+</div>
          </div>
          <div className="stat">
            <div className="stat-title">Funds Raised</div>
            <div className="stat-value">$2.5M</div>
          </div>
          <div className="stat">
            <div className="stat-title">Happy Backers</div>
            <div className="stat-value">15,000+</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
