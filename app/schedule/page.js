'use client'

import Image from "next/image";
import { Navbar } from "../components/Navbar.jsx";
import Link from "next/link";
import { Footer } from "../components/Footer.jsx";
import Script from "next/script.js";
// import "../slider.css";
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Schedule() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };
  return (
    <>
      {/* <link href="/slider.css" rel="stylesheet"></link> */}
      {/* <Script src="/jquery.js" as="script" strategy="beforeInteractive"></Script>
      <Script src="/slickslider.js"></Script>
       */}
      
      
      <Navbar />
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-r from-[#322D35] to-[#4C454F]">

        {/* <div className="my-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-20 bg-[#A4CCDA] text-[#322D25]"> */}
        <div className="py-10 max-w-5xl w-full my-10 p-4 bg-[#A4CCDA] text-[#322D25]">
          <h3 className="sm:px-16 font-aurochs mt-2 uppercase text-3xl sm:text-4xl tracking-wider leading-relaxed mb-8" >This is the 2025 Schedule as a taste of what to expect for 2026!  <br></br><a href="/tickets" className="underline text-[#4DB3AC]">3-Day All Access Passes On Sale Now</a></h3>

          <div className="sm:px-16">
            {/* <p className="font-bold text-2xl">The Summit isn&apos;t just about shopping. You&apos;ll be able to meet some of the most inspiring performers and makers in the guitar universe. All-access passholders get access to three days of world-class concerts, master classes, music workshops, oral histories, podcast tapings, demo rooms, and parties created just for the Fretboard Summit attendees. </p>

            <p className="font-bold text-2xl mt-4">Our 2024 lineup is a who&apos;s who of players and builders. We&apos;ll hear music from Blake Mills, Joe Henry, Valerie June, Colin Hay, Nathan Graham, Jake Eddy, Adam Levy & Rich Hinman, Ryan Richter, Matt Munisteri, Joel Paterson, and Jonathan Stout. Sofia Wolfson, Molly Miller, Rhett Shull and John Leventhal are leading workshops (among many others).</p>

            <p className="font-bold text-2xl mt-4">Acclaimed vintage gear authorities from Emerald City Guitars, TJ Thompson Guitars, and others will be on-hand, as will Josh Scott of JHS Pedals, Matt Munisteri, Bob Taylor (Taylor Guitars), Michael Millard (Froggy Bottom), and nearly 100 acclaimed independent guitarmakers.</p>

            <p className="font-bold text-2xl mt-4">We&apos;ll also have live podcast tapings; late-night jams; interviews with some of our heroes; hands-on exhibits and more. It&apos;s a guitar festival like no other and we can&apos;t wait for you to see what we&apos;ve cooked up this year!</p> */}

            <p className="font-bold text-2xl mt-4">The Summit is the guitar festival of our dreams, where you can meet some of the most inspiring performers and makers in the gear universe.</p>

            <p className="font-bold text-2xl mt-4">All-access passholders get access to three days of world-class concerts, master classes, music workshops, oral histories, podcast tapings, demo rooms, and parties, in addition to admission to the 80-exhibitor lutherie showcase.</p>

            <p className="font-bold text-2xl mt-4">Join us for a once-in-a-lifetime weekend.</p>

            <p className="font-bold text-2xl mt-4 mb-8">- Jason Verlinde, Fretboard Journal</p>
            
          </div>

          


          {/* commented out  7/22/2025 */}
          <Slider {...settings}>
            <div>
              <Image src="/Fretboard2025_DailyScheduleSlides_Thurs1.jpg" width={600} height={600} alt="Line Up Schedule Thurs 1"/>
            </div>
            <div>
              <Image src="/Fretboard2025_DailyScheduleSlides_Fri1.jpg" width={600} height={600} alt="Line Up Schedule Fri 1" />
            </div>
            <div>
              <Image src="/Fretboard2025_DailyScheduleSlides_Sat1.jpg" width={600} height={600} alt="Line Up Schedule Sat 1" />
            </div>
            {/* <div>
              <Image src="/FBS24-Info-D3.png" width={600} height={600} alt="Line Up Schedule Info" />
            </div> */}
          </Slider>
        </div>


        {/* this was commented out 2023 ignore */}
        {/* uncomment when closer to the event, marketing will send */}
        {/* <div className=" max-w-5xl w-full my-10 p-4 bg-[#A4CCDA] text-[#322D25]">
          <div className="slider">
            <Image src="/FS23_LineupSched_082423-1a.png" width={600} height={600} alt="Line Up Schedule 1" />
            <Image src="/FS23_LineupSched_082423-2a.png" width={600} height={600} alt="Line Up Schedule 2"/>
            <Image src="/FS23_LineupSched_082423-3a.png" width={600} height={600} alt="Line Up Schedule 3"/>
          </div>
        </div> */}

        {/* <div className="w-auto mt-10">
            <h2 className="px-10 tracking-wider font-aurochs font-normal uppercase text-5xl text-center">
            2023 FRETBOARD SUMMIT DETAILS AVAILABLE SOON!
            </h2>
            <div className="w-full sm:w-3/4 p-10">

            <p className="italic text-lg leading-relaxed">Updated August 2, 2023<br/>Schedule subject to change.</p>

            <p className="underline font-bold mt-4  text-lg leading-relaxed">Campus Addresses & Locations:</p>
            <p className="mb-4 text-lg leading-relaxed">
            Old Town School of Folk Music - West, 4544 N. Lincoln Ave.<br/>
            (Maurer Hall, Mabie Gallery, Workshop Rooms, Art Gallery, Music Store, Cafe & Bar)</p>

            <p className="mb-10 text-lg leading-relaxed">
            Old Town School of Folk Music - East, 4545 N. Lincoln Ave.<br/>
            (Szold Hall, Luthier Showcase Exhibit Halls, East Lobby, Workshop Rooms, Cafe & Bar)</p>

          </div>*/}

        {/* </div> */}



        <div className="my-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-20 bg-[#A4CCDA] text-[#322D25]">


          <p className="italic text-sm leading-relaxed">Updated: August 19, 2025</p>
          <p className="font-bold text-sm leading-relaxed">Fretboard Summit 2025: Full Schedule & Descriptions</p>
          

          

          <h3 className="font-aurochs mt-2 uppercase text-3xl sm:text-4xl tracking-wider leading-relaxed" >Thursday, August 21, 2025</h3>

          <p className="italic mb-4  text-lg" >Exclusive Content for 3-Day Passholders Only<br/> Check-in begins at 10am. (Times subject to change)</p>

          <p className="font-bold mt-4 leading-relaxed" >Workshops, Master Classes, Hands-On & More!
          </p>
          <p className="italic text-lg leading-relaxed" >Note: Summit workshops, clinics, interviews and concerts are available to All-Access Passholders only. </p>

          <p className="font-bold mt-4 leading-relaxed" >10am - 12pm Registration / Check In</p>

          <p className="font-bold mt-4 leading-relaxed" >10am - 12pm Own An Old Martin? With Greig Hutton</p>
          <p className="text-lg leading-relaxed" >Own an old Martin and want to know more about its history? Greig Hutton has you covered. The author of Hutton&apos;s Guide to Martin Guitars: 1833-1969 has created an immense database using Martin&apos;s old shipping ledgers and is offering to tell you all about your guitar. All you need to do is bring the serial numbers of your personal instrument, he has stats on every known Martin from 1898 to 2015! (Lobby - West)</p>


          <p className="font-bold mt-4 leading-relaxed" >12:00pm Opening Remarks </p>
          <p className="text-lg leading-relaxed" >Just for three-day passholders: Kick off the Summit and learn about late-breaking schedule additions with the Old Town School and the Fretboard Journal teams. We&apos;ll also get an exclusive Chicago premiere of Kalamazoo Gals, the short documentary helmed by longstanding FJ contributor John Thomas on the women who built Gibson &quot;Banner&quot; guitars during WWII. (Maurer Hall - West)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >1:00pm Luthier & Exhibitor Showcase Preview Opens</p>
          <p className="text-lg leading-relaxed" >Exclusive preview of the Summit lutherie showcase just for three-day attendees. Scattered between the Old Town School of Folk Music&apos;s two buildings, Summit goers can find nearly 80 brands and solo builders showcasing their latest wares, including several prototypes and product launches. Meet some of the legends of the gear industry. Demo/listening rooms are available if you need a quiet space to try things out…or an amp to plug things in. (Both OTSFM buildings) </p>

          <p className="font-bold mt-4 leading-relaxed" >5:00pm - 6:00pm Happy Hour Hangout</p>
          <p className="text-lg leading-relaxed" >Gather with your fellow 3-day pass holders for happy hour with complimentary drinks and light snacks. <span className="italic">Sponsored by Henricksen Amplifiers</span> (Gallery - West)</p>

          <p className="font-bold mt-4 leading-relaxed" >Fretboard Summit Pinewood Derby</p>
          <p className="text-lg leading-relaxed" >Check out the cars for the 2025 Invitational Pinewood Derby. Some of your favorite luthiers and creators were invited to put their woodworking skills to the test and design a car for the festival. Derby Race at 5pm Saturday (Gallery - West) </p>
          
          <h3 className="font-aurochs mt-10 uppercase text-xl sm:text-2xl tracking-wider leading-relaxed" >Workshops</h3>
          
          <p className="font-bold mt-4 leading-relaxed" >2pm Leo Fender: The Pre-Tweed Years 1909-1947</p> 
          <p className="text-lg leading-relaxed" >Fender historian Terry Foster (Fender: The Golden Age 1946-1970) makes his debut appearance at the Summit! Foster will walk us through Leo Fender&apos;s early history and influences leading up to his work as a radio repairman, inventor, founder of K&F and the Fender Electric Instrument Company. Including many unseen photos and pieces of Fender history. Presentation followed by Q&A. (Maurer Hall - West)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >2pm Clinic: Mamie Minch: Introduction to Hill Country Grooves</p>
          <p className="text-lg leading-relaxed" >Luthier and musician Mamie Minch is a staple of the New York City blues scene. In this workshop, she&apos;ll walk us through the hypnotic beauty of Hill Country blues technique, as made popular by Mississippi Fred McDowell and others.
          (Szold Hall - East)</p>
          
          {/* <p className="font-bold mt-4 leading-relaxed" >4pm Funk Guitar Through the Ages with Ella Feingold</p>
          <p className="text-lg leading-relaxed" >The legendary Ella Feingold plays guitar for Erykah Badu, Bruno Mars and Silk Sonic, Bootsy Collins and others. She&apos;s also one of the internet&apos;s best teachers. In this Summit exclusive, she&apos;ll offer a funk and rhythm guitar master class covering the playing on James Brown, Motown records and more. We&apos;ll dissect the different types of guitar arranging through the eras. Attendees do not need to bring a guitar. (Maurer Hall - West)</p> */}
          
          <p className="font-bold mt-4 leading-relaxed" >4pm Funk Guitar with Charlie Hunter</p>
          <p className="text-lg leading-relaxed" >Funk and rhythm guitar master class looking at the playing, techniques, and arranging of funk guitar inspirational and influential to Charlie. Attendees do not need to bring a guitar. (Maurer Hall - West)</p>



          <h3 className="font-aurochs mt-10 uppercase text-xl sm:text-2xl tracking-wider leading-relaxed" >Featured Concerts </h3>
          <h4 className="font-aurochs uppercase text-xl underline tracking-wider">Maurer Hall </h4>
          
          <p className="font-bold mt-4 leading-relaxed" >8pm Cesar Rosas & the Chi-Town Playboys</p>
          <p className="font-bold leading-relaxed" >Charlie Hunter</p>
          <p className="text-lg leading-relaxed mb-8" >We kick off night one of the Summit with a double-bill we know you&apos;ll love. Acclaimed guitarist Charlie Hunter opens. Los Lobos&apos; Cesar Rosas performs with his Chicago-based Chi-Town Playboys band featuring Dave Herrero, Scott Tipping, Matt Thompson, Brother John Kattke, Chuck Lacy, and Joe Rendon.
          </p>
          




          <div className="bg-gray-200 h-2 w-full mt-6"></div>

          <h3 className="font-aurochs mt-10 uppercase text-3xl sm:text-4xl tracking-wider leading-relaxed" >Friday, August 22, 2025</h3>
          <p className="italic mb-4  text-lg" >Check-in begins at 9:30am. <br/> Workshops & Exhibitor Showcase begins at 10am. (Times subject to change)</p>

          <p className="font-bold mt-4 leading-relaxed" >10am - 5pm Lutherie Showcase </p>
          <p className="text-lg leading-relaxed" >The Fretboard Summit features one of the finest collections of handmade, high-end and boutique gear under one roof. Peruse both Old Town School buildings to demo and shop for gear from nearly 100 luthiers, brands, and gear makers. Can&apos;t make the rest of the Summit activities? We&apos;ll have Lutherie Showcase-only tickets available at the door on Friday and Saturday for those who just want to shop guitars. 
          (Both OTSFM buildings) </p>

          <p className="font-bold mt-4 leading-relaxed" >10am - 12pm Own An Old Martin? With Greig Hutton</p>
          <p className="text-lg leading-relaxed" >Own an old Martin and want to know more about its history? Greig Hutton has you covered. The author of Hutton&apos;s Guide to Martin Guitars: 1833-1969 has created an immense database using Martin&apos;s old shipping ledgers and is offering to tell you all about your guitar. All you need to do is bring the serial numbers of your personal instrument, he has stats on every known Martin from 1898 to 2015! (Lobby - West)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >10am Evan Gluck&apos;s Guitar Roundtable 
          </p>
          <p className="text-lg leading-relaxed" >As a NYC-based guitar repair legend, Evan Gluck has seen it all. In what has become an annual (and often hilarious) session, Gluck and a select group of friends talk about the craft of guitar and field questions from left-field about all things guitar and guitar repair. This year, Gluck has asked TJ Thompson, Ceil Thompson, and Mark Stutman to help him out. 
          (Maurer Hall - West)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >10am Pick Tasting with Frank Solivan and Tone Slabs </p> 
          <p className="text-lg leading-relaxed" >As one of the best bluegrass musicians around and a co-founder of Tone Slabs, mandolin player Frank Solivan knows a thing or two about picks. In this interactive session, Frank will be pairing space-age materials with some delicious, exotic woods and wire. Come see what all the fuss is about with high-end picks.
          (Szold Hall - East)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >11am Panel Discussion: The Luthier&apos;s Tool Box: A Conversation with Jamie Etherington & Friends</p>
          <p className="text-lg leading-relaxed" >Last year, the Fretboard Journal published Jamie Etherington&apos;s The Luthier&apos;s Tool Box book. It was a collection of stories featuring luthiers and their one favorite tool. In this session, we&apos;ll hear from Jamie - all the way from Australia - and some of the builders featured in the book. Copies will be available for purchase.  
          (Maurer Hall - West)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >11am Workshop: Songwriting with Sofia Wolfson</p>
          <p className="text-lg leading-relaxed" >Last year&apos;s Fretboard Summit songwriting workshop with singer-songwriter Sofia Wolfson was such a hit that we&apos;re bringing it back. Come crack the code on your first song, no guitar needed. (Szold Hall - East)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >12pm - 4pm Record Sale Pop-Up </p>
          <p className="text-lg leading-relaxed" >Stop by the Old Town School Resource Center for $1 records, $3 CDs, $3 DVDs, plus rare and collectables priced as marked. All of the proceeds from the sale support programming and collection development at the Resource Center. All items for sale are donations that are either duplicates or are better accessed through other outlets. Cards & cash welcome  (Basement Lobby - West)
          </p>
          
          <p className="font-bold mt-4 leading-relaxed" >1pm Workshop: Sean McGowan&apos;s The Holistic Guitarist: Improve Your Practice Routine (and Health)  </p>
          <p className="text-lg leading-relaxed" >The Holistic Guitarist workshop is for every guitar player - regardless of style, age, ability - looking to improve their practice with creative approaches, inspiration, and organization while learning to avoid common repetitive motion injuries. We will explore ergonomics, posture, hearing health, as well as mental health strategies to create more sustainable and fulfilling practice sessions and performances. No guitar is required for this workshop. (Maurer Hall - West)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >1pm DIY Recording Hacks 102: a Room, a Guitar, and a Dream with Engineer Taylor Goss</p>
          <p className="text-lg leading-relaxed" >So you have some mics, you can hit “record,” and you&apos;re itching to make music history. Now what? The workshop - featuring Fretboard Summit artists - will dive into the philosophies and practicalities of capturing performances, experimenting wildly, and having fun. </p>
          <p className="text-lg leading-relaxed" >Led by Taylor Goss, an engineer from Shangri-La and Jackson Browne&apos;s Groove Masters studio. (Szold Hall - East)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >1pm - 3pm Rugby Comes to Chicago: Wayne Henderson&apos;s Picking Room</p>
          <p className="text-lg leading-relaxed" >Rugby, Virginia&apos;s Wayne Henderson is, quite simply, a national treasure. He&apos;s one of the best bluegrass pickers around and one of the greatest storytellers. He also happens to craft some of the most coveted acoustic guitars and mandolins on Earth. On Friday and Saturday, you can sit in with Wayne and play a tune or just pick his brain on what makes a great guitar. (Mabie Gallery)</p>

          <p className="font-bold mt-4 leading-relaxed" >2pm Masterclass: &quot;The 3%:&quot; Folkway Music&apos;s Mark Stutman Leads an All-Star Panel on What Makes A Great Acoustic </p>
          <p className="text-lg leading-relaxed" >As the owner of Folkway Music and one of the most exacting repair people around, Mark Stutman thinks about guitars like few others. In this session, he rounds up some of his peers to talk about the infinitesimal details that make a good acoustic instrument a great instrument. (Maurer Hall - West)</p>

          <p className="font-bold mt-4 leading-relaxed" >2pm Workshop: Using Song Prompts with Anna Vogelzang</p>
          <p className="text-lg leading-relaxed" >Some of today&apos;s best songwriters use song prompts to craft their material. In this workshop, Chicago-based singer-songwriter Anna Vogelzang creates the Fretboard Summit&apos;s first-ever song club and walks us through the process. Our 2025 prompt is “Refraction.” Write a song based on that or just hear what others do.  (Szold Hall - East)</p>

          <p className="font-bold mt-4 leading-relaxed" >3pm Workshop: Charlie Hunter on Blind Blake</p>
          <p className="text-lg leading-relaxed" >One of Charlie Hunter&apos;s passion projects has been studying the music of ragtime and blues guitarist Blind Blake. In this workshop, we&apos;ll hear Hunter&apos;s take on Blake&apos;s music... and what makes it so special. (Maurer Hall - West)</p>

          <p className="font-bold mt-4 leading-relaxed" >3pm Guitar for Introverts with Jamie Stillway</p>
          <p className="text-lg leading-relaxed" >Acclaimed guitarist Jamie Stillway interviews NYC luthier/musician Mamie Minch for the Fretboard Journal&apos;s Guitar for Introverts podcast. <br/>Expect an introspective deep dive into music, life and more. (Szold Hall - East)</p>

          <p className="font-bold mt-4 leading-relaxed" >4pm Oral History: Twenty Years of the Fretboard Journal: A Tell-All with Jason Verlinde</p>
          <p className="text-lg leading-relaxed" >Against all the odds, the Fretboard Journal turns 20 this year. What&apos;s it take to keep a print magazine afloat for two decades? Fretboard Journal publisher Jason Verlinde will spill the beans with some hilarious, unfiltered and hopefully not too depressing tales from the front lines of niche media. Mostly, we&apos;ll share some of the FJ&apos;s most memorable stories. (Maurer Hall - West)</p>

          <p className="font-bold mt-4 leading-relaxed" >4pm OM Guitar History with TJ Thompson and Greig Hutton</p>
          <p className="text-lg leading-relaxed" >Two of the world&apos;s foremost experts on all-things-Martin - repair guru TJ Thompson and archivist/author/historian Greig Hutton - discuss the history of the Martin OM. A can&apos;t-miss session for lovers of old (or new) Martins. (Szold Hall - East)</p>

          <p className="font-bold mt-4 leading-relaxed" >4:30pm - 6pm Amplified Voices Meetup Hosted by Chase Bliss</p>
          <p className="text-lg leading-relaxed" >An informal hangout for musicians, builders, artists, and guests who care deeply about making the music world more welcoming and inclusive for all kinds of people. (Mabie Gallery)</p>




          <h3 className="font-aurochs mt-10 uppercase text-xl sm:text-2xl tracking-wider leading-relaxed" >Featured Concerts </h3>
          <h4 className="font-aurochs uppercase text-xl underline tracking-wider">Maurer Hall </h4>

          <p className="font-bold mt-4 leading-relaxed" >8pm Dave Hill </p>
          <p className="text-lg leading-relaxed" >Another Fretboard Summit first: Comedian/musician/actor/author Dave Hill presents a guitar-centric comedy show filled with jokes, stories and so many guitar solos your face is gonna melt off, probably. Feeling brave? He&apos;ll also be rating audience pedal boards (bring a pic). </p>
          

          <h4 className="font-aurochs uppercase text-xl underline tracking-wider mt-6">Szold Hall</h4>

          <p className="font-bold mt-4 leading-relaxed" >8pm Jonathan Stout & Erik McIntyre</p>
          <p className="text-lg leading-relaxed mb-8" >Jazz guitarist Jonathan Stout makes his return to the Fretboard Summit for an unforgettable set of music with collaborator Erik McIntyre. 
          </p>
          


          <div className="bg-gray-200 h-2 w-full mt-6"></div>

          <h3 className="font-aurochs mt-10 uppercase text-3xl sm:text-4xl tracking-wider leading-relaxed" >Saturday, August 23, 2025</h3>
          <p className="italic mb-4  text-lg" >Check-in begins at 9:30am. <br/> Workshops & Exhibitor Showcase begins at 10am. (Times subject to change)</p>

          <p className="font-bold mt-4 leading-relaxed" >10am - 5pm Lutherie Showcase</p>
          <p className="text-lg leading-relaxed" >The Fretboard Summit features one of the finest collections of handmade, high-end and boutique gear under one roof. Peruse both Old Town School buildings to demo and shop for gear from nearly 100 luthiers, brands, and gear makers. Can&apos;t make the rest of the Summit activities? We&apos;ll have Lutherie Showcase-only tickets available at the door on Friday and Saturday for those who just want to shop guitars. 
          (Both OTSFM buildings) </p>
          
          <p className="font-bold mt-4 leading-relaxed" >10am The Asheville Guitar Project </p>
          <p className="text-lg leading-relaxed" >Asheville-based acoustic luthiers Jayne Henderson, Kyle Landers, and Judson Riviere debut a very special group guitar build made to raise money for their struggling region. They chat about the impact of Hurricane Helene on their respective businesses and build processes, and discuss how the effects of climate change are impacting the world of custom lutherie. (Maurer Hall - West)</p>
          
          <p className="font-bold mt-4 leading-relaxed" >10am Workshop: Jonathan Stout: Turning Single Note Jazz Solos into Chord Solos
          </p>
          <p className="text-lg leading-relaxed" >By popular demand, jazz guitarist and Fretboard Journal favorite Jonathan Stout returns to the Summit. This time, he&apos;ll be teaching us how to incorporate chord solos into our playing. (Szold Hall - East)</p>

          <p className="font-bold mt-4 leading-relaxed" >11am Buying & Selling Guitars in 2025: A panel discussion with The Music Emporium, Folkway Music, The Old Town School store and friends</p>
          <p className="text-lg leading-relaxed" >Our annual look at the state of affairs when it comes to buying, collecting and selling your favorite instruments. Join Folkway Music, the Music Emporium, the Old Town School and others for a tell-all on retail trends and more. 
          (Maurer Hall - West)</p>

          <p className="font-bold mt-4 leading-relaxed" >11am Workshop: Roots Guitar from the African Continent with Nathaniel Braddock</p>
          <p className="text-lg leading-relaxed" >Fretboard Journal contributor Nathaniel Braddock has spent twenty years traveling in Africa and collaborating with musicians from across the continent. In this workshop, he will share music from the continent&apos;s many fingerstyle acoustic guitar traditions. We&apos;ll look at music from Ghana, Mali, Congo, and beyond, touching on the styles of palmwine, guitare seche, desert blues, makossa, and more. Tablature provided. Bring a capo. (Szold Hall - East)</p>

          <p className="font-bold mt-4 leading-relaxed" >12pm - 4pm Record Sale Pop-Up</p>
          <p className="text-lg leading-relaxed" >Stop by the Old Town School Resource Center for $1 records, $3 CDs, $3 DVDs, plus rare and collectables priced as marked. All of the proceeds from the sale support programming and collection development at the Resource Center. All items for sale are donations that are either duplicates or are better accessed through other outlets. Cards & cash welcome  (Basement Lobby - West)</p>

          <p className="font-bold mt-4 leading-relaxed" >1pm Fretboard Journal Live Podcast: LA&apos;s Session Music Heroes </p>
          <p className="text-lg leading-relaxed" >The guitar playing of Dylan Day, Harrison Whitford and Ryan Richter have been heard on some of the most innovative recordings coming out of Los Angeles, including albums by Dijon, Phoebe Bridgers and others. In this live podcast, Fretboard Journal publisher Jason Verlinde interviews this trio about their backgrounds, the tones they&apos;re achieving, the unique gear they&apos;re using, what&apos;s inspiring them today and more. (Maurer Hall - West)</p>

          <p className="font-bold mt-4 leading-relaxed" >1pm Masterclass: DADGAD with John Smith </p>
          <p className="text-lg leading-relaxed" >Fretboard Journal favorite John Smith makes his debut appearance at the Summit. This stellar guitarist (and singer) will lead a master class on the art of DADGAD and you can use it in your playing. (Szold Hall - East)</p>

          <p className="font-bold mt-4 leading-relaxed" >1pm - 3pm Rugby Comes to Chicago: Wayne Henderson&apos;s Picking Room</p>
          <p className="text-lg leading-relaxed" >Rugby, Virginia&apos;s Wayne Henderson is, quite simply, a national treasure. He&apos;s one of the best bluegrass pickers around and one of the greatest storytellers. He also happens to craft some of the most coveted acoustic guitars and mandolins on Earth. On Friday and Saturday, you can sit in with Wayne and play a tune or just pick his brain on what makes a great guitar. (Mabie Gallery)</p>

          <p className="font-bold mt-4 leading-relaxed" >2pm Panel Discussion: Gems from Old Town School: A Glimpse at the Guitars of John Lennon & Big Bill Broonzy </p>
          <p className="text-lg leading-relaxed" >Chris Walz (OTSFM faculty), TJ Thompson (TJ Thompson guitars), Dylan Day (musician) and Fretboard Journal publisher Jason Verlinde discuss the provenance and ongoing care of two famous Martin guitars that are in the care of the Old Town School: Big Bill Broonzy&apos;s 1946 000-28 and John Lennon&apos;s 1962 D-28. (Maurer Hall - West)</p>

          <p className="font-bold mt-4 leading-relaxed" >2pm Masterclass: Congolese Guitar: A Peek at the Instruments of the African Congo</p>
          <p className="text-lg leading-relaxed" >Nathaniel Braddock documented the story of luthiers in the African Congo for the Fretboard Journal. In this session, attendees will be able to view and play these instruments up-close. Andy Powers of Taylor Guitars will be on-hand to talk about the guitars&apos; unique construction techniques…and put them through their paces. (Szold Hall - East)</p>

          <p className="font-bold mt-4 leading-relaxed" >3pm The 4th Annual Fretboard Summit Science Fair</p>
          <p className="text-lg leading-relaxed" >Picture the Science Fairs of your youth, but with guitars. Our Our Summit Science is now an annual tradition.  The wildest creations and prototypes of the 2025 Summit. (Szold Hall - East)</p>

          <p className="font-bold mt-4 leading-relaxed" >3pm Masterclass: Alternate Tuning and Arranging with Emma Harner</p>
          <p className="text-lg leading-relaxed" >Alternate tuning enthusiast and fingerstyle guitarist Emma Harner will take this time to talk about alternate tunings: How to choose them, how to use them, how to name them, and what they can do for you! She will also explore how she&apos;s used some of these tunings to inspire out-of-the-box arrangements of songs you may know. (Maurer Hall - West)</p>


          <h3 className="font-aurochs mt-10 uppercase text-xl sm:text-2xl tracking-wider leading-relaxed" >Workshop </h3>

          <p className="font-bold mt-4 leading-relaxed" >5pm Fretboard Summit Pinewood Derby 2025</p>
          <p className="text-lg leading-relaxed" >The 2025 Invitational Pinewood Derby. Some of your favorite luthiers and creators were invited to put their woodworking skills to the test and design a car for the festival. Come check out the race. (Maurer Hall - West)</p>



          <h3 className="font-aurochs mt-10 uppercase text-xl sm:text-2xl tracking-wider leading-relaxed" >Featured Concerts </h3>
          <h4 className="font-aurochs uppercase text-xl underline tracking-wider">Maurer Hall </h4>

          <p className="font-bold mt-4 leading-relaxed" >4pm Happy Hour Performance: Anna Vogelzang</p>
          <p className="text-lg leading-relaxed" >Chicago-based Anna Vogelzang performs songs from her full-length album, Afterglow, and more.  
          </p>

          <p className="font-bold mt-4 leading-relaxed" >8pm Lyle Lovett<br/>with John Smith opening</p>
          <p className="text-lg leading-relaxed mb-8" >Brought to you by Collings Guitars: The one-and-only Lyle Lovett performs a solo set of music and shares stories about his old friend, Bill Collings. Opening is British folk musician John Smith. </p>
          

          <h4 className="font-aurochs uppercase text-xl underline tracking-wider mt-6">Szold Hall</h4>

          <p className="font-bold mt-4 leading-relaxed" >8pm Dylan Day, Harrison Whitford, Ryan Richter</p>
          <p className="text-lg leading-relaxed" >Collectively, Dylan Day, Harrison Whitford and Ryan Richter have performed with the likes of Jackson Browne, Beck, Phoebe Bridgers, Dijon, Lizzy McAlpine and others. During this Szold concert session, these stellar musicians trade songs and collaborate for an unforgettable evening of music.</p>

          <p className="font-bold mt-4 leading-relaxed" >LeRoy Bach & Dan Bitney
          </p>
          <p className="text-lg leading-relaxed mb-8" >Dan Bitney is an experimental musician and composer based in Chicago. He works within avant-garde electronic, rock and improvisational groups, most notably Tortoise, Isotope 217 and Spectralina. LeRoy Bach is a Grammy-winning artist, having worked with Wilco, Theaster Gates, 5ive Style and many others.  Bach currently collaborates with Official Claire and Marvin Tate. Bitney & Bach have a long-standing duo collaboration. With drums, electronics, electric guitar they perform hypnotic, swingin, rockin’ sprawling landscapes, backed up with rich, rooted improvisations.</p>

          <div className="bg-gray-200 h-2 w-full my-8"></div>


          <p className="font-bold mt-4 leading-relaxed" >Truth About Vintage Amps Room</p>
          <p className="text-lg leading-relaxed mb-8" >The community behind our Truth About Vintage Amps podcast shares some of their favorite tube amp finds for anyone to try out. Come see what the tube fuss is about…and try out some stellar new guitars by Grez and others. (B-1, West Building, all weekend long)</p>

        

        </div> 

          {/* <div className="bg-gray-200 h-2 w-full mt-6"></div>

          <h3 className="font-aurochs mt-10 uppercase text-3xl sm:text-4xl tracking-wider leading-relaxed" >Plus: Acoustic Cafe at Galloup Guitars Booth (included with all admission tiers) </h3>
          <p className="text-lg leading-relaxed" >At this year&apos;s Fretboard Summit, Galloup Guitars will host a pop-up Acoustic Café. Their aim is to foster interactive conversations through demonstrations, slide shows, and discussions where summit attendees are invited to participate in the experience. The Acoustic Café will be held in the atrium of the Old Town School&apos;s East building at 4545 N Lincoln Avenue.</p>
 
          <p className="text-lg leading-relaxed" >Here&apos;s an overview of the Acoustic Café&apos;s scheduled discussions: </p>

          <h3 className="font-aurochs mt-10 uppercase text-xl sm:text-2xl tracking-wider leading-relaxed" >Friday</h3>
          <p className="font-bold mt-4 leading-relaxed" >1:30pm Bryan Galloup on Tonewood Application and Management</p>
          <p className="text-lg leading-relaxed" >A major concern of all luthiers should be the conservation of global natural resources, particularly with regard to musical grade tone wood. This has been one of the prime focuses for the Acousonix app, a sonic calculator approach that sets the framework for the systematic management of tone woods.</p>
          <p className="text-lg leading-relaxed" >Bryan will conduct a hands-on demonstration of the Acousonix app, demonstrating its operations and how it assists in managing, selecting, and purchasing tone woods. He will also showcase its features that aid luthiers in better controlling the sound of their instruments and more stable instruments.</p>

          <p className="font-bold mt-4 leading-relaxed" >3:30pm Jaime Aulson Myers on Inlay Development and Sustainability</p>
          <p className="text-lg leading-relaxed" >Jaime, a trained Graphic Design artist, has leveraged her skills to craft and cut some of the industry&apos;s most acclaimed inlays for prominent makers and manufacturers. Jaime will discuss the evolution from concept to product, focusing on the detailed process and considerations that are paramount, encompassing both artistic vision and functional aspects. </p>
          <p className="text-lg leading-relaxed" >Furthermore, Jaime will address current concerns around the sustainability of inlay materials, such as abalone, including their sourcing and processing considerations, to ensure environmental responsibility.</p>

          <h3 className="font-aurochs mt-10 uppercase text-xl sm:text-2xl tracking-wider leading-relaxed" >Saturday</h3>
          <p className="font-bold mt-4 leading-relaxed" >10:30am Ian Davlin & James Roadman: New Ideas and Collaborations</p>
          <p className="text-lg leading-relaxed" >During the Covid pandemic, as we know, everyone was locked down and unable to interact personally. Many people turned to online communication, but for those who worked in shops or were accustomed to working with others, this was extremely difficult.</p>
          <p className="text-lg leading-relaxed" >However, some found creative ways to overcome these obstacles. Ian Davlin and James Rodman, for example, developed a system for creating jigs and fixtures. They traded information online, outsourced the production of these tools to facilities, and then had the finished products shipped directly to their homes. They will discuss their process for online collaborations and tool development. </p>


          <p className="font-bold mt-4 leading-relaxed" >12:30pm Joe Glaser & Josh Rawlings: Collection Management with Technology</p>
          <p className="text-lg leading-relaxed" >In these days of deep fakes and AI, truth and provenance are more important than ever. In this conversation, they will discuss Gearcheck, a mobile tool for organizing and preserving everything, as you build a collection from a few items to whatever.</p>

          <p className="text-lg leading-relaxed" >Gearcheck is an ideal structure of photos, appraisals, receipts, ownership tracks, repair history and personal stories, each in their place and ready to enjoy from anywhere. Critically, each bit gets permanently secured in time by the Blockchain.</p>

          <p className="text-lg leading-relaxed" >Provenance is made up of these truth moments. All of it is critical to value - not just what is known, but when it actually was, where, how and by whom.</p>

          <p className="font-bold mt-4 leading-relaxed" >2:30pm Tom Nania & Dustin Miller: Announcing Project Dreadnought</p>
          <p className="text-lg leading-relaxed" >Dustin Miller and Tom Nania will be introducing &quot;Project Dreadnought,&quot; a deep analysis of prewar Martin dreadnought guitars. The project has produced the largest sample size of extensively studied Martin guitars to date. This project combines data on over 150 prewar Martin Dreadnought including, photos, audio recordings, modal analysis, CT and MRI scans, and hundreds of hours of interviews with collectors, players, historians, and dealers.   </p>

          <p className="text-lg leading-relaxed" >The team, consisting of Bryan Galloup, Joe Glaser, Tom Nania, and Dustin Miller, aims to explore various aspects of what makes these guitars heralded as the best in the world. The research will be supported by historical studies and scientific analysis, culminating in a book scheduled for release in the summer of 2025.</p>
          
          <p className="font-bold mt-4 leading-relaxed" >4:30pm Jamie Gale: The Un-Written Future of Guitar…or Why Nobody Plays Their Daddy&apos;s Guitar </p>
          <p className="text-lg leading-relaxed" >Join Jamie Gale, Curator of the NAMM Show&apos;s Boutique Guitar Showcase, for a discussion about the un-written future of guitar.</p>

          <p className="text-lg leading-relaxed" >The most prolific instrument of the last 100 years, the guitar adapts and evolves like no other. Despite the multitudes of irrefutable evidence, notice of its death has been proclaimed many, many times with the passing of each new movement.</p>

          <p className="text-lg leading-relaxed" >What is this feeling of the guitars demise? Where does it come from? And why is it so wrong? And more importantly, how do we prepare for a future that people consistently predict incorrectly?</p>
          
          <h3 className="font-aurochs mt-10 uppercase text-xl sm:text-2xl tracking-wider leading-relaxed" >Sunday</h3>
          <p className="font-bold mt-4 leading-relaxed" >11:00am Cooper Wentz: AI and Product Development</p>
          <p className="text-lg leading-relaxed" >Cooper Wentz is an instructor at the Galloup Luthier School with a keen interest in integrating artificial intelligence into product development. While his background includes a foundational understanding of computers, coding, and software development, his discussion, &quot;AI and Product Development,&quot; highlights how individuals with modest expertise can achieve ambitious goals through AI and self-education. </p>
          <p className="text-lg leading-relaxed" >Cooper will present a sophisticated tool designed to assist with guitar instrument voicing, showcasing how AI and human ambition could revolutionize the process of crafting and refining musical instruments.</p>

          <p className="font-bold mt-4 leading-relaxed" >1:00pm: William Bezard: CNC for Modern Lutherie</p>
          <p className="text-lg leading-relaxed" >As an accomplished guitar player, William leveraged his unique combination of musicianship and technical skills to design some of the most innovative and advanced electric guitars. Today, William is furthering his proficiency in techniques that promise to advance the fields of CNC, CAD, and CAM. </p>
          <p className="text-lg leading-relaxed" >William will demonstrate some of the techniques he&apos;s developed and will be available throughout the summit for hands-on tutoring for individuals seeking additional information about this technology.</p>
          */}

        {/* commented out 6/21/2024 */}
        {/* <div className="my-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-20 bg-[#A4CCDA] text-[#322D25]">


          <p className="italic text-sm leading-relaxed">Updated August 24, 2023 1:19PM<br/>Schedule subject to change. </p>

          <p className="underline font-bold mt-4  text-lg leading-relaxed">Campus Addresses & Locations:</p>
          <p className="mb-4 text-lg leading-relaxed">
          Old Town School of Folk Music - West, 4544 N. Lincoln Ave.<br/>
          (Maurer Hall, Mabie Gallery, Workshop Rooms, Art Gallery, Music Store, Cafe & Bar)</p>

          <p className="mb-10 text-lg leading-relaxed">
          Old Town School of Folk Music - East, 4545 N. Lincoln Ave.<br/>
          (Szold Hall, Luthier Showcase Exhibit Halls, East Lobby, Workshop Rooms, Cafe & Bar)</p> 

          <h3 className="font-aurochs mt-2 uppercase text-3xl sm:text-4xl tracking-wider leading-relaxed" >Thursday, August 24th</h3>

          <p className="italic mb-4  text-lg" >Exclusive For Three-Day All-Access Pass Holders Only</p>

          <p className="underline font-bold mt-4 leading-relaxed" >Check-In - West Lobby</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >12:00pm - 4:00pm</p>

          <p className="underline font-bold mt-4  text-lg leading-relaxed" >Welcome Remarks</p>
          <p className="text-lg leading-relaxed" >Maurer Hall - West</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >12:30pm  Welcome Remarks with Jason Verlinde, Jim Newcomb, and Acoustic Life&apos;s Tony Polecastro</p>

          <p className="underline font-bold mt-4  text-lg leading-relaxed" >Luthier Showcase</p>
          <p className="text-lg leading-relaxed" >East bldg (floors 1-3), West bldg (floors 1 & 2)</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >1:00pm - 5:00pm	Preview Showcase Exhibit Halls Open</p>

          <p className="mt-4  text-lg leading-relaxed" >Mabie Gallery - West</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >5:00pm - 6:00pm	Welcome Reception - Drinks & Light Snacks
          </p>
          <p className="italic">Presented by Henriksen Amplifiers</p>

          <p className="underline font-bold mt-4  text-lg leading-relaxed" >Concert Performances</p>
          <p className="italic mb-4  text-lg" >Exclusive For Three-Day All-Access Pass Holders Only</p>
          <p className="text-lg leading-relaxed" >Maurer Hall - West </p>
          <p className="pl-4 mb-4  text-lg leading-relaxed" >4:00pm - 5:00pm	Joey Landreth</p>
          <p className="pl-4 mb-4  text-lg leading-relaxed" >7:15pm		Doors Open For Concert Seating, General Admission</p>
          <p className="pl-4 mb-4  text-lg leading-relaxed" >8:00pm		Finom </p>
          <p className="pl-4 mb-4  text-lg leading-relaxed" >9:00pm		Jeff Parker</p>

          <p className="underline font-bold mt-4  text-lg leading-relaxed" > Workshops, Jams, Interviews, Talks, & More</p>
          <p className="text-lg leading-relaxed" >Szold Hall - East</p>
          
          <p className="pl-4 text-lg leading-relaxed" >11:00-11:45		Luthier Lunch & Learn w/ Pacific Rim Tonewoods
          </p>
          <p className="pl-4 italic mb-4">(exclusive content for luthiers)</p>

          <p className="pl-4 mb-4  text-lg leading-relaxed" >2:00pm - 3:00PM	Ordering Your First Custom Guitar & How To Get It Right with Paul Heumiller of Dream Guitars</p>
          <p className="pl-4 mb-4  text-lg leading-relaxed" >3:00pm - 4:00PM	The Guitar Market Today with Lillian Werbin (Elderly), Mark Stutman (Folkway Music), and guests</p>


          <p className="mt-4  text-lg leading-relaxed" >West Cafe & Bar open 1:00pm - 5:00pm & during concerts<br/>
          <a href="https://musicstore.oldtownschool.org">Old Town School Music Store</a> open 11:00am - 7:00pm<br/>
          Gear Check - room 201 in the West building, second floor wing (2W)
          </p>
          <p className="italic mb-10">Complimentary coffee provided by Acoustic Coffee in both buildings daily.</p>

          <div className="bg-gray-200 h-2 w-full"></div>

          <h3 className="font-aurochs mt-10 uppercase text-3xl sm:text-4xl tracking-wider leading-relaxed" >Friday, August 25th</h3>

          <p className="underline font-bold mt-4  text-lg leading-relaxed" >Check-In - West Lobby</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >9:30am - 4:00pm	For Single Day All-Access Passholders & Luthier Showcase Day Passes </p>

          <p className="underline font-bold mt-4  text-lg leading-relaxed" >Luthier Showcase</p>
          <p className="text-lg leading-relaxed" >East, 3rd Floor</p>
          <p className="pl-4 mb-4  text-lg leading-relaxed" >10:00am - 12:30pm	Luthier Showcase Exhibit Halls Open</p>
          <p className="pl-4 mb-4  text-lg leading-relaxed" >12:30pm-1:30pm 	Exhibitor Break Time, Exhibits closed</p>
          <p className="pl-4 mb-4  text-lg leading-relaxed" >1:30pm - 5:00pm	Luthier Showcase Exhibit Halls Open</p>

          <p className="underline font-bold mt-4  text-lg leading-relaxed" >Workshops, Jams, Interviews, Talks, & More</p>
          <p className="italic mb-4  text-lg" >All-Access Three-Day and All-Access Single-Day Pass holders can attend any workshops & events. Seating is general admission.</p>

          <p className="text-lg leading-relaxed" >Maurer Hall - West</p>

          <p className="pl-4  mb-4  text-lg leading-relaxed" >10:00am - 12:00pm	JHS Live: The Germanium Chef featuring Robert Keeley vs. Heather Brown, hosted by Josh Scott</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >1:00pm - 1:45pm	Rugby Roots: A Conversation with acclaimed builders Wayne & Elizabeth Jayne Henderson</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >2:00pm - 2:45pm	Fretboard Journal Podcast: Jorma Kaukonen </p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >3:00pm - 4:30pm	Vintage Acoustic repair and restoration with Mark Stutman & TJ Thompson</p>

          <p className="text-lg leading-relaxed" >Szold Hall - East</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >10:00am - 10:45am	The Art of Inlay: Simon Haycraft (Preston Thompson), Jayne Henderson, and friends</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >11:00am - 11:45pm	Workshop: Flatpicking with Jake Eddy</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >12:00pm - 12:45pm	Workshop: Joey Landreth</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >1:00pm - 1:45pm	Workshop: Jeff Parker </p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >2:00pm - 2:45pm	Play Nice: The Art & Science of the Spontaneous Guitar Duo With Ethan Sherman & Adam Levy </p>
          <p className="pl-4 mb-4  text-lg leading-relaxed" >3:00pm - 4:30pm	The Summit Science Fair: Forward-Thinking Gear & Composing feat. Andy Pitcher, Duncan Price and special guests</p>


          <p className="text-lg leading-relaxed" >Mabie Gallery - West</p>
          <p className="pl-4 mb-4  text-lg leading-relaxed" >12:00pm - 12:45pm Broonzy & Lennon - discussion and performances on OTSFM&apos;s Big Bill Broonzy and John Lennon Martin Guitars. With Chris Walz, Rebecca Jasso, Dick Boak, and Colby Maddox</p>

          <p className="pl-4 mb-4  text-lg leading-relaxed" >4:00pm - 4:45pm  I Am Bob Taylor of Taylor Guitars...Live AMA: Ask one of the guitar world&apos;s most successful figures anything you want about running a guitar company, inventing, sustainability, design or life. </p>

          <p className="pl-4 text-lg leading-relaxed" >B6 West - Basement</p>
          <p className="pl-4 mb-4  text-lg leading-relaxed" >11:00am - 4:00pm	The Truth About Vintage Amps Room: Try Some Truly Unique and Rare Tube Amps As Mentioned on the Podcast</p>

          <p className="text-lg leading-relaxed" >211 & 212 West - Second Floor</p>

          <p className="pl-4 mb-4  text-lg leading-relaxed" >11:00am - 4:00pm	The Blue Guitars Exhibition from the Archtop Foundation</p>


          <p className="underline font-bold mt-4  text-lg leading-relaxed" >Concert Performances</p>
          <p className="italic mb-4 text-lg" >Concert performances are included with 3-Day All-Access and 1-Day All Access Pasess only. Limited tickets may be available for purchase, see box office for details. Seating is general admission. </p>

          <p className="text-lg leading-relaxed" >Maurer Hall - West</p>
          <p className="pl-4 text-lg leading-relaxed" >7:15pm		Doors Open For Concert Seating, General Admission</p>
          <p className="pl-4 mb-4  text-lg leading-relaxed" >8:00pm 		Jorma Kaukonen with Jack Broadbent opening</p>

          <p className="text-lg leading-relaxed" >Szold Hall - East</p>
          <p className="pl-4 mb-4  text-lg leading-relaxed" >8:30pm Summit Shorts: All-star short sets featuring Paul Asbell, Adam Miller, Jamie Stillway, Wayne Henderson & Jake Eddy.</p>

          <p className="mt-4 text-lg leading-relaxed" >Cafe & Bars open 1:00pm - 5:00pm & during concerts<br/>
          <a href="https://musicstore.oldtownschool.org">Old Town School Music Store</a> open 11:00am - 7:00pm <br/>
          Gear Check  - room 201 in the West building, second floor wing (2W)
          </p>
          <p className="italic mb-10">Complimentary coffee provided by Acoustic Coffee in both buildings daily.</p>


          <div className="bg-gray-200 h-2 w-full"></div>

          <h3 className="font-aurochs mt-10 uppercase text-3xl sm:text-4xl tracking-wider leading-relaxed" >Saturday, August 26th</h3>

          <p className="underline font-bold mt-4  text-lg leading-relaxed" >Luthier Showcase</p>
          <p className="text-lg leading-relaxed" >East, 3rd Floor</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >10:00am - 12:30pm	Luthier Showcase Exhibit Halls Open</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >12:30pm-1:30pm 	Exhibitor Break Time, Exhibits closed</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >1:30pm - 5:00pm	Luthier Showcase Exhibit Halls Open</p>

          <p className="underline font-bold mt-4  text-lg leading-relaxed" >Workshops, Jams, Interviews, Talks, & More</p>
          <p className="italic mb-4  text-lg" >All-Access Three-Day and All-Access Single-Day Pass holders can attend any workshops & events. Seating is general admission.</p>

          <p className="text-lg leading-relaxed" >Maurer Hall - West</p>

          <p className="pl-4  mb-4  text-lg leading-relaxed" >10:00am - 10:45am	The Mortal Guitar Lover: Of Life, Music, and Legacy with the Fretboard Journal&apos;s John Thomas</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >11:00am - 12:45pm	Ridge Road: A Celebration of Norman Blake featuring Bob Minner, Cameron Knowler & Friends</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >1:00pm - 2:45pm	Workshop: The Bill Frisell Orchestra<br/>	Bring a guitar and let Bill Frisell be your conductor and bandleader</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >3:00pm - 3:45pm	Workshop: Improvisation for Solo Guitar with Adam Miller</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >4:00pm - 4:45pm	Live Podcast: Tommy Emmanuel interviewed by Adam Miller</p>

          <p className="text-lg leading-relaxed" >Szold Hall - East</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >10:00am - 10:45am	Tony Polecastro: Getting Out of Your Playing Rut </p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >11:00am - 11:45am	Offset Care & Feeding with Mike Adams (@puisheen) </p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >1:00pm - 1:45pm	Live Podcast: Luthier on Luthier: Richard Hoover (Santa Cruz Guitar Co. founder) and Michael Bashkin</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >2:00pm - 2:45pm	Hand-Crafted vs Technology-Driven: A conversation with luthiers Jason Kostal and Mike Baranik </p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >3:00pm - 3:45pm	A Martin History Masterclass with Greig Hutton: Untold stories from the Martin Guitar Co. vaults</p>
          <p className="pl-4  mb-4  text-lg leading-relaxed" >4:00pm - 4:45pm	The Black Banjo Reclamation Project</p>

          <p className="text-lg leading-relaxed" >Mabie Gallery - West</p>

          <p className="pl-4 mb-4 text-lg leading-relaxed" >11:00am - 11:45am	Workshop: Stevie Wonder, Cole Porter, and The Beatles for Fingerstyle Guitar With Michael J. Miles</p>
          <p className="pl-4 mb-4 text-lg leading-relaxed" >12:00pm - 12:45pm Introduction to Powers Electrics with Andy Powers. Interview by Josh Scott (JHS) and special guest Drew Shirley (Switchfoot) </p>
          <p className="pl-4 mb-4 text-lg leading-relaxed" >3:00pm - 3:45pm	Workshop: Effects Pedals For Guitarists with Charles Kim</p>
          <p className="pl-4 mb-4  text-lg leading-relaxed" >4:00pm - 5:00pm	The Friends of G. Weller Happy Hour</p>


          <p className="text-lg leading-relaxed" >West, B6 - Basement</p>
          <p className="pl-4 mb-4  text-lg leading-relaxed" >11:00am - 4:00pm	The Truth About Vintage Amps Room: Try Some Truly Unique and Rare Tube Amps As Mentioned on the Podcast</p>

          <p className="text-lg leading-relaxed" >West, 211 & 212 - Second Floor</p>
          <p className="pl-4 mb-4  text-lg leading-relaxed" >11:00am - 4:00pm	The Blue Guitars Exhibition from the Archtop Foundation</p>



          <p className="underline font-bold mt-4  text-lg leading-relaxed" >Concert Performances</p>
          <p className="italic mb-4  text-lg" >Concert performances are included with 3-Day All-Access and 1-Day All Access Pasess only. Limited tickets may be available for purchase, see box office for details. Seating is general admission.</p>

          <p className="text-lg leading-relaxed" >Maurer Hall - West</p>
          <p className="pl-4 mb-4  text-lg leading-relaxed" >7:15pm		Doors Open For Concert Seating, General Admission</p>
          <p className="pl-4 mb-4  text-lg leading-relaxed" >8:00pm 		Tommy Emmanuel with Nathan Graham opening</p>


          <p className="text-lg leading-relaxed" >Szold Hall - East</p>
          <p className="pl-4 mb-4 text-lg leading-relaxed" ><span className="line-through">8:00pm		Via Mardot scores the 1934 stop-motion masterpiece, <span className="italic">The Mascot</span></span> <span className="italic">This Performance Has Been Canceled</span></p>
          <p className="pl-4 mb-4 text-lg leading-relaxed" >8pm  &quot;The Show Must Go On&quot; Live Score To A Film TBD - featuring Duncan Price, Mike Adams and Friends</p>
          <p className="pl-4 mb-4 text-lg leading-relaxed" >9:00pm After performances	Late Night &quot;Summit All-Star Super Session:&quot; Ethan Sherman, Adam Levy, Ryan Richter and special guests </p>

          <p className="mt-4  text-lg leading-relaxed" >Cafe & Bars open 11:00am - 5:00pm & during concerts <br/>
          <a href="https://musicstore.oldtownschool.org">Old Town School Music Store</a> open 11:00am - 7:00pm <br/>
          Gear Check is located in room 201 in the West building, second floor wing (2W)
          </p>
          <p className="italic mb-10">Complimentary coffee provided by Acoustic Coffee in both buildings daily.</p>

        </div> */}


      </main>
      <Footer />
    </>
  );
}
