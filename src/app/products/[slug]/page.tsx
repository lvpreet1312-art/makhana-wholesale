import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import products from "@/data/products.json";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = products.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} - DryFruit Store`,
    description: product.description,
    keywords: [product.name.toLowerCase(), "dry fruits", "shop"],
  };
}

export default async function ProductPage({ params }: PageProps) {
  const resolvedParams = await params;
  const product = products.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  return (
    <div>
      <section className="bg-green-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/products" className="hover:text-green-600">
              Products
            </Link>
            <span>/</span>
            <span>{product.name}</span>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl">🌾</span>
                <p className="text-gray-600 mt-2">{product.name} Image</p>
              </div>
            </div>

            <div>
              <div className="mb-6">
                <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {product.grade}
                </span>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-xl text-gray-600 mb-6">{product.description}</p>

              <div className="mb-8 p-6 bg-green-50 rounded-lg">
                <p className="text-lg text-gray-600 mb-4">Price:</p>
                <p className="text-4xl font-bold text-green-600">{product.price}</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Buy from trusted marketplaces:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <a
                    href={product.buyLinks.amazon}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg transition"
                  >
                    Amazon
                  </a>
                  <a
                    href={product.buyLinks.flipkart}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
                  >
                    Flipkart
                  </a>
                  <a
                    href={product.buyLinks.meesho}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition"
                  >
                    Meesho
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Nutritional Information</h2>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Serving Size:</span>
                  <span className="font-semibold">{product.nutritionFacts.servingSize}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Calories:</span>
                  <span className="font-semibold">{product.nutritionFacts.calories}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Protein:</span>
                  <span className="font-semibold">{product.nutritionFacts.protein}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Fat:</span>
                  <span className="font-semibold">{product.nutritionFacts.fat}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Carbohydrates:</span>
                  <span className="font-semibold">{product.nutritionFacts.carbs}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Fiber:</span>
                  <span className="font-semibold">{product.nutritionFacts.fiber}</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Health Benefits</h2>
              <ul className="space-y-3">
                {product.healthBenefits.map((benefit, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Products</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {products
              .filter((p) => p.slug !== product.slug)
              .map((p) => (
                <Link
                  key={p.id}
                  href={`/products/${p.slug}`}
                  className="px-6 py-3 bg-white border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 font-semibold transition"
                >
                  {p.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
