import { AppProps } from 'next/app'
import { NextScript } from 'next/document';
import document from 'next/document'
import { ThemeProvider } from 'styled-components';
import ReactComment from '../components/ReactComment';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme';
import ScriptElement from '../components/ScriptElement';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <div className="ads ad_top">
          <ScriptElement text="
            (function(s,u,z,p){s.src=u,s.setAttribute('data-zone',z),p.appendChild(s);})(document.createElement('script'),'https://iclickcdn.com/tag.min.js',4051615,document.body||document.documentElement)
          "/>
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
