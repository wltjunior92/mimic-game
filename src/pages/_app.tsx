import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import VerticaltAdsCarousel from '../components/VerticalAdsCarousel';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div className="container">
        <div className="ads ad_top">

        </div>
        <div className="container_content">
          <div className="ads ad_left">
            <div>
              <div className="upper">
                <VerticaltAdsCarousel axis="vertical">
                  <div>
                    <iframe
                      style={{ width: '120px', height: '240px' }}
                      marginWidth={0}
                      marginHeight={0}
                      scrolling="no"
                      frameBorder="0"
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=wltjunior-20&marketplace=amazon&amp;region=BR&placement=B076LXCSCK&asins=B076LXCSCK&linkId=38c24231d003982658b67be1fd12c55f&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
                    </iframe>
                  </div>
                  <div>
                    <iframe
                      style={{ width: '120px', height: '240px' }}
                      marginWidth={0}
                      marginHeight={0}
                      scrolling="no"
                      frameBorder="0"
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=wltjunior-20&marketplace=amazon&amp;region=BR&placement=B01N6A114U&asins=B01N6A114U&linkId=0d7751e1c9c4aff2dfc8d85cf0879776&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
                    </iframe>
                  </div>
                  <div>
                    <iframe
                      style={{ width: '120px', height: '240px' }}
                      marginWidth={0}
                      marginHeight={0}
                      scrolling="no"
                      frameBorder="0"
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=wltjunior-20&marketplace=amazon&amp;region=BR&placement=B07CLHRLPW&asins=B07CLHRLPW&linkId=a3dc68373e8be49a8418fd9a792b70a8&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
                    </iframe>
                  </div>
                  <div>
                    <iframe
                      style={{ width: '120px', height: '240px' }}
                      marginWidth={0}
                      marginHeight={0}
                      scrolling="no"
                      frameBorder="0"
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=wltjunior-20&marketplace=amazon&amp;region=BR&placement=8568059007&asins=8568059007&linkId=9dc599dde2514166509cbe2689fa7491&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
                    </iframe>
                  </div>
                  <div>
                    <iframe
                      style={{ width: '120px', height: '240px' }}
                      marginWidth={0}
                      marginHeight={0}
                      scrolling="no"
                      frameBorder="0"
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ac&ref=tf_til&ad_type=product_link&tracking_id=wltjunior-20&marketplace=amazon&amp;region=BR&placement=B07CK3V7CN&asins=B07CK3V7CN&linkId=ec16a54630a8279ac8d81a8a6ce80edd&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
                    </iframe>
                  </div>
                </VerticaltAdsCarousel>
              </div>
              <div className="down">
                <VerticaltAdsCarousel axis="vertical">
                  <div>
                    <iframe
                      style={{ width: '120px', height: '240px' }}
                      marginWidth={0}
                      marginHeight={0}
                      scrolling="no"
                      frameBorder="0"
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=wltjunior-20&marketplace=amazon&region=BR&placement=853252978X&asins=853252978X&linkId=5b7fa751624438cf33dbb3c1118161ba&show_border=true&link_opens_in_new_window=true">
                    </iframe>
                  </div>
                  <div>
                    <iframe
                      style={{ width: '120px', height: '240px' }}
                      marginWidth={0}
                      marginHeight={0}
                      scrolling="no"
                      frameBorder="0"
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=wltjunior-20&marketplace=amazon&region=BR&placement=8595083274&asins=8595083274&linkId=2c85963d5220393aa4d3a47b995f6d1e&show_border=true&link_opens_in_new_window=true">
                    </iframe>
                  </div>
                  <div>
                    <iframe
                      style={{ width: '120px', height: '240px' }}
                      marginWidth={0}
                      marginHeight={0}
                      scrolling="no"
                      frameBorder="0"
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=wltjunior-20&marketplace=amazon&region=BR&placement=8568014003&asins=8568014003&linkId=b0cb0b098dac70952c5ffb8a5764caad&show_border=true&link_opens_in_new_window=true">
                    </iframe>
                  </div>
                  <div>
                    <iframe
                      style={{ width: '120px', height: '240px' }}
                      marginWidth={0}
                      marginHeight={0}
                      scrolling="no"
                      frameBorder="0"
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=wltjunior-20&marketplace=amazon&region=BR&placement=856240988X&asins=856240988X&linkId=30a798dcec28db8d3403b98ecc33a7fa&show_border=true&link_opens_in_new_window=true">
                    </iframe>
                  </div>
                  <div>
                    <iframe
                      style={{ width: '120px', height: '240px' }}
                      marginWidth={0}
                      marginHeight={0}
                      scrolling="no"
                      frameBorder="0"
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=wltjunior-20&marketplace=amazon&region=BR&placement=8501105872&asins=8501105872&linkId=a41115bf16575d83fe5061a8ed16dfab&show_border=true&link_opens_in_new_window=true">
                    </iframe>
                  </div>
                </VerticaltAdsCarousel>
              </div>
            </div>
          </div>
          <div className="content">
            <Component {...pageProps} />
            <GlobalStyle />
          </div>
          <div className="ads ad_right">
            <div>
              <div className="upper">
                <VerticaltAdsCarousel axis="vertical">
                  <div>
                    <iframe
                      style={{ width: '120px', height: '240px' }}
                      marginWidth={0}
                      marginHeight={0}
                      scrolling="no"
                      frameBorder="0"
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=wltjunior-20&marketplace=amazon&region=BR&placement=B07BTC67VS&asins=B07BTC67VS&linkId=a16cf9ca23f872794ebf742e7fe72a04&show_border=true&link_opens_in_new_window=true">
                    </iframe>
                  </div>
                  <div>
                    <iframe
                      style={{ width: '120px', height: '240px' }}
                      marginWidth={0}
                      marginHeight={0}
                      scrolling="no"
                      frameBorder="0"
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=wltjunior-20&marketplace=amazon&region=BR&placement=B0152HPXXE&asins=B0152HPXXE&linkId=50f720546cc6033d3fca4cfb7d0af675&show_border=true&link_opens_in_new_window=true">
                    </iframe>
                  </div>
                  <div>
                    <iframe
                      style={{ width: '120px', height: '240px' }}
                      marginWidth={0}
                      marginHeight={0}
                      scrolling="no"
                      frameBorder="0"
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=wltjunior-20&marketplace=amazon&region=BR&placement=B0785S55QQ&asins=B0785S55QQ&linkId=3a396942a51bb37470bda93c33f7ee84&show_border=true&link_opens_in_new_window=true">
                    </iframe>
                  </div>
                  <div>
                    <iframe
                      style={{ width: '120px', height: '240px' }}
                      marginWidth={0}
                      marginHeight={0}
                      scrolling="no"
                      frameBorder="0"
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=wltjunior-20&marketplace=amazon&region=BR&placement=B0765KZ264&asins=B0765KZ264&linkId=de9b6b0e9eb92d5045601ae5b18b1b16&show_border=true&link_opens_in_new_window=true">
                    </iframe>
                  </div>
                  <div>
                    <iframe
                      style={{ width: '120px', height: '240px' }}
                      marginWidth={0}
                      marginHeight={0}
                      scrolling="no"
                      frameBorder="0"
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=wltjunior-20&marketplace=amazon&region=BR&placement=B07BN4NJ2J&asins=B07BN4NJ2J&linkId=fa7be992411c6363be47842a24cfdbc0&show_border=true&link_opens_in_new_window=true">
                    </iframe>
                  </div>
                </VerticaltAdsCarousel>
              </div>
              <div className="down">
                <VerticaltAdsCarousel axis="vertical">
                  <div>
                    <iframe
                      style={{ width: '120px', height: '240px' }}
                      marginWidth={0}
                      marginHeight={0}
                      scrolling="no"
                      frameBorder="0"
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=wltjunior-20&marketplace=amazon&region=BR&placement=B08JN2VMGX&asins=B08JN2VMGX&linkId=c8c15c403e934f18e774eff5c40cce4f&show_border=true&link_opens_in_new_window=true">
                    </iframe>
                  </div>
                  <div>
                    <iframe
                      style={{ width: '120px', height: '240px' }}
                      marginWidth={0}
                      marginHeight={0}
                      scrolling="no"
                      frameBorder="0"
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=wltjunior-20&marketplace=amazon&region=BR&placement=B074XJ8PY5&asins=B074XJ8PY5&linkId=cfb3b6d095de689bbe2bac3c8d4bf32b&show_border=true&link_opens_in_new_window=true">
                    </iframe>
                  </div>
                  <div>
                    <iframe
                      style={{ width: '120px', height: '240px' }}
                      marginWidth={0}
                      marginHeight={0}
                      scrolling="no"
                      frameBorder="0"
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=wltjunior-20&marketplace=amazon&region=BR&placement=B07QKPCLGD&asins=B07QKPCLGD&linkId=51444ab189a843829a21d01ce0f0a4eb&show_border=true&link_opens_in_new_window=true">
                    </iframe>
                  </div>
                  <div>
                    <iframe
                      style={{ width: '120px', height: '240px' }}
                      marginWidth={0}
                      marginHeight={0}
                      scrolling="no"
                      frameBorder="0"
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=wltjunior-20&marketplace=amazon&region=BR&placement=B088GJR4B9&asins=B088GJR4B9&linkId=a42c8659c9f8ec14353608c6f7267717&show_border=true&link_opens_in_new_window=true">
                    </iframe>
                  </div>
                  <div>
                    <iframe
                      style={{ width: '120px', height: '240px' }}
                      marginWidth={0}
                      marginHeight={0}
                      scrolling="no"
                      frameBorder="0"
                      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=wltjunior-20&marketplace=amazon&region=BR&placement=B088GNW267&asins=B088GNW267&linkId=15ddcc3576b37b62c302d02fe26cf8aa&show_border=true&link_opens_in_new_window=true">
                    </iframe>
                  </div>
                </VerticaltAdsCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </ThemeProvider>
  )
}

export default MyApp
