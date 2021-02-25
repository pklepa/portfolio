import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Font Imports */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Dosis:wght@300;400;500;600&family=Big+Shoulders+Stencil+Display:wght@100;300;400;500&display=swap"
            rel="stylesheet"
          />

          {/* Meta tags for Social Media sharing preview */}
          <meta property="og:title" content="Pedro Klepa - Portfolio" />
          <meta
            property="og:description"
            content="Showcase for some of selected work and personal details."
          />
          <meta
            property="og:image"
            content="https://user-images.githubusercontent.com/22618438/108611640-6041fe80-73d8-11eb-95f3-12546bbe2c1f.png"
          />
          <meta property="og:url" content="https://pedroklepa.com/" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
