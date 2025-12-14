import type { Metadata } from "next";
import products from "@/data/products.json";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Products - ISKI Enterprises",
  description:
    "Explore our premium range of makhana. Available for bulk and retail with licensed, Grade-A quality.",
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
    "Buy Dry Fruits Online India",
    "Fresh Dry Fruits Distributor"
  ],
};


export default function ProductsPage() {
  const makhana = products[0];

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50 py-16 md:py-20">
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-80 h-80 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-6">
            Our Product
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Our signature product Makhana, is sourced directly from trusted farmers and carefully processed to preserve its natural taste, nutrition, and purity. Each batch undergoes strict quality checks to ensure uniform size, superior crunch, and zero compromise on freshness.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <div className="sticky top-8">
                <div className="relative bg-gradient-to-br from-pink-50 to-white rounded-3xl p-8 shadow-xl">
                  {makhana.badge && (
                    <div className="absolute top-6 left-6 z-10">
                      <span className="inline-flex items-center gap-1 px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-full shadow-lg">
                        <span>✨</span> {makhana.badge}
                      </span>
                    </div>
                  )}
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:scale-105">
                    <Image
                      src={makhana.image}
                      alt={makhana.name}
                      width={500}
                      height={500}
                      className="w-full h-auto object-cover transition-transform duration-700 hover:scale-110"
                      priority
                    />
                  </div>

                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-4">
                  {makhana.grade}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                 Makhana 
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {makhana.description}
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>💚</span> Health Benefits
                </h3>
                <ul className="space-y-3">
                  {makhana.healthBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>📊</span> Nutrition Facts
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-sm text-gray-600 mb-1">Serving Size</p>
                    <p className="text-xl font-bold text-gray-900">{makhana.nutritionFacts.servingSize}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-sm text-gray-600 mb-1">Calories</p>
                    <p className="text-xl font-bold text-gray-900">{makhana.nutritionFacts.calories}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-sm text-gray-600 mb-1">Protein</p>
                    <p className="text-xl font-bold text-gray-900">{makhana.nutritionFacts.protein}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-sm text-gray-600 mb-1">Fiber</p>
                    <p className="text-xl font-bold text-gray-900">{makhana.nutritionFacts.fiber}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-sm text-gray-600 mb-1">Fat</p>
                    <p className="text-xl font-bold text-gray-900">{makhana.nutritionFacts.fat}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-sm text-gray-600 mb-1">Carbs</p>
                    <p className="text-xl font-bold text-gray-900">{makhana.nutritionFacts.carbs}</p>
                  </div>
                </div>
              </div>
            </div>
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
