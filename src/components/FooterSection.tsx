import React from 'react';
import Logo from '../assets/logo-text.png'


const FooterSection = () => {
    return (
        <footer className="w-full bg-white border-t border-gray-100 pt-16 pb-8 text-gray-600">
            <div className="container mx-auto px-4">

                <div className="flex flex-col md:flex-row justify-between gap-8 pb-12">

                    <div className="text-center md:text-left max-w-[100%] md:max-w-[40%]">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-3 mx-auto">
                            <img src={Logo} alt="" />
                        </div>

                        <p className="text-[12px] text-gray-400 leading-relaxed mb-4">Curated tools, technologies, and resources for developers building modern software.</p>

                        <div className="flex items-center justify-center md:justify-start gap-4 text-[12px] font-semibold text-gray-700">
                            <a href="#" className="hover:text-[#D946EF]">GitHub</a>
                            <a href="#" className="hover:text-[#D946EF]">Twitter</a>
                            <a href="#" className="hover:text-[#D946EF]">LinkedIn</a>
                        </div>
                    </div>


                    <div className="hidden md:flex  flex-wrap justify-between md:flex-nowrap gap-12 md:gap-20 w-[100%] md:w-[60%]">


                        <div>
                            <h4 className="text-xs font-bold text-gray-900 tracking-wider uppercase mb-3">
                                PRODUCT
                            </h4>
                            <ul className="flex flex-col gap-2 text-xs text-gray-400">
                                <li><a href="#" className="hover:text-gray-600">Home</a></li>
                                <li><a href="#" className="hover:text-gray-600">Technologies</a></li>
                                <li><a href="#" className="hover:text-gray-600">Projects</a></li>
                            </ul>
                        </div>


                        <div>
                            <h4 className="text-xs font-bold text-gray-900 tracking-wider uppercase mb-3">
                                COMPANY
                            </h4>
                            <ul className="flex flex-col gap-2 text-xs text-gray-400">
                                <li><a href="#" className="hover:text-gray-600">About</a></li>
                                <li><a href="#" className="hover:text-gray-600">Contact</a></li>
                                <li><a href="#" className="hover:text-gray-600">Careers</a></li>
                            </ul>
                        </div>


                        <div>
                            <h4 className="text-xs font-bold text-gray-900 tracking-wider uppercase mb-3">
                                LEGAL
                            </h4>
                            <ul className="flex flex-col gap-2 text-xs text-gray-400">
                                <li><a href="#" className="hover:text-gray-600">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-gray-600">Terms of Service</a></li>
                            </ul>
                        </div>

                    </div>

                </div>


                <div className="border-t border-gray-100 pt-6 flex flex-row justify-between items-center text-xs text-gray-400 gap-4">
                    <p>© 2026 Dev Stack. All rights reserved.</p>

                    <div className="flex gap-4">
                        <a href="#" className="hover:text-gray-600">Privacy</a>
                        <a href="#" className="hover:text-gray-600">Terms</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default FooterSection;