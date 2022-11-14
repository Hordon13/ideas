import "../styles/globals.scss";
import Layout from "../components/Layout";

const NewProject = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default NewProject;
