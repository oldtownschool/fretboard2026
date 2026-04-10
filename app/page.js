import Image from "next/image";
import { Navbar } from "./components/Navbar.jsx";
import Link from "next/link";
import { Footer } from "./components/Footer";
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <Script id="google-tag-meta">
      var a = document.createElement(&apos;meta&apos;);
      a.setAttribute(&apos;name&apos;, &apos;google-site-verification&apos;);
      a.setAttribute(&apos;content&apos;, &apos;IVHm-3kx8x4K6J6setRy0iaNzHnFZc2SW4c3poxgAcE&apos;);
      document.head.append(a);
      </Script>
      {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=GTM-TXTV4QHK"
        strategy="afterInteractive" 
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GTM-TXTV4QHK');
        `}
      </Script> */}
      <Navbar />
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-r from-[#322D35] to-[#4C454F]">
        {/* <div className="w-full max-w-5xl items-center lg:flex my-8"> */}
          {/* <Image
            src="/FBS_HeadlinerAnnounce2_2560x536.png"
            alt="FBS Headliner Announce 2024"
            width={1200}
            height={500}
          /> */}
          {/* <video
            autoPlay
            muted
            src={"https://fretboardsummit.org/FS-hp-reel-1.mp4"}
            loop
            width={1200}
            height={500}
          /> */}
        {/* </div> */}

        <div className="block sm:flex sm:flex-row py-10 max-w-5xl">
          <div className="w-full sm:flex sm:w-2/4">
            <Image
              className="hidden sm:flex mx-2"
              src="/border.png"
              alt="border"
              width={10}
              height={400}
            />
            <div className="px-8 sm:px-0">
              <Image
                src="/Group22.png"
                alt="banner top"
                width={500}
                height={50}
              />
              <Image
                src="/FS2026_Homepage_LeftStack_100625.png"
                alt="banner left"
                width={500}
                height={400}
              />
            </div>
            <Image
              className="hidden sm:flex mx-2"
              src="/border.png"
              alt="border"
              width={10}
              height={400}
            />
          </div>
          <div className="w-full mt-6 sm:mt-0 sm:flex sm:w-2/4">
            <Image
              src="/FS2026_Homepage_RightStack_100325.png"
              alt="banner left"
              width={500}
              height={400}
              className="px-8 sm:px-0"
            />
            <Image
              className="hidden sm:flex mx-2"
              src="/border.png"
              alt="border"
              width={10}
              height={400}
            />
          </div>
        </div>

        {/* <div className="block sm:flex sm:flex-row py-10">
          <div className="w-full sm:flex sm:w-2/4">
            <Image
              className="hidden sm:flex mx-2"
              src="/border.png"
              alt="border"
              width={10}
              height={400}
            />
            <div>
              <Image
                src="/Group22.png"
                alt="banner top"
                width={300}
                height={50}
              />
              <Image
                src="/Group24.png"
                alt="banner left"
                width={300}
                height={400}
              />
            </div>
            <Image
              className="hidden sm:flex mx-2"
              src="/border.png"
              alt="border"
              width={10}
              height={400}
            />
          </div>
          <div className="w-full mt-6 sm:mt-0 sm:flex sm:w-2/4">
            <Image
              src="/performers.png"
              alt="banner left"
              width={300}
              height={400}
            />
            <Image
              className="hidden sm:flex mx-2"
              src="/border.png"
              alt="border"
              width={10}
              height={400}
            />
          </div>
        </div> */}

        <a href="/tickets">
          <button className="text-3xl font-aurochs px-6 py-2 uppercase hover:bg-[#4DB3AC] bg-[#2B6F6D] text-[#F0E5D1]">
            Buy Tickets
          </button>
        </a>

        {/* 4 square grid */}

        <div className="block sm:flex sm:flex-row mt-10 max-w-5xl p-2 sm:p-0">
          <div className="w-full sm:flex-col sm:flex sm:w-2/4 m-0 sm:m-2 p-4 bg-[#A4CCDA] text-center text-[#322D25]">
            <div className="flex justify-center">
              <Image
                src="/Rectangle12.png"
                alt="banner left"
                className="self-start mb-2"
                width={600}
                height={400}
              />
            </div>
            <h2 className="tracking-wide font-aurochs font-normal uppercase text-3xl">
              a 3 day guitar extravaganza
            </h2>
            <p>
              <span className="font-bold">Experience</span> the midwest’s largest and finest gathering of makers, players, and industry experts. Demo and purchase new, forthcoming and Summit-exclusive gear from over 50 luthiers, pedal makers, amp, and gear companies. 
            </p>
            <p className="mt-2">Early Bird 2026 All Access 3-Day Passes On Sale Now!</p>
            <a href="/luthiers">
              <button className="text-3xl font-aurochs px-6 py-2 uppercase hover:bg-[#4DB3AC] bg-[#2B6F6D] text-[#F0E5D1] my-2">
              See 2025 Exhibitors
              </button>
            </a>
          </div>
          <div className="w-full sm:flex-col sm:flex sm:w-2/4 m-0 sm:m-2 mt-0 sm:mt-2 p-4 bg-[#F0E5D1] text-center text-[#322D25]">
            <div className="flex justify-center">
              <Image
                src="/Rectangle15.png"
                alt="banner left"
                className="self-start mb-2"
                width={600}
                height={400}
              />
            </div>
            <h2 className="tracking-wide font-aurochs font-normal uppercase text-3xl">
              meet the makers
            </h2>
            <p>
              <span className="font-bold">Meet</span> the makers and learn from the masters! Workshops. Master Classes. Jams and more. Plus an incredible lineup of featured concerts! Past performers include Lyle Lovett, Jorma Kaukonen, Charlie Hunter, Bill Frisell, Blake Mills, Valerie June, Tommy Emmanuel, Jeff Parker plus special guests! New schedule announced in Spring 2026.

            </p>
            <a href="/schedule">
              <button className="text-3xl font-aurochs px-6 py-2 uppercase hover:bg-[#4DB3AC] bg-[#2B6F6D] text-[#F0E5D1] my-2">
              See 2025 Schedule
              </button>
            </a>
          </div>
          
          {/* <div className="w-full sm:flex-col sm:flex sm:w-2/4 m-0 mt-4 sm:m-2 p-4 bg-[#F0E5D1] text-center text-[#322D25]">
            <div className="flex justify-center">
              <Image
                src="/Rectangle13.png"
                alt="banner left"
                className="self-start mb-2"
                width={600}
                height={400}
              />
            </div>
            <h2 className="tracking-wide font-aurochs font-normal uppercase text-3xl">
              the germanium chef live!
            </h2>
            <p>
              <span className="font-bold">Watch</span> pedal wizards{" "}
              <span className="font-bold">Heather Brown</span> and{" "}
              <span className="font-bold">Robert Keeley</span> battle in a race
              to build the ultimate FUZZ PEDAL!
            </p>
          </div>
        </div>

        <div className="block sm:flex sm:flex-row max-w-5xl p-2 sm:p-0">
          <div className="w-full sm:flex-col sm:flex sm:w-2/4 m-0 sm:m-2 mt-0 sm:mt-2 p-4 bg-[#F0E5D1] text-center text-[#322D25]">
            <div className="flex justify-center">
              <Image
                src="/Rectangle15.png"
                alt="banner left"
                className="self-start mb-2"
                width={600}
                height={400}
              />
            </div>
            <h2 className="tracking-wide font-aurochs font-normal uppercase text-3xl">
              meet the makers
            </h2>
            <p>
              <span className="font-bold">Meet</span> the builders of the
              greatest stringed instruments on eart. Play their latest.
            </p>
          </div>
          <div className="w-full sm:flex-col sm:flex sm:w-2/4 m-0 mt-4  sm:m-2 p-4 bg-[#A4CCDA] text-center text-[#322D25]">
            <div className="flex justify-center">
              <Image
                src="/Vintageamps.png"
                alt="banner left"
                className="self-start mb-2"
                width={600}
                height={400}
              />
            </div>
            <h2 className="tracking-wide font-aurochs font-normal uppercase text-3xl">
              the truth about vintage amps lounge
            </h2>
            <p>
              <span className="font-bold">Plug in</span> to some of the classic,
              rare, and cult favorite amps and PAs mentioned in our weekly
              podcast.
            </p>
          </div> */}
        </div>

        <a href="/tickets">
          <button className="text-3xl font-aurochs px-6 py-2 uppercase hover:bg-[#4DB3AC] bg-[#2B6F6D] text-[#F0E5D1] my-10">
            Buy Tickets
          </button>
        </a>

        {/* <div className="text-6xl w-full max-w-5xl items-center font-aurochs font-thin">
          Aurochs (thin)
        </div>
        <div className="text-6xl w-full max-w-5xl items-center font-aurochs font-normal">
          Aurochs (normal)
        </div>
        <div className="text-6xl w-full max-w-5xl items-center font-aurochs font-bold">
          Aurochs (bold)
        </div>
        <div className="text-6xl w-full max-w-5xl items-center font-handbill font-thin">
          Handbill (condensed)
        </div>
        <div className="text-6xl w-full max-w-5xl items-center font-handbill font-normal">
          Handbill (grotesk)
        </div>
        <div className="text-6xl w-full max-w-5xl items-center font-handbill font-bold">
          Handbill (slab)
        </div> */}

        {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Get started by editing&nbsp;
            <code className="font-mono font-bold">app/page.js</code>
          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div> */}

        {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div> */}

        {/* <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Docs{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Learn{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Templates{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Explore the Next.js 13 playground.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Deploy{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>
      <Footer />
    </>
  );
}
