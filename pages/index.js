import Head from "next/head";
import styles from "../styles/Home.module.scss";

const Home = () => {
  return (
    <>
      <Head>
        <title>New Project | Home</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.wrapper}>Hello World!</div>
      </div>
    </>
  );
};

export default Home;
