import Image from "next/image";
import { Navbar } from "../components/Navbar.jsx";
import Link from "next/link";
import { Footer } from "../components/Footer";

export default function Tickets() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-r from-[#322D35] to-[#4C454F]">
        <div className="my-10 mb-20 sm:mb-10 w-full max-w-5xl items-center sm:flex sm:flex-col px-4 lg:px-14">
          <h2 className="mt-10 mb-4 font-aurochs text-[#F0E5D1] uppercase text-6xl tracking-wider text-center">
            Buy tickets
          </h2>
          <p className="text-[#F0E5D1] text-2xl font-bold mt-6">
            All-access tickets include admission to all the evening concerts, workshops, events and fun, as well as our guitar showcase. 
          </p>
          <p className="text-[#F0E5D1] text-2xl font-bold mt-6">Three days of fun and inspiring programming crafted just for guitar people by the Fretboard Journal and Old Town School of Folk Music</p>
          {/* <p className="text-[#F0E5D1] text-lg italic mt-4">
            Please note: new schedule for 2024! Fretboard Summit will run Friday, August 23, 2024 through Sunday, August 25, 2024.
          </p> */}

        </div>

        <div className="mb-4 sm:my-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-20 bg-[#A4CCDA] text-[#322D25] relative">
          <Image
            src="/BestValue.svg"
            alt="best value"
            className="absolute -left-4 -top-14 sm:top-4"
            width={200}
            height={100}
          />
          <h2 className="tracking-wider font-aurochs font-normal uppercase text-5xl text-center">
            3-DAY ALL ACCESS PASS $400
          </h2>
          {/* <h2 className="tracking-wider font-aurochs font-normal uppercase text-4xl text-center">
          Early Bird Price Now Available! Price Increases January 5, 2026
          </h2> */}
          <h3 className="font-bold text-2xl my-6">
            Experience everything at the Fretboard Summit, including concerts, workshops, gear giveaways, gift bags &amp; more.
          </h3>
          <ul className="list-disc ml-4">
            <li>Exclusive access to Fretboard Summit on Thursday, August 20</li>
            <li>Admission to all events</li>
            <li className="ml-4">Live performances</li>
            <li className="ml-4">Workshops &amp; panel discussions</li>
            <li className="ml-4">Hands-on demos</li>
            <li className="ml-4">Guitar showcase</li>
            <li className="ml-4">Jams &amp; more...</li>
            <li className="ml-4">After-parties</li>
            <li>Early priority access to the Luthier Exhibition</li>
            {/* <li>Exclusive Thursday performance from Jeff Parker</li> */}
            <li>Welcome reception</li>
            <li>Gift bags &amp; sponsor prizes &amp; giveaways</li>
            {/* <li>
              Entry to win our custom 2023 Fretboard Summit guitar, built by
              Bruce Guitars
            </li> */}
          </ul>

          {/* <h3 className="mt-4 font-black text-xl">
            Limited to the first 300 registered attendees.
          </h3> */}
          <h3 className="mt-4 font-black text-base italic">
              Limited to first 300 registered attendees.
          </h3>
          <div className="flex flex-row justify-evenly mt-6">
            <a href="https://www.oldtownschool.org/concerts/2026/08-20-2026-fretboard-summit-2026/" className="text-center">
              <button className="tracking-wider text-3xl font-aurochs px-6 py-2 uppercase bg-[#2B6F6D] hover:bg-[#4DB3AC] text-[#F0E5D1]">
              Buy 3-day pass
              </button>
            </a>
          </div>
        </div>

        <div className="mt-4 sm:my-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-20 bg-[#F0E5D1] text-[#322D25]">
          <h2 className="tracking-wider font-aurochs font-normal uppercase text-5xl text-center">
            Single Day Pass
          </h2>
          <h3 className="font-bold text-2xl my-6">
          Can only attend for one day? Day Pass holders have access to all the Fretboard Summit fun, including our concerts, workshops, events, and more.
          </h3>

          
          {/* <ul className="list-disc ml-4">
            <li>Admission to All Events</li>
            <li className="ml-4">Live performances</li>
            <li className="ml-4">Workshops &amp; panel discussions</li>
            <li className="ml-4">Hands-on demos</li>
            <li className="ml-4">Jams &amp; more...</li>
            <li className="ml-4">After-parties</li>
            <li>Luthier Exhibition</li>
          </ul> */}

          <div className="block sm:flex sm:flex-row  max-w-5xl sm:p-0">
            <div className="flex justify-evenly w-full sm:flex-col sm:flex sm:w-2/4 sm:p-4 px-4">
              
              <button className="tracking-wider text-3xl font-aurochs px-6 py-2 uppercase bg-[#757f7e] text-[#F0E5D1] cursor-not-allowed">
              Available Summer 2026<br/>Fri August 21
              </button>
              {/* <Link href="http://ots.fm/FBS25Fri" className="text-center">
                <button className="tracking-wider text-3xl font-aurochs px-6 py-2 uppercase hover:bg-[#4DB3AC] bg-[#2B6F6D] text-[#F0E5D1] ">
                  Buy Day Pass: Fri, Aug 22
                </button>
              </Link> */}
              {/* <ul className="list-disc ml-4 mt-6">
                <li>Friday Highlights Include:</li>
                <li className="ml-4">JHS Live: the Germanium Chef competition featuring Robert Keeley versus Heather Brown</li>
                <li className="ml-4">Wayne & Jayne Henderson</li>
                <li className="ml-4">Jake Eddy</li>
                <li className="ml-4">Jorma Kaukonen</li>
                <li className="ml-4">The Blue Guitars</li>
                <li className="ml-4">The Truth About Vintage Amps Lounge</li>
                <li className="ml-4">and much more</li>
              </ul> */}
            </div>
            <div className="flex justify-evenly w-full sm:flex-col sm:flex sm:w-2/4 m-0 sm:p-4 px-4 mt-2 sm:mt-0">
                <button className="tracking-wider text-3xl font-aurochs px-6 py-2 uppercase bg-[#757f7e] text-[#F0E5D1] cursor-not-allowed">
                Available Summer 2026<br/>Sat August 22
                </button>
              {/* <Link href="https://ots.fm/FBS25Sat" className="text-center">
                <button className="tracking-wider text-3xl font-aurochs px-6 py-2 uppercase bg-[#2B6F6D] hover:bg-[#4DB3AC] text-[#F0E5D1]">
                Buy Day Pass: Sat, Aug 23
                </button>
              </Link> */}
              {/* <ul className="list-disc ml-4 mt-6">
                <li>Saturday Highlights Include:</li>
                <li className="ml-4">Tommy Emmanuel</li>
                <li className="ml-4">The Bill Frisell Guitar Orchestra</li>
                <li className="ml-4">A Celebration of Norman Blake feat. Bob Minner and Cameron Knowler</li>
                <li className="ml-4">Adam Miller</li>
                <li className="ml-4">Via Mardot</li>
                <li className="ml-4">The Truth About Vintage Amps Lounge</li>
                <li className="ml-4">and much more</li>
              </ul> */}
            </div>
          </div>


          {/* <div className="flex flex-row justify-evenly mt-6">
            <Link href="" className="text-center">
              <button className="tracking-wider text-3xl font-aurochs px-6 py-2 uppercase hover:bg-[#4DB3AC] bg-[#2B6F6D] text-[#F0E5D1]">
                Buy Day Pass: Fri, Aug. 25
              </button>
            </Link>
            <Link href="" className="text-center ml-1">
              <button className="tracking-wider text-3xl font-aurochs px-6 py-2 uppercase hover:bg-[#4DB3AC] bg-[#2B6F6D] text-[#F0E5D1]">
                Buy Day Pass: Sat, Aug. 26
              </button>
            </Link>
          </div>
          <div className="flex flex-row justify-evenly mt-6">
            <ul className="list-disc ml-4">
              <li>Friday Highlights Include:</li>
              <li className="ml-4">JHS Live: the Germanium Chef competition featuring Robert Keeley versus Heather Brown</li>
              <li className="ml-4">Wayne & Jayne Henderson</li>
              <li className="ml-4">Jake Eddy</li>
              <li className="ml-4">Tom Bukovac & Bryan Sutton, interviewed by Joe Glaser</li>
              <li className="ml-4">Jorma Kaukonen</li>
              <li className="ml-4">The Blue Guitars</li>
              <li className="ml-4">The Truth About Vintage Amps Lounge</li>
              <li className="ml-4">and much more</li>
            </ul>
            <ul className="list-disc ml-4">
              <li>Saturday Highlights Include:</li>
              <li className="ml-4">Tommy Emmanuel</li>
              <li className="ml-4">The Bill Frisell Guitar Orchestra</li>
              <li className="ml-4">A Celebration of Norman Blake feat. Bob Minner and Cameron Knowler</li>
              <li className="ml-4">Adam Miller</li>
              <li className="ml-4">Via Mardot</li>
              <li className="ml-4">The Truth About Vintage Amps Lounge</li>
              <li className="ml-4">and much more</li>
            </ul>
          </div> */}




        </div>

        <div className="mt-10 mb-20 w-full max-w-5xl items-center sm:flex sm:flex-col px-4 lg:px-14 text-center">
          <h2 className="mb-4 text-[#4DB3AC] font-bold uppercase text-xl tracking-widest ">
            OTHER TICKET PACKAGES:
          </h2>

          {/* <button className="tracking-wider text-3xl font-aurochs px-6 py-2 uppercase bg-[#757f7e] text-[#F0E5D1]  cursor-not-allowed">
          Available Summer 2026
          </button>
           */}

          {/* <p className="text-white text-lg mt-2 mb-2">
            <span className="font-bold">Exhibitor Showcase Only Coming Soon</span><br/>
            Demo and shop for gear from over 80 luthiers and exhibitors.<br/>
            <span className="italic">(This pass does not include admission to Summit workshops, clinics, or concerts.)</span>
          </p> */}

          {/* <p className="text-white text-lg mt-2 mb-2">
            <span className="font-bold">Luthier & Gear Showcase Passes Only</span><br/>
            Demo and shop for gear from over 80 luthiers and exhibitors.<br/>
            <span className="italic">(This pass does not include admission to Summit workshops, clinics, or concerts.)</span>
          </p> */}
          <div className="w-full sm:flex-row sm:flex sm:w-3/4">
            <button className="tracking-wider text-3xl font-aurochs px-6 py-2 uppercase bg-[#757f7e] text-[#F0E5D1]  cursor-not-allowed">
            Showcase Only - Fri&nbsp;August&nbsp;21
            </button>
            <button className="tracking-wider text-3xl font-aurochs px-6 py-2 uppercase bg-[#757f7e] text-[#F0E5D1]  cursor-not-allowed sm:mt-0 ml-0 sm:ml-1">
            Showcase Only - Sat&nbsp;August&nbsp;22
            </button>
            {/* <Link href="https://www.oldtownschool.org/events/event.php?event_id=9483" className="text-center">
              <button className="tracking-wider text-3xl font-aurochs px-6 py-2 uppercase hover:bg-[#4DB3AC] bg-[#2B6F6D] text-[#F0E5D1]">
              Showcase Only - Fri&nbsp;August&nbsp;22
              </button>
            </Link>
            <Link href="https://www.oldtownschool.org/events/event.php?event_id=9484" className="text-center ml-0 sm:ml-1">
              <button className="tracking-wider text-3xl font-aurochs px-6 py-2 uppercase hover:bg-[#4DB3AC] bg-[#2B6F6D] text-[#F0E5D1] mt-2 sm:mt-0 ml-0 sm:ml-1">
              Showcase Only - Sat&nbsp;August&nbsp;23          
              </button>
            </Link> */}
          </div>
          <p className="text-white text-lg italic">
            Tickets will also be available at the door
          </p>
         

          <p className="text-white text-lg mt-6">
            <span className="font-bold">Individual Concert Tickets</span>
          </p>

          <div className="w-full sm:w-3/4">
            <p>Pending Availability</p>
            {/* <Link href="https://www.oldtownschool.org/concerts/2025/08-23-2025-lyle-lovett/" className="text-center">
              <button className="my-2 tracking-wider text-3xl font-aurochs px-6 py-2 uppercase bg-[#2B6F6D] hover:bg-[#4DB3AC] text-[#F0E5D1]">
              Lyle Lovett Concert Only
              </button>
            </Link>
            <Link href="https://www.oldtownschool.org/concerts/2025/08-21-2025-cesar-rosas-and-the-chi-town-playboys-charlie-hunter/" className="text-center sm:ml-1">
              <button className="my-2 tracking-wider text-3xl font-aurochs px-6 py-2 uppercase bg-[#2B6F6D] hover:bg-[#4DB3AC] text-[#F0E5D1]">
              Cesar Rosas & Chi-Town Playboys Concert Only
              </button>
            </Link>
            <Link href="https://www.oldtownschool.org/concerts/2025/08-22-2025-dave-hill/" className="text-center ml-0 sm:ml-1">
              <button className="my-2 tracking-wider text-3xl font-aurochs px-6 py-2 uppercase bg-[#2B6F6D] hover:bg-[#4DB3AC] text-[#F0E5D1]">
              Dave Hill Concert Only
              </button>
            </Link> */}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
