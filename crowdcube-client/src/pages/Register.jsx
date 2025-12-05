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
      <div className="card w-full max-w-md bg-base-100 shadow-2xl rounded-3xl">
        <form onSubmit={handleRegister} className="card-body p-8 space-y-4">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Create Account</h2>
          <div className="form-control">
            <label className="label"><span className="label-text font-semibold">Name</span></label>
            <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="input input-bordered rounded-xl" required />
          </div>
          <div className="form-control">
            <label className="label"><span className="label-text font-semibold">Email</span></label>
            <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="input input-bordered rounded-xl" required />
          </div>
          <div className="form-control">
            <label className="label"><span className="label-text font-semibold">Photo URL</span></label>
            <input type="url" value={formData.photo} onChange={(e) => setFormData({...formData, photo: e.target.value})} className="input input-bordered rounded-xl" required />
          </div>
          <div className="form-control">
            <label className="label"><span className="label-text font-semibold">Password</span></label>
            <input type="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} className="input input-bordered rounded-xl" required />
          </div>
          <button type="submit" className="btn btn-primary btn-lg rounded-xl w-full mt-4">Register</button>
          <p className="text-center text-sm">
            Already have an account? <Link to="/login" className="link link-primary font-semibold">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
