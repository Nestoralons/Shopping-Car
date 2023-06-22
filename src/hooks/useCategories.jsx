import { useEffect, useState } from "react";
export function useCategories(products) {
  const [categories, setCategories] = useState([]);
  console.log("ENTREEEE");
  useEffect(() => {
    // console.log("hola estoy dentro del useffect");
    const lista = products?.map((item) => item.category);
    const filtro = new Set(lista);
    const sort = [...filtro].sort((a, b) => a.localeCompare(b));
    setCategories(sort);
    //console.log("hola estoy dentro del useffect");
  }, [products]);
  return { categories };
}
