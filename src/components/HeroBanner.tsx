import React from 'react';
import HeroBannar from '../assets/banner-stack.png'

const HeroBanner = () => {
    return (
        <section className="bg-white">
            <div className="container mx-auto px-2 flex flex-col md:flex-row justify-between items-center gap-5 py-[50px] md:py-[70px]">
                <div className="max-w-[1000%] md:max-w-[40%] text-center md:text-left">
                    <h1 className="text-[40px] font-bold leading-none md:text-[60px]">Build Your Ideal <br></br><span className="bg-gradient-to-r from-[#F97316] via-[#EF4444] to-[#7C3AED] bg-clip-text text-transparent">Development Stack</span></h1>
                    <p className="mt-7 text-[16px] md:text-[18px] leading-8 text-[#64748B]">Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>
                    <div className="mt-9 flex justify-center gap-4 lg:justify-start">
                        <button className="rounded-lg bg-gradient-to-r from-[#F97316] via-[#EF4444] to-[#EC4899] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-95">Explore Technologies</button>

                        <button className="rounded-lg border border-[#D9D9D9] bg-transparent px-7 py-3 text-sm font-medium text-[#64748B] transition hover:border-[#CFCFCF]">Learn More</button>
                    </div>
                </div>
                <div className="max-w-[40%] md:max-w-[100%]">
                    <img src={HeroBannar} alt="" />
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;