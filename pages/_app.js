import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Header from '@/Components/Header';
import AOS from 'aos';


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
    useEffect(() => {
    AOS.init({
      once: true,
      //disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
