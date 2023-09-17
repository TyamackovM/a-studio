import "../styles/globals.css";
import { AppProps } from "next/app";
// import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

//? router
import { useRouter } from "next/router";

//? framer motion
import { AnimatePresence, motion } from "framer-motion";

//? components
import Layout from "../components/Layout";
import Transition from "../components/Transition";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          {/* <TawkMessengerReact
            propertyId="64d8b031cc26a871b02ef4a4"
            widgetId="1h7sd5pgl"
          /> */}
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
};

export default MyApp;
