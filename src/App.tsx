import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import styles from './App.module.scss';
import { ProductList, ProductSearching, ProductDetail, Loader } from './components';
import { useFetch } from './hooks/useFetch';
import { productStore } from './store/productStore';

const App = () => {
  const { products, categories, loading, error } = useFetch();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <>Error...{error}</>;
  }

  return (
    <div className={styles.container} data-testid='container'>
      {products && (
        <>
          <div className={styles.titleSection}>
            <h3 role='contentinfo'>Create Demand</h3>
            <p>
              Search the product you need here. Use tags to find any alternative.
            </p>
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
                    productStore={productStore}
                  />
                  <div className={styles.productList}>
                    <ProductList
                      products={products}
                      productStore={productStore}
                    />
                  </div>
                </div>
                <div>
                  <ProductDetail 
                    productStore={productStore} 
                  />
                </div>
              </main>
            </TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
          </Tabs>
        </>
      )}
    </div>
  );
};

export default App;
