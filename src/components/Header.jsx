/* eslint-disable react/prop-types */
import { Filters } from "./Filters.jsx";
export function Header({ products }) {
  return (
    <header>
      <div>Shop 🛒</div>
      <Filters products={products} />
    </header>
  );
}

export default Header;
