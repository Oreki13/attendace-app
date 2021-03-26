import React from 'react';
import { AuthProvider } from './Context/AuthProvider';
import { Routes } from './Router/Routes';

interface ProvidersProps { }

export const Providers: React.FC<ProvidersProps> = ({ }) => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};
