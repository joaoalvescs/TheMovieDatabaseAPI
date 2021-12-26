import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link 
                        rel="preconnect" 
                        href="https://fonts.googleapis.com" 
                    />
                    <link 
                        rel="preconnect" 
                        href="https://fonts.gstatic.com" 
                    />
                    <link 
                        href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400&display=swap" 
                        rel="stylesheet"
                    />
                    <link 
                        rel="stylesheet" 
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
                        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" 
                        crossOrigin="anonymous"
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