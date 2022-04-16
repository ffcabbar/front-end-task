import { IProduct } from '../../common/types';
import { Badge } from '../lib/Badge/Badge';
import styles from './ProductList.module.scss';

type Props = {
  products: IProduct[];
};

export const ProductList = ({ products }: Props) => {
  return (
    <>
      {products.map((product) => {
        return (
          <div className={styles.wrapper} key={product.id}>
            <div>
              <div className={styles.name}>{product.productName}</div>
              <div className={styles.tags}>
                {product.tags.map((tag, index) => {
                  return <Badge key={index}>{tag}</Badge>;
                })}
              </div>
            </div>
            <div className={styles.category}>{product.category}</div>
          </div>
        );
      })}
    </>
  );
};
