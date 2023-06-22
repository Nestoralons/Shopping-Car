import { useCategories } from "../hooks/useCategories.jsx";
/* eslint-disable react/prop-types */
import "./Filters.css";
export function Filters({ products }) {
  const { categories } = useCategories(products);

  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Price</label>
        <input type="range" id="price" min="0" max="1500" />
      </div>
      <div>
        <label htmlFor="category">Categories</label>
        <select id="category">
          <option value="all">All</option>
          {categories?.map((category) => (
            <option key={category} value={category}>
              {category[0].toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}
