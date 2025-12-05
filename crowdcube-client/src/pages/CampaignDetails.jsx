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
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-base-100 rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="relative h-96 lg:h-auto">
              <img src={campaign.image} alt={campaign.title} className="w-full h-full object-cover" />
              <div className="absolute top-6 left-6">
                <span className="badge badge-lg bg-white/90 text-purple-600 border-0 font-semibold">{campaign.type}</span>
              </div>
            </div>
            <div className="p-8 lg:p-12 space-y-6">
              <h2 className="text-4xl font-bold">{campaign.title}</h2>
              <p className="text-lg text-base-content/80 leading-relaxed">{campaign.description}</p>
              <div className="grid grid-cols-2 gap-4 py-6">
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-2xl">
                  <p className="text-sm text-base-content/60 mb-1">Minimum Donation</p>
                  <p className="text-3xl font-bold text-purple-600">${campaign.minDonation}</p>
                </div>
                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6 rounded-2xl">
                  <p className="text-sm text-base-content/60 mb-1">Deadline</p>
                  <p className="text-lg font-semibold">{new Date(campaign.deadline).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="space-y-3 pt-4 border-t border-base-300">
                <p className="flex items-center gap-2"><span className="font-semibold">Created by:</span> {campaign.userName}</p>
                <p className="flex items-center gap-2"><span className="font-semibold">Email:</span> {campaign.userEmail}</p>
              </div>
              <button onClick={handleDonate} className="btn btn-primary btn-lg w-full rounded-xl mt-6">Donate Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
