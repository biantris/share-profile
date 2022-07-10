import 'tailwindcss/tailwind.css';
import { AuthProvider } from '../context/AuthContext';

// @ts-ignore
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp;
