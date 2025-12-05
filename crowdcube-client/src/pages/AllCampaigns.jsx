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
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">All Campaigns</h2>
        <button onClick={handleSort} className="btn btn-primary">
          Sort by Amount {sortAsc ? '↑' : '↓'}
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Title</th>
              <th>Type</th>
              <th>Min Donation</th>
              <th>Deadline</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map(campaign => (
              <tr key={campaign._id}>
                <td>{campaign.title}</td>
                <td><span className="badge">{campaign.type}</span></td>
                <td>${campaign.minDonation}</td>
                <td>{new Date(campaign.deadline).toLocaleDateString()}</td>
                <td>
                  <Link to={`/campaign/${campaign._id}`} className="btn btn-sm btn-primary">See More</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCampaigns;
