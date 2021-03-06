import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <div className="ads ad_top">

        </div>
        <div className="container_content">
          <div className="ads ad_left">

          </div>
          <div className="content">
            <Component {...pageProps} />
            <GlobalStyle />
          </div>
          <div className="ads ad_right">

          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default MyApp
