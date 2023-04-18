import React from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { useSession } from "next-auth/react";
import Link from "next/link";
export default function About() {
  const { data: session, status } = useSession();
  return (
    <>
      <Header />
      <section className="relative">
        {/* Illustration behind hero content */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 bottom-10 pointer-events-none"
          aria-hidden="true"
        >
          <svg
            width="100vw"
            height="578"
            viewBox="0 0 1360 578"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                x1="0%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="illustration-01"
              >
                <stop stopColor="purple" offset="0%" />
                <stop stopColor="blue" offset="77.402%" />
                <stop stopColor="white" offset="100%" />
              </linearGradient>
            </defs>
            <g fill="url(#illustration-01)" fillRule="evenodd">
              <circle cx="1232" cy="128" r="128" />
              <circle cx="155" cy="443" r="64" />
            </g>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Hero content */}
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Section header */}
            <div className="text-center pb-12 md:pb-16">
              <h1
                className="break-words text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                data-aos="zoom-y-out"
              >
                About{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-700">
                  Me
                </span>
              </h1>

              <div className="max-w-3xl mx-auto flex flex-col">
                <p
                  className="text-xl text-gray-600 mb-8 basis-1/2"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  Hey there! My name is Alyssa Barlow & welcome to our safe
                  space! I’ll start by saying, I’m so happy you’re here &
                  deciding you want better for yourself. A little bit about
                  me…I’m 26 years old, a Virgo sun with a Virgo rising & a Leo
                  moon. I am married to the most amazing man, Robert. We have
                  two animals & our own home in Bucks County, Pennsylvania. As
                  far as my journey goes, I started my spiritual awakening way
                  back when I was a teenager, but the past 4-5 years I have
                  really honed in on my gifts & what I can offer the world. I am
                  a practicing eclectic Witch & I specialize in intuitive
                  healing. I have experience with a wide variety of magick. I am
                  a journaling alchemist, Reiki Master/Teacher, yogi, & card
                  reader, among many other titles I proudly wear. My job here is
                  to aid you in your journey with the help of Spirit & the
                  divine connection we all share. Come as you are & leave the
                  shame at the door. All of you is welcome here.
                </p>
                  <div
                    className="relative flex flex-col flex-wrap content-center justify-center mb-4 bg-fixed h-60v bg-bottom"
                    data-aos="zoom-y-out"
                    data-aos-delay="450"
                    style={{ backgroundImage: "url(/alyssaStanding.png)", backgroundSize: "contain", backgroundRepeat: 'no-repeat' }}
                  >
                    <div className="flex flex-col justify-center">
                      {/* <img className="mx-auto" src="https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" width="768" height="400" alt="Hero" /> */}
                      {/* <svg className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto" width="768" height="400" viewBox="0 0 768 432" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="hero-ill-a">
                          <stop stopColor="purple" offset="0%" />
                          <stop stopColor="blue" offset="77.402%" />
                          <stop stopColor="white" offset="100%" />
                        </linearGradient>
                        <linearGradient x1="50%" y1="0%" x2="50%" y2="99.24%" id="hero-ill-b">
                          <stop stopColor="purple" offset="0%" />
                          <stop stopColor="blue" offset="48.57%" />
                          <stop stopColor="white" stopOpacity="0" offset="100%" />
                        </linearGradient>
                        <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="hero-ill-e">
                          <stop stopColor="purple" offset="0%" />
                          <stop stopColor="blue" offset="25.871%" />
                          <stop stopColor="white" offset="100%" />
                        </radialGradient>
                        <circle id="hero-ill-d" cx="384" cy="216" r="64" />
                      </defs>
                      <g fill="none" fillRule="evenodd">
                        <circle fillOpacity=".04" fill="url(#hero-ill-a)" cx="384" cy="216" r="128" />
                        <circle fillOpacity=".16" fill="url(#hero-ill-b)" cx="384" cy="216" r="96" />
                        <g fillRule="nonzero">
                          <use fill="#000" xlinkHref="#hero-ill-d" />
                          <use fill="url(#hero-ill-e)" xlinkHref="#hero-ill-d" />
                        </g>
                      </g>
                    </svg> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
