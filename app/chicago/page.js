import Image from "next/image";
import { Navbar } from "../components/Navbar.jsx";
import Link from "next/link";
import { Footer } from "../components/Footer.jsx";

export default function Directions() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-r from-[#322D35] to-[#4C454F]">
        <div className="my-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-20 bg-[#A4CCDA] text-[#322D25]">
          <div className="flex justify-center">
            <Image
              src="/FretboardSummit_Web_Imgs_4GettingHere.png"
              alt="Getting Here - Lincoln Square"
              className=""
              width={600}
              height={600}
            />
          </div>
          <h2 className="tracking-wider font-aurochs font-normal uppercase text-5xl text-center my-6">
            Getting Here & Chicago Info
          </h2>
          <p className="text-xl">
            Old Town School of Folk Music is hosting the Fretboard Summit at the
            Lincoln Square campus on Chicago&apos;s northside, just 9 miles
            north of downtown. Old Town School of Folk Music is located at 4544
            N. Lincoln Avenue, Chicago, IL 60625.
          </p>
          <p className="text-xl my-4">
            Located just 4 blocks from &quot;The L&quot; Brown Line - Western
            stop. Easily accessible via bus and rideshare from anywhere you may
            be staying in the Chicagoland area. Public parking is available
            throughout the neighborhood.
          </p>

          <Link
            href="https://www.google.com/maps/place/Old+Town+School+of+Folk+Music/@41.964216,-87.686021,17z/data=!3m1!4b1!4m5!3m4!1s0x880fcdf75dd7bee7:0xf503fea46dbf4f36!8m2!3d41.964216!4d-87.686021"
            className="text-center mt-6"
          >
            <button className="tracking-wider text-3xl font-aurochs px-6 py-2 uppercase hover:bg-[#4DB3AC] bg-[#2B6F6D] text-[#F0E5D1]">
              Map
            </button>
          </Link>
        </div>

        <div className="my-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-20 bg-[#F0E5D1] text-[#322D25]">
          <h2 className="tracking-wider font-aurochs font-normal uppercase text-5xl text-center">
          CHICAGO IS AND ALWAYS HAS BEEN A GREAT PLACE FOR MUSIC LOVERS AND GUITAR LOVERS.
          </h2>
          
          <p className="mt-6">We&apos;ve asked some of our friends for their favorite hangs and eats in Chicago:</p>

          <figure className="max-w-screen-md mx-auto text-center mt-6 bg-yellow-50 p-4">
            <svg aria-hidden="true" className="w-10 h-10 mx-auto text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
            <blockquote>
                <p className="text-2xl italic font-medium text-gray-900">I always take the easy way out and eat wherever is convenient. Though it is non-gourmet and inelegantly spicy/barely healthy fare, I love <Link href="https://www.tacomaxmx.com/">Taco Max</Link>. I think there are two, both on the west side. Fine &#40;as in costly haute-style&#41; cuisine: <Link href="https://www.nextrestaurant.com/">Next</Link> and <Link href="https://www.proxichicago.com/"></Link>Proxi. In Andersonville: <Link href="https://www.anteprimachicago.net/">Anteprima</Link></p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <div className="flex items-center divide-x-2 divide-gray-500">
                    <cite className="pr-3 font-medium text-gray-900">Nels Cline </cite>
                    <cite className="pl-3 text-sm text-gray-500"><Link
            href="https://www.instagram.com/wilco/">@wilco</Link> <Link
            href="https://www.instagram.com/nelscline/">@nelscline</Link> </cite>
                </div>
            </figcaption>
        </figure>

        <figure className="max-w-screen-md mx-auto text-center mt-6 bg-yellow-50 p-4">
            <svg aria-hidden="true" className="w-10 h-10 mx-auto text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
            <blockquote>
                <p className="text-2xl italic font-medium text-gray-900">“The La Scarola to Richards Pipeline” My favorite &#91;Chicago&#93; restaurant is La Scarola and my favorite bar is Richards bar, right next door. It’s the La Scarola to Richards pipeline. I recommend the grilled octopus.</p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <div className="flex items-center divide-x-2 divide-gray-500">
                    <cite className="pr-3 font-medium text-gray-900">		Colleen Fazio </cite>
                    <cite className="pl-3 text-sm text-gray-500"><Link
            href="https://www.instagram.com/fazioelectric/">@fazioelectric</Link>  </cite>
                </div>
            </figcaption>
        </figure>

            

          {/* <ul className="font-bold text-2xl my-6">
            <li>
              <Link href="https://www.oldtownschool.org/">Old Town School</Link>
            </li>
            
            <li>
              <Link href="https://www.chicagomusicexchange.com/">
                Chicago Music Exchange
              </Link>
            </li>
            <li>
              <Link href="https://thevinylfactory.com/features/chicago-best-record-shops-guide/">
                Great record stores
              </Link>
            </li>
            <li>
              <Link href="https://kumascorner.com/#menu">
                Metal Menu at Kuma&apos;s Corner
              </Link>
            </li>
            <li>
              <Link href="https://www.bluesheaven.com/home.html">
                Tour Chess Records
              </Link>
            </li>
            <li>
              <Link href="https://www.delilahschicago.com/history">
                Happy Hour at Delilah&apos;s
              </Link>
            </li>
            <li>
              <Link href="https://greenmilljazz.com/">
                Green Mill ~ Jazz Speakeasy
              </Link>
            </li>
          </ul> */}
        </div>

        <div className="my-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-20 bg-[#A4CCDA] text-[#322D25]">
          <h2 className="tracking-wider font-aurochs font-normal uppercase text-5xl text-center my-6">
            ABOUT LINCOLN SQUARE
          </h2>
          <p className="font-bold text-2xl">
            In a city well-known for diversity, Lincoln Square stands out as an
            especially vibrant cultural crossroads. This European-style
            neighborhood is host to many one-of-a-kind shops, restaurants, and
            cafés that reflect the neighborhood’s wide appeal as an
            unforgettable place to shop, eat, drink, and visit.
          </p>

          <h2 className="tracking-wider font-aurochs font-normal uppercase text-3xl text-center my-6">
            ACCOMMODATIONS
          </h2>

          <p className="text-xl mt-2">
            Limited accommodations are available at our hotel partner, Hotel
            Zachary. This charming boutique hotel is located at Gallagher Way
            across the street from Wrigley Field. Special rates available for
            Fretboard Summit attendees following the link below.
          </p>
          <p className="text-xl mt-2">
            About Hotel Zachary: Inspired by Zachary Taylor Davis — legendary
            Chicagoan and the world-renowned 1914 architect behind Wrigley Field
            — Hotel Zachary blends new and old, refined and comfortable, unique
            and familiar, all at once. A boutique hotel in the heart of the
            iconic Wrigleyville neighborhood, it&apos;s an authentic experience
            that brings Davis&apos; vision to life in thoughtful and surprising
            ways. Just minutes from downtown Chicago and Lake Michigan,
            surrounded by unique shopping, dining and live music destinations,
            Hotel Zachary is the perfect home base for baseball fans, business
            travelers, curious vacationers and in-the-know locals. An
            unforgettable stay awaits!
          </p>
          <p className="text-xl my-4">
            Hotel space at Hotel Zachary is limited and may sell out. Old Town
            School is accessible from most hotels in the Chicagoland area via
            public transportation, rideshare, or taxi.{" "}
          </p>

          <p className="text-xl my-4 italic font-bold">2026 block of rooms at Hotel Zachary is now live, limited availability. </p>
          

          <Link
            href="https://app.marriott.com/reslink?id=1761835836171&key=GRP&app=resvlink&dtt=true"
            className="text-center mt-6"
          >
            <button className="tracking-wider text-3xl font-aurochs px-6 py-2 uppercase hover:bg-[#4DB3AC] bg-[#2B6F6D] text-[#F0E5D1]">
              Book Rooms At Hotel Zachary 
            </button>
          </Link>
        </div>

        <div className="my-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-20 bg-[#F0E5D1] text-[#322D25]">
          <h2 className="tracking-wider font-aurochs font-normal uppercase text-5xl text-center">
            NEARBY
          </h2>
          <p className="text-xl my-4">
            Many guests opt to stay in the surrounding neighborhoods and make a
            longer trip to explore all Chicago has to offer. Search for these
            neighborhoods to be in walking distance to Old Town School: Lincoln
            Square, North Center, Ravenswood, St. Ben&apos;s. Surrounding
            neighborhoods with access to public transportation or short rides to
            Lincoln Square: Andersonville, Roscoe Village, Lakeview, Albany
            Park, Budlong Woods, North Park, Wrigleyville.
          </p>

          <Link
            href="https://www.choosechicago.com/"
            className="text-center mt-6"
          >
            <button className="tracking-wider text-3xl font-aurochs px-6 py-2 uppercase hover:bg-[#4DB3AC] bg-[#2B6F6D] text-[#F0E5D1]">
              ADDITIONAL TRAVEL RESOURCES
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
