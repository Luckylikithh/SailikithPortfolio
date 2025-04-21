import React, { useEffect, useState } from 'react';
import { navLinks } from "../constants";

const Hamburger = () => {
  const [toggle, setToggle] = useState(false);
  const [actives, setActives] = useState("");

  useEffect(() => {
    const btn = document.getElementById('buttons-bt');
    const menu = document.getElementById('menu');

    const navToggle = () => {
      setToggle((prevToggle) => !prevToggle); // Toggle the state
    };

    if (btn) {
      btn.addEventListener('click', navToggle);
    }

    // Cleanup the event listener on component unmount
    return () => {
      if (btn) {
        btn.removeEventListener('click', navToggle);
      }
    };
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className='sm:hidden flex flex-1 justify-end items-center'>
      <div className="md:hidden">
        <button
          id='buttons-bt'
          type="button"
          className={`z-40 block hamburger md:hidden focus:outline-none ${toggle ? 'open' : ''}`}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <div
        id="menu"
        className={`p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl ${toggle ? 'flex' : 'hidden'}`}
      >
        <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                actives === nav.title ? "text-white" : "text-secondary"
              }`}
              onClick={() => {
                setActives(nav.title);
                setToggle(false); // Close the menu when a nav link is clicked
              }}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;