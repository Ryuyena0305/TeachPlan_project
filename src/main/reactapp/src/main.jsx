import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';


const root = createRoot(document.querySelector('#root'));  

root.render(
  <StrictMode>
    <ProSidebarProvider> {/* ✅ 이거로 감싸줘야 함 */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProSidebarProvider>
  </StrictMode>
);