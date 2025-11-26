import { useState } from "react";
import { Link } from "react-router-dom"; // ⬅️ add this
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Mail, Phone, CircleUser, MapPin } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <nav className="fixed top-1 left-2 right-2 z-50 backdrop-blur bg-slate-800/10  rounded-xl shadow-md lg:py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          {/* <div className="flex items-center cursor-pointer">
            <Link to="/">
              <img
                src="/ionlogo.png"
                alt="ION Logo"
                className="h-10 mr-2 sm:w-96 md:w-auto"
              />
            </Link>
          </div> */}

          {/* Desktop Navigation Links */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </Link>

              <div
                className="relative"
              >
                <button className="flex items-center text-gray-300 hover:text-white px-3 py-2 text-sm font-medium cursor-pointer">
                  Features
                  <ChevronDown
                    className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                      featuresOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                {/* put your desktop dropdown here if needed */}
              </div>

              <Link
                to="/whyus"
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                Why us?
              </Link>
              <Link
                to="/review"
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                Review
              </Link>
              <Link
                to="https://dash.ionmonitor.com/user/login"
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                Log in
              </Link>
            </div>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* If you want a gradient, add bg-gradient-to-r */}
            <Button className="bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium rounded-md text-lg transition-all duration-300 cursor-pointer">
              Try now
            </Button>

            <Button asChild className="bg-transparent border border-white text-white hover:text-blue-400 hover:bg-transparent font-medium rounded-md text-lg transition-all duration-300 cursor-pointer">
              <Link to="https://dash.ionmonitor.com/pricing">Buy now</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-slate-800/95 rounded-b-xl shadow-lg px-4 pt-4 py-4 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col space-y-2 mb-4">

            {/* FEATURES link */}
            <button
              className="text-gray-300 hover:text-white px-3 py-2 text-base font-medium transition-colors flex items-center"
              onClick={() => {
                setSubMenuOpen(!subMenuOpen);
                setFeaturesOpen(!featuresOpen);
              }}
            >
              Features
              <ChevronDown
                className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                  featuresOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {/* Submenu */}
            {subMenuOpen && (
              <div className="rounded-b-xl px-4">
                <div className="flex flex-col space-y-2 mb-1">
                  <Link
                    to="/features/whatsapp"
                    className="flex gap-1 items-center py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white"
                    onClick={() => {
                      setMenuOpen(false);
                      setSubMenuOpen(false);
                    }}
                  >
                    WhatsApp
                  </Link>
                  <Link
                    to="/features/facebook"
                    className="flex gap-1 items-center py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white"
                    onClick={() => {
                      setMenuOpen(false);
                      setSubMenuOpen(false);
                    }}
                  >
                    Facebook
                  </Link>
                  <Link
                    to="/features/callrecoeding"
                    className="flex gap-1 items-center py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white"
                    onClick={() => {
                      setMenuOpen(false);
                      setSubMenuOpen(false);
                    }}
                  >
                    <Phone className="w-4" />
                    Call Recording
                  </Link>
                  <Link
                    to="/features/contacts"
                    className="flex gap-1 items-center py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white"
                    onClick={() => {
                      setMenuOpen(false);
                      setSubMenuOpen(false);
                    }}
                  >
                    <CircleUser className="w-4" />
                    Contacts
                  </Link>
                  <Link
                    to="/features/sms"
                    className="flex gap-1 items-center py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white"
                    onClick={() => {
                      setMenuOpen(false);
                      setSubMenuOpen(false);
                    }}
                  >
                    <Mail className="w-4" />
                    SMS
                  </Link>
                  <Link
                    to="/features/livelocation"
                    className="flex gap-1 items-center py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white"
                    onClick={() => {
                      setMenuOpen(false);
                      setSubMenuOpen(false);
                    }}
                  >
                    <MapPin className="w-4" />
                    Live Location
                  </Link>
                  <Link
                    to="/features/all_features"
                    className="flex gap-1 items-center py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white"
                    onClick={() => {
                      setMenuOpen(false);
                      setSubMenuOpen(false);
                    }}
                  >
                    <Menu className="w-4" />
                    All Features
                  </Link>
                </div>
              </div>
            )}

            {/* Other Menu Items */}
            <Link
              to="/whyus"
              className="text-gray-300 hover:text-white px-3 py-2 text-base font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Why us?
            </Link>
            <Link
              to="/review"
              className="text-gray-300 hover:text-white px-3 py-2 text-base font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Review
            </Link>
            <Link
              to="https://dash.ionmonitor.com/user/login"
              className="text-gray-300 hover:text-white px-3 py-2 text-base font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Log in
            </Link>
          </div>

          {/* Buttons */}
          <div className="flex flex-col space-y-3">
            <Button className="w-full bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium rounded-md text-base transition-all duration-300 cursor-pointer">
              Try now
            </Button>
            <Button asChild className="w-full bg-transparent border border-white text-white hover:text-blue-400 hover:bg-transparent font-medium rounded-md text-base transition-all duration-300 cursor-pointer">
              <Link to="https://dash.ionmonitor.com/pricing">Buy now</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
