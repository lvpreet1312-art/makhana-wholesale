import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🌾</span>
              </div>
              <span className="font-bold text-xl text-white">ISKI Enterprises</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Premium quality Makhanas delivered to your doorstep with care, commitment, and the finest selection.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-green-400 transition text-sm font-semibold">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition text-sm font-semibold">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition text-sm font-semibold">
                Twitter
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products" className="text-gray-400 hover:text-green-400 transition text-sm">
                  → Product
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-green-400 transition text-sm">
                  → Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-green-400 transition text-sm">
                  → About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-green-400 transition text-sm">
                  → Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Our Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products" className="text-gray-400 hover:text-green-400 transition text-sm">
                  → Makhana
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Contact Info</h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-green-400 font-semibold mb-1">Email</p>
                <p className="text-gray-400">info@iskienterprises.com</p>
              </div>
              <div>
                <p className="text-green-400 font-semibold mb-1">Phone</p>
                <p className="text-gray-400">95015 49258</p>
              </div>
              <div>
                <p className="text-green-400 font-semibold mb-1">Address</p>
                <p className="text-gray-400">Dakhram,Darbhanga,Bihar</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              &copy; 2025 ISKI Enterprises. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 hover:text-green-400 transition text-sm font-semibold leading-relaxed">
              GST NO. 10JREPK5429KIZO
            </p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-green-400 transition">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-green-400 transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
