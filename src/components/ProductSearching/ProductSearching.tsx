import { Input } from '../lib/Input/Input';
import styles from './ProductSearching.module.scss';

type Props = {
  categories: string[];
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;

  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

export const ProductSearching = ({
  categories,
  setSearchTerm,
  selectedCategories,
  setSelectedCategories
}: Props) => {
  const handleSearchChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectCategory = (e: any) => {
    const hasSameCategory = selectedCategories.includes(e.target.value);
    if (hasSameCategory) {
      const categories = selectedCategories.filter((f) => f !== e.target.value);
      setSelectedCategories(categories);
    } else {
      setSelectedCategories([...selectedCategories, e.target.value]);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h4>I'm looking for...</h4>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.main}>
        <div className={styles.categories}>
          {categories.map((category, index) => {
            return (
              <label key={index}>
                <input type="checkbox" value={category} onChange={handleSelectCategory} />
                {category}
              </label>
            );
          })}
        </div>
        <div>
          <Input
            placeholder="Search..."
            onChange={handleSearchChange}
            icon={
              <svg
                width="16"
                height="16"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.7871 22.7761L17.9548 16.9437C19.5193 15.145 20.4665 12.7982 20.4665 10.2333C20.4665 4.58714 15.8741 0 10.2333 0C4.58714 0 0 4.59246 0 10.2333C0 15.8741 4.59246 20.4665 10.2333 20.4665C12.7982 20.4665 15.145 19.5193 16.9437 17.9548L22.7761 23.7871C22.9144 23.9255 23.1007 24 23.2816 24C23.4625 24 23.6488 23.9308 23.7871 23.7871C24.0639 23.5104 24.0639 23.0528 23.7871 22.7761ZM1.43149 10.2333C1.43149 5.38004 5.38004 1.43681 10.2279 1.43681C15.0812 1.43681 19.0244 5.38537 19.0244 10.2333C19.0244 15.0812 15.0812 19.035 10.2279 19.035C5.38004 19.035 1.43149 15.0865 1.43149 10.2333Z"
                  fill="#A4A4A4"
                />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
};
