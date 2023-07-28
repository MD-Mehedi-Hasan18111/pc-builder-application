import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const profileRef = useRef(null);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [profileRef]);

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <Image src="/images/logo.jpg" alt="logo" height={60} width={60} />
            </Link>
          </div>
          <div className="flex items-center -mr-2 -my-2 md:hidden">
            <button
              onClick={() => alert("Redirect to PC Builder page")}
              type="button"
              className="py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mr-6"
            >
              PC Builder
            </button>

            <button
              onClick={toggleMenu}
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md text-purple-500 ${
                mobileMenuOpen ? "bg-gray-100" : "hover:bg-gray-100"
              } focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500`}
            >
              <span className="sr-only">Open menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${mobileMenuOpen ? "hidden" : "block"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${mobileMenuOpen ? "block" : "hidden"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex space-x-10">
            <button
              onClick={() => alert("Redirect to PC Builder page")}
              type="button"
              className="py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              PC Builder
            </button>
            <div className="relative group">
              <button
                onClick={toggleProfile}
                type="button"
                className="flex items-center py-2 px-3 rounded-md text-sm font-medium text-gray-700 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                <span className="hidden md:inline-block">John Doe</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:inline-block ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                </svg>
              </button>
              {isProfileOpen && (
                <div
                  ref={profileRef}
                  className="absolute z-10 mt-2 bg-white rounded-lg shadow-lg"
                  onBlur={() => setIsProfileOpen(false)}
                  tabIndex={0}
                >
                  <div className="py-2 px-4 text-sm font-medium text-gray-700">
                    John Doe
                  </div>
                  <div className="pb-3 px-4 text-sm text-gray-500">
                    john.doe@example.com
                  </div>
                </div>
              )}
            </div>
            <div className="relative group">
              <button
                onMouseEnter={() => setIsMenuOpen(true)}
                onMouseLeave={() => setIsMenuOpen(false)}
                type="button"
                className="py-2 px-4 text-sm font-medium text-gray-700 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Categories
              </button>
              {isMenuOpen && (
                <div
                  onMouseEnter={() => setIsMenuOpen(true)}
                  onMouseLeave={() => setIsMenuOpen(false)}
                  className="absolute top-6 z-10 mt-2 bg-white rounded-lg shadow-lg py-1"
                >
                  <Link
                    href="/cpu-processor"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                  >
                    CPU/Processor
                  </Link>
                  <Link
                    href="/motherboard"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                  >
                    Motherboard
                  </Link>
                  <Link
                    href="/ram"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                  >
                    RAM
                  </Link>
                  <Link
                    href="/powerSupplyUnit"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                  >
                    Power Supply Unit
                  </Link>
                  <Link
                    href="/storageDevice"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                  >
                    Storage Device
                  </Link>
                  <Link
                    href="/monitor"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                  >
                    Monitor
                  </Link>
                  <Link
                    href="/others"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                  >
                    Others
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="mt-4 pt-2 pb-3 space-y-1">
              <div className="relative group">
                <button
                  onClick={toggleProfile}
                  type="button"
                  className="flex items-center mt-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                >
                  <span className="md:inline-block">John Doe</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 md:inline-block ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                  </svg>
                </button>
                {isProfileOpen && (
                  <div
                    ref={profileRef}
                    className="absolute z-10 mt-2 bg-white rounded-lg shadow-lg"
                  >
                    <div className="py-2 px-4 text-sm font-medium text-gray-700">
                      John Doe
                    </div>
                    <div className="pb-3 px-4 text-sm text-gray-500">
                      john.doe@example.com
                    </div>
                  </div>
                )}
              </div>
              <div className="relative group">
                <button
                  onMouseEnter={() => setIsMenuOpen(true)}
                  onMouseLeave={() => setIsMenuOpen(false)}
                  type="button"
                  className="py-2 px-4 text-sm font-medium text-gray-700 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Categories
                </button>
                {isMenuOpen && (
                  <div
                    onMouseEnter={() => setIsMenuOpen(true)}
                    onMouseLeave={() => setIsMenuOpen(false)}
                    className="absolute top-8 z-10 mt-2 bg-white rounded-lg shadow-lg py-1"
                  >
                    <Link
                      href="/cpu-processor"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                    >
                      CPU/Processor
                    </Link>
                    <Link
                      href="/motherboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                    >
                      Motherboard
                    </Link>
                    <Link
                      href="/ram"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                    >
                      RAM
                    </Link>
                    <Link
                      href="/powerSupplyUnit"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                    >
                      Power Supply Unit
                    </Link>
                    <Link
                      href="/storageDevice"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                    >
                      Storage Device
                    </Link>
                    <Link
                      href="/monitor"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                    >
                      Monitor
                    </Link>
                    <Link
                      href="/others"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                    >
                      Others
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
