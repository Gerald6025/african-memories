
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-black  "></div>
      
      {/* Social Icons at the very top */}
      <div className="relative z-10 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-end space-x-6">
          <a href="#" className="text-white hover:text-gray-300 transition-colors">
            <FaInstagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">
            <FaFacebook className="w-5 h-5" />
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">
            <FaWhatsapp className="w-5 h-5" />
          </a>
        </div>
        {/* Separator line */}
        <div className="border-t border-gray-700 w-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 pt-8 pb-8 px-4 sm:px-6 lg:px-8">

        {/* Main Content */}
        <div className="flex flex-col md:flex-row md:gap-100 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:w-1/3 space-y-4">
            <div className="relative w-60 h-16 right-15">
              <Image 
                src="/logo.png" 
                alt="African Memories Logo" 
                fill 
                className="object-contain "
                priority
              />
            </div>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>

          <div className='flex gap-20 md:pl-16'>
            {/* Links */}
            <div>
            <h3 className="text-lg font-semibold mb-4 ">Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Thing To Do', 'Places To Stay', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                        className="text-white hover:text-orange-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            </div>

            {/* Contact */}
            <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic space-y-2 text-gray-400">
              <p>4920 Chinotimba,<br />Victoria Falls</p>
              <p>+263 772 260 839</p>
              <p>info@africanmemories.com</p>
            </address>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>Copyright 2026 africanmemories.com | All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
