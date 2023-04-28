import 'src/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from 'src/components/Layout';
import '../fonts/fonts.css';
import { ThemeProvider } from 'styled-components';
import { PALETTE } from 'src/utils/palette';

export default function App({ Component, pageProps }: AppProps) {
  const theme = { PALETTE };

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
