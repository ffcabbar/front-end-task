import { observer } from 'mobx-react';
import { IProduct } from '../../common/types';
import { ProductStore } from '../../store/productStore';
import { Badge } from '../lib/Badge/Badge';
import { NoDataMessage } from '../lib/NoDataMessage/NoDataMessage';
import styles from './ProductList.module.scss';

type Props = {
  products: IProduct[];
  productStore: ProductStore;
};

export const ProductList = observer(({ products, productStore }: Props) => {
  const listProducts = (products: IProduct[]): IProduct[] => {
    if (productStore.categories.length) {
      return products
        .filter((f) => f.productName.toLowerCase().includes(productStore.searchTerm.toLowerCase()))
        .filter((f) => productStore.categories.includes(f.category));
    }
    return products.filter((f) =>
      f.productName.toLowerCase().includes(productStore.searchTerm.toLowerCase())
    );
  };

  return (
    <>
      {listProducts(products).map((product) => {
        return (
          <div
            className={`${styles.wrapper} 
            ${product.id === productStore.selectedProduct?.id ? styles.selected : ''}`}
            key={product.id}
            onClick={() => productStore.setSelectedProduct(product)}
            data-testid={`product-list-${product.id}`}
          >
            <div>
              <div className={styles.name}>{product.productName}</div>
              <div className={styles.tags}>
                {product.tags.length ? (
                  product.tags.map((tag, index) => {
                    return <Badge key={index}>{tag}</Badge>;
                  })
                ) : (
                  <NoDataMessage>Product has no any tags</NoDataMessage>
                )}
              </div>
            </div>
            <div className={styles.category}>{product.category}</div>
          </div>
        );
      })}
    </>
  );
});
