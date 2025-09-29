import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextProvider from './context/ContextProvider.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <Toaster position="top-center" reverseOrder={false}/>
     <App/>
  </ContextProvider>
)
