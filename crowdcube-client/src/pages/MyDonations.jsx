import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const MyDonations = () => {
  const { user } = useContext(AuthContext);
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5000/my-donations?email=${user.email}`)
      .then(res => {
        setDonations(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [user.email]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">My Donations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {donations.map(donation => (
          <div key={donation._id} className="card bg-base-100 shadow-xl">
            <figure>
              <img src={donation.campaignImage} alt={donation.campaignTitle} className="h-48 w-full object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{donation.campaignTitle}</h2>
              <p><strong>Amount:</strong> ${donation.minDonation}</p>
              <p><strong>Donated on:</strong> {new Date(donation.donatedAt).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyDonations;
