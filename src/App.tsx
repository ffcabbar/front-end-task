import styles from './App.module.scss';
import { ProductList, ProductSearching, ProductDetail, Loader } from './components';
import {} from './components/ProductDetail/ProductDetail';
import { useFetch } from './hooks/useFetch';

const App = () => {
  const { products, categories, loading, error } = useFetch();

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
          {/* 
      <Tabs className={styles.tabsWrapper}>
        <TabList className={styles.tabList}>
          <Tab>Title 1</Tab>
          <Tab disabled>Title 2</Tab>
          <Tab disabled>Title 3</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
      </Tabs> */}

          <main className={styles.main}>
            <div className={styles.leftSection}>
              <ProductSearching categories={categories} />
              <div className={styles.productList}>
                <ProductList products={products} />
              </div>
            </div>
            <div>
              <ProductDetail />
            </div>
          </main>
        </>
      )}
    </div>
  );
};

export default App;
