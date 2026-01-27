
import { createRoot } from 'react-dom/client'
import './index.css'

import { ThemeProvider } from "@/components/theme-provider"

import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "@/context/AuthContext";
import AppRoutes from './routes/index.tsx';

createRoot(document.getElementById('root')!).render(
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AuthProvider>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </AuthProvider>
    </ThemeProvider>

)
