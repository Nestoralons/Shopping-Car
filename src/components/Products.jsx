/* eslint-disable react/prop-types */

import "./Products.css";
import { AddToCartIcon } from "./Icons";
export function Products({ products }) {
  return (
    <main className="products">
      <ul>
        {products.slice(0, 12).map((item) => {
          return (
            <li key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <div>
                <strong>{item.title}</strong> - ${item.price}
              </div>
              <div>
                <button>
                  <AddToCartIcon />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
