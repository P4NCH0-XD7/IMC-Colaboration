import theme from '../theme';
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import "./globals.css";
import "./page.module.css"
import User  from "@/app/User/page.js"






export const metadata = {
      title: "IMC Colaboration",
      description: "",
      manifest: '/manifest.json',
    icons: {
      apple: 'logoEnNegro.png',
    },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
         
             {children}
            
          </ThemeProvider>
      </AppRouterCacheProvider> 
      </body>

    </html>
  );
}

