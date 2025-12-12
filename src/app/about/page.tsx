import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - DryFruit Store",
  description: "Learn about our mission to provide premium quality dry fruits and our commitment to health and wellness.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50 py-16 md:py-20">
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-80 h-80 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-4 inline-block">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
              🌾 Our Story
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-6">
            About DryFruit Store
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            We are committed to bringing you the finest quality dry fruits, sourced from trusted farms and delivered with care to your doorstep.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-lg">
                  DryFruit Store was founded with a simple vision: to make <span className="font-semibold text-green-600">premium quality dry fruits</span> accessible to everyone. We believe that good health starts with good nutrition.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Over the years, we have built <span className="font-semibold text-green-600">strong relationships with farmers</span> and suppliers across India, ensuring that every product we sell meets our strict quality standards.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Today, we are proud to serve <span className="font-semibold text-green-600">thousands of customers</span> who trust us for their daily nutrition needs.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-green-50 h-96 rounded-2xl flex items-center justify-center shadow-lg border border-green-200">
                <div className="text-center">
                  <span className="text-8xl">🌾</span>
                  <p className="text-gray-700 mt-4 font-semibold text-lg">Farm Fresh Quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Guiding principles that shape everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-4">👑</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality First</h3>
                <p className="text-gray-700 leading-relaxed">
                  We never compromise on quality. Every batch is carefully selected, tested, and certified to exceed our high standards.
                </p>
              </div>
            </div>

            <div className="group relative bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Transparency</h3>
                <p className="text-gray-700 leading-relaxed">
                  Complete transparency in sourcing, processing, and quality control. You deserve to know exactly what you're buying.
                </p>
              </div>
            </div>

            <div className="group relative bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-4">❤️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Health & Wellness</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our ultimate goal is contributing to your health. We promote a lifestyle centered around good nutrition and wellness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Quality Assurance Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Sourcing",
                description: "We partner with trusted farmers and suppliers to source the finest produce.",
              },
              {
                step: "2",
                title: "Testing",
                description: "Every batch undergoes rigorous testing for purity, moisture, and contamination.",
              },
              {
                step: "3",
                title: "Processing",
                description: "Using modern techniques while respecting traditional methods to preserve nutrition.",
              },
              {
                step: "4",
                title: "Packaging",
                description: "Careful packaging ensures products stay fresh from our facility to your home.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Grade A Premium Quality Products",
              "100% Natural and Organic",
              "Rigorous Quality Testing",
              "Transparent Sourcing",
              "Expert Nutrition Guidance",
              "Customer-Centric Approach",
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <span className="text-2xl text-green-600 flex-shrink-0">✓</span>
                <span className="text-gray-700 text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <p className="text-gray-700 text-lg mb-8">
            Have questions? We'd love to hear from you. Contact us today for any inquiries or feedback.
          </p>
          <a
            href="/contact"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition font-semibold"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
