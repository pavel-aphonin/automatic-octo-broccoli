import Layout from './../component/Layout';

import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }: any) => {

  return (
    <Layout>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  )
}

export default MyApp
