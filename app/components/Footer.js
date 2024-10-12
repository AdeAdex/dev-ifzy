import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-light-navbar dark:bg-dark-navbar shadow-lg py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo or Branding */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Ifzy</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Dev Ifzy
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500 dark:hover:text-blue-400">Home</a></li>
              <li><a href="#" className="hover:text-blue-500 dark:hover:text-blue-400">About</a></li>
              <li><a href="#" className="hover:text-blue-500 dark:hover:text-blue-400">Services</a></li>
              <li><a href="#" className="hover:text-blue-500 dark:hover:text-blue-400">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-blue-500 dark:hover:text-blue-400">
                <FaFacebookF size={20} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="hover:text-blue-500 dark:hover:text-blue-400">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-pink-500 dark:hover:text-pink-400">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-blue-700 dark:hover:text-blue-600">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center border-t pt-4 border-gray-300 dark:border-gray-600">
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 Ifzy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
