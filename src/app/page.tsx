import Link from "next/link";
import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";

export const metadata: Metadata = {
  title: "Premium Plain Makhana - ISKI Enterprises",
  description:
    "Shop premium quality Plain Makhana. 100% natural, organic, and freshly sourced. Best prices online.",
};

export default function Home() {
  return (
    <div>
      <HeroSection />

      <AboutSection />

      <section className="py-20 bg-gradient-to-b from-sage-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-white text-forest text-sm font-semibold rounded-full mb-4 border border-forest">
              Why Choose ISKI
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Why Our Makhana?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We’re committed to bringing you the finest quality makhana with exceptional taste and health benefits
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-sage hover:border-forest overflow-hidden">
              <div className="absolute inset-0 bg-sage opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-sage-dark rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-sage rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500">
                  <span className="text-3xl">🌾</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-forest transition-colors duration-300">
                  Farm Fresh
                </h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  Hand-selected from pristine water bodies in India’s finest makhana-growing regions, ensuring premium quality.
                </p>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-sage hover:border-forest overflow-hidden">
              <div className="absolute inset-0 bg-sage opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-sage-dark rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-sage rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500">
                  <span className="text-3xl">🔬</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-forest transition-colors duration-300">
                  Lab Tested
                </h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  Every batch undergoes rigorous testing for purity, safety, and nutritional quality. 100% certified.
                </p>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-sage hover:border-forest overflow-hidden">
              <div className="absolute inset-0 bg-sage opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-sage-dark rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-sage rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500">
                  <span className="text-3xl">📦</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-forest transition-colors duration-300">
                  Fast Delivery
                </h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  Carefully packaged and delivered within 2-3 days to ensure freshness reaches your doorstep.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-sage text-forest text-sm font-semibold rounded-full mb-4">
                Health & Nutrition
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                Makhana: Nature’s Superfood
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Makhana, also known as fox nuts, has been used in traditional Ayurvedic medicine for centuries. These water-grown seeds are packed with essential nutrients and offer numerous health benefits for the whole family.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-forest flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Low Calorie Snack</h3>
                    <p className="text-gray-600">Just 106 calories per 100g, perfect for weight management</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-forest flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Rich in Antioxidants</h3>
                    <p className="text-gray-600">Combats free radicals and supports overall wellness</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-forest flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">High in Fiber</h3>
                    <p className="text-gray-600">14.2g per 100g supports digestive health</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-forest flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Gluten-Free & Vegan</h3>
                    <p className="text-gray-600">Suitable for all dietary preferences</p>
                  </div>
                </li>
              </ul>
              <Link
                href="/blog/health-benefits-of-makhana"
                className="inline-flex items-center gap-2 bg-forest text-white px-8 py-4 rounded-lg font-semibold hover:bg-forest-light transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-sage via-sage-light to-white rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                  <h4 className="font-bold text-forest mb-2 flex items-center gap-2">
                    <span className="text-2xl">💪</span> Protein Rich
                  </h4>
                  <p className="text-gray-600 text-sm">4.3g protein per 100g for muscle support</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                  <h4 className="font-bold text-forest mb-2 flex items-center gap-2">
                    <span className="text-2xl">❤️</span> Heart Health
                  </h4>
                  <p className="text-gray-600 text-sm">Low sodium and cholesterol-free superfood</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                  <h4 className="font-bold text-forest mb-2 flex items-center gap-2">
                    <span className="text-2xl">😴</span> Better Sleep
                  </h4>
                  <p className="text-gray-600 text-sm">Natural compounds promote restful sleep</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                  <h4 className="font-bold text-forest mb-2 flex items-center gap-2">
                    <span className="text-2xl">🧠</span> Mental Clarity
                  </h4>
                  <p className="text-gray-600 text-sm">Contains minerals that support brain function</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-forest py-20 overflow-hidden">
        <div className="absolute inset-0 bg-forest-light/30"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Loved by Our Customers
            </h2>
            <p className="text-sage text-lg max-w-2xl mx-auto">
              Join thousands of satisfied customers across India enjoying premium makhana
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white mb-6 leading-relaxed italic">
                &ldquo;Exceptional quality! The makhana is so fresh and perfectly roasted. My entire family loves it. Great prices too!&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-sage rounded-full flex items-center justify-center text-forest font-bold text-xl">
                  P
                </div>
                <div>
                  <p className="text-white font-bold">Priya Sharma</p>
                  <p className="text-sage text-sm">Mumbai</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white mb-6 leading-relaxed italic">
                &ldquo;I&apos;ve tried multiple brands but ISKI&apos;s makhana is unbeatable. Fresh, nutritious, and delivered on time every time!&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  R
                </div>
                <div>
                  <p className="text-white font-bold">Rajesh Kumar</p>
                  <p className="text-green-200 text-sm">Delhi</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white mb-6 leading-relaxed italic">
                &ldquo;The best snack for my kids. Healthy, tasty, and organic. I highly recommend ISKI Enterprises for their quality.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  S
                </div>
                <div>
                  <p className="text-white font-bold">Sneha Patel</p>
                  <p className="text-blue-200 text-sm">Bangalore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
