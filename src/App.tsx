import { Route, Routes } from "react-router-dom"
import { AlertDialogProvider, ThemeProvider } from "./components/providers"
import LandingPage from "./views/landing-page"
import { Toaster } from 'sonner';
import NotFound from './views/not-found';

function App() {

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <AlertDialogProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="not-found" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster closeButton richColors toastOptions={{
          classNames: {
            error: 'bg-red-400',
            success: 'bg-green-400',
            warning: 'bg-yellow-400',
            info: 'bg-blue-400',
          },
        }} />
      </AlertDialogProvider>
    </ThemeProvider>
  )
}

export default App
