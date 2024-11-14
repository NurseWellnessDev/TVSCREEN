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
  const flowers: Product[] = [
    {
      name: "WNC: Indoor Swiss Watch Hydro- THCa Flower 3.5g",
      type: "HYBRID",
      thc: 24.8,
      cbd: 0.08,
      price: 40.0,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4598761932.jpg?height=80&width=80"
    },
    {
      name: "WNC: Indoor King Louis XIII Living Soil- THCa Flower 3.5g",
      type: "INDICA",
      thc: 29.8,
      cbd: 0.1,
      price: 40.0,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4516071010.jpg?height=80&width=80"
    },
    {
      name: "WNC: Indoor Hippie Crippler Hydro- THCa  Flower 3.5g",
      type: "SATIVA",
      thc: 27.02,
      cbd: 0,
      price: 40.0,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4549441659.webp?height=80&width=80"
    },
    {
      name: "WNC: Indoor LA Gas Face Hydro - THCa  Flower 3.5g",
      type: "SATIVA",
      thc: 29.8,
      cbd: 0.1,
      price: 40.0,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4516071010.jpg?height=80&width=80"
    },

    {
      name: "WNC: Indoor Chem de la Chem Hydro - THCa  Flower 3.5g",
      type: "SATIVA",
      thc: 35.33,
      cbd: 0.1,
      price: 40.0,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4440965697.webp?height=80&width=80"
    },
    {
      name: "Enjoy: Couch Lock THCa Flower - 3.5g - OG Kush",
      type: "INDICA",
      thc: 28.13,
      cbd: 0.1,
      price: 35.0,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4595097024.webp?height=80&width=80"
    },
    {
      name: "Enjoy: Vibes THCa Flower - 3.5g -Girl Scout Cookies",
      type: "INDICA",
      thc: 28.13,
      cbd: 0.1,
      price: 35.0,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4595091864.webp?height=80&width=80"
    },
    {
      name: "Enjoy: Social THCa Flower - 3.5g - Super Silver Haze",
      type: "SATIVA",
      thc: 28.13,
      cbd: 0.1,
      price: 35.0,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4595097064.webp?height=80&width=80"
    },
    {
      name: "Enjoy: Euphoria Platinum THCa Flower - 3.5g",
      type: "SATIVA",
      thc: 58.87,
      cbd: 0.0,
      price: 50.0,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4595098019.webp?height=80&width=80"
    },
    {
      name: "Enjoy: Bliss Platinum THCa Flower - 3.5g",
      type: "HYBRID",
      thc: 58.87,
      cbd: 0.0,
      price: 50.0,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4595098019.webp?height=80&width=80"
    },
    {
      name: "Enjoy: Chill Platinum THCa Flower - 3.5g",
      type: "INDICA",
      thc: 47.67,
      cbd: 0.0,
      price: 50.0,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4595091884.webp?height=80&width=80"
    }
  ];

  const prerolls: Product[] = [
    {
      name: "WNC: Indoor Lambs Bread Living Soil- THCa Prerolls",
      type: "SATIVA",
      thc: 21.05,
      cbd: 5.0,
      price: 10.0,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4627544503.webp?height=80&width=80"
    },
    {
      name: "WNC: Indoor Lemon Drop Hydro- THCa Prerolls",
      type: "SATIVA",
      thc: 28.17,
      cbd: 0.0,
      price: 10.0,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4627544503.webp?height=80&width=80"
    },
    {
      name: "WNC: Indoor Lemon Cherry Gelato Living Soil - THCa Prerolls",
      type: "INDICA",
      thc: 24.64,
      cbd: 0.0,
      price: 10.0,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4627544503.webp?height=80&width=80"
    },
    {
      name: "WNC: Indoor Granddaddy Purple - THCa Prerolls",
      type: "INDICA",
      thc: 34.06,
      cbd: 5.0,
      price: 10.0,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4627544503.webp?height=80&width=80"
    },
    {
      name: "WNC: Indoor Honey Bun Living Soil - THCa Prerolls",
      type: "HYBRID",
      thc: 37.64,
      cbd: 5.0,
      price: 10.0,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4627544503.webp?height=80&width=80"
    },
    {
      name: "WNC: Indoor Cereal Milk - THCa Prerolls",
      type: "HYBRID",
      thc: 32.16,
      cbd: 5.0,
      price: 10.0,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4627544503.webp?height=80&width=80"
    },
    {
      name: "Imperial: THCa 2G Loaded Prerolls - NYC Diesel",
      type: "SATIVA",
      thc: 22,
      cbd: 10.66,
      price: 20.0,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4417913613.webp?height=80&width=80"
    },
    {
      name: "Imperial: THCa 2G Loaded Prerolls - Gold Benjamin",
      type: "HYBRID",
      thc: 26.28,
      cbd: 10.5,
      price: 20.0,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4417903995.webp?height=80&width=80"
    },
    {
      name: "Imperial: THCa 2G Loaded Prerolls - Yoda OG",
      type: "INDICA",
      thc: 34.7,
      cbd: 10.8,
      price: 20.0,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4417908936.webp?height=80&width=80"
    }
  ];
  const vapes: Product[] = [
    {
      name: "WNC: THCa Live Resin Blue Dream Disposable 1g",
      type: "SATIVA",
      thc: 72.97,
      cbd: 2.05,
      price: 50.0,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4443339703.webp?height=80&width=80"
    },

    {
      name: "WNC: THCa Live Resin Sour Diesel Disposable 1g",
      type: "SATIVA",
      thc: 77.66,
      cbd: 2.07,
      price: 50.0,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4443339703.webp?height=80&width=80"
    },

    {
      name: "WNC: THCa Live Resin Runtz Disposable 1g",
      type: "HYBRID",
      thc: 67.04,
      cbd: 12.94,
      price: 50.0,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4443339703.webp?height=80&width=80"
    },
    {
      name: "WNC: THCa Live Resin Bubba Kush Disposable 1g",
      type: "INDICA",
      thc: 75.13,
      cbd: 2.8,
      price: 50.0,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4443339703.webp?height=80&width=80"
    },
    {
      name: "WNC: THCa Live Resin Gelato Disposable 1g",
      type: "HYBRID",
      thc: 75.19,
      cbd: 0.99,
      price: 50.0,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4443339703.webp?height=80&width=80"
    },
    {
      name: "Enjoy: Supercharged Blue Dream 1g THCa Disposable Vape",
      type: "SATIVA",
      thc: 45.73,
      cbd: 30.87,
      price: 35.0,
      image:
        "https://nursewellness.com/wp-content/uploads/2024/11/supercharged.png?height=80&width=80"
    },
    {
      name: "Enjoy: Couch Lock 1g THCa Disposable Vape - Watermelon",
      type: "INDICA",
      thc: 41.4,
      cbd: 27.92,
      price: 35.0,
      image:
        "https://nursewellness.com/wp-content/uploads/2024/11/couch-lock.png?height=80&width=80"
    },
    {
      name: "Enjoy: Chill THCa 1g Disposable Vape - Grape Ape",
      type: "INDICA",
      thc: 45.5,
      cbd: 41.24,
      price: 35.0,
      image:
        "https://nursewellness.com/wp-content/uploads/2024/11/chillgrape.png?height=80&width=80"
    },
    {
      name: "Enjoy: Social THCa 1g Disposable Vape - Durban Poison",
      type: "SATIVA",
      thc: 31.13,
      cbd: 20.98,
      price: 35.0,
      image:
        "https://nursewellness.com/wp-content/uploads/2024/11/social.png?height=80&width=80"
    },
    {
      name: "Enjoy: Cloud Nine 1g THCa Disposable Vape - Miracle Alien Cookies",
      type: "HYBRID",
      thc: 44.95,
      cbd: 30.17,
      price: 50.0,
      image:
        "https://nursewellness.com/wp-content/uploads/2024/11/cloud9thca.png?height=80&width=80"
    }
  ];

  const concentrate: Product[] = [
    {
      name: "WNC: THCa Badder - King Louis XIII",
      type: "INDICA",
      thc: 89.17,
      cbd: 0.0,
      price: 40.0,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4441159787.webp?height=80&width=80"
    },
    {
      name: "WNC: Lemon Cherry Gelato Cold Cure Live Rosin THCa Concentrate 1g",
      type: "HYBRID",
      thc: 75.49,
      cbd: 0.48,
      price: 75.0,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4459363644.webp?height=80&width=80"
    },
    {
      name: "WNC: Strawberry Cooler Cold Cure Live Rosin THCa Concentrate 1g",
      type: "HYBRID",
      thc: 80.41,
      cbd: 0.0,
      price: 75.0,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4441143971.webp?height=80&width=80"
    },
    {
      name: "WNC: GG#4 Cold Cure Live Rosin THCa Concentrate 1g",
      type: "HYBRID",
      thc: 81.52,
      cbd: 0.0,
      price: 75.0,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4440969116.webp?height=80&width=80"
    },
    {
      name: "WNC: 99% THCa Diamonds 1g",
      type: "NONE",
      thc: 99.14,
      cbd: 0.0,
      price: 25.0,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4440967190.webp?height=80&width=80"
    },
    {
      name: "WNC: THCa Badder - King Louis XIII",
      type: "INDICA",
      thc: 89.17,
      cbd: 0.0,
      price: 40.0,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4441159787.webp?height=80&width=80"
    },
    {
      name: "WNC: Lemon Cherry Gelato Cold Cure Live Rosin THCa Concentrate 1g",
      type: "HYBRID",
      thc: 75.49,
      cbd: 0.48,
      price: 75.0,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4459363644.webp?height=80&width=80"
    }
  ];

  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-br from-blue-900 to-gray-800 bg-[400%] animate-gradientShift p-6">
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {/* Flower Section */}
        <ProductSection title="Flower" products={flowers} />

        {/* Edibles Section */}
        <ProductSection title="Pre-rolls" products={prerolls} />

        {/* Pre-rolls Section */}
        <ProductSection title="Vapes" products={vapes} />

        {/* Vapes Section */}
        <ProductSection title="Concentrate" products={concentrate} />
      </div>
    </div>
  );
};

interface ProductSectionProps {
  title: string;
  products: Product[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, products }) => (
  <div className="flex flex-col items-center h-full hide-scrollbar overflow-hidden">
    <h2 className="text-[2%] md:text-[1.5vw] xl:text-[1.2vw] font-bold text-white mb-2 hide-scrollbar">
      {title}
    </h2>
    <div className="w-full bg-gray-100 bg-opacity-20 rounded-lg p-4 border border-gray-300 shadow-lg h-full overflow-hidden relative hide-scrollbar">
      {" "}
      <div className="space-y-4 animate-autoScroll">
        {[...products, ...products].map((product, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-4 px-4 rounded-lg bg-white shadow-md hover:bg-gray-100 transition-colors ">
            {/* Product content here */}
            <div className="flex items-center gap-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-16 md:w-20 h-16 md:h-20 rounded-lg object-cover bg-gray-200"
              />
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs md:text-sm font-medium px-2 py-1 rounded-full ${
                      product.type === "SATIVA"
                        ? "bg-red-100 text-red-600"
                        : product.type === "HYBRID"
                        ? "bg-green-100 text-green-600"
                        : product.type === "INDICA"
                        ? "bg-purple-100 text-purple-600"
                        : product.type === "NONE"
                        ? "bg-gray-200 text-gray-500" // styling for "NONE"
                        : ""
                    }`}>
                    {product.type}
                  </span>

                  <h3 className="text-sm md:text-base font-semibold text-gray-700">
                    {product.name}
                  </h3>
                </div>
                <div className="text-xs md:text-sm text-gray-600">
                  THC {product.thc}% CBD {product.cbd}%
                </div>
              </div>
            </div>
            <div className="text-base md:text-lg font-bold text-gray-800">
              ${product.price.toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ProductList;
