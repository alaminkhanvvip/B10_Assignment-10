import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center p-4">
      <div className="text-center space-y-6">
        <h1 className="text-9xl md:text-[200px] font-extrabold text-white drop-shadow-2xl">404</h1>
        <p className="text-3xl md:text-4xl font-bold text-white">Page Not Found</p>
        <p className="text-lg text-white/90 max-w-md mx-auto">The page you are looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn btn-lg bg-white text-purple-600 hover:bg-gray-100 border-0 rounded-xl mt-6">Go Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
