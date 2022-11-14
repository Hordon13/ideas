import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          />
          <meta property="og:title" content="New Project" />
          <meta name="description" content="Lorem ipsum" />
          <meta property="og:description" content="Lorem ipsum" />
          {/* <meta property="og:image" content="/thumbnail.jpg" /> */}
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
