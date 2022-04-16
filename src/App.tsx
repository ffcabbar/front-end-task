import { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import styles from './App.module.scss';
import { IProduct } from './common/types';
import { ProductList, ProductSearching, ProductDetail, Loader } from './components';
import { useFetch } from './hooks/useFetch';

const App = () => {
  const { products, categories, loading, error } = useFetch();
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <>Error...{error}</>;
  }

  return (
    <div className={styles.container}>
      {products && (
        <>
          <div className={styles.titleSection}>
            <h3>Create Demand</h3>
            <p>Search the product you need here. Use tags to find any alternative.</p>
          </div>

          <Tabs className={styles.tabs}>
            <TabList className={styles.tabList}>
              <Tab>1 Product</Tab>
              <Tab disabled>2 Addresses</Tab>
              <Tab disabled>3 Overview</Tab>
            </TabList>
            <TabPanel>
              <main className={styles.main}>
                <div className={styles.leftSection}>
                  <ProductSearching
                    categories={categories}
                    setSearchTerm={setSearchTerm}
                    selectedCategories={selectedCategories}
                    setSelectedCategories={setSelectedCategories}
                  />
                  <div className={styles.productList}>
                    <ProductList
                      products={products}
                      selectedProduct={selectedProduct}
                      setSelectedProduct={setSelectedProduct}
                      selectedCategories={selectedCategories}
                      searchTerm={searchTerm}
                    />
                  </div>
                </div>
                <div>{selectedProduct && <ProductDetail selectedProduct={selectedProduct} />}</div>
              </main>
            </TabPanel>
          </Tabs>
        </>
      )}
    </div>
  );
};

export default App;
