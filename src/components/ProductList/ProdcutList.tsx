import { Badge } from '../lib/Badge/Badge';
import styles from './ProductList.module.scss';

export const ProductList = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.name}>Foxit Software PhantomPDF Standard</div>
        <div className={styles.tags}>
          <Badge>PDF</Badge>
          <Badge>Chage</Badge>
          <Badge>Maintenance</Badge>
          <Badge>Business</Badge>
          <Badge>Create</Badge>
        </div>
      </div>
      <div className={styles.category}>Daily Business</div>
    </div>
  );
};
