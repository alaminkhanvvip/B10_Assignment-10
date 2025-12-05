import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const closeDropdown = () => setIsOpen(false);

  const handleLogout = async () => {
    closeDropdown();
    try {
      await logOut();
      toast.success('Logged out successfully');
    } catch {
      toast.error('Logout failed');
    }
  };

  const activeClassName = ({isActive}) => isActive ? 'text-primary font-semibold' : '';

  const navLinks = (
    <div className='flex gap-10'>
      <li><NavLink to="/" className={activeClassName}>Home</NavLink></li>
      <li><NavLink to="/campaigns" className={activeClassName}>All Campaigns</NavLink></li>
    </div>
  );

  return (
    <nav className="navbar bg-base-100/80 backdrop-blur-lg shadow-sm sticky top-0 z-50 border-b border-base-300 px-2 md:px-4 flex justify-between" role="navigation" aria-label="Main navigation">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-lg md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-transform">
          🎯 <span className="hidden sm:inline">CrowdCube</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        {user ? (
          <div className="relative">
            <div tabIndex={0} role="button" onClick={() => setIsOpen(!isOpen)} className="btn btn-ghost btn-circle btn-sm md:btn-md avatar cursor-pointer">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full ring-2 ring-purple-500 ring-offset-2">
                <img src={user.photoURL || 'https://via.placeholder.com/150'} alt={user.displayName || 'User avatar'} />
              </div>
            </div>
            {isOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={closeDropdown}></div>
                <ul className="absolute right-0 top-full mt-2 menu bg-base-100/95 backdrop-blur-xl rounded-2xl z-50 w-64 p-3 shadow-2xl border border-purple-200">
                  <li><NavLink to="/add-campaign" onClick={closeDropdown} className="rounded-xl hover:bg-purple-50 hover:text-purple-600">📝 Add Campaign</NavLink></li>
                  <li><NavLink to="/my-campaign" onClick={closeDropdown} className="rounded-xl hover:bg-purple-50 hover:text-purple-600">📋 My Campaigns</NavLink></li>
                  <li><NavLink to="/my-donations" onClick={closeDropdown} className="rounded-xl hover:bg-purple-50 hover:text-purple-600">💝 My Donations</NavLink></li>
                  <li className="border-t border-base-200 mt-2 pt-2">
                    <button onClick={handleLogout} className="rounded-xl text-error hover:bg-error/10 w-full hover:bg-purple-50 hover:text-purple-600">🚪 Logout</button>
                  </li>
                </ul>
              </>
            )}
          </div>
        ) : (
          <div className="flex gap-1 md:gap-2">
            <Link to="/login" className="btn btn-xs md:btn-sm btn-ghost rounded-xl">Login</Link>
            <Link to="/register" className="btn btn-xs md:btn-sm btn-primary rounded-xl">Register</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;