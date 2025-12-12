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
}

const productEmojis: { [key: string]: string } = {
  makhana: "🌸",
  almonds: "🌰",
  raisins: "🍇",
  cashews: "🥜",
};

const productGradients: { [key: string]: string } = {
  makhana: "from-pink-100 via-rose-50 to-pink-100",
  almonds: "from-amber-100 via-orange-50 to-amber-100",
  raisins: "from-purple-100 via-violet-50 to-purple-100",
  cashews: "from-yellow-100 via-amber-50 to-yellow-100",
};

export default function ProductCard({ product }: { product: Product }) {
  const emoji = productEmojis[product.slug] || "🌾";
  const gradient = productGradients[product.slug] || "from-green-50 to-green-100";

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
      <div className="relative overflow-hidden">
        <div className={`relative h-72 bg-gradient-to-br ${gradient} overflow-hidden flex items-center justify-center`}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.style.display = "none";
            }}
          />
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="text-3xl">{emoji}</span>
          <h3 className="text-xl font-bold text-gray-900">
            {product.name}
          </h3>
        </div>
        
        <p className="text-gray-600 text-sm mb-5 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-end justify-between mb-5 pt-3 border-t border-gray-200">
          <div>
            <p className="text-xs text-gray-500 font-medium mb-1">Starting from</p>
            <span className="text-3xl font-bold bg-gradient-to-r from-green-600 via-green-700 to-green-800 bg-clip-text text-transparent">
              {product.price}
            </span>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-green-600 text-xs font-semibold bg-green-100 px-2 py-1 rounded-full">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {product.grade}
            </div>
          </div>
        </div>

        <Link
          href={`/products/${product.slug}`}
          className="block w-full bg-gradient-to-r from-green-600 to-green-700 text-white text-center py-3.5 rounded-xl font-semibold shadow-md flex items-center justify-center gap-2"
        >
          View Details
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
