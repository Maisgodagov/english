import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';

import App from './App';
import './index.css';
import { store } from '@app/store/store';
import { lightTheme } from '@shared/theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <SafeAreaProvider>
        <ThemeProvider theme={lightTheme}>
          <App />
        </ThemeProvider>
      </SafeAreaProvider>
    </Provider>
  </StrictMode>,
);
