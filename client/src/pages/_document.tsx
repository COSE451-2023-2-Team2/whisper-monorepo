import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Whisper</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          property="og:description"
          content="Whisper: your first chat-in-lecture application"
        />
        <meta name="title" content="Whisper" />
        <meta property="og:image" content="/opengraph.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
