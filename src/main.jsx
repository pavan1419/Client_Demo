import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
// import './index.css';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './assets/theme';
import { AuthProvider } from './Store/Auth.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </AuthProvider>
  </StrictMode>
);
