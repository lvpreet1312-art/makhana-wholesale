import Link from "next/link";
import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products.json";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "Home - ISKI Enterprises",
  description:
    "Premium quality dry fruits . Makhana, almonds, raisins, and cashews. 100% natural, organic, and freshly sourced.",
};

export default function Home() {
  return (
    <div>
      <HeroSection />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-sage text-forest text-sm font-semibold rounded-full mb-4">
              Our Collection
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Carefully selected dry fruits with exceptional quality and nutritional value
            </p>
          </div>
          <div className="w-full 
  max-w-[300px]   
  sm:max-w-3xl
  lg:max-w-6xl
  xl:max-w-7xl
  mx-auto
  px-3 sm:px-6 lg:px-8
">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 place-items-center">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            </div>
          </div>
          <div className="text-center mt-16">
            <Link
              href="/products"
              className="inline-block bg-forest text-white px-8 py-4 rounded-lg hover:bg-forest-light transition font-semibold shadow-lg hover:shadow-xl"
            >
              Explore All Products
            </Link>
          </div>
        </div>
      </section>

      <section className="relative bg-sage-light py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-white text-forest text-sm font-semibold rounded-full mb-4 border border-forest">
              Our Promise
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Committed to delivering the best dry fruits with premium quality and exceptional service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-sage hover:border-forest overflow-hidden">
              <div className="absolute inset-0 bg-sage opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-sage-dark rounded-full opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-24 h-24 bg-sage rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-md">
                  <span className="text-5xl">🌾</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-forest transition-colors duration-300">
                  Premium Quality
                </h3>
                <p className="text-gray-600 text-center leading-relaxed mb-4">
                  Hand-selected from the finest farms, ensuring superior taste and optimal nutritional value in every bite.
                </p>
                <div className="flex items-center justify-center gap-1 text-forest text-sm font-semibold">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Farm Fresh Guarantee
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-sage hover:border-forest overflow-hidden">
              <div className="absolute inset-0 bg-sage opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-sage-dark rounded-full opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-24 h-24 bg-sage rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-md">
                  <span className="text-5xl">✅</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-forest transition-colors duration-300">
                  Quality Assured
                </h3>
                <p className="text-gray-600 text-center leading-relaxed mb-4">
                  Rigorous testing and quality control at every stage of processing to ensure purity and safety.
                </p>
                <div className="flex items-center justify-center gap-1 text-forest text-sm font-semibold">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Lab Tested & Certified
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-sage hover:border-forest overflow-hidden">
              <div className="absolute inset-0 bg-sage opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-sage-dark rounded-full opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-24 h-24 bg-sage rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-md">
                  <span className="text-5xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-forest transition-colors duration-300">
                  Fast Delivery
                </h3>
                <p className="text-gray-600 text-center leading-relaxed mb-4">
                  Carefully packaged and delivered to ensure maximum freshness and on-time arrival at your doorstep.
                </p>
                <div className="flex items-center justify-center gap-1 text-forest text-sm font-semibold">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  2-3 Days Shipping
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-sage text-forest text-sm font-semibold rounded-full mb-4">
              Knowledge Hub
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Latest Blog Posts
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Learn about the health benefits and nutritional value of our premium dry fruits
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-sage overflow-hidden">
              <div className="h-2 bg-forest"></div>
              <div className="p-6">
                <span className="inline-block text-sm font-semibold text-forest bg-sage px-3 py-1 rounded-full mb-3">
                  Dec 1, 2024
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-forest transition">
                  Health Benefits of Makhana
                </h3>
                <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                  Discover why makhana has been revered in traditional medicine for centuries and its amazing health benefits...
                </p>
                <Link href="/blog/health-benefits-of-makhana" className="inline-flex items-center text-forest font-semibold hover:text-forest-light group-hover:gap-2 transition">
                  Read More <span className="group-hover:translate-x-1 transition">→</span>
                </Link>
              </div>
            </article>

            <article className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-sage overflow-hidden">
              <div className="h-2 bg-forest"></div>
              <div className="p-6">
                <span className="inline-block text-sm font-semibold text-forest bg-sage px-3 py-1 rounded-full mb-3">
                  Nov 28, 2024
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-forest transition">
                  Almonds and Brain Health
                </h3>
                <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                  Learn how almonds can boost your memory, concentration, and cognitive function naturally...
                </p>
                <Link href="/blog/almonds-brain-health" className="inline-flex items-center text-forest font-semibold hover:text-forest-light group-hover:gap-2 transition">
                  Read More <span className="group-hover:translate-x-1 transition">→</span>
                </Link>
              </div>
            </article>

            <article className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-sage overflow-hidden">
              <div className="h-2 bg-forest"></div>
              <div className="p-6">
                <span className="inline-block text-sm font-semibold text-forest bg-sage px-3 py-1 rounded-full mb-3">
                  Nov 25, 2024
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-forest transition">
                  Raisins: Natural Energy
                </h3>
                <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                  Why raisins are the perfect natural energy booster for active individuals and athletes...
                </p>
                <Link href="/blog/raisins-natural-energy" className="inline-flex items-center text-forest font-semibold hover:text-forest-light group-hover:gap-2 transition">
                  Read More <span className="group-hover:translate-x-1 transition">→</span>
                </Link>
              </div>
            </article>
          </div>

          <div className="text-center mt-16">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-forest text-white px-10 py-4 rounded-xl hover:bg-forest-light transition-all duration-300 font-bold shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              View All Blog Posts
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
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
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-sage text-lg max-w-2xl mx-auto">
              Trusted by thousands of health-conscious customers across India
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
                "The quality of makhana is exceptional! Fresh, crunchy, and perfectly roasted. Will definitely order again."
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
                "Best quality almonds I've ever purchased. Great taste, excellent packaging, and super fast delivery!"
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
                "Premium quality cashews at reasonable prices. The freshness is unmatched. Highly recommended!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  A
                </div>
                <div>
                  <p className="text-white font-bold">Anita Patel</p>
                  <p className="text-green-200 text-sm">Bangalore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-br from-green-600 via-green-700 to-emerald-700 rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Ready to Experience Premium Quality?
              </h2>
              <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Join thousands of satisfied customers and discover the finest selection of dry fruits delivered fresh to your doorstep.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 bg-white text-green-700 px-10 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 font-bold shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Start Shopping
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-green-800 text-white border-2 border-white/30 px-10 py-4 rounded-xl hover:bg-green-900 transition-all duration-300 font-bold shadow-xl backdrop-blur-sm"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
