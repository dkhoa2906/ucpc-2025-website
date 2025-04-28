import React from 'react';


function Footer() {
    return (
        <footer style={{ backgroundColor: '#EDEAD2', padding: '20px' }} className="text-[#3e1d53]  flex-col items-center flex justify-center">
            <div className="container mx-auto grid grid-cols-2 gap-x-4 gap-y-6 px-4 md:grid-cols-4">

                {/* Tên cuộc thi */}
                <div className="space-y-4 bg-[#EDEAD2] p-4 rounded-xl">
                    {/* Logo + Brand Name */}
                    <div className="flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-purple-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                        </svg>
                        <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-[#3e1d53] text-transparent bg-clip-text">
                            UCPC
                        </span>
                    </div>

                    {/* Tagline */}
                    <p className="text-sm text-neutral-700">
                        UIT COLLEGIATE PROGRAMMING CONTEST 2025
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="text-neutral-600 hover:text-purple-600 transition-colors"
                            aria-label="Twitter"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                            </svg>
                        </a>

                        <a
                            href="#"
                            className="text-neutral-600 hover:text-purple-600 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect width="4" height="12" x="2" y="9" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </a>

                        <a
                            href="#"
                            className="text-neutral-600 hover:text-purple-600 transition-colors"
                            aria-label="GitHub"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                        </a>

                        <a
                            href="#"
                            className="text-neutral-600 hover:text-purple-600 transition-colors"
                            aria-label="Facebook"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </svg>
                        </a>
                    </div>
                </div>  

                {/* Đơn vị tổ chức */}
                <div>
                    <p className="inline-block border-b-2 border-[#419D98] py-1 font-bold">Organizers</p>
                    <ul className="mt-2 flex flex-col gap-2">
                        <li className="flex gap-x-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </svg>
                            <a
                                className="inline-block flex-1 break-words hover:text-[#419D98]"
                                href="https://www.facebook.com/uit.csf"
                                target="_blank" rel="noopener noreferrer"
                            >
                                UIT Computer Science Faculty
                            </a>
                        </li>
                        <li className="flex gap-x-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </svg>
                            <a
                                className="inline-block flex-1 break-words hover:text-[#419D98]"
                                href="https://www.facebook.com/uit"
                                target="_blank" rel="noopener noreferrer"
                            >
                                University of Information Technology (UIT)
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <p className="inline-block border-b-2 border-[#419D98] py-1 font-bold">Contact</p>
                    <ul className="mt-2 flex flex-col gap-2">
                        <li className="flex gap-x-2">
                            <svg width="24" height="24" fill="none" stroke="#3e1d53" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 8l3.78 2.52a4 4 0 0 0 4.44 0L18 8M6 21h12a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4z" />
                            </svg>
                            <a className="inline-block flex-1 break-words hover:text-[#419D98]" href="mailto:cs@uit.edu.vn">
                                cs@uit.edu.vn
                            </a>
                        </li>
                        <li className="flex gap-x-2">
                            <svg width="24" height="24" fill="none" stroke="#3e1d53" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 8l3.78 2.52a4 4 0 0 0 4.44 0L18 8M6 21h12a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4z" />
                            </svg>
                            <a className="inline-block flex-1 break-words hover:text-[#419D98]" href="mailto:contact@uit.edu.vn">
                                contact@uit.edu.vn
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Follow us */}
                <div className="max-md:col-span-2">
                    <p className="inline-block border-b-2 border-[#419D98] py-1 font-bold">Follow us</p>
                    <div className="mt-2 flex flex-col gap-2">
                        <a
                            className="flex items-center gap-2 hover:text-[#419D98]"
                            href="https://cs.uit.edu.vn"
                            target="_blank" rel="noopener noreferrer"
                        >
                            🌐 cs.uit.edu.vn
                        </a>
                        <a
                            className="flex items-center gap-2 hover:text-[#419D98]"
                            href="https://www.uit.edu.vn"
                            target="_blank" rel="noopener noreferrer"
                        >
                            🌐 uit.edu.vn
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm text-[#3e1d53] mt-6">
                © 2025 UIT COLLEGIATE PROGRAMMING CONTEST. All rights reserved.
            </div>

        </footer>
    );
}

export default Footer;
