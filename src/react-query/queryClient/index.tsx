
import React from 'react';
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false
        }
    }
})

export const CoreProvider = ({ children }: JSX.ElementChildrenAttribute) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)