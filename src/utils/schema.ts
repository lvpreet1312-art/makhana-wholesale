export function generateProductSchema(product: {
  name: string;
  description: string;
  grade: string;
  price: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "DryFruit Store",
    },
    offers: {
      "@type": "Offer",
      price: product.price.split("/")[0].replace("₹", "").trim(),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
  };
}

export function generateBlogPostSchema(post: {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "DryFruit Store",
    },
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DryFruit Store",
    description: "Premium quality dry fruits online store",
    url: "https://dryfruitstore.com",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+91-1234-567-890",
      email: "info@dryfruitstore.com",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Market Street",
      addressLocality: "Your City",
      addressCountry: "IN",
    },
  };
}
