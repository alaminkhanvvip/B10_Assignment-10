const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Terms of Service</a>
      </nav>
      <aside>
        <p className="font-bold">CrowdCube - Empowering Dreams Together</p>
        <p>Copyright © 2024 - All rights reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;
