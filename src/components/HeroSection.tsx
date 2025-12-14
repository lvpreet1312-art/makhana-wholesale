'use client';

import Link from 'next/link';
import Image from 'next/image';

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
            <div className="-mt-2 pr-10 px-4 inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-forest text-sm font-bold rounded-full shadow-lg border border-forest">
                ⭐ Premium Quality Assured 🌾
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-serif text-forest leading-tight tracking-tight">
              Premium Quality{" "}
              <span className="relative inline-block">
                <span className="block">MAKHANA</span>
                <h4 className="text-2xl md:text-xl lg:text-3xl font-extrabold text-forest leading-tight tracking-tight">
                  <span className="relative block">Wholesale & Bulk Supply</span>
                
            </h4>

                </span>
            </h3>
            

            <h4 className="mb-2">
              <span className="text-forest font-bold text-xl">Healthy Living</span>
            </h4>

            <p className="text-base md:text-lg text-gray-700 mb-10 leading-relaxed font-medium">
              Experience the crunch of our premium  Makhana. Sourced from the best farms, naturally processed, and delivered fresh to your doorstep. The perfect guilt-free snack.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/contact" className="group inline-flex items-center justify-center gap-2 bg-forest text-white px-10 py-4 rounded-xl hover:bg-forest-light transition-all duration-300 font-bold shadow-xl hover:shadow-2xl transform hover:scale-105">
                Contact Us
              </Link>

              <Link href="/about" className="group inline-flex items-center justify-center gap-2 bg-white text-forest border-2 border-forest px-10 py-4 rounded-xl hover:bg-sage-light transition-all duration-300 font-bold shadow-lg hover:shadow-xl">
                Our Vision
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px]">
              <Image
                src="/products/makhana.png"
                alt="Premium Plain Makhana"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
