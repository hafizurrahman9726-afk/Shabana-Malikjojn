// Ensure window.fetch is configurable with a setter to prevent iframe extension crashes
try {
  const nativeFetch = window.fetch;
  if (nativeFetch) {
    let currentFetch = nativeFetch.bind(window);
    try {
      Object.defineProperty(window, 'fetch', {
        get: () => currentFetch,
        set: (val) => {
          currentFetch = val;
        },
        configurable: true,
        enumerable: true,
      });
    } catch {
      if (window.Window && window.Window.prototype) {
        Object.defineProperty(window.Window.prototype, 'fetch', {
          get: () => currentFetch,
          set: (val) => {
            currentFetch = val;
          },
          configurable: true,
          enumerable: true,
        });
      }
    }
  }
} catch {
  // Ignore
}

import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(<App />);
