import { Header, Main } from "@/components/layouts";
import GlobalContextProvider from "@/store/GlobalContext";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider>
      <div>
        <Main>
          <Component {...pageProps} />
        </Main>
      </div>
    </GlobalContextProvider>
  );
}
