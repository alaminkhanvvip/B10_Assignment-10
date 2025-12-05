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
      <div className="card w-full max-w-lg bg-base-100/95 backdrop-blur-xl shadow-2xl rounded-3xl border border-white/20">
        <form onSubmit={handleLogin} className="card-body p-10 md:p-12 space-y-8">
          <div className="text-center space-y-2">
            <div className="text-5xl mb-4">🎯</div>
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Welcome Back</h2>
            <p className="text-base-content/60">Sign in to continue your journey</p>
          </div>
          
          <div className="space-y-5">
            <div className="form-control">
              <label className="label"><span className="label-text font-semibold text-base">Email Address</span></label> 
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input input-bordered input-lg rounded-xl w-full focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200" placeholder="you@example.com" required />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text font-semibold text-base">Password</span></label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input input-bordered input-lg rounded-xl w-full focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200" placeholder="••••••••" required />
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-lg rounded-xl w-full text-lg shadow-lg hover:shadow-xl transition-all">Sign In</button>
          
          <div className="divider text-base-content/50">OR</div>
          
          <button type="button" onClick={handleGoogleLogin} className="btn btn-outline btn-lg rounded-xl gap-3 w-full hover:bg-base-200 transition-all">
            <FaGoogle className="text-xl" /> Continue with Google
          </button>
          
          <p className="text-center text-base pt-4">
            Don't have an account? <Link to="/register" className="link link-primary font-bold hover:text-purple-700">Create Account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
