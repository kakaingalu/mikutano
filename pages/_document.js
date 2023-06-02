import Document, { Html, Head, Main, NextScript } from 'next/document';


class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/img1.png" className="custom-icon" />
          <link rel="preload" href="../images/img1.jpg" as="image" />
	  <title>Mikutano</title>
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
