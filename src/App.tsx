import React, { useState } from "react";
import ProductShowcase from "./ProductShowcase";
import ProductList from "./ProductList";
import FloatingButton from "./FloatingButton";

const App: React.FC = () => {
  const [showProductShowcase, setShowProductShowcase] = useState(false);

  const toggleComponent = () => {
    setShowProductShowcase(!showProductShowcase);
  };
  return (
    <div className="relative">
      {showProductShowcase ? <ProductShowcase /> : <ProductList />}

     {/*
      <FloatingButton onClick={toggleComponent} />
      */}
    </div>
  );
};
export default App;
