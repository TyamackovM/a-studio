import "../styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";

import { useRouter } from "next/router";

import { AnimatePresence, motion } from "framer-motion";

import Layout from "../components/Layout";
import Transition from "../components/Transition";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Студия дизайна Анжелики Старовойтовой</title>
        <meta
          name="description"
          content="Студия дизайна Анжелики Старовойтовой - ваш путь к уникальному дизайну и творческой реализации идей."
        />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
};

export default MyApp;
