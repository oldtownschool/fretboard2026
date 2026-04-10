import Image from "next/image";
import { Navbar } from "../components/Navbar.jsx";
import Link from "next/link";
import { Footer } from "../components/Footer";

export default function Music() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-r from-[#322D35] to-[#4C454F]">
        
        {/*<div className="mt-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:px-20 bg-[#A4CCDA] text-[#322D25]">

           <h2 className="text-red-500">Please Note: This is content from the 2023 Fretboard Summit for informational purposes only. 2024 info available soon.</h2> 
        </div>*/}

        
        <div className="my-10 w-full max-w-5xl sm:flex sm:flex-col px-4 lg:px-14">
          <h2 className="mt-10 font-aurochs text-[#F0E5D1] uppercase text-6xl tracking-wider text-center">
            Live Performances
          </h2>
          <h4 className="mt-10 font-bold font-aurochs text-[#F0E5D1] uppercase text-3xl tracking-wider  text-center">
            Great concerts in Old Town School’s legendary concert halls are a key component of Fretboard Summit!
          </h4>
          <p className="font-bold text-2xl mt-6 text-[#F0E5D1]">
          Past performers include Lyle Lovett, Jorma Kaukonen, Charlie Hunter, Bill Frisell, Blake Mills, Valerie June, Tommy Emmanuel, Jeff Parker plus special guests! 
          </p>
          <p className="font-bold text-2xl mt-6 text-[#F0E5D1]">
          View last year’s info before the new concert lineup is announced in Spring 2026!
          </p>
        </div>


        {/* <div className="block sm:flex sm:flex-row mt-10 max-w-5xl p-2 sm:p-0">
          <div className="w-full sm:flex-col sm:flex sm:w-2/4 m-0 sm:m-2 p-4 bg-[#A4CCDA] text-center text-[#322D25]">
            <div className="flex justify-center">
              <Image
                src="/HORIZ-LyleLovett.jpeg"
                alt="Lyle Lovett"
                className="self-start mb-2"
                width={600}
                height={400}
              />
            </div>
            <h2 className="tracking-wide font-aurochs font-normal uppercase text-3xl">
            Saturday, August 23
              <br />
              <span className="font-bold">Lyle Lovett</span>
            </h2>
          </div>
          <div className="w-full sm:flex-col sm:flex sm:w-2/4 m-0 mt-4 sm:m-2 p-4 bg-[#F0E5D1] text-center text-[#322D25]">
            <div className="flex justify-center mx-auto" style={{ maxHeight: '350px', maxWidth: '250px'}}>
              <Image
                src="/COMPwHUNTER-CesarRosas.jpg"
                alt="Cesar Rosas"
                className="self-start mb-2"
                width={600}
                height={400}
              />
            </div>
            <h2 className="tracking-wide font-aurochs font-normal uppercase text-3xl">
            Thursday, August 21
              <br />
              <span className="font-bold">Cesar Rosas & The Chi-Town Playboys</span>
            </h2>
          </div>
        </div>  */}

        {/*<div className="block sm:flex sm:flex-row max-w-5xl p-2 sm:p-0">
          
           <div className="w-full sm:flex-col sm:flex sm:w-2/4 m-0 sm:m-2 p-4 bg-[#F0E5D1] text-center text-[#322D25]">
            <div className="flex justify-center">
              <Image
                src="/DAVE_PromoPhotoA.jpg"
                alt="Dave Hill"
                className="self-start mb-2"
                width={600}
                height={400}
              />
            </div>
            <h2 className="tracking-wide font-aurochs font-normal uppercase text-3xl">
            Friday, August 22
              <br />
              <span className="font-bold">Dave Hill</span>
              <br />{" "}
              <span className="font-light tracking-wider">
              Exclusive For All Access Passholders
              </span>
            </h2>
            <p></p>
          </div>  */}

          {/* <div className="w-full sm:flex-col sm:flex sm:w-2/4 m-0 sm:m-2 mt-4 p-4 bg-[#A4CCDA] text-center text-[#322D25]">
             <div className="mt-6 sm:mt-0 flex items-stretch justify-center">
              <Image
                className="hidden sm:flex mx-2"
                src="/border.png"
                alt="border"
                width={10}
                height={400}
              />
              <Image
                src="/FS2024_MusicPage_AndMore.png"
                alt="banner left"
                width={420}
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
            <div className="flex justify-center  mx-auto" style={{maxWidth: '430px'}}>
              <Image
                src="/Ella_CH.png"
                alt="Charlie Hunter & Ella Feingold"
                className="self-start mb-2"
                width={600}
                height={400}
              />
            </div> 
            <h2 className="tracking-wide font-aurochs font-normal uppercase text-3xl">
            Thursday, August 21
              <br />
              <span className="font-bold">Charlie Hunter & Ella Feingold</span>
              <br />{" "}
              <span className="font-light tracking-wider">
              Exclusive For All Access Passholders
              </span>
            </h2>
          </div>
        </div> */}

        <a href="/tickets" className="text-center my-10">
          <button className="tracking-wider text-3xl font-aurochs px-6 py-2 uppercase hover:bg-[#4DB3AC] bg-[#2B6F6D] text-[#F0E5D1]">
            Buy Tickets
          </button>
        </a>

        {/* <div className="my-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-20 bg-[#A4CCDA] text-[#322D25]">
          <div className="flex justify-center">
            <Image
              src="/JormaKaukonen.jpeg"
              alt="Jorma Kaukonen"
              className=""
              width={600}
              height={600}
            />
          </div>
          <h2 className="tracking-wider font-aurochs font-normal uppercase text-5xl text-center my-6">
            LIVE PERFORMANCES
          </h2>
          <h3 className="text-2xl">
            Friday, August 25
            <br />
            <span className="font-bold">Jorma Kaukonen</span> feat. Jack
            Broadbent
          </h3>
          <h3 className="text-2xl mt-6">
            Saturday, August 26
            <br />
            <span className="font-bold">Tommy Emmanuel</span>
          </h3>
          <h3 className="my-4 text-xl">
            Also...Jeff Parker / Via Mardot / Jake Eddy &amp; more to be
            announced.
          </h3>

          <Link href="" className="text-center">
            <button className="tracking-wider text-3xl font-aurochs px-6 py-2 uppercase hover:bg-[#4DB3AC] bg-[#2B6F6D] text-[#F0E5D1]">
              Buy Tickets
            </button>
          </Link>
        </div>  */}

        <div className="my-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-20 bg-[#F0E5D1] text-[#322D25]">
          <h2 className="tracking-wider font-aurochs font-normal uppercase text-5xl text-center">
            Last Year&apos;s Performances
          </h2>

          
          <h4 className="tracking-wide font-aurochs text-3xl mt-6">Thursday, August 21, 2025 </h4>

          <h3 className="tracking-wide font-aurochs font-bold text-3xl mt-4 mb-2">Cesar Rosas & The Chi-Town Playboys
          </h3>

          <Image
            src="/COMPwHUNTER-CesarRosas.jpg"
            alt="Cesar Rosas"
            className="self-start mb-2"
            width={600}
            height={400}
            style={{ maxHeight: '450px', maxWidth: '350px'}}
          />

          <p className="mt-4">
          Cesar Rosas, founding member of the iconic band Los Lobos, plays a wide spectrum of music from traditional flavors to mind altering sounds.
          </p>

          {/* <div className="flex items-center divide-x-2 divide-gray-500 mt-6">
            <span className="pr-3 font-medium text-gray-900"><Link
              href="https://www.colinhay.com">https://www.colinhay.com/</Link> </span>
            <span className="pl-3 text-sm text-gray-500"><Link
            href="https://www.youtube.com/watch?v=quzZaJI4b1A">YouTube</Link> </span>
          </div> */}



          <h3 className="tracking-wide font-aurochs font-bold text-3xl mt-10 mb-2">Charlie Hunter & Ella Feingold</h3>

          <Image
            src="/Ella_CH.png"
            alt="Charlie Hunter & Ella Feingold"
            className="self-start mb-2"
            width={600}
            height={400}
          />

          <p className="mt-4">Acclaimed guitarists Charlie Hunter and Ella Feingold perform from their new duo album, &apos;Different Strokes for Different Folks.&apos; This exploratory duo project is a deep dive into the art of musical conversation. Built on a foundation of rhythm, space, and groove, Hunter and Feingold engage in a fluid, improvisational exchange, pushing beyond conventional structures to create something raw, immediate, and deeply immersive. Their interplay unfolds like a dialogue—organic, unpredictable, and rich with nuance—where silence holds as much weight as sound.</p>


          <div className="flex justify-center  my-12">
            <Image
              className="hidden md:flex self-center"
              src="/borderRed2.png"
              alt="border"
              width={350}
              height={5}
            />
          </div>


          <h4 className="tracking-wide font-aurochs text-3xl mt-6">Friday, August 22, 2025</h4>

          <h3 className="tracking-wide font-aurochs font-bold text-3xl mt-4 mb-2">Dave Hill

          </h3>

          <Image
            src="/DAVE_PromoPhotoA.jpg"
            alt="Dave Hill"
            className="self-start mb-2"
            width={600}
            height={400}
          />

          <p className="mt-4">
          Dave Hill is a comedian, writer, actor, and guitar player originally from Cleveland but now living in New York City. &quot;Cult New York comedian Hill is a hugely talented funnyman.&quot; - Time Out London. : Dave Hill presents a guitar-centric comedy show filled with jokes, stories and so many guitar solos your face is gonna melt off, probably. Feeling brave? He&apos;ll also be rating audience pedal boards (bring a pic!)
          </p>


          <h3 className="tracking-wide font-aurochs font-bold text-3xl mt-10 mb-2">Jonathan Stout & Erik McIntyre Jazz Duo</h3>

          <Image
            src="/Stout_McIntyre_FBS25.png"
            alt="Jonathan Stout & Erik Mcintyre"
            className="self-start mb-2"
            width={600}
            height={400}
          />

          <p className="mt-4">Jazz guitarist Jonathan Stout makes his return to the Fretboard Summit for an unforgettable set of music with collaborator Erik McIntyre.</p>

          
          {/* <h3 className="tracking-wide font-aurochs text-3xl font-bold mt-6">Valerie June</h3>
          <h4 className="tracking-wide font-aurochs text-3xl mb-2">Sunday, August 25</h4>

          <Image
            src="/ValerieJune_FBS_960x640.jpg"
            alt="Valerie June"
            className="self-start mb-2"
            width={600}
            height={400}
          />

          <p className="mt-4">
          Valerie June Hockett is a Grammy-nominated artist from Tennessee. She&apos;s been hailed by the New York Times as one of America&apos;s &lsquo;most intriguing, fully formed new talents.&rsquo; She is a musician, singer, songwriter, poet, illustrator, actor, certified yoga and mindfulness meditation instructor, and author. She has recorded three critically-acclaimed, best-selling solo albums and has also written songs for legendary artists such as Mavis Staples and The Blind Boys of Alabama. Her albums have been praised by numerous publications such as Pitchfork, Rolling Stone, NPR Music, No Depression, Paste Magazine, Mojo, and many others. She is also the author of the children&apos;s book Somebody to Love: The Story of Valerie June&apos;s Sweet Little Baby Banjolele, published by Jack White&apos;s Third Man Books.
          </p>

          <div className="flex items-center divide-x-2 divide-gray-500 mt-6">
            <span className="pr-3 font-medium text-gray-900"><Link
              href="https://www.valeriejune.com/">https://www.valeriejune.com/ </Link> </span>
            <span className="pl-3 text-sm text-gray-500"><Link
            href="https://www.youtube.com/watch?v=j-R7hN6bZZ8">YouTube</Link> </span>
          </div> */}


          <div className="flex justify-center  my-12">
            <Image
              className="hidden md:flex self-center"
              src="/borderRed2.png"
              alt="border"
              width={350}
              height={5}
            />
          </div>

          <h4 className="tracking-wide font-aurochs text-3xl mt-6">Saturday, August 23, 2025</h4>

          <h3 className="tracking-wide font-aurochs font-bold text-3xl mt-4 mb-2">Lyle Lovett with special guest John Smith</h3>

          <Image
            src="/HORIZ-LyleLovett.jpeg"
            alt="Lyle Lovett"
            className="self-start mb-2"
            width={600}
            height={400}
          />

          <Image
            src="/JohnSmith.webp"
            alt="JohnSmith"
            className="self-start mb-2"
            width={600}
            height={400}
          />

          <p className="mt-4">
          Coupled with his gift for storytelling, Lyle Lovett fuses elements of country, swing, jazz, folk, gospel, and blues in a convention-defying manner that breaks down barriers and broadens the definition of American music. John Smith was dubbed “the future of folk music” by Pentangle’s John Renbourn, but the singer-songwriter’s unique synthesis of styles puts him halfway across the Atlantic as purveyor of American atmospherics. Performing a solo set of music and sharing stories about his old friend, Bill Collings.  Brought to you by Collings Guitars
          </p>


          <h3 className="tracking-wide font-aurochs font-bold text-3xl mt-10 mb-2">LA Session Greats: Dylan Day, Harrison Whitford, Ryan Richter</h3>

          <Image
            src="/LASessionGreats.png"
            alt="CharlieHunter"
            className="self-start mb-2"
            width={600}
            height={400}
          />

          <p className="mt-4">Collectively, Dylan Day, Harrison Whitford and Ryan Richter have performed with the likes of Jackson Browne, Beck, Phoebe Bridgers, Dijon, Lizzy McAlpine and others. During this Szold concert session, these stellar musicians trade songs and collaborate for an unforgettable evening of music.</p>



          <h3 className="tracking-wide font-aurochs font-bold text-3xl mt-10 mb-2">LeRoy Bach & Dan Bitney          </h3>

          <Image
            src="/leroydan.jpg"
            alt="LeRoy Bach & Dan Bitney"
            className="self-start mb-2"
            width={600}
            height={400}
          />

          <p className="mt-4">Dan Bitney is an experimental musician and composer based in Chicago. He works within avant-garde electronic, rock and improvisational groups, most notably Tortoise,  Isotope 217 and Spectralina. LeRoy Bach is a Grammy-winning artist, having worked with Wilco, Theaster Gates, 5ive Style and many others.  Bach currently collaborates with Official Claire and Marvin Tate. Bitney & Bach have a long-standing duo collaboration. With drums, electronics, electric guitar they perform hypnotic, swingin, rockin&apos; sprawling landscapes, backed up with rich, rooted improvisations.   </p>



          <h3 className="tracking-wide font-aurochs font-bold text-3xl mt-10 mb-2">Anna Vogelzang </h3>

          <Image
            src="/AV-Headshot-creditAudreRaePhotography.jpg"
            alt="Anna Vogelzang"
            className="self-start mb-2"
            width={600}
            height={400}
          />

          <p className="mt-4">Anna Vogelzang believes in the power of songs. Since 2004, the Chicago-based multi-instrumentalist has independently released 7 award-winning albums and toured extensively throughout the US, opening for a wide range of acts from Gillian Welch to Sara Bareilles. Atwood Magazine says her songwriting is &quot;beautifully visceral&quot;, exuding  &quot;the kind of storytelling ability passed down through decades of folk tradition - it walks the line between the modern and the nostalgic&quot;. Her voice has been described as &quot;an ethereal, lucid thing&quot; that &quot;nets melodies like it&apos;s catching monarchs&quot;.</p>

{/* 
          <h3 className="tracking-wide font-aurochs text-3xl font-bold mt-6 ">Blake Mills</h3>
          <h4 className="tracking-wide font-aurochs text-3xl  mb-2">Friday, August 23</h4>

          <Image
            src="/BlakeMills_FBS_960x640.jpg"
            alt="Blake Mills"
            className="self-start mb-2"
            width={600}
            height={400}
          />

          <p className="mt-4">
          Grammy Award winner and two-time Grammy Award Producer of the Year nominee, Blake Mills has released four acclaimed solo albums and produced, played and recorded with artists such as Fiona Apple, Alabama Shakes, Phoebe Bridgers, Perfume Genius, Moses Sumney, Bob Dylan, Laura Marling, Cass McCombs, Weyes Blood and Randy Newman, among others. Most recently, Mills worked as the Executive Music Producer and chief songwriter on Amazon Prime&apos;s limited series Daisy Jones and the Six.
          </p>

          <div className="flex items-center divide-x-2 divide-gray-500 mt-6">
            <span className="pr-3 font-medium text-gray-900"><Link
              href="https://www.blakemillsonline.com/">https://www.blakemillsonline.com/ </Link> </span>
            <span className="pl-3 text-sm text-gray-500"><Link
            href="https://www.youtube.com/watch?v=jGIt3EL1He8">YouTube</Link> </span>
          </div> */}

          {/* <h3 className="tracking-wide font-aurochs text-3xl font-bold mt-6 ">Joe Henry</h3>
          <h4 className="tracking-wide font-aurochs text-3xl mb-2">Friday, August 23</h4>

          <Image
            src="/JoeHenry_FBS_960x640.jpg"
            alt="Joe Henry"
            className="self-start mb-2"
            width={600}
            height={400}
          />

          <p className="mt-4">
          In a career spanning more than 25 years, Joe Henry has left an indelible and unique imprint on American popular music. As a songwriter and artist, Henry is celebrated for his exploration of the human experience. A hyper-literate storyteller, by turns dark, devastating, and hopeful, he draws an author&apos;s eye for the overlooked detail across a broad swath of American musical styles - rock, jazz and blues - rendering genre modifiers useless.
          </p>

          <div className="flex items-center divide-x-2 divide-gray-500 mt-6">
            <span className="pr-3 font-medium text-gray-900"><Link
              href="https://www.joehenrylovesyoumadly.com/">https://www.joehenrylovesyoumadly.com/ </Link> </span>
            <span className="pl-3 text-sm text-gray-500"><Link
            href="https://www.joehenrylovesyoumadly.com/watch">Video</Link> </span>
          </div> */}


        </div>

        {/* <div className="my-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-20 bg-[#A4CCDA] text-[#322D25]">
          <h2 className="tracking-wider font-aurochs font-normal uppercase text-5xl text-center">
            WORKSHOPS, SHOWCASES, &amp; MORE
          </h2>
          <p className="font-bold text-xl mt-6">
            The Summit is three days of fun and inspiration for guitar fanatics. In addition to the great concerts listed above, we&apos;ll have additional concerts taking place in both theaters, hourly workshops and master classes, demo rooms, and Summit-exclusive parties.
          </p>
          <p className="font-bold text-xl mt-4">
            Remember - All-access passholders get access to all our breakout sessions and master classes featuring fantastic players, passionate luthiers, and authorities from across the industry.
          </p>

          <h3 className="font-bold text-2xl mt-6 mb-2">WORKSHOPS</h3>
          <p>
            2023 workshops include sessions by Bill Frisell, Via Mardot, Bob
            Minner, Wayne &amp; EJ Henderson, TJ Thompson, Mark Stutman, Paul
            Heumiller (Dream Guitars), and Tony Polecastro...with more to be
            announced!
          </p>

          <h3 className="font-bold text-2xl mt-6 mb-2">THE GERMANIUM CHEF!</h3>
          <p>
            JHS&apos;s Josh Scott presents an Iron Chef-inspired fuzz pedal
            build-off pitting Robert Keeley vs Heather Brown.
          </p>

          <h3 className="font-bold text-2xl mt-6 mb-2">
            THE BILL FRISELL GUITAR ORCHESTRA
          </h3>
          <p>
            Fretboard Journal favorite Bill Frisell leads a once-in-a-lifetime
            guitar orchestra that you (yes, YOU!) can join.
          </p>

          <h3 className="font-bold text-2xl mt-6 mb-2">SUPER SESSIONS</h3>
          <p>
            Witness late-night all-star guitar jams featuring some of the most
            brilliant musicians around. Though the lineup each night is a
            secret, trust us when we say you won&apos;t want to miss it.
          </p>

          <h3 className="font-bold text-2xl mt-6 mb-2">
            THE TRUTH ABOUT VINTAGE AMPS LOUNGE
          </h3>
          <p>
            Explore and play through some of Skip Simmons&apos; finest mods and
            amps, thanks to Truth About Vintage Amps listener &quot;Kevin from
            Ohio.&quot; Featured amps include: a 1961 Fender Tweed Deluxe Big
            Box 5E3, a Canadian Soundmaster, a Rauland 1916, Mascos and more.
          </p>

          <h3 className="font-bold text-2xl mt-6 mb-2">EVENING JAM ROOMS!</h3>
          <p>For both acoustic and electric guitar lovers!</p>

        </div> */}

        {/* <div className="mt-10 mb-20 w-full max-w-5xl items-center sm:flex sm:flex-col px-4 lg:px-14 text-center">
          <h2 className="mb-4 text-[#4DB3AC] font-bold uppercase text-xl tracking-widest ">
            More ticket packages available soon
          </h2>
          <p className="text-white text-lg">
            <span className="font-bold">Guitar showcase only</span>
            <br />
            June 1, 2023, $30
          </p>
          <p className="text-white text-lg my-6">
            <span className="font-bold">Individual Concert Tickets</span>&nbsp;
            Summer 2023 (pending availability)
          </p>
        </div> */}
      </main>
      <Footer />
    </>
  );
}
