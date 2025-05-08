import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className={`navbar fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-black shadow-md' : 'bg-transparent'
        }`}
      >
        {/* LEFT: Brand */}
        <div className="flex-1">
          <a className="btn btn-ghost text-white text-xl font-bold font-neue">
            Enjoy your own
          </a>
        </div>

        {/* CENTER: Nav Items */}
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 space-x-8">
            <li>
              <details>
                <summary className="text-xl font-bold font-neue text-white">
                  Portfolio
                </summary>
                <ul className="bg-base-100 rounded-t-none p-2 space-y-2">
                  <li>
                    <a href="/LongForm" className="text-lg font-neue text-white">
                      Long-form
                    </a>
                  </li>
                  <li>
                    <a href="/ShortForm" className="text-lg font-neue text-white">
                      Short-form
                    </a>
                  </li>
                  <li>
                    <a href="/Photography" className="text-lg font-neue text-white">
                      Photography
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="text-xl font-bold font-neue text-white">
                  Projects
                </summary>
                <ul className="bg-base-100 rounded-t-none p-2 space-y-2">
                  <li>
                    <a href="/Code" className="text-lg font-neue text-white">
                      Code
                    </a>
                  </li>
                  <li>
                    <a href="/Music" className="text-lg font-neue text-white">
                      Music
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a href="/About" className="text-xl font-bold font-neue text-white">
                About
              </a>
            </li>
          </ul>
        </div>

        {/* RIGHT: Contact */}
        <div className="flex-1 justify-end flex pr-4">
          <a href="/Contact" className="text-xl font-bold font-neue text-white">
            Contact
          </a>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-[80px]"></div>
    </>
  );
};

export default Navbar;

