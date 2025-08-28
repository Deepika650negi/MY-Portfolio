import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Yahan se '!' non-null assertion operator hata diya gaya hai
const rootElement = document.getElementById('root');

// Ek check add karna acchi practice hai
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error("Failed to find the root element.");
}
