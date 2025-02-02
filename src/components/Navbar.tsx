import React from 'react';

const Navbar: React.FC = () => {
  return (
    <>
    <div className="navbar bg-[#FAF9F6]">

      <div className="flex-1">
        <a className="btn btn-ghost text-orange-500 text-xl font-bold text-3xl font-neue">daisyUI</a>
      </div>

      <div className="flex-none flex justify-center w-full"> {/* Centering the menu items */}
        <ul className="menu menu-horizontal px-1 space-x-8">
          <li><a href="/" className="text-xl font-bold font-neue text-orange-500">Home</a></li>
          <li>
            <details>
              <summary className="text-xl font-bold font-neue text-orange-500">Portfolio</summary>
              <ul className="bg-base-100 rounded-t-none p-2 space-y-2">
                <li><a href="/LongForm" className="text-lg font-neue text-orange-500">Long-form</a></li>
                <li><a href="/ShortForm" className="text-lg font-neue text-orange-500">Short-form</a></li>
                <li><a href="/Photography" className="text-lg font-neue text-orange-500">Photography</a></li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary className="text-xl font-bold font-neue text-orange-500">Projects</summary>
              <ul className="bg-base-100 rounded-t-none p-2 space-y-2">
                <li><a href="/Code" className="text-lg font-neue text-orange-500">Code</a></li>
                <li><a href="/Music" className="text-lg font-neue text-orange-500">Music</a></li>
              </ul>
            </details>
          </li>
          <li><a href="/About" className="text-xl font-bold font-neue text-orange-500">About</a></li>
          <li><a href="/Contact" className="text-xl font-bold font-neue text-orange-500">Contact</a></li>
        </ul>
      </div>
    </div>

    <hr className="border-[orange] border-1"></hr>
    </>
  );
};

export default Navbar;


