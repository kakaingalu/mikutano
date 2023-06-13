import "../styles/auth.css";
import "../styles/chats.css";
import "../styles/index.css";
import "../styles/home.css";
import "../styles/about.css";

import { ContextProvider } from '../context'

export default function App({ Component, pageProps }) {
  // Render the ContextProvider component, wrapping the main component with the provided context
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}
