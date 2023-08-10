import '../styles/globals.css';

//? router
import { useRouter } from 'next/router';

//? components
import Layout from '../components/Layout';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
