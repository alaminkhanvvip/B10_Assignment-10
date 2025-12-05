const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-base-200 to-base-300 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6">
          <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
             CrowdCube
          </div>
          <p className="text-lg font-semibold">Empowering Dreams Together</p>
          <nav className="flex flex-wrap justify-center gap-6">
            <a className="link link-hover hover:text-purple-600 transition-colors">About us</a>
            <a className="link link-hover hover:text-purple-600 transition-colors">Contact</a>
            <a className="link link-hover hover:text-purple-600 transition-colors">Privacy Policy</a>
            <a className="link link-hover hover:text-purple-600 transition-colors">Terms of Service</a>
          </nav>
          <div className="pt-6 border-t border-base-content/10">
            <p className="text-sm text-base-content/60">Copyright © 2025 - All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
