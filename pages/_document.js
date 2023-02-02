import Document, { Html, Head, Main, NextScript } from 'next/document'

import { GA_TRACKING_ID } from '../lib/gtag'

export default class MyDocument extends Document {
    render() {
        return (
        <Html>
            <Head>
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <script
                dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
                });
            `,
                }}
            />
            <link
                href="https://fonts.googleapis.com/css?family=Cardo|Hind|Great+Vibes|Poppins:300,400,500,600,700|Josefin+Sans:300,400,600&display=swap"
                rel="stylesheet"
            />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
        )
    }
}