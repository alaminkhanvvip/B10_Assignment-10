import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import toast from 'react-hot-toast';

const MyCampaign = () => {
  const { user } = useContext(AuthContext);
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5000/my-campaigns?email=${user.email}`)
      .then(res => {
        setCampaigns(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [user.email]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this campaign?')) {
      axios.delete(`http://localhost:5000/delete-campaign/${id}`)
        .then(() => {
          toast.success('Campaign deleted successfully!');
          setCampaigns(campaigns.filter(c => c._id !== id));
        })
        .catch(() => toast.error('Failed to delete campaign'));
    }
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
      <h2 className="text-3xl font-bold mb-6">My Campaigns</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Title</th>
              <th>Type</th>
              <th>Min Donation</th>
              <th>Deadline</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map(campaign => (
              <tr key={campaign._id}>
                <td>{campaign.title}</td>
                <td><span className="badge">{campaign.type}</span></td>
                <td>${campaign.minDonation}</td>
                <td>{new Date(campaign.deadline).toLocaleDateString()}</td>
                <td className="space-x-2">
                  <Link to={`/update-campaign/${campaign._id}`} className="btn btn-sm btn-warning">Update</Link>
                  <button onClick={() => handleDelete(campaign._id)} className="btn btn-sm btn-error">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCampaign;
