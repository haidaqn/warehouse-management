import { Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './components/providers/theme-provider';
import { TooltipProvider } from './components/ui/tooltip';
import { AuthLayout } from './components/layouts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LoginForm } from '@/views/auth';
import NotFound from '@/views/not-found.tsx';
import { Toaster } from 'sonner';
import LandingPage from '@/views/landing-page';
import AuthProtect from '@/components/protect-route/auth-protect.tsx';
import { AlertDialogProvider } from '@/components/providers/alert-dialog-provider.tsx';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <TooltipProvider disableHoverableContent>
          <AlertDialogProvider>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route element={<AuthProtect />}>
                <Route path="auth" element={<AuthLayout />}>
                  <Route index element={<Navigate to="login" />} />
                  <Route path="login" element={<LoginForm />} />
                </Route>
              </Route>
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
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;