import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => toast.success('Logged out successfully'))
      .catch(() => toast.error('Logout failed'));
  };

  const navLinks = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/campaigns">All Campaign</NavLink></li>
      {user && (
        <>
          <li><NavLink to="/add-campaign">Add New Campaign</NavLink></li>
          <li><NavLink to="/my-campaign">My Campaign</NavLink></li>
          <li><NavLink to="/my-donations">My Donations</NavLink></li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-lg px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">CrowdCube</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        {user ? (
          <>
            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL || 'https://via.placeholder.com/150'} alt="User" />
                </div>
              </div>
            </div>
            <button onClick={handleLogout} className="btn btn-sm">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-sm">Login</Link>
            <Link to="/register" className="btn btn-sm btn-primary">Register</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
