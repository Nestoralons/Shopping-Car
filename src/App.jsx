/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Products } from "./components/Products.jsx";
import { products as initialProducts } from "./mocks/products.json";
import Header from "./components/Header.jsx";
//import { useCategories } from "./hooks/useCategories.jsx";

function App() {
  const [products] = useState(initialProducts);
  //const { categories } = useCategories(products);
  const [filters, setfilters] = useState({
    category: "all",
    minPrince: 0,
  });
  //console.log(categories);
  const filterProducts = (products) => {
    return products.filter((item) => {
      return (
        item.price >= filters.minPrince &&
        (filters.category === "all" || item.category === filters.category)
      );
    });
  };

  const filteredProducts = filterProducts(products);
  return (
    <>
      <Header products={filteredProducts} />
      <Products products={filteredProducts} />;
    </>
  );
}

export default App;
