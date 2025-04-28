import React, { useEffect, useRef, useState } from 'react';
import Header_bg from '../../assets/Header_bg.png';

function Navbar() {
    const [isFixed, setIsFixed] = useState(false);
    const navbarRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (navbarRef.current) {
                const navbarTop = navbarRef.current.offsetTop;
                if (window.scrollY > (navbarTop)) {
                    setIsFixed(true);
                } else {
                    setIsFixed(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div ref={navbarRef}
        className={`fixed top-0 w-full justify-between  border-b-amber-50 flex flex-row items-center px-6 py-5 transition-all duration-300 z-50
            
          `}    
          >
            {/* LOGO */}
            <div className="w-2/8 items-center flex ">
                <img src='#' alt="Logo" className="h-12 w-auto" />
            </div>

            {/* NAV LINKS */}
            <div className="w-1/3 items-center flex-row justify-between flex space-x-6 text-[#EDEAD2] font-bold text-xl">
                {[
                    { href: "#news", label: "Tin tức" },
                    { href: "#rules", label: "Thể lệ" },
                    { href: "#prizes", label: "Giải thưởng" },
                    { href: "#contact", label: "Liên hệ" },
                ].map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        className="px-3 py-2 rounded-md transition duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-[#EDEAD2] hover:text-black"
                    >
                        {item.label}
                    </a>
                ))}
            </div>

            {/* LOGIN/REGISTER */}
            <div className={`w-2/8 flex justify-items-center space-x-4 text-xl font-bold text-[#EDEAD2]`}>
            <button class="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl"> Đăng nhập </button>
                <a
                    href="#register"
                    className="px-4 py-2 rounded-md transition duration-300 bg-transparent text-[#EDEAD2] hover:bg-[#EDEAD2] hover:text-black"
                >
                    ĐĂNG KÝ
                </a>
            </div>
        </div>
    );
}

export default Navbar;
