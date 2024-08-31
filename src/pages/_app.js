import "@/styles/globals.css";
import { inconsolata } from "@/styles/fonts";

export default function App({ Component, pageProps }) {
  return (
    <div className={inconsolata.className}>
      <Component {...pageProps} />
    </div>
  );
}
