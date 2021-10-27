import type { AppProps } from "next/app";
import "../styles/style.css";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
