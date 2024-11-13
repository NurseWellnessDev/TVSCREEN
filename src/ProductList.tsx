import React from "react";

interface Product {
  name: string;
  type: "SATIVA" | "HYBRID" | "INDICA";
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
      price: 45.0,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4598761932.jpg"
    },
    {
      name: "WNC: Indoor King Louis XIII Living Soil- THCa Flower 3.5g",
      type: "INDICA",
      thc: 29.8,
      cbd: 0.1,
      price: 45.0,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4516071010.jpg"
    },
    {
      name: "KYND Orangutan Zkittlez",
      type: "HYBRID",
      thc: 27.1,
      cbd: 0.06,
      price: 45.0,
      image: "/placeholder.svg?height=80&width=80"
    }
  ];

  const flowers2: Product[] = [
    {
      name: "KYND Sunset Sherbet Pre-roll",
      type: "INDICA",
      thc: 22.0,
      cbd: 0.05,
      price: 20.0,
      image: "/placeholder.svg?height=80&width=80"
    },
    {
      name: "KYND Blue Dream Pre-roll",
      type: "HYBRID",
      thc: 21.8,
      cbd: 0.1,
      price: 20.0,
      image: "/placeholder.svg?height=80&width=80"
    },
    {
      name: "KYND Pineapple Express Pre-roll",
      type: "SATIVA",
      thc: 23.5,
      cbd: 0.09,
      price: 20.0,
      image: "/placeholder.svg?height=80&width=80"
    }
  ];

  const prerolls: Product[] = [
    {
      name: "Cannabis Gummies",
      type: "HYBRID",
      thc: 10.0,
      cbd: 5.0,
      price: 25.0,
      image: "/placeholder.svg?height=80&width=80"
    },
    {
      name: "THC Chocolate Bar",
      type: "INDICA",
      thc: 15.0,
      cbd: 0.0,
      price: 30.0,
      image: "/placeholder.svg?height=80&width=80"
    }
  ];

  const prerolls2: Product[] = [
    {
      name: "Disposable Vape Pen",
      type: "SATIVA",
      thc: 20.0,
      cbd: 0.0,
      price: 35.0,
      image: "/placeholder.svg?height=80&width=80"
    },
    {
      name: "Cartridge",
      type: "HYBRID",
      thc: 18.0,
      cbd: 0.0,
      price: 40.0,
      image: "/placeholder.svg?height=80&width=80"
    }
  ];

  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-br from-blue-900 to-gray-800 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {/* Flower Section */}
        <ProductSection title="Flower" products={flowers} />

        {/* Pre-rolls Section */}
        <ProductSection title="Flower" products={flowers2} />

        {/* Edibles Section */}
        <ProductSection title="Pre-rolls" products={prerolls} />

        {/* Vapes Section */}
        <ProductSection title="Pre-rolls" products={prerolls2} />
      </div>
    </div>
  );
};

interface ProductSectionProps {
  title: string;
  products: Product[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, products }) => (
  <div className="flex flex-col items-center">
    <h2 className="text-[2%] md:text-[1.5vw] xl:text-[1.2vw] font-bold text-white mb-2">
      {title}
    </h2>
    <div className="w-full bg-gray-100 bg-opacity-20 rounded-lg p-4 border border-gray-300 shadow-lg">
      <div className="space-y-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-4 px-4 rounded-lg bg-white shadow-md hover:bg-gray-100 transition-colors">
            <div className="flex items-center gap-4">
              <img
                src={product.image}
                alt=""
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
                        : "bg-purple-100 text-purple-600"
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
