import styles from './App.module.scss';
import { ProductList, ProductSearchingCard, Loader } from './components';
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
              <ProductSearchingCard categories={categories} />
              <div className={styles.productList}>
                <ProductList />
              </div>
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est porro totam dicta eaque?
              Tempore, non repellendus, incidunt esse possimus velit, saepe illum obcaecati deserunt
              nobis vitae numquam delectus nam explicabo.
            </div>
          </main>
        </>
      )}
    </div>
  );
};

export default App;
