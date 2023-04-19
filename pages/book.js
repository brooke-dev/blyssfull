import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Paypal from "../Components/Paypal";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import CustomDatePicker from "@/Components/CustomDatePicker";

export default function Book() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [authed, setAuthed] = useState(false);
  const [price, setPrice] = useState(null);
  const [desc, setDesc] = useState();
  const [selectedDate, setSelectedDate] = useState(null);
  const [formValid, setFormValid] = useState(true);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    console.log(desc)
    if (selectedDate != null && price != null) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [selectedDate, price, setFormValid, formValid])
  

  const handleServiceChange = (e) => {
    setPrice(e.target.value);
    setDesc(e.target[e.target.selectedIndex].text);
  };

  if (authed) {
    return (
      <>
        <Header isBooking={true} />
        {/* <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
        Book
        </h1> */}
          <div class="md:shadow-xl lg:pt-32 pt-32 pb-12 lg:p-80 md:p-10 md:pt-40 md:pb-20 w-50">
            <div>
              <div class="md:grid md:grid-cols-3 md:gap-6">
                <div class="md:col-span-1">
                  <div class="px-4 sm:px-4">
                    <h2 className="lg:text-2xl xl:text-6xl text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4">
                      Book{" "}
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-500">
                        Here
                      </span>
                    </h2>
                    {price ? (
                      <h2 className="text-1xl md:text-3xl font-extrabold leading-tighter tracking-tighter mb-4">
                        Price: ${price}
                      </h2>
                    ) : null}
                    <p class="mt-1 text-sm text-gray-600">
                      Enter Some Details & Select a Service
                    </p>
                  </div>
                </div>
                <div class="mt-5 md:col-span-2 md:mt-0">
                  <form>
                    <div className="overflow-hidden shadow sm:rounded-md">
                      <div className="bg-white px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            {/* <label
                              htmlFor="first-name"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              First name */}
                            {/* </label>
                            <input
                              required
                              type="text"
                              name="first-name"
                              id="first-name"
                              autoComplete="given-name"
                              className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="last-name"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Last name
                            </label>
                            <input
                              required
                              type="text"
                              name="last-name"
                              id="last-name"
                              autoComplete="family-name"
                              className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-4">
                            <label
                              htmlFor="email-address"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Email address
                            </label>
                            <input
                              required
                              type="text"
                              name="email-address"
                              id="email-address"
                              readOnly={true}
                              value={session.user?.email}
                              autoComplete="email"
                              className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div> */}

                            <div className="col-span-6 sm:col-start-1 col-end-7">
                              <label
                                htmlFor="services"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Service
                              </label>
                              <select
                                required
                                onChange={handleServiceChange}
                                id="services"
                                name="services"
                                value={price}
                                autoComplete="services-name"
                                className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              >
                                <option value=""></option>
                                <option value="15.00" label="Intoductory Session">
                                  Intoductory Session
                                </option>
                                <option value="111.00" label="1 Hour Distance Reiki Session">
                                  1 Hour Distance Reiki Session
                                </option>
                                <option value="55.00" label="30 Minute Distance Reiki Session">
                                  30 Minute Distance Reiki Session
                                </option>
                                <option value="33.00" label="30 Minute Tarot Reading">
                                  30 Minute Tarot Reading
                                </option>
                                <option value="33.00" label="30 Minute Oracle Reading">
                                  30 Minute Oracle Reading
                                </option>
                                <option value="22.00" label="15 Minute Oracle Reading">
                                  15 Minute Oracle Reading
                                </option>
                              </select>
                            </div>

                            {/* <div className="col-span-6">
                            <label
                              htmlFor="street-address"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Street address
                            </label>
                            <input
                              required
                              type="text"
                              name="street-address"
                              id="street-address"
                              autoComplete="street-address"
                              className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div> */}

                            {/* <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label
                              htmlFor="city"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              City
                            </label>
                            <input
                              required
                              type="text"
                              name="city"
                              id="city"
                              autoComplete="address-level2"
                              className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div> */}

                            {/* <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label
                              htmlFor="region"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              State / Province
                            </label>
                            <input
                              required
                              type="text"
                              name="region"
                              id="region"
                              autoComplete="address-level1"
                              className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div> */}

                            {/* <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label
                              htmlFor="postal-code"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              ZIP / Postal code
                            </label>
                            <input
                              required
                              type="text"
                              name="postal-code"
                              id="postal-code"
                              autoComplete="postal-code"
                              className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div> */}
                            <div className="col-span-6 sm:col-start-1 col-end-7">
                              <label className="block text-sm font-medium leading-6 text-gray-900">
                                Pick Date
                              </label>
                              <CustomDatePicker onChange={handleDateChange} />
                            </div>
                      
                        </div>
                        <div className="bg-gray-50 mt-5 px-4 py-3 text-right sm:px-6">
                            <Paypal isDisabled={formValid} cost={price} date={selectedDate} desc={desc} userId={session.id} />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        <Footer />
      </>
    );
  }

  if (status === "authenticated") {
    setTimeout(() => {
      setAuthed(true);
    }, 2000);
  }

  if (status === "unauthenticated") {
    router.push("/auth/Signin/");
  }

  return (
    <>
      <Header isBooking={true} />
      <div class="animate-pulse md:shadow-xl lg:pt-32 pt-32 pb-12 lg:p-80 md:p-10 md:pt-40 md:pb-20 w-50">
            <div>
              <div class="md:grid md:grid-cols-3 md:gap-6">
                <div class="md:col-span-1">
                  <div class="px-4 sm:px-4">
                    <h2 className="h-40 bg-slate-700 rounded lg:text-2xl xl:text-6xl text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4">
                     
                      <span className="h-20 bg-slate-700 rounded bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-500">
                      
                      </span>
                    </h2>
                    <p class="h-10 bg-slate-700 rounded mt-1 text-sm text-gray-600">
                    </p>
                  </div>
                </div>
                <div class="mt-5 md:col-span-2 md:mt-0">
                  <form>
                    <div className="overflow-hidden shadow sm:rounded-md">
                      <div className="bg-white px-4 py-5 sm:p-1">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-start-1 col-end-7">
                              <label
                                htmlFor="services"
                                className="h-5 bg-slate-700 rounded block text-sm font-medium leading-6 text-gray-900"
                              >
                                
                              </label>
                              <label
                                htmlFor="services"
                                className="h-10 mt-2 bg-slate-700 rounded block text-sm font-medium leading-6 text-gray-900"
                              >
                                
                              </label>
                            
                            </div>

                            <div className="col-span-6 sm:col-start-1 col-end-7">
                              <label className="h-5 mt-2 bg-slate-700 rounded block text-sm font-medium leading-6 text-gray-900">
                              </label>
                              <label className="h-10 mt-2 bg-slate-700 rounded block text-sm font-medium leading-6 text-gray-900">
                              </label>
                            </div>
                      
                        </div>
                        <div className="h-20 bg-slate-700 rounded bg-gray-50 mt-5 px-4 py-3 text-right sm:px-6">
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
    </>
  );
}
