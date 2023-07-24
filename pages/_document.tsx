import { Html, Head, Main, NextScript } from "next/document";
import { createGetInitialProps } from "@mantine/next";
// import { withMantine } from "@mantine/next";

const getInitialProps = createGetInitialProps();

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export async function getServerSideProps(context: any) {
  return await getInitialProps(context);
}
