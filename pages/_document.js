import Document, { Html, Head, Main, NextScript } from 'next/document';


class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
	    {/* favicon */}
          <link rel="icon" href="/img1.svg" className="custom-icon" />
	    {/* image */}
          <link rel="preload" href="../images/img1.jpg" as="image" />
	    {/* Preconnect to Google Fonts */}
	  <link rel="preconnect" href="https://fonts.googleapis.com" />
	    {/* Import a font from Google Fonts */}
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		  
          <link href="https://fonts.googleapis.com/css2?family=Geologica:wght@200&display=swap" rel="stylesheet" />
        </Head>
        <body>
          {/* Render the main content */}
          <Main />
          {/* Render the Next.js scripts */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
