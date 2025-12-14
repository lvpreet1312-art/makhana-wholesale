'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="relative space-y-6">
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:scale-105">
                <Image
                  src="/products/makhana.jpeg"
                  alt="Healthy Food Package"
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>

              <div className="relative grid grid-cols-2 gap-6">
                <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                    <div className="flex items-center justify-center mb-4">
                      <svg className="w-12 h-12 text-[#6B9B7D] transition-transform duration-500 hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <p className="text-5xl font-bold text-[#2D5F4F] mb-1 text-center transition-all duration-300 hover:scale-110">98 %</p>
                    <p className="text-[#2D5F4F] font-semibold text-center">Satisfaction Rate</p>
                  </div>
                </div>

                <div className={`relative rounded-2xl overflow-hidden shadow-lg transform transition-all duration-1000 delay-300 hover:shadow-2xl hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <Image
                    src="/products/MakhanaHeroShuffle.jpeg"
                    alt="Fresh Vegetables"
                    width={600}
                    height={350}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
              </div>

              <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-8 border-white bg-gradient-to-br from-[#6B9B7D] to-[#5A8A6A] flex items-center justify-center shadow-xl z-20">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-[#6B9B7D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-white text-[9px] font-semibold uppercase tracking-wide leading-tight px-3">
                    Pure<br/>Organic<br/>Product
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E8F5E9] rounded-full transition-all duration-300 hover:bg-[#6B9B7D] hover:text-white group">
              <span className="text-[#6B9B7D] text-xl group-hover:text-white transition-colors duration-300">+</span>
              <span className="text-[#6B9B7D] font-medium group-hover:text-white transition-colors duration-300">About Us</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#2D5F4F] leading-tight transition-all duration-500 hover:text-[#6B9B7D]">
              Born from love for real food and a desire to do better
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed transition-all duration-300 hover:text-gray-800">
              We started with a simple idea make honest high-quality food accessible to everyone. Tired of artificial additives & confusing labels, we set out to create better.
            </p>

            <div className="space-y-6 border-l-4 border-[#6B9B7D] pl-8 transition-all duration-500 hover:border-[#2D5F4F]">
              <div className={`space-y-3 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#E8F5E9] flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:bg-[#6B9B7D] hover:scale-110 hover:rotate-12 group">
                    <svg className="w-6 h-6 text-[#6B9B7D] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#2D5F4F] transition-all duration-300 hover:text-[#6B9B7D] hover:translate-x-2">
                  Ethically Sourced, Honestly Made
                </h3>
                <p className="text-gray-600 leading-relaxed transition-all duration-300 hover:text-gray-800">
                  We believe that great food starts at the source. That's why we partner with local farmers and ethical suppliers who share our commitment to quality.
                </p>
              </div>

              <div className={`space-y-3 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#E8F5E9] flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:bg-[#6B9B7D] hover:scale-110 hover:rotate-12 group">
                    <svg className="w-6 h-6 text-[#6B9B7D] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="8" r="2" strokeWidth={2}/>
                      <circle cx="8" cy="14" r="2" strokeWidth={2}/>
                      <circle cx="16" cy="14" r="2" strokeWidth={2}/>
                      <circle cx="12" cy="20" r="2" strokeWidth={2}/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#2D5F4F] transition-all duration-300 hover:text-[#6B9B7D] hover:translate-x-2">
                  Nutrition That Fits Your Lifestyle
                </h3>
                <p className="text-gray-600 leading-relaxed transition-all duration-300 hover:text-gray-800">
                  We believe that great food starts at the source. That's why we partner with local farmers and ethical suppliers who share our commitment to quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
