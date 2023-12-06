'use client';

import { NextUIProvider } from '@nextui-org/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { FC } from 'react';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 3,
    },
  },
});

interface IProps {
  children: React.ReactNode;
}

export const ClientProvider: FC<IProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider className='flex flex-col min-h-screen'>
        {children}
        <Toaster
          position='top-center'
          toastOptions={{
            duration: 2000,
            className: 'text-sm',
          }}
        />
      </NextUIProvider>
    </QueryClientProvider>
  );
};
