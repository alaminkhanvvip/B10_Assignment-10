import { useEffect, useState } from 'react';
import axios from 'axios';
import CampaignCard from '../components/CampaignCard';

const AllCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/data')
      .then(res => {
        setCampaigns(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleSort = () => {
    const sorted = [...campaigns].sort((a, b) => 
      sortAsc ? a.minDonation - b.minDonation : b.minDonation - a.minDonation
    );
    setCampaigns(sorted);
    setSortAsc(!sortAsc);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <h2 className="text-4xl md:text-5xl font-bold">All Campaigns</h2>
          <button onClick={handleSort} className="btn btn-primary rounded-xl gap-2">
            Sort by Amount {sortAsc ? '↑' : '↓'}
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map(campaign => (
            <CampaignCard key={campaign._id} campaign={campaign} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCampaigns;
