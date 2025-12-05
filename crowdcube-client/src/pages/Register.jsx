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
    <div className="hero min-h-screen bg-base-200">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleRegister} className="card-body">
          <h2 className="text-2xl font-bold text-center">Register</h2>
          <div className="form-control">
            <label className="label"><span className="label-text">Name</span></label>
            <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label"><span className="label-text">Email</span></label>
            <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label"><span className="label-text">Photo URL</span></label>
            <input type="url" value={formData.photo} onChange={(e) => setFormData({...formData, photo: e.target.value})} className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label"><span className="label-text">Password</span></label>
            <input type="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} className="input input-bordered" required />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">Register</button>
          </div>
          <p className="text-center text-sm mt-4">
            Already have an account? <Link to="/login" className="link link-primary">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
