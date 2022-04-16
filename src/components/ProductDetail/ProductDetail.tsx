import { IProduct } from '../../common/types';
import { Badge } from '../lib/Badge/Badge';
import { Button } from '../lib/Button/Button';
import { NoDataMessage } from '../lib/NoDataMessage/NoDataMessage';
import styles from './ProductDetail.module.scss';

type Props = {
  selectedProduct: IProduct;
};

export const ProductDetail = ({ selectedProduct }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h4>Product Details</h4>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.main}>
        <div className={styles.productTitle}>{selectedProduct.productName}</div>
        <div className={styles.productTags}>
          {selectedProduct.tags.length ? (
            selectedProduct.tags.map((tag, index) => {
              return <Badge key={index}>{tag}</Badge>;
            })
          ) : (
            <NoDataMessage>Product has no any tags</NoDataMessage>
          )}
        </div>
        <div>
          <a href={selectedProduct.manufacturerUrl} target="_blank" rel="noreferrer">
            <Button>Go to Manufacturer</Button>
          </a>
        </div>
        <div className={styles.productDescription}>{selectedProduct.description}</div>
        <div className={styles.productOptions}>
          {selectedProduct.option1 && selectedProduct.option2 && (
            <>
              <div>
                <label>
                  <input type="radio" name="option" /> {selectedProduct.option1}
                </label>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
              <div>
                <label>
                  <input type="radio" name="option" /> {selectedProduct.option2}
                </label>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </>
          )}
          {!selectedProduct.option1 && !selectedProduct.option2 && (
            <NoDataMessage>Product has no any options</NoDataMessage>
          )}
        </div>
      </div>
    </div>
  );
};
