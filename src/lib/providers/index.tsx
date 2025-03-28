"use client";

import type { ThemeProviderProps } from "next-themes";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";

import UserProvider from "@/src/context/user.provider";
import { store } from "@/src/redux/store";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}
const queryClient = new QueryClient();

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <UserProvider>
          <NextUIProvider navigate={router.push}>
            <Toaster />
            <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
          </NextUIProvider>
        </UserProvider>
      </Provider>
    </QueryClientProvider>
  );
}
