import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import toast from 'react-hot-toast';

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

    axios.post('http://localhost:5000/add-campaign', campaign)
      .then(() => {
        toast.success('Campaign added successfully!');
        navigate('/my-campaign');
      })
      .catch(() => toast.error('Failed to add campaign'));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="card bg-base-100 shadow-xl max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="card-body">
          <h2 className="card-title text-2xl mb-4">Add New Campaign</h2>
          
          <div className="form-control">
            <label className="label"><span className="label-text">Image URL</span></label>
            <input type="url" value={formData.image} onChange={(e) => setFormData({...formData, image: e.target.value})} className="input input-bordered" required />
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text">Campaign Title</span></label>
            <input type="text" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} className="input input-bordered" required />
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text">Campaign Type</span></label>
            <select value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})} className="select select-bordered">
              <option>personal issue</option>
              <option>startup</option>
              <option>business</option>
              <option>creative ideas</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text">Description</span></label>
            <textarea value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} className="textarea textarea-bordered h-24" required></textarea>
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text">Minimum Donation Amount</span></label>
            <input type="number" value={formData.minDonation} onChange={(e) => setFormData({...formData, minDonation: e.target.value})} className="input input-bordered" required />
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text">Deadline</span></label>
            <input type="date" value={formData.deadline} onChange={(e) => setFormData({...formData, deadline: e.target.value})} className="input input-bordered" required />
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text">User Email</span></label>
            <input type="email" value={user?.email} className="input input-bordered" readOnly />
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text">User Name</span></label>
            <input type="text" value={user?.displayName} className="input input-bordered" readOnly />
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">Add Campaign</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCampaign;
