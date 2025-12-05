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
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">My Donations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {donations.map(donation => (
            <div key={donation._id} className="group bg-base-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img src={donation.campaignImage} alt={donation.campaignTitle} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 space-y-3">
                <h2 className="text-xl font-bold line-clamp-2">{donation.campaignTitle}</h2>
                <div className="flex items-center justify-between pt-3 border-t border-base-300">
                  <div>
                    <p className="text-xs text-base-content/60">Amount</p>
                    <p className="text-2xl font-bold text-green-600">${donation.minDonation}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-base-content/60">Donated on</p>
                    <p className="text-sm font-semibold">{new Date(donation.donatedAt).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyDonations;
