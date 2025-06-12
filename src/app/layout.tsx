import './globals.css';
import { Toaster } from 'sonner';

export const metadata = {
  title: 'Email Generator',
  description: 'AI-powered email generator',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}





