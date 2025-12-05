import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [formData, setFormData] = useState({ name: '', email: '', photo: '', password: '' });
  const navigate = useNavigate();

  const validatePassword = (password) => {
    if (password.length < 6) return 'Password must be at least 6 characters';
    if (!/[A-Z]/.test(password)) return 'Password must have an uppercase letter';
    if (!/[a-z]/.test(password)) return 'Password must have a lowercase letter';
    return null;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const error = validatePassword(formData.password);
    if (error) {
      toast.error(error);
      return;
    }

    createUser(formData.email, formData.password)
      .then(() => {
        updateUserProfile(formData.name, formData.photo)
          .then(() => {
            toast.success('Registration successful!');
            navigate('/');
          });
      })
      .catch(() => toast.error('Registration failed'));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="card w-full max-w-lg bg-base-100/95 backdrop-blur-xl shadow-2xl rounded-3xl border border-white/20">
        <form onSubmit={handleRegister} className="card-body p-10 md:p-12 space-y-8">
          <div className="text-center space-y-2">
            <div className="text-5xl mb-4">🚀</div>
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Create Account</h2>
            <p className="text-base-content/60">Join CrowdCube and start your journey</p>
          </div>
          
          <div className="space-y-5">
            <div className="form-control">
              <label className="label"><span className="label-text font-semibold text-base">Full Name</span></label>
              <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="input input-bordered input-lg rounded-xl w-full focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200" placeholder="John Doe" required />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text font-semibold text-base">Email Address</span></label>
              <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="input input-bordered input-lg rounded-xl w-full focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200" placeholder="you@example.com" required />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text font-semibold text-base">Photo URL</span></label>
              <input type="url" value={formData.photo} onChange={(e) => setFormData({...formData, photo: e.target.value})} className="input input-bordered input-lg rounded-xl w-full focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200" placeholder="https://example.com/photo.jpg" required />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text font-semibold text-base">Password</span></label>
              <input type="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} className="input input-bordered input-lg rounded-xl w-full focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200" placeholder="••••••••" required />
              <label className="label"><span className="label-text-alt text-base-content/60">Must be 6+ characters with uppercase & lowercase</span></label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-lg rounded-xl w-full text-lg shadow-lg hover:shadow-xl transition-all">Create Account</button>
          
          <p className="text-center text-base pt-4">
            Already have an account? <Link to="/login" className="link link-primary font-bold hover:text-purple-700">Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
