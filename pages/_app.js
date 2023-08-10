//? router
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}
