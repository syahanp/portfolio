import 'scss/global.scss';
import "bootstrap/dist/css/bootstrap.css";

import Router from 'next/router';
import NProgress from 'nprogress'
import Provider from 'theme/Provider';

function MyApp({ Component, pageProps }) {

    Router.events.on('routeChangeStart', (url) => {
        NProgress.start()
        NProgress.set(0.3);
    })  

    Router.events.on('routeChangeComplete', () => NProgress.done())

    return (
        <Provider>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
