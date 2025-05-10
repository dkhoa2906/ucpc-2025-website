import React, { useEffect, useRef, useState } from 'react';
import Header_bg from '../../assets/Header_bg.png';
import Navbar from '../../components/Navbar/Navbar';
import avt from '../../assets/Header_bg.png';
// import { useDispatch, useSelector } from 'react-redux';

function Header() {
  

  return (
    <div>
      {/* <Navbar /> */}
      <div className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container px-10 flex h-16 items-center justify-between">
          {/* Logo + tên */}
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-zap h-6 w-6 text-purple-500"
            >
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
            </svg>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              UCPC
            </span>
          </div>

          {/* Nav links */}
          <nav className="hidden md:flex gap-6">
            <a href="#Intro " className="text-lg font-medium text-zinc-400 hover:text-white transition-colors">
              Tin tức
            </a>
            <a href="#Rules" className="text-lg font-medium text-zinc-400 hover:text-white transition-colors">
              Thể lệ
            </a>
            <a href="#pricing" className="text-lg font-medium text-zinc-400 hover:text-white transition-colors">
              Giải thưởng
            </a>
            <a href="" className="text-lg font-medium text-zinc-400 hover:text-white transition-colors">
              Nhà tài trợ
            </a>
          </nav>

          {/* Đăng nhập + CTA */}

          <div className="flex items-center gap-4">
            <button onClick={() => {}} 
                 href="#"
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors hidden sm:block"
            >
              Sign In
            </button>
            <button  onClick={() => {}}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 h-10 px-4 py-2">
              Sign up
            </button>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Header;
