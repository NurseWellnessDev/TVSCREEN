import React, { useState, useEffect } from "react";
import "./App.css";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  thc?: number; // Optional THC mg
  cbd?: number; // Optional CBD mg
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-60 object-cover"
    />
    <div className="p-3">
      <h3 className="font-semibold text-base mb-1 truncate">{product.name}</h3>
      <p className="text-gray-900 text-sm">${product.price.toFixed(2)}</p>
    </div>
    <div className="flex gap-2 mt-2">
      {product.thc && (
        <span className="ml-2 mb-4 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
          THC: {product.thc}mg
        </span>
      )}
      {product.cbd && (
        <span className="mb-4 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
          CBD: {product.cbd}mg
        </span>
      )}
    </div>
  </div>
);

interface ProductSliderProps {
  products: Product[];
  title: string;
}

const ProductSlider: React.FC<ProductSliderProps> = ({ products, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <div className="mb-8 w-full">
      <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
          {products.concat(products.slice(0, 2)).map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className="w-1/3 flex-shrink-0 px-2">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductShowcase: React.FC = () => {
  const Flower: Product[] = [
    {
      id: 1,
      name: "Euphoria ",
      price: 699.99,
      image: "https://placehold.co/300x300",
      thc: 10,
      cbd: 10
    },
    {
      id: 2,
      name: "Laptop",
      price: 1299.99,
      image: "https://placehold.co/300x300"
    },
    {
      id: 3,
      name: "Tablet",
      price: 399.99,
      image: "https://placehold.co/300x300"
    },
    {
      id: 4,
      name: "Smartwatch",
      price: 199.99,
      image: "https://placehold.co/300x300"
    },
    {
      id: 5,
      name: "Headphones",
      price: 149.99,
      image: "https://placehold.co/300x300"
    }
  ];

  const Vapes: Product[] = [
    {
      id: 6,
      name: "T-Shirt",
      price: 19.99,
      image: "https://placehold.co/300x300"
    },
    {
      id: 7,
      name: "Jeans",
      price: 49.99,
      image: "https://placehold.co/300x300"
    },
    {
      id: 8,
      name: "Sneakers",
      price: 79.99,
      image: "https://placehold.co/300x300"
    },
    {
      id: 9,
      name: "Jacket",
      price: 89.99,
      image: "https://placehold.co/300x300"
    },
    {
      id: 10,
      name: "Dress",
      price: 69.99,
      image: "https://placehold.co/300x300"
    }
  ];

  const Gummies: Product[] = [
    {
      id: 11,
      name: "Table Lamp",
      price: 39.99,
      image: "https://placehold.co/300x300"
    },
    {
      id: 12,
      name: "Wall Art",
      price: 29.99,
      image: "https://placehold.co/300x300"
    },
    {
      id: 13,
      name: "Throw Pillow",
      price: 14.99,
      image: "https://placehold.co/300x300"
    },
    {
      id: 14,
      name: "Vase",
      price: 24.99,
      image: "https://placehold.co/300x300"
    },
    {
      id: 15,
      name: "Area Rug",
      price: 99.99,
      image: "https://placehold.co/300x300"
    }
  ];

  const Drinks: Product[] = [
    {
      id: 16,
      name: "Cycling Frog: Cran Razz 10mg THC Seltzer",
      price: 6.5,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4635867088.webp",
      thc: 10,
      cbd: 10
    },
    {
      id: 17,
      name: "Cycling Frog: THC + CBD Raspberry Lemonade Seltzer",
      price: 10.0,
      image:
        "https://cyclingfrog.com/cdn/shop/files/Raspberry_Lemonade_2.jpg?v=1731438192&width=700",
      thc: 50,
      cbd: 50
    },
    {
      id: 18,
      name: "Cycling Frog: THC + CBD Iced Tea Lemonade Seltzer",
      price: 10.0,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4021189693.webp",
      thc: 50,
      cbd: 50
    },
    {
      id: 19,
      name: "Cycling Frog: Black Currant THC Seltzer",
      price: 4,
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/75151758/4159839726.webp",
      thc: 5,
      cbd: 10
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gray-100 py-8 flex flex-col justify-center">
      <div className="w-full px-4">
        <h1 className="text-3xl font-bold mb-8 text-center font-family-behi ">
          Featured Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <ProductSlider products={Flower} title="Flower" />
          <ProductSlider products={Drinks} title="Drinks" />
          <ProductSlider products={Gummies} title="Edibles" />
          <ProductSlider products={Vapes} title="Vapes" />
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
