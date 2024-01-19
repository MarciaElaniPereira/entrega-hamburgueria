import { ProductCard } from "./ProductCard";
import styles from "./style.module.scss";

export const ProductList = ({addToCart, productList }) => {
   return (
      <ul className={styles.productList}>
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart}/>
         ))}
      </ul>
   );
};
