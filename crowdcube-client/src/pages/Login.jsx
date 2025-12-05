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
    <div className="hero min-h-screen bg-base-200">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleLogin} className="card-body">
          <h2 className="text-2xl font-bold text-center">Login</h2>
          <div className="form-control">
            <label className="label"><span className="label-text">Email</span></label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label"><span className="label-text">Password</span></label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input input-bordered" required />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
          <div className="divider">OR</div>
          <button type="button" onClick={handleGoogleLogin} className="btn btn-outline gap-2">
            <FaGoogle /> Google Login
          </button>
          <p className="text-center text-sm mt-4">
            Don't have an account? <Link to="/register" className="link link-primary">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
