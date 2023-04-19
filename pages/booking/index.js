import { useRouter } from "next/router";
import useSWR from "swr";
import * as React from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import TimeDisplay from "@/Components/TimeDisplay";
import DateDisplay from "@/Components/DateDisplay";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function Booking() {
  const { data, error } = useSWR(() => `/api/booking/`, fetcher);

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;
  if (data) {
    debugger;
    if (data.data.length <= 0) {
      return (
        <>
          <Header />
          <section className="relative">
            {/* Illustration behind hero content */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
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
                    x1="50%"
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
                {/* Hero image */}
                <div>
                  <div
                    className="relative flex justify-center mb-8 h-40v bg-bottom"
                    data-aos="zoom-in"
                  >
                    <div className="flex flex-col justify-top">
                      <div class="max-w-sm rounded overflow-hidden shadow-lg shadow-indigo-500/50">
                        {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
                        <div class="px-6 py-4">
                          <div class="font-bold text-xl mb-2">
                            No Bookings at this time.
                          </div>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            Book Now
                          </span>
                          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            Learn More
                          </span>
                        </div>
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
    return (
      <>
        <Header />
        <section className="relative">
          {/* Illustration behind hero content */}
          {/* <div
            className="z-0 absolute left-1/4 transform -translate-x-1/4 top-1/4 pointer-events-none"
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
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                  id="illustration-02"
                >
                  <stop stopColor="purple" offset="0%" />
                  <stop stopColor="blue" offset="77.402%" />
                  <stop stopColor="white" offset="100%" />
                </linearGradient>
              </defs>
              <g fill="url(#illustration-02)" fillRule="evenodd">
                <circle cx="900" cy="300" r="128" />
                <circle cx="300" cy="200" r="64" />
              </g>
            </svg>
          </div>

          <div
            className="absolute right-1/3 transform translate-x-1/3 top-1/2 pointer-events-none"
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
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                  id="illustration-03"
                >
                  <stop stopColor="purple" offset="0%" />
                  <stop stopColor="blue" offset="77.402%" />
                  <stop stopColor="white" offset="100%" />
                </linearGradient>
              </defs>
              <g fill="url(#illustration-03)" fillRule="evenodd">
                <circle cx="700" cy="400" r="128" />
                <circle cx="1100" cy="100" r="64" />
              </g>
            </svg>
          </div>

          <div
            className="absolute right-1/5 transform translate-x-1/5 bottom-1/3 pointer-events-none"
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
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                  id="illustration-04"
                >
                  <stop stopColor="purple" offset="0%" />
                  <stop stopColor="blue" offset="77.402%" />
                  <stop stopColor="white" offset="100%" />
                </linearGradient>
              </defs>
              <g fill="url(#illustration-04)" fillRule="evenodd">
                <circle cx="500" cy="100" r="128" />
                <circle cx="1000" cy="400" r="64" />
              </g>
            </svg>
          </div> */}

          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Hero content */}
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Hero image */}
              <div class="md:grid grid-cols-3 gap-10">
                {data.data.map((b) => {
                  return (
                    <div key={b.id}>
                      <div
                        className="relative flex justify-center mb-8 h-40v bg-bottom"
                        data-aos="fade-up"
                      >
                        <div className="flex flex-col justify-top">
                          <div class="max-w-sm rounded overflow-hidden shadow-lg shadow-indigo-500/50">
                            {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
                            <div class="px-6 py-2">
                              <p class="text-purple-700 break-words text-xl md:text-3xl font-extrabold leading-tighter tracking-tighter mb-4">
                                {b.desc}
                              </p>
                            </div>
                            <div class="px-6 py-4">
                              <div class="font-bold text-xl mb-2">Time: </div>
                              <p class="text-gray-700 text-base">
                                <TimeDisplay timestamp={b.date} />
                              </p>
                            </div>
                            <div class="px-6 py-4">
                              <div class="font-bold text-xl mb-2">Date:</div>
                              <p class="text-gray-700 text-base">
                                <DateDisplay timestamp={b.date} />
                              </p>
                            </div>
                            <div class="px-6 pt-4 pb-2">
                              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                Reciept Link
                              </span>
                              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                Calendar Link
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
  }
}
