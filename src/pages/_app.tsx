import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import ReactComment from '../components/ReactComment';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <div className="ads ad_top">
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <ReactComment text="Banner Topo" />
          <ins className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-7632212870835720"
            data-ad-slot="5090651714"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({ });
          </script>
        </div>
        <div className="container_content">
          <div className="ads ad_left">
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            <ReactComment text="Banners Laterais" />
            <ins className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-7632212870835720"
              data-ad-slot="6100481056"
              data-ad-format="auto"
              data-full-width-responsive="true"></ins>
            <script>
              (adsbygoogle = window.adsbygoogle || []).push({ });
            </script>
          </div>
          <div className="content">
            <Component {...pageProps} />
            <GlobalStyle />
          </div>
          <div className="ads ad_right">
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            <ReactComment text="Banners Laterais" />
            <ins className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-7632212870835720"
              data-ad-slot="6100481056"
              data-ad-format="auto"
              data-full-width-responsive="true"></ins>
            <script>
              (adsbygoogle = window.adsbygoogle || []).push({ });
            </script>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default MyApp
