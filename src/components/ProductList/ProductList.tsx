import { IProduct } from '../../common/types';
import { Badge } from '../lib/Badge/Badge';
import { NoDataMessage } from '../lib/NoDataMessage/NoDataMessage';
import styles from './ProductList.module.scss';

type Props = {
  products: IProduct[];
  selectedProduct: IProduct | null;
  setSelectedProduct: React.Dispatch<React.SetStateAction<IProduct | null>>;
};

export const ProductList = ({ products, selectedProduct, setSelectedProduct }: Props) => {
  return (
    <>
      {products.map((product) => {
        return (
          <div
            className={`${styles.wrapper} 
            ${product.id === selectedProduct?.id ? styles.selected : ''}`}
            key={product.id}
            onClick={() => setSelectedProduct(product)}
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
};
