/*'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = () => {
    setVideoEnded(true);
    setTimeout(() => {
      setShowVideo(false);
      setVideoEnded(false);
    }, 500);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden py-12 md:py-20" style={{ backgroundColor: '#e2eac5' }}>
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-80 h-80 bg-sage-dark rounded-full opacity-30 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-80 h-80 bg-sage-light rounded-full opacity-30 blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-8 animate-float" style={{ animationDelay: "0s" }}>
          <span className="text-4xl opacity-10">🌰</span>
        </div>
        <div className="absolute top-32 right-16 animate-float" style={{ animationDelay: "1s" }}>
          <span className="text-3xl opacity-10">🍇</span>
        </div>
        <div className="absolute bottom-24 left-1/4 animate-float" style={{ animationDelay: "2s" }}>
          <span className="text-5xl opacity-10">🥜</span>
        </div>
        <div className="absolute bottom-32 right-1/3 animate-float" style={{ animationDelay: "1.5s" }}>
          <span className="text-4xl opacity-10">🌸</span>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <div className="-mt-4 pr-20 px-6 inline-block ">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-forest text-sm font-bold rounded-full shadow-lg border border-forest">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Premium Quality Assured 🌾
              </span>
            </div>
            
           {/* <h3 className="   text-3xl md:text-4xl lg:text-5xl font-extrabold text-forest  leading-tight tracking-tight">
              Premium Dry Fruits {" "}
              <span className="relative inline-block">
                <span className="">Exellence in every order</span>
                <span className="relative z-10">Bulk or Retail</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-forest opacity-20 -rotate-1"></span>
              </span>
            </h3>}}}}}}}}}}
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-forest leading-tight tracking-tight">
               Premium Dry Fruits{" "}
              <span className="relative inline-block">
                <span className="block">Excellence in every order</span>
                <span className="relative inline-block">
                <span className="relative block">Bulk or Retail</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-forest opacity-20 -rotate-1"></span>
               </span>
              </span>
            </h3>

            <h4 className="mb-2">
              <span className="text-forest font-bold text-xl">Healthy Living</span>
            </h4>
            <p className="text-base md:text-lg text-gray-700 mb-10 leading-relaxed font-medium">
              Shop the finest quality makhana, almonds, raisins, and cashews. Sourced from the best farms, naturally dried, and delivered fresh to your doorstep.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/products"
                className="group inline-flex items-center justify-center gap-2 bg-forest text-white px-10 py-4 rounded-xl hover:bg-forest-light transition-all duration-300 font-bold shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Send Enquey
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="group inline-flex items-center justify-center gap-2 bg-white text-forest border-2 border-forest px-10 py-4 rounded-xl hover:bg-sage-light transition-all duration-300 font-bold shadow-lg hover:shadow-xl backdrop-blur-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Learn More
              </Link>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-700 flex-wrap">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-forest" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">100% Natural</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-forest" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Grade A Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-forest" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Fast Delivery</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-forest to-sage-dark opacity-20 blur-2xl animate-pulse-slow"></div>
              
              <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl transform transition-all duration-700 hover:scale-105 hover:rotate-3">
                {!showVideo || videoEnded ? (
                  <div 
                    className={`absolute inset-0 transition-all duration-1000 ${
                      videoEnded ? 'animate-scale-in' : 'animate-fade-in'
                    }`}
                  >
                    <Image
                      src="/products/heromakhana.jpeg"
                      alt="Premium Dry Fruits"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-forest/20 to-transparent"></div>
                  </div>
                ) : (
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover animate-fade-in"
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleVideoEnd}
                  >
                    <source src="/products/Fresh Quality Delivered Daily-VEED (1).mp4" type="video/mp4" />
                  </video>
                )}
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-full p-4 shadow-xl border-4 border-sage animate-bounce-slow">
                <svg className="w-12 h-12 text-forest" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>

              <div className="absolute -top-6 -left-6 bg-forest rounded-full p-4 shadow-xl animate-float">
                <span className="text-3xl">🌾</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
*/
'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

/* -------------------------------------------------
   CAROUSEL COMPONENT (MUST BE OUTSIDE HeroSection)
--------------------------------------------------*/
function CarouselInside() {
  const slides = [
    "/products/MakhanaHeroShuffle.jpeg",
    "/products/blackraisinsheroshuffle.jpeg",
    "/products/almondsheroshuffle.jpeg",
    "/products/raisinsheroshuffle.jpeg",
    "/products/cashewsheroshuffle.jpeg",
  ];

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);
  const AUTOPLAY_MS = 4500; // smoother timing

  useEffect(() => {
    timeoutRef.current = window.setTimeout(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [index]);

  return (
    <div className="w-full h-full relative">
      {slides.map((src, i) => (
        <div
          key={src}
          className={`
            absolute inset-0 
            smooth-fade 
            transition-opacity 
            duration-[1800ms] 
            ease-[cubic-bezier(0.16,1,0.3,1)]
            ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"}
          `}
        >
          <Image
            src={src}
            alt={`Slide ${i}`}
            fill
            className="object-cover rounded-full"
            priority={i === 0}
          />

          {/* optional soft blending overlay */}
          <div className="absolute inset-0 bg-black/5 backdrop-blur-[1px]" />
        </div>
      ))}

      {/* Optional navigation dots */}
      <div className="absolute left-1/2 bottom-4 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === index ? "scale-125 bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------
   HERO SECTION
--------------------------------------------------*/

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-12 md:py-20" style={{ backgroundColor: '#e2eac5' }}>
      
      {/* Background decorative blobs */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-80 h-80 bg-sage-dark rounded-full opacity-30 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-80 h-80 bg-sage-light rounded-full opacity-30 blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* LEFT CONTENT */}
          <div className="text-left">
            <div className="-mt-4 pr-20 px-6 inline-block">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-forest text-sm font-bold rounded-full shadow-lg border border-forest">
                ⭐ Premium Quality Assured 🌾
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-forest leading-tight tracking-tight">
              Premium Dry Fruits{" "}
              <span className="relative inline-block">
                <span className="block">Excellence in every order</span>
                <span className="relative inline-block">
                  <span className="relative block">Bulk or Retail</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-forest opacity-20 -rotate-1"></span>
                </span>
              </span>
            </h3>

            <h4 className="mb-2">
              <span className="text-forest font-bold text-xl">Healthy Living</span>
            </h4>

            <p className="text-base md:text-lg text-gray-700 mb-10 leading-relaxed font-medium">
              Shop the finest quality makhana, almonds, raisins, and cashews. Sourced from the best farms, naturally dried, and delivered fresh to your doorstep.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/Contact" className="group inline-flex items-center justify-center gap-2 bg-forest text-white px-10 py-4 rounded-xl hover:bg-forest-light transition-all duration-300 font-bold shadow-xl hover:shadow-2xl transform hover:scale-105">
                Get in Touch 
              </Link>

              <Link href="/about" className="group inline-flex items-center justify-center gap-2 bg-white text-forest border-2 border-forest px-10 py-4 rounded-xl hover:bg-sage-light transition-all duration-300 font-bold shadow-lg hover:shadow-xl">
                Our Vision
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE CIRCLE CAROUSEL */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px]">
              
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-forest to-sage-dark opacity-20 blur-2xl animate-pulse-slow"></div>

              {/* NEW CAROUSEL FRAME */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <div className="absolute inset-0 carousel-frame pointer-events-none"></div>

                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <CarouselInside />
                </div>
              </div>

              {/* Bottom-right floating icon */}
<div className="
  absolute 
  -bottom-3 -right-3 
  bg-white rounded-full 
  p-2 
  shadow-xl border-4 border-sage 
  animate-bounce-slow
  sm:-bottom-4 sm:-right-4 sm:p-3
  md:-bottom-6 md:-right-6 md:p-4
">
  <span className="text-xl sm:text-2xl md:text-3xl">🌟</span>
</div>

{/* Top-left floating icon */}
<div className="
  absolute 
  -top-3 -left-3 
  bg-forest rounded-full 
  p-2 shadow-xl 
  animate-float
  sm:-top-4 sm:-left-4 sm:p-3
  md:-top-6 md:-left-6 md:p-4
">
  <span className="text-xl sm:text-2xl md:text-3xl">🌾</span>
</div>


            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
