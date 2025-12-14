'use client';

import Link from "next/link";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string;
  grade: string;
  price: string;
  originalPrice?: string;
  badge?: string;
}

const productEmojis: { [key: string]: string } = {
  "plain-makhana": "🌸",
  "salted-makhana": "🧂",
  "masala-makhana": "🌶️",
  "honey-roasted-makhana": "🍯",
  "organic-makhana": "🌱",
};

const productGradients: { [key: string]: string } = {
  "plain-makhana": "from-pink-100 via-rose-50 to-pink-100",
  "salted-makhana": "from-amber-50 via-yellow-50 to-amber-100",
  "masala-makhana": "from-orange-100 via-red-50 to-orange-100",
  "honey-roasted-makhana": "from-yellow-50 via-orange-50 to-yellow-100",
  "organic-makhana": "from-green-50 via-emerald-50 to-green-100",
};

export default function ProductCard({ product }: { product: Product }) {
  const emoji = productEmojis[product.slug] || "🌾";
  const gradient = productGradients[product.slug] || "from-green-50 to-green-100";

  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:border-forest hover:-translate-y-2">
      <div className="relative overflow-hidden">
        {product.badge && (
          <div className="absolute top-4 left-4 z-20 flex items-center gap-1 bg-forest text-white text-xs font-bold px-3 py-1.5 rounded-full animate-pulse">
            ✨ {product.badge}
          </div>
        )}
        <div className={`relative h-72 bg-gradient-to-br ${gradient} overflow-hidden flex items-center justify-center group-hover:scale-110 transition-transform duration-700`}>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-125"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-3xl group-hover:scale-110 transition-transform duration-500 inline-block">{emoji}</span>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-forest transition-colors duration-300">
            {product.name}
          </h3>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-center justify-end mb-5 pt-3 border-t border-gray-200">
          <div className="flex items-center gap-1.5 text-forest text-xs font-semibold bg-sage px-2.5 py-1.5 rounded-full">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {product.grade}
          </div>
        </div>

        <Link
          href="/contact"
          className="block w-full bg-forest hover:bg-forest-light text-white text-center py-3 rounded-lg font-semibold shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all duration-300 transform group-hover:scale-105"
        >
          Contact Us
          <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
