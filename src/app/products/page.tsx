import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products.json";

export const metadata: Metadata = {
  title: "Products - ISKI Enterprises",
  description:
    "Explore our premium range of dry fruits including makhana, almonds, raisins, and cashews. Available for bulk and retail with licensed, Grade-A quality.",
  keywords: [
    "ISKI Enterprises",
    "Products",
    "Premium Dry Fruits",
    "Makhana In Bihar",
    "Makhana",
    "Wholesale Makhana",
    "Best Makhana in Bihar",
    "Buy Makhana Online",
    "Makhana Wholesale Supplier",
    "Makhana Suppliers",
    "Dry Fruits Supplier",
    "Bulk Dry Fruits",
    "Retail Dry Fruits",
    "Almonds",
    "Raisins",
    "Cashews",
    "Buy Dry Fruits Online India",
    "Fresh Dry Fruits Distributor"
  ],
};


export default function ProductsPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50 py-16 md:py-20">
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-80 h-80 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-4 inline-block">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
              🌾 Complete Collection
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-6">
            Our Products
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Explore our carefully selected collection of premium dry fruits, each chosen for its exceptional quality, nutritional value, and superior taste. Every product is Grade A certified.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-green-50 to-green-100 py-16 border-t border-green-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Grade A Quality</h3>
              <p className="text-gray-600">
                All products certified Grade A, sourced from the finest farms across India.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-3xl">🧪</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tested for Purity</h3>
              <p className="text-gray-600">
                Rigorous testing at every stage ensures maximum purity and safety standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-3xl">📦</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Care Packaging</h3>
              <p className="text-gray-600">
                Carefully packaged to ensure maximum freshness upon delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
