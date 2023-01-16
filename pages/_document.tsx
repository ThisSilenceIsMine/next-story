import { Html, Head, Main, NextScript } from 'next/document'
import { createStitches } from '@stitches/react';

const { getCssText } = createStitches();

export default function Document() {
  return (
    <Html lang="en">
        <Head>
            <title>Next JS Storybook test</title>
            <style id={"stitches"} dangerouslySetInnerHTML={{__html: getCssText()}}/>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
