import { Badge } from '../lib/Badge/Badge';
import { Button } from '../lib/Button/Button';
import styles from './ProductDetail.module.scss';

export const ProductDetail = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h4>Product Details</h4>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.main}>
        <div className={styles.productTitle}>Foxit Software PhantomPDF Business</div>
        <div className={styles.productTags}>
          <Badge>PDF</Badge>
          <Badge>Maintenance</Badge>
          <Badge>Business</Badge>
          <Badge>Change</Badge>
          <Badge>Create</Badge>
        </div>
        <div>
          <Button>Go to Manufacturer</Button>
        </div>
        <div className={styles.productDescription}>
          Foxit Software PhantomPDF Business provides powerful PDF Editor capabilities to allow
          authors to update their documents themselves.
        </div>
        <div className={styles.productOptions}>
          <div>
            <label>
              <input type="radio" name="fav_language" value="CSS" /> CSS
            </label>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
