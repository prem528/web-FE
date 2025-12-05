import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { TopBar } from "@/CustomComponents/TopBar";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show TopBar when scrolling up or near top, hide when scrolling down
      if (currentScrollY < 50) {
        setShowTopBar(true);
      } else if (currentScrollY > lastScrollY) {
        // scrolling down
        setShowTopBar(false);
      } else {
        // scrolling up
        setShowTopBar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 🔹 Fixed TopBar at top, hides on scroll */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-transform duration-700 ${
          showTopBar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <TopBar />
      </div>

      {/* 🔹 Navbar just below TopBar, adjusts position based on TopBar visibility */}
      <nav
        className={`fixed left-2 right-2 z-40 backdrop-blur bg-slate-800/10 rounded-xl shadow-md lg:py-2 transition-all duration-700 ${
          showTopBar ? "top-10" : "top-2"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center cursor-pointer">
              <Link to="/">
                <img
                  src="/ionlogo.png"
                  alt="ION Logo"
                  className="h-10 mr-2 sm:w-96 md:w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  Home
                </Link>

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
                  to="/installation-guide"
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  Installation Guide
                </Link>
                <Link
                  to="/blog"
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  Blogs
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
              <Button className="bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium rounded-md text-lg transition-all duration-300 cursor-pointer">
              <Link to="https://demo.ionmonitor.com">Try now</Link>
              </Button>

              <Button
                asChild
                className="bg-transparent border border-white text-white hover:text-blue-400 hover:bg-transparent font-medium rounded-md text-lg transition-all duration-300 cursor-pointer"
              >
                <Link to="https://dash.ionmonitor.com/pricing">Buy now</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-slate-800/95 rounded-b-xl shadow-lg px-4 pt-4 py-4 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col space-y-2 mb-4">
              <Link
                to="/"
                className="text-gray-300 hover:text-white px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>

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
                to="/installation-guide"
                className="text-gray-300 hover:text-white px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Installation Guide
              </Link>
              <Link
                to="/blog"
                className="text-gray-300 hover:text-white px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Blogs
              </Link>
              <Link
                to="https://dash.ionmonitor.com/user/login"
                className="text-gray-300 hover:text-white px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Log in
              </Link>
            </div>

            <div className="flex flex-col space-y-3">
              <Button className="w-full bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium rounded-md text-base transition-all duration-300 cursor-pointer">
                Try now
              </Button>
              <Button
                asChild
                className="w-full bg-transparent border border-white text-white hover:text-blue-400 hover:bg-transparent font-medium rounded-md text-base transition-all duration-300 cursor-pointer"
              >
                <Link to="https://dash.ionmonitor.com/pricing">Buy now</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
