import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

const CampaignDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5000/data/${id}`)
      .then(res => {
        setCampaign(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  const handleDonate = () => {
    if (new Date(campaign.deadline) < new Date()) {
      toast.error('Campaign deadline has passed!');
      return;
    }

    const donation = {
      campaignId: campaign._id,
      campaignTitle: campaign.title,
      campaignImage: campaign.image,
      minDonation: campaign.minDonation,
      userEmail: user.email,
      userName: user.displayName,
      donatedAt: new Date().toISOString()
    };

    axios.post('http://localhost:5000/donations', donation)
      .then(() => toast.success('Donation successful!'))
      .catch(() => toast.error('Donation failed'));
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
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="lg:w-1/2">
          <img src={campaign.image} alt={campaign.title} className="w-full h-full object-cover" />
        </figure>
        <div className="card-body lg:w-1/2">
          <h2 className="card-title text-3xl">{campaign.title}</h2>
          <div className="badge badge-secondary">{campaign.type}</div>
          <p className="text-lg mt-4">{campaign.description}</p>
          <div className="divider"></div>
          <div className="space-y-2">
            <p><strong>Minimum Donation:</strong> ${campaign.minDonation}</p>
            <p><strong>Deadline:</strong> {new Date(campaign.deadline).toLocaleDateString()}</p>
            <p><strong>Created by:</strong> {campaign.userName}</p>
            <p><strong>Email:</strong> {campaign.userEmail}</p>
          </div>
          <div className="card-actions justify-end mt-6">
            <button onClick={handleDonate} className="btn btn-primary">Donate Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
