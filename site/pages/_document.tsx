import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
export default class MyDocument extends Document<{ css: string }> {
  static async getInitialProps({ renderPage }: DocumentContext) {
    const page = await renderPage();
    return { ...page };
  }

  render() {
    return (
      <Html>
        <Head>
          <style
            id={'_goober'}
            // And defined it in here
            dangerouslySetInnerHTML={{ __html: ' ' + this.props.css }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
