import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-9xl font-bold">404</h1>
          <p className="text-3xl font-semibold py-6">Page Not Found</p>
          <p className="pb-6">The page you are looking for doesn't exist.</p>
          <Link to="/" className="btn btn-primary">Go Home</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
