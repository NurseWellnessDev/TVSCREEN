import React, { useState } from "react";
import ProductShowcase from "./ProductShowcase";
import ProductList from "./ProductList";
import FloatingButton from "./FloatingButton";

const App: React.FC = () => {
  const [showProductShowcase, setShowProductShowcase] = useState(true);

  const toggleComponent = () => {
    setShowProductShowcase(!showProductShowcase);
  };

  return (
    <div className="relative">
      {showProductShowcase ? <ProductShowcase /> : <ProductList />}

      {/* Floating button */}
      <FloatingButton onClick={toggleComponent} />
    </div>
  );
};

export default App;
