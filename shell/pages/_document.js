import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <script src={`${process.env.APP1_SERVICE}/_next/static/runtime/remoteEntry.js`} />
        <script src={`${process.env.APP2_SERVICE}/_next/static/runtime/remoteEntry.js`} />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;