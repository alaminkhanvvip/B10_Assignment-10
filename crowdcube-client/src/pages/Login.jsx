import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(email, password)
      .then(() => {
        toast.success('Login successful!');
        navigate(location?.state?.from?.pathname || '/');
      })
      .catch(() => toast.error('Invalid email or password'));
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        toast.success('Login successful!');
        navigate(location?.state?.from?.pathname || '/');
      })
      .catch(() => toast.error('Google login failed'));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl rounded-3xl">
        <form onSubmit={handleLogin} className="card-body p-8 space-y-6">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Welcome Back</h2>
          <div className="form-control">
            <label className="label"><span className="label-text font-semibold">Email</span></label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input input-bordered rounded-xl" required />
          </div>
          <div className="form-control">
            <label className="label"><span className="label-text font-semibold">Password</span></label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input input-bordered rounded-xl" required />
          </div>
          <button type="submit" className="btn btn-primary btn-lg rounded-xl w-full">Login</button>
          <div className="divider">OR</div>
          <button type="button" onClick={handleGoogleLogin} className="btn btn-outline rounded-xl gap-2 w-full">
            <FaGoogle /> Continue with Google
          </button>
          <p className="text-center text-sm">
            Don't have an account? <Link to="/register" className="link link-primary font-semibold">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
