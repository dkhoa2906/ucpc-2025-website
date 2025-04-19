import React, { useEffect, useRef, useState } from 'react';
import Header_bg from '../../assets/Header_bg.png';

function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        const navbarTop = navbarRef.current.offsetTop;
        if (window.scrollY > 5*navbarTop) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const color = '#000000'; // Define the color variable here
  return (
    <div ref={navbarRef}
      className={`fixed w-full justify-between flex flex-row items-center px-6 py-5 rounded-lg transition-all duration-300 z-50`}>
      {/* LOGO */}
      <div className="w-2/8 items-center flex ">
        <img src={Header_bg} alt="Logo" className="h-12 w-auto" />
      </div>

      {/* NAV LINKS */}
      <div className="w-1/3 items-center flex-row justify-between flex space-x-6 text-[#D3CDBB] font-bold text-xl">
        <a href="#news" className="btn btn-ghost">Tin tức</a>
        <a href="#rules" className="btn btn-ghost">Thể lệ</a>
        <a href="#prizes" className="btn btn-ghost">Giải thưởng</a>
        <a href="#contact" className="btn btn-ghost">Liên hệ</a>
      </div>

      {/* LOGIN/REGISTER */}
      <div className={`w-2/8 flex justify-items-center space-x-4 text-xl font-bold text-[${color}]`}>
        <a href="#login" className="btn btn-ghost">ĐĂNG NHẬP</a>
        <a href="#register" className="btn btn-ghost">ĐĂNG KÝ</a>
      </div>
    </div>
  );
}

export default Header;
