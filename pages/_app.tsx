import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
// import { store } from "@/states/store";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { persistor, store } from "@/states/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: "light",
      }}
    >
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </MantineProvider>
  );
}
