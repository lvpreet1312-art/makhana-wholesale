import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - ISKI Enterprises",
  description: "Connect with ISKI Enterprises for makhana inquiries, feedback, partnerships, or bulk orders.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50 py-16 md:py-20">
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-80 h-80 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-4 inline-block">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
              💬 Get In Touch
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            We’d love to hear from you. Whether you have questions about our products, feedback, or business inquiries, reach out to us anytime.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <span className="text-3xl">📧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-700 font-semibold mb-1">info@iskienterprises.com</p>
              <p className="text-gray-600 text-sm">We respond within 24 hours</p>
            </div>

            <div className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <span className="text-3xl">📞</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-700 font-semibold mb-1">95015 49258</p>
              <p className="text-gray-600 text-sm">Mon-Sat, 9 AM - 6 PM IST</p>
            </div>

            <div className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <span className="text-3xl">📍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-700 font-semibold mb-1">Dakhram, Darbhanga</p>
              <p className="text-gray-600 text-sm">Bihar, India</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">We’re Here to Help</h2>
              <div className="space-y-6">
                <div className="p-6 bg-green-50 rounded-lg border border-green-100 hover:border-green-300 transition">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">🛍️ General Inquiries</h3>
                  <p className="text-gray-700">
                    Have questions about our products? Need recommendations? Drop us a message and we’ll help you out.
                  </p>
                </div>

                <div className="p-6 bg-blue-50 rounded-lg border border-blue-100 hover:border-blue-300 transition">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">💚 WhatsApp Us</h3>
                  <p className="text-gray-700 mb-4">
                    For quick responses, reach out to us on WhatsApp.
                  </p>
                  <a
                    href="https://wa.me/919501549258"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-lg hover:from-green-700 hover:to-green-800 transition font-semibold shadow-md hover:shadow-lg"
                  >
                    Chat on WhatsApp
                  </a>
                </div>

                <div className="p-6 bg-purple-50 rounded-lg border border-purple-100 hover:border-purple-300 transition">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">🤝 Business Partnerships</h3>
                  <p className="text-gray-700">
                    Interested in partnering with us? We welcome collaborations and bulk orders.
                  </p>
                </div>

                <div className="p-6 bg-yellow-50 rounded-lg border border-yellow-100 hover:border-yellow-300 transition">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">⭐ Feedback</h3>
                  <p className="text-gray-700">
                    Your feedback helps us improve. Tell us about your experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-green-50 to-green-100 border-t border-green-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Follow Us On Social Media</h2>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="#" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg hover:shadow-lg transition font-semibold border border-blue-200">
              👍 Facebook
            </a>
            <a href="#" className="inline-block bg-white text-pink-600 px-6 py-3 rounded-lg hover:shadow-lg transition font-semibold border border-pink-200">
              📷 Instagram
            </a>
            <a href="#" className="inline-block bg-white text-blue-400 px-6 py-3 rounded-lg hover:shadow-lg transition font-semibold border border-blue-200">
              🐦 Twitter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
