import styles from './App.module.scss';
import { ProductSearchingCard } from './components';

const App = () => {
  return (
    <div className={styles.container}>
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
        <div>
          <ProductSearchingCard />
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est porro totam dicta eaque?
          Tempore, non repellendus, incidunt esse possimus velit, saepe illum obcaecati deserunt
          nobis vitae numquam delectus nam explicabo.
        </div>
      </main>
    </div>
  );
};

export default App;
