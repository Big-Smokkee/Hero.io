import React from "react";
import { ChevronUp } from "lucide-react";
import githubImg from "../../assets/github.png";
import linkedinImg from "../../assets/linkedin.png";
import logoImg from "../../assets/logo.png";

const Footer = () => {
    return (
        <footer className="bg-[#001931] text-white px-6 md:px-20 py-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                {/* Branding with Logo */}
                <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center gap-3">
                        <img src={logoImg} alt="Logo" className="w-10 h-10 rounded-md shadow-md" />
                        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
                            HERO.IO
                        </h2>
                    </div>
                    <p className="text-sm text-gray-300 mt-2">
                        Building apps for millions with passion & precision.
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex flex-col items-center md:items-end">
                    <h3 className="text-xl font-semibold mb-3">Social Links</h3>
                    <div className="flex gap-6">
                        <a
                            href="https://github.com/Big-Smokkee"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition"
                        >
                            <img src={githubImg} alt="GitHub" className="w-7 h-7" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/fardin-faraz-b2580229b"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition"
                        >
                            <img src={linkedinImg} alt="LinkedIn" className="w-7 h-7" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 mt-8 pt-6 text-center flex flex-col items-center gap-4">
                <p className="text-gray-400 text-sm">
                    Copyright © {new Date().getFullYear()} - All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
