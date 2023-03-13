import React, {useEffect} from "react";
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"

export default function Book() {
    const { data: session } = useSession();
    const router = useRouter()

    useEffect(() => {
      if (!session) router.push('/auth/signin/');
    }, [router, session])
    
    return (
    <div className="w-screen flex-auto justify-center align-center">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
        Booking Coming Soon!
        </h1>
    </div>
  );
}
