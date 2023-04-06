import Head from 'next/head'
import HomePage from '@/Components/HomePage'
import Header from '@/Components/Header'
import HeroHome from '@/Components/Hero'
import Testimonials from '@/Components/Testimonials'
import Features from '@/Components/Features'
import Newsletter from '@/Components/Email'
import Footer from '@/Components/Footer'
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Home() {
  // const { data: session, status, user  } = useSession();
  // const router = useRouter();

  // if (session?.newUser) {
  //   router.push('/auth/newUser')
  // }

  return (
    <>
      <Head>
        <title>Blyssfull Magick</title>
        <meta name="description" content="Start your journey today" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HeroHome />
      <HomePage />
      <Features />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  )
}
