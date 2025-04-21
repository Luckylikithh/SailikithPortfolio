
import React from "react";
import {linked,insta,githubs} from "../assets";
const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-center items-center flex-wrap gap-5">
      

      <div className="flex gap-3">
        <div className="social-icon">
          <a href="https://github.com/Luckylikithh" target="_blank"> <img src={githubs} alt="github" className="w-6 h-6" /></a>
         
        </div>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/sailikithkodumuri/" target="_blank"> <img src={linked} alt="linkedin" className="w-6 h-6" /></a>
         
        </div>
        <div className="social-icon">
       <a href="https://www.instagram.com/lucky.likith?igsh=MXg5a3BlYXdtenNuMw%3D%3D&utm_source=qr" target="_blank">   <img src={insta} alt="instagram" className="w-6 h-6" /></a>
        </div>
      </div>

      <p className="text-white-500">© 2025 Sailikith Kodumuri. All rights reserved.</p>
    </footer>
  );
};

export default Footer;