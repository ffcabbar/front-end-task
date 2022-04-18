import { observer } from 'mobx-react';
import { ProductStore } from '../../store/productStore';
import { Badge } from '../lib/Badge/Badge';
import { Button } from '../lib/Button/Button';
import { NoDataMessage } from '../lib/NoDataMessage/NoDataMessage';
import styles from './ProductDetail.module.scss';

type Props = {
  productStore: ProductStore;
};

export const ProductDetail = observer(({ productStore }: Props) => {
  return (
    <>
      {productStore.selectedProduct && (
        <div className={styles.wrapper} data-testid={`product-detail-${productStore.selectedProduct.id}`}>
          <div className={styles.title}>
            <h4>Product Details</h4>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.main}>
            <div className={styles.productTitle}>{productStore.selectedProduct.productName}</div>
            <div className={styles.productTags}>
              {productStore.selectedProduct.tags.length ? (
                productStore.selectedProduct.tags.map((tag, index) => {
                  return <Badge key={index}>{tag}</Badge>;
                })
              ) : (
                <NoDataMessage>Product has no any tags</NoDataMessage>
              )}
            </div>
            <div>
              <a
                href={productStore.selectedProduct.manufacturerUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Button data-testid={`button-${productStore.selectedProduct.id}`}>Go to Manufacturer</Button>
              </a>
            </div>
            <div className={styles.productDescription}>
              {productStore.selectedProduct.description}
            </div>
            <div className={styles.productOptions}>
              {productStore.selectedProduct.option1 && productStore.selectedProduct.option2 && (
                <>
                  <div>
                    <label>
                      <input type="radio" name="option" /> {productStore.selectedProduct.option1}
                    </label>
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </div>
                  </div>
                  <div>
                    <label>
                      <input type="radio" name="option" /> {productStore.selectedProduct.option2}
                    </label>
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </div>
                  </div>
                </>
              )}
              {!productStore.selectedProduct.option1 && !productStore.selectedProduct.option2 && (
                <NoDataMessage>Product has no any options</NoDataMessage>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
});
