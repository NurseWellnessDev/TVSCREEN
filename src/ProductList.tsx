import React from "react";

interface Product {
  name: string;
  type: "SATIVA" | "HYBRID" | "INDICA" | "NONE";
  thc: number;
  cbd: number;
  price: number;
  image: string;
}

const ProductList: React.FC = () => {
  const prerolls: Product[] = [
    {
      name: "Infused Black Garlic Gelato",
      type: "HYBRID",
      thc: 58.87,
      cbd: 0.0,
      price: 50.0,
      image: "https://nursewellness.com/wp-content/uploads/2024/11/bliss-1.webp"
    },
    {
      name: "Hippie Crippler",
      type: "SATIVA",
      thc: 27.02,
      cbd: 0,
      price: 40.0,
      image: "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4549441659.webp?height=80&width=80"
    },
    {
      name: "King Louis XIII",
      type: "INDICA",
      thc: 29.8,
      cbd: 0.1,
      price: 40.0,
      image: "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4516071010.jpg?height=80&width=80"
    },
    {
      name: "LA Gas Face",
      type: "SATIVA",
      thc: 29.8,
      cbd: 0.1,
      price: 40.0,
      image: "https://nursewellness.com/wp-content/uploads/2024/11/LAG-2.png"
    },
    {
      name: "OG Kush",
      type: "INDICA",
      thc: 28.13,
      cbd: 0.1,
      price: 35.0,
      image: "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4595097024.webp?height=80&width=80"
    },
    {
      name: "Chem de la Chem",
      type: "SATIVA",
      thc: 35.33,
      cbd: 0.1,
      price: 40.0,
      image: "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4440965697.webp?height=80&width=80"
    },
    {
      name: "Swiss Watch",
      type: "HYBRID",
      thc: 24.8,
      cbd: 0.08,
      price: 40.0,
      image: "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4598761932.jpg?height=80&width=80"
    },
    {
      name: "Girl Scout Cookies",
      type: "INDICA",
      thc: 28.13,
      cbd: 0.1,
      price: 35.0,
      image: "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4595091864.webp?height=80&width=80"
    },
    {
      name: "Super Silver Haze",
      type: "SATIVA",
      thc: 28.13,
      cbd: 0.1,
      price: 35.0,
      image: "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4595097064.webp?height=80&width=80"
    },
    {
      name: "Infused Wedding Cake",
      type: "INDICA",
      thc: 47.67,
      cbd: 0.0,
      price: 50.0,
      image: "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4595091884.webp?height=80&width=80"
    },
    {
      name: "Infused Green Crack",
      type: "SATIVA",
      thc: 58.87,
      cbd: 0.0,
      price: 50.0,
      image: "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4595098019.webp?height=80&width=80"
    },
    {
      name: "Lambs Bread",
      type: "SATIVA",
      thc: 21.05,
      cbd: 5.0,
      price: 10.0,
      image: "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4627544503.webp?height=80&width=80"
    },
    {
      name: "Honey Bun",
      type: "HYBRID",
      thc: 37.64,
      cbd: 5.0,
      price: 10.0,
      image: "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4627544503.webp?height=80&width=80"
    },
    {
      name: "Lemon Cherry Gelato",
      type: "INDICA",
      thc: 24.64,
      cbd: 0.0,
      price: 10.0,
      image: "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4627544503.webp?height=80&width=80"
    },
    {
      name: "Lemon Drop",
      type: "SATIVA",
      thc: 28.17,
      cbd: 0.0,
      price: 10.0,
      image: "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4627544503.webp?height=80&width=80"
    },
    {
      name: "Cereal Milk",
      type: "HYBRID",
      thc: 32.16,
      cbd: 5.0,
      price: 10.0,
      image: "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4627544503.webp?height=80&width=80"
    },
    {
      name: "Granddaddy Purple",
      type: "INDICA",
      thc: 34.06,
      cbd: 5.0,
      price: 10.0,
      image: "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4627544503.webp?height=80&width=80"
    },
    {
      name: "Infused NYC Diesel",
      type: "SATIVA",
      thc: 22,
      cbd: 10.66,
      price: 20.0,
      image: "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4417913613.webp?height=80&width=80"
    },
    {
      name: "Infused Gold Benjamin",
      type: "HYBRID",
      thc: 26.28,
      cbd: 10.5,
      price: 20.0,
      image: "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4417903995.webp?height=80&width=80"
    },
    {
      name: "Infused Yoda OG",
      type: "INDICA",
      thc: 34.7,
      cbd: 10.8,
      price: 20.0,
      image: "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4417908936.webp?height=80&width=80"
    }
  ];
  
  const vapes: Product[] = [
    {
      name: "Maui Wowie",
      type: "SATIVA",
      thc: 53.47,
      cbd: 0.0,
      price: 35.0,
      image: "https://nursewellness.com/wp-content/uploads/2024/11/mw.webp"
    },
    {
      name: "Wedding Cake",
      type: "HYBRID",
      thc: 52.29,
      cbd: 0.0,
      price: 35.0,
      image: "https://nursewellness.com/wp-content/uploads/2024/11/wc.webp"
    },
    {
      name: "Larry OG",
      type: "INDICA",
      thc: 54.40,
      cbd: 0.0,
      price: 35.0,
      image: "https://nursewellness.com/wp-content/uploads/2024/11/log.webp"
    },
    {
      name: "Live Resin Blue Dream",
      type: "SATIVA",
      thc: 72.97,
      cbd: 2.05,
      price: 50.0,
      image: "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4443339703.webp?height=80&width=80"
    },
    {
      name: "Live Resin Runtz",
      type: "HYBRID",
      thc: 67.04,
      cbd: 12.94,
      price: 50.0,
      image: "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4443339703.webp?height=80&width=80"
    },
    {
      name: "Live Resin Bubba Kush",
      type: "INDICA",
      thc: 75.13,
      cbd: 2.8,
      price: 50.0,
      image: "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4443339703.webp?height=80&width=80"
    },
    {
      name: "Live Resin Sour Diesel",
      type: "SATIVA",
      thc: 77.66,
      cbd: 2.07,
      price: 50.0,
      image: "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4443339703.webp?height=80&width=80"
    },
    {
      name: "Live Resin Gelato",
      type: "HYBRID",
      thc: 75.19,
      cbd: 0.99,
      price: 50.0,
      image: "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4443339703.webp?height=80&width=80"
    },
    {
      name: "Couch Lock Watermelon",
      type: "INDICA",
      thc: 41.4,
      cbd: 27.92,
      price: 35.0,
      image: "https://nursewellness.com/wp-content/uploads/2024/11/couch-lock.png?height=80&width=80"
    },
    {
      name: "Supercharged Blue Dream",
      type: "SATIVA",
      thc: 45.73,
      cbd: 30.87,
      price: 35.0,
      image: "https://nursewellness.com/wp-content/uploads/2024/11/supercharged.png?height=80&width=80"
    },
    {
      name: "Cloud Nine M.A.C.",
      type: "HYBRID",
      thc: 44.95,
      cbd: 30.17,
      price: 50.0,
      image: "https://nursewellness.com/wp-content/uploads/2024/11/cloud9thca.png?height=80&width=80"
    },
    {
      name: "Social Durban Poison",
      type: "SATIVA",
      thc: 31.13,
      cbd: 20.98,
      price: 35.0,
      image: "https://nursewellness.com/wp-content/uploads/2024/11/social.png?height=80&width=80"
    },
    {
      name: "Chill Grape Ape",
      type: "INDICA",
      thc: 45.5,
      cbd: 41.24,
      price: 35.0,
      image: "https://nursewellness.com/wp-content/uploads/2024/11/chillgrape.png?height=80&width=80"
    },
  ];
  

  const concentrate: Product[] = [
    
    {
      name: "Lemon Cherry Gelato Live Rosin",
      type: "HYBRID",
      thc: 75.49,
      cbd: 0.48,
      price: 75.0,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4459363644.webp?height=80&width=80"
    },
    {
      name: "King Louis XIII Badder",
      type: "INDICA",
      thc: 89.17,
      cbd: 0.0,
      price: 40.0,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4441159787.webp?height=80&width=80"
    },
    {
      name: "Strawberry Cooler Live Rosin",
      type: "HYBRID",
      thc: 80.41,
      cbd: 0.0,
      price: 75.0,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4441143971.webp?height=80&width=80"
    },
    {
      name: "Nano THC Oil",
      type: "NONE",
      thc: 0.0,
      cbd: 0.0,
      price: 30.0,
      image:
        "https://nursewellness.com/wp-content/uploads/2024/11/tin.png"
    },
    {
      name: "GG#4 Live Rosin",
      type: "HYBRID",
      thc: 81.52,
      cbd: 0.0,
      price: 75.0,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4440969116.webp?height=80&width=80"
    },
    {
      name: "99% Diamonds",
      type: "NONE",
      thc: 99.14,
      cbd: 0.0,
      price: 25.0,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4440967190.webp?height=80&width=80"
    },
    
  ];

  return (
<div className="relative w-full h-screen bg-gradient-radial from-zinc-900 via-blue-400 to-black bg-center bg-gradient-to-t p-6">
{/* Full-width grid for 3 columns */}
      <div className="grid grid-cols-3 gap-8 w-full h-full">
        {/* Pre-rolls Section */}
        <ProductSection title="Flower" products={prerolls} />

        {/* Vapes Section */}
        <ProductSection title="Vapes" products={vapes} />

        {/* Concentrates Section */}
        <ProductSection title="Concentrate" products={concentrate} />
      </div>

      {/* Full-Width Bottom Block */}
      <div className="absolute bottom-0 left-0 w-full h-1/5 bg-zinc-700 flex items-center justify-center gap-10 z-20 border-t-8 border-zinc-600 shadow-[0_-100px_200px_-30px_rgba(0,0,0,0.9)]">
        {/* Drag Tab */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-20 h-2 bg-zinc-500 rounded-full"></div>

        {/* Logo */}
        <img
          src="https://nurseburlington.com/wp-content/uploads/2024/11/whitefontlogo.png"
          alt="Logo"
          className="h-20 md:h-32"
        />

        {/* Menu Text */}
        <div className="relative text-white font-semibold italic text-6xl md:text-8xl">
          MENU
          {/* Large Leaf Icon */}
          <img
            src="https://nursewellness.com/wp-content/uploads/2024/11/NewLeaf.png"
            alt="Leaf"
            className="absolute top-5 left-52 w-24 h-24 md:w-32 md:h-32"
          />
        </div>
      </div>
    </div>
  );
  
  
  
  
  
  
  
};

interface ProductSectionProps {
  title: string;
  products: Product[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, products }) => (
  <div className="flex flex-col items-center h-full hide-scrollbar overflow-hidden relative bg-zinc-700 rounded-2xl">
    <h2 className="mb-4 text-6xl md:text-6xl xl:text-5xl font-bold text-white py-10 px-6 relative z-10 top-3">
      {title}
    </h2>
    {/* Main Container with Zinc-800 Background */}
    <div className="relative w-full p-8 h-full overflow-hidden border-t-8 border-zinc-600 bg-zinc-800">
      {/* Gradient Overlay Above Product Cards */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-zinc-800 via-zinc-900/50 to-transparent pointer-events-none z-20"></div>

      {/* New Zinc-900 Container */}
      <div className="bg-zinc-900 p-6 rounded-lg space-y-8 -mt-12 relative z-10">
        {/* Product List */}
        <div className="space-y-8 animate-autoScroll relative z-0">
          {[...products, ...products].map((product, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-8 px-8 rounded-lg bg-white shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all"
            >
              <div className="flex items-center gap-6 pr-10">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 md:w-24 h-20 md:h-24 rounded-lg object-cover bg-gray-200"
                />
                <div className="space-y-3">
                  {/* Increased Product Title Font Size */}
                  <h3 className="text-2xl md:text-[2.5rem] font-semibold text-gray-800 leading-[1.1]">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-3 text-sm md:text-lg text-gray-600">
                    <span
                      className={`font-bold px-3 py-2 rounded-full ${
                        product.type === "SATIVA"
                          ? "bg-red-200 text-red-600"
                          : product.type === "HYBRID"
                          ? "bg-green-200 text-green-700"
                          : product.type === "INDICA"
                          ? "bg-blue-200 text-blue-600"
                          : "bg-gray-300 text-gray-600"
                      }`}
                    >
                      {product.type}
                    </span>
                    <div className="flex md:text-[1.25rem] gap-4 font-bold whitespace-nowrap">
                      <span>THCA: {product.thc}%</span>
                      <span>CBD: {product.cbd}%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-lg md:text-3xl font-bold text-gray-800 ml-auto">
                ${product.price.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);


































export default ProductList;
