import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
// import { store } from "@/states/store";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { persistor, store } from "@/states/store";
import { PersistGate } from "redux-persist/integration/react";
// import Navbar from "@/components/navbar";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <MantineProvider
      theme={{
        /** Put your mantine theme override here */
        colorScheme: "light",
      }}
    >
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {/* <Navbar /> */}
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </MantineProvider>
  );
}
