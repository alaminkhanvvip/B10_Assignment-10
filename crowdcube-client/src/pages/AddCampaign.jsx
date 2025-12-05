import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import toast from 'react-hot-toast';
import { FiImage, FiType, FiTag, FiFileText, FiDollarSign, FiCalendar, FiMail, FiUser, FiPlus } from 'react-icons/fi';

const AddCampaign = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    image: '',
    title: '',
    type: 'personal issue',
    description: '',
    minDonation: '',
    deadline: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const campaign = {
      ...formData,
      minDonation: parseFloat(formData.minDonation),
      userEmail: user.email,
      userName: user.displayName,
      createdAt: new Date().toISOString()
    };

    axios.post(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/add-campaign`, campaign)
      .then(() => {
        toast.success('Campaign added successfully!');
        navigate('/my-campaign');
      })
      .catch(() => toast.error('Failed to add campaign'));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Create Campaign
          </h1>
          <p className="text-base-content/60 text-lg">Share your story and start raising funds</p>
        </div>

        {/* Form Card */}
        <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Image URL */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base flex items-center gap-2">
                  <FiImage className="text-purple-600" /> Image URL
                </span>
              </label>
              <input 
                type="url" 
                value={formData.image} 
                onChange={(e) => setFormData({...formData, image: e.target.value})} 
                className="input input-bordered input-lg rounded-xl w-full" 
                placeholder="https://example.com/image.jpg"
                required 
              />
            </div>

            {/* Title & Type Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-base flex items-center gap-2">
                    <FiType className="text-purple-600" /> Campaign Title
                  </span>
                </label>
                <input 
                  type="text" 
                  value={formData.title} 
                  onChange={(e) => setFormData({...formData, title: e.target.value})} 
                  className="input input-bordered input-lg rounded-xl" 
                  placeholder="Enter campaign title"
                  required 
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-base flex items-center gap-2">
                    <FiTag className="text-purple-600" /> Campaign Type
                  </span>
                </label>
                <select 
                  value={formData.type} 
                  onChange={(e) => setFormData({...formData, type: e.target.value})} 
                  className="select select-bordered select-lg rounded-xl"
                >
                  <option>personal issue</option>
                  <option>startup</option>
                  <option>business</option>
                  <option>creative ideas</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base flex items-center gap-2">
                  <FiFileText className="text-purple-600" /> Description
                </span>
              </label>
              <textarea 
                value={formData.description} 
                onChange={(e) => setFormData({...formData, description: e.target.value})} 
                className="textarea textarea-bordered textarea-lg rounded-xl h-32 w-full" 
                placeholder="Tell your story..."
                required
              ></textarea>
            </div>

            {/* Min Donation & Deadline Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-base flex items-center gap-2">
                    <FiDollarSign className="text-purple-600" /> Minimum Donation
                  </span>
                </label>
                <input 
                  type="number" 
                  value={formData.minDonation} 
                  onChange={(e) => setFormData({...formData, minDonation: e.target.value})} 
                  className="input input-bordered input-lg rounded-xl" 
                  placeholder="100"
                  min="1"
                  required 
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-base flex items-center gap-2">
                    <FiCalendar className="text-purple-600" /> Deadline
                  </span>
                </label>
                <input 
                  type="date" 
                  value={formData.deadline} 
                  onChange={(e) => setFormData({...formData, deadline: e.target.value})} 
                  className="input input-bordered input-lg rounded-xl" 
                  min={new Date().toISOString().split('T')[0]}
                  required 
                />
              </div>
            </div>

            {/* User Info Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-base flex items-center gap-2">
                    <FiMail className="text-purple-600" /> Your Email
                  </span>
                </label>
                <input 
                  type="email" 
                  value={user?.email} 
                  className="input input-bordered input-lg rounded-xl bg-base-200" 
                  readOnly 
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-base flex items-center gap-2">
                    <FiUser className="text-purple-600" /> Your Name
                  </span>
                </label>
                <input 
                  type="text" 
                  value={user?.displayName} 
                  className="input input-bordered input-lg rounded-xl bg-base-200" 
                  readOnly 
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button 
                type="submit" 
                className="btn btn-primary btn-lg w-full rounded-xl text-lg gap-3 shadow-lg hover:shadow-xl transition-all"
              >
                <FiPlus className="text-xl" /> Create Campaign
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCampaign;
