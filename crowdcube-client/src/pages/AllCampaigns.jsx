import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
        <div className="bg-base-100 rounded-3xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table">
              <thead className="bg-gradient-to-r from-purple-500/10 to-pink-500/10">
                <tr>
                  <th className="text-base font-bold">Title</th>
                  <th className="text-base font-bold">Type</th>
                  <th className="text-base font-bold">Min Donation</th>
                  <th className="text-base font-bold">Deadline</th>
                  <th className="text-base font-bold">Action</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map(campaign => (
                  <tr key={campaign._id} className="hover:bg-base-200/50 transition-colors">
                    <td className="font-semibold">{campaign.title}</td>
                    <td><span className="badge badge-lg bg-purple-500/20 text-purple-700 border-0">{campaign.type}</span></td>
                    <td className="text-lg font-bold text-purple-600">${campaign.minDonation}</td>
                    <td>{new Date(campaign.deadline).toLocaleDateString()}</td>
                    <td>
                      <Link to={`/campaign/${campaign._id}`} className="btn btn-sm btn-primary rounded-xl">View Details</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCampaigns;
