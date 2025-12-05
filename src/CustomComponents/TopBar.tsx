import { Mail, Phone, MapPinnedIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export function TopBar() {
  return (
    <div className="w-full bg-[#516ee2] text-white px-4 sm:px-8 md:px-26 lg:px-24">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-2">

        {/* Social Links */}
        <div className="gap-4 mb-2 sm:mb-0 hidden sm:flex">
          <Link to="#" className="hover:opacity-80 transition">
            <img
              src="/icons/facebook.png"
              alt="Facebook"
              className="w-5 h-5"
            />
          </Link>

          <Link to="#" className="hover:opacity-80 transition">
            <img
              src="/icons/x.jpg"
              alt="Twitter"
              className="w-5 h-5"
            />
          </Link>

          <Link to="#" className="hover:opacity-80 transition">
            <img
              src="/icons/linkedin.png"
              alt="LinkedIn"
              className="w-5 h-5"
            />
          </Link>

          <Link to="#" className="hover:opacity-80 transition">
            <img
              src="/icons/youtube.png"
              alt="YouTube"
              className="w-5 h-5"
            />
          </Link>
        </div>

        {/* ==== CONTACT INFO ==== */}
        <div className="flex items-center gap-5 text-sm">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>1234567890</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>info@ionmonitor.com</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPinnedIcon size={16} />
            <span>Noida</span>
          </div>
        </div>

      </div>
    </div>
  );
}
