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
    autoplay: true,          // Enables automatic sliding
    autoplaySpeed: 2000,     // Delay between transitions (in ms)
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
          <h3 className="sm:px-16 font-aurochs mt-2 uppercase text-3xl sm:text-4xl tracking-wider leading-relaxed mb-8" >All Our Favorite Guitar People Under One Roof  <br></br><a href="/tickets" className="underline text-[#4DB3AC]">3-Day All Access Passes On Sale Now</a></h3>

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

          {/* before event happens show these slides, then comment out the week of the event */}
          <Slider {...settings}>
            <div>
              <Image src="/FBS-Slide_1_061726.webp" width={600} height={600} alt="Line Up Schedule Thurs 1"/>
            </div>
            <div>
              <Image src="/FBS-Slide_2_061726-B.webp" width={600} height={600} alt="Line Up Schedule Fri 1" />
            </div>
            <div>
              <Image src="/FBS-Slide_3_061726.webp" width={600} height={600} alt="Line Up Schedule Sat 1" />
            </div>
            <div>
              <Image src="/FBS-Slide_4_061726.webp" width={600} height={600} alt="Line Up Schedule Thurs 1"/>
            </div>
            {/* <div>
              <Image src="/FBS-Slide_5_061726.webp" width={600} height={600} alt="Line Up Schedule Fri 1" />
            </div> */}
            <div>
              <Image src="/FBS-Slide_6_061726-B.webp" width={600} height={600} alt="Line Up Schedule Sat 1" />
            </div>
            <div>
              <Image src="/FBS-Slide_7_061726.webp" width={600} height={600} alt="Line Up Schedule Thurs 1"/>
            </div>
            <div>
              <Image src="/FBS-Slide_8_061726.webp" width={600} height={600} alt="Line Up Schedule Fri 1" />
            </div>
            <div>
              <Image src="/FBS-Slide_9_061726.webp" width={600} height={600} alt="Line Up Schedule Sat 1" />
            </div>
          </Slider>


          {/* Keep commented out until the event schedule is released */}
          {/* <Slider {...settings}>
            <div>
              <Image src="/Fretboard2025_DailyScheduleSlides_Thurs1.jpg" width={600} height={600} alt="Line Up Schedule Thurs 1"/>
            </div>
            <div>
              <Image src="/Fretboard2025_DailyScheduleSlides_Fri1.jpg" width={600} height={600} alt="Line Up Schedule Fri 1" />
            </div>
            <div>
              <Image src="/Fretboard2025_DailyScheduleSlides_Sat1.jpg" width={600} height={600} alt="Line Up Schedule Sat 1" />
            </div>
          </Slider> */}
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


          <p className="italic text-sm leading-relaxed">Updated: July 21, 2026</p>
          <p className="font-bold text-sm leading-relaxed">Fretboard Summit 2026: Full Schedule</p>
          {/* <p className="text-xs leading-relaxed">Complete schedule coming soon</p> */}

          

          

          <h3 className="font-aurochs mt-2 uppercase text-3xl sm:text-4xl tracking-wider leading-relaxed" >Thursday, August 20</h3>

          <p className="italic my-2  text-base" >(3-Day Passholders Only) 
          Check-in begins at 10am. </p>

          {/* <p className="italic my-2  text-base" >Exclusive Content for 3-Day Passholders Only</p>  */}
          <p className="italic text-base" >New for 2026: All-Access passholders are entered to win a new Iris Guitar, a handmade tube amp and other amazing raffle prizes, in addition to sponsored giveaways, a stellar swag bag, the Summit happy hour, workshops, concerts and other perks.</p>

          <h3 className="font-aurochs mt-4 uppercase text-xl sm:text-2xl tracking-wider leading-relaxed underline" >Fretboard Summit Activities</h3>
          <p className="italic text-base" >Note: Summit workshops, clinics, interviews and concerts are available to All-Access Passholders only. Just want to guitar shop? We’ll have day Exhibitor Showcase tickets at the door for Friday and Saturday. </p>

          <p className="font-bold mt-4 leading-relaxed" >10am - 12pm Registration / Check-In (4544 N Lincoln Ave, Chicago, IL 60625)</p>
          
          
          <p className="font-bold mt-4 leading-relaxed" >12:00pm Opening Remarks </p>
          <p className="text-lg leading-relaxed" >Just for three-day passholders: Old Town School of Folk Music CEO Troy Anderson and Fretboard Journal founder Jason Verlinde welcome you to the 2026 Fretboard Summit. We'll also go over logistics, surprise lineup additions, updates and more. (Maurer Hall - West)</p>

          <p className="font-bold mt-4 leading-relaxed" >1:00pm Luthier & Exhibitor Showcase Preview Opens</p>
          <p className="text-lg leading-relaxed" >Exclusive preview of the Summit lutherie showcase just for three-day attendees. Scattered between the Old Town School of Folk Music's two buildings, Summit-goers will find nearly 100 brands and solo builders showcasing the latest in gear, including prototypes and new product launches. You’ll also have ample opportunities to meet some of the legends of the gear industry. Demo/listening rooms are available if you need a quiet space to try things out…or an amp to plug things in. (Both OTSFM buildings) </p>
          <p className="font-bold mt-4 leading-relaxed" >5:00pm - 6:00pm Happy Hour Hangout
          with William Downie Pinot Noir </p>
          <p className="text-lg leading-relaxed" >Meet fellow 3-day pass holders and Summit exhibitors at a complimentary wine tasting courtesy of Australia’s William Downie Pinot Noir. Additional beverages are available. (Szold Hall - East)</p>


          <h3 className="font-aurochs mt-4 uppercase text-xl sm:text-2xl tracking-wider leading-relaxed underline" >Workshops & Speakers</h3>
          <p className="font-bold mt-4 leading-relaxed" >1pm From K&F to CBS: The Real Relics of Fender History</p>
          <p className="text-lg leading-relaxed" >Acclaimed guitar historian Terry Foster shows rare and unseen items from his collection that helped shape the future of electric guitar. Presentation followed by Q&A. (Maurer Hall - West)</p>
          <p className="font-bold mt-4 leading-relaxed" >1pm Ordering a Luthier-Built Acoustic</p>
          <p className="text-lg leading-relaxed" >Guitarmaker Tom Sands and musician/educator Tony Polecastro walk attendees through best practices for commissioning a custom instrument. A must-listen whether you’re buying a guitar at the Summit or elsewhere. (Szold Hall - East)</p>
          <p className="font-bold mt-4 leading-relaxed" >2pm Fats Kaplin</p>
          <p className="text-lg leading-relaxed" >Acclaimed Nashville musician Fats Kaplin will discuss the instruments, techniques, and musical traditions he has spent a lifetime studying and using on stage and in the studio with artists ranging from John Prine and Mitski to Jack White and the Dead Reckoners. A singular multi-instrumentalist on fiddle, banjo, guitar, ukulele, mandolin, steel guitar and more, Fats has followed an intriguing path through music: years on the road with Roy Book Binder, a long stretch touring the world with Tom Russell, and eventually landing in Nashville, where he has become one of the city’s most respected and in-demand players.</p>

          <p className="text-lg leading-relaxed" >In this session, Fats demonstrate some of the techniques and sounds that have shaped his playing, and dig into the music that continues to fuel his desire to learn, create, and keep pushing forward. (Szold Hall - East)</p>
          <p className="font-bold mt-4 leading-relaxed" >3pm Twenty-One Years of the Fretboard Journal Live Podcast Taping</p>
          <p className="text-lg leading-relaxed" >A live Fretboard Journal Podcast taping: FJ founder Jason Verlinde shares stories from the frontlines of publishing the world’s most unique guitar publication, what excites him today, and his vision for media going forward. (Maurer Hall - West)</p>
          <p className="font-bold mt-4 leading-relaxed" >3pm Jazz duos with Andy Reiss and Jonathan Stout </p>
          <p className="text-lg leading-relaxed" >Returning Fretboard Summit performer Jonathan Stout is joined by Andy Reiss (Volcano Brothers) for a midday jazz performance. (Szold Hall - East)</p>
          <p className="font-bold mt-4 leading-relaxed" >4pm The Working Guitarist's Journey</p>
          <p className="text-lg leading-relaxed" >Corey Congilio talks about his journey as a pro guitarist and the realities of being a working musician in 2026. He'll discuss the gear that he depends on and how to build a skill set so that one can adapt to any instrument that they are presented with. (Maurer Hall - West)</p>
          <p className="font-bold mt-4 leading-relaxed" >4pm Vintage Gibson Acoustics Petting Zoo</p>
          <p className="text-lg leading-relaxed" >Mark Stutman is the expert on the Gibson L-style acoustic guitar. In this Summit session, he walks us through the quirks and magic found in these instruments. In this hands-on session, participants will also have a rare opportunity to play over a dozen Gibson, Kel Kroydon and other Gibson offshoot instruments from the 1930s. (Szold Hall - East)</p>
          <p className="font-bold mt-4 leading-relaxed" >4pm Hands-On Class: Build a Pedal with Summer School's Mark Turley </p>
          <p className="text-lg leading-relaxed" >Never touched a soldering iron? Not a problem! Summer School Electronics’ founder Mark Turley leads a beginner-friendly class where each participant will build their very own drive pedal. Note: Due to materials cost, a separate admission is required (reserve your spot here). (B-4, West)</p>

          <h3 className="font-aurochs mt-4 uppercase text-xl sm:text-2xl tracking-wider leading-relaxed underline" >Featured Concerts </h3>

          <p className="font-bold mt-4 leading-relaxed underline" >Maurer Hall </p>
          <p className="text-lg leading-relaxed" >8pm<br/>
          Jake Xerxes Fussell <br/>
          Cameron Knowler</p>


          <p className="font-bold mt-4 leading-relaxed underline" >Szold Hall </p>
          <p className="text-lg leading-relaxed" >8pm The Volcano Brothers (jazz-fueled Hawaiian music of the 1920s and ‘30s as channeled through Nashville’s Steve Dawson, Fats Kaplin, Richard Bennett, Dave Jacques, and Andy Reiss) </p>




          {/* <h3 className="font-aurochs mt-4 uppercase text-xl sm:text-2xl tracking-wider leading-relaxed underline" >Performances</h3>
          <p className="mb-4 leading-relaxed" >
            Jake Xerxes Fussell<br/> 
            The Volcano Brothers <br/> 
            Cameron Knowler
          </p>

          <h3 className="font-aurochs uppercase text-xl sm:text-2xl tracking-wider leading-relaxed underline" >Featured Speakers & Instructors</h3>
          <p className="mb-4 leading-relaxed" >
            Josh Scott (JHS)<br/>
            Fender historian Terry Foster
          </p>

          <h3 className="font-aurochs uppercase text-xl sm:text-2xl tracking-wider leading-relaxed underline" >Summit Experiences</h3>
          <p className="font-bold mt-2 leading-relaxed" >The Fretboard Summit Guitar Showcase</p>
          <p className="mb-4 leading-relaxed" >
            Demo and buy new and prototype guitars from nearly 100 boutique brands and independent luthiers
          </p>

          <p className="font-bold mt-2 leading-relaxed" >Wine Tasting</p>
          <p className="mb-4 leading-relaxed" >
            with acclaimed winemaker (and guitar fanatic) William Downie
          </p>

          <p className="font-bold mt-2 leading-relaxed" >Vintage Gibson Acoustic Petting Zoo</p>
          <p className="mb-4 leading-relaxed" >
            with Folkway Music’s Mark Stutman
          </p>

          <p className="font-bold mt-2 leading-relaxed" >Build a Pedal Class </p>
          <p className="mb-4 leading-relaxed" >
            with Summer School Electronics (beginner class)
          </p> */}
          

          



          <div className="bg-gray-200 h-2 w-full mt-6"></div>

          <h3 className="font-aurochs mt-10 uppercase text-3xl sm:text-4xl tracking-wider leading-relaxed" >Friday, August 21</h3>

          <p className="italic my-2  text-base" >Check-in begins at 9:30am. </p>

          <p className="font-bold mt-4 leading-relaxed" >10am - 5pm Luthier & Exhibitor Showcase</p>
          <p className="text-lg leading-relaxed" >The Fretboard Summit features one of the finest collections of handmade, high-end and boutique gear under one roof. Peruse both Old Town School buildings to demo and shop for gear from nearly 100 luthiers, brands, and gear makers. Can't make the rest of the Summit activities? We'll have Lutherie Showcase-only tickets available at the door on Friday and Saturday for those who just want to shop guitars. (Both OTSFM buildings) </p>

          <h3 className="font-aurochs mt-4 uppercase text-xl sm:text-2xl tracking-wider leading-relaxed underline" >Fretboard Summit Activities, Workshops, Speakers & More</h3>

          <p className="font-bold mt-4 leading-relaxed" >8:30am The Fretboard Summit 5k!</p>
          <p className="text-lg leading-relaxed" >Get up early and put your trainers on for a fun run with a few demented guitar fanatics who also like to jog in circles. Route to be emailed to passholders, weather permitting.</p>
          <p className="font-bold mt-4 leading-relaxed" >10am Josh Scott's Blindfold Test</p>
          <p className="text-lg leading-relaxed" >How well do any of us really know our effects? In this session, JHS founder Josh Scott handpicks a few guitarists roaming the halls of the Summit to see how well they can identify the sounds of a pedal, blindfolded. A Pepsi challenge with fuzz. (Maurer Hall - West)</p>
          <p className="font-bold mt-4 leading-relaxed" >10am The Many Faces of Modern Lap-Style Guitar with Steve Dawson</p>
          <p className="text-lg leading-relaxed" >Steve Dawson has been working in studios and on stage for years as a guitarist in many forms, but the steel guitar has always been his focus. Whether that’s solo gigs on Weissenborn, trad Hawaiian tricone with the Volcano Brothers, overdriven modern sounds on an Asher electro, Jerry Byrd-inspired retro lap steel, or pedal steel, Dawson has always found ways to keep interested in developing as a player and working musician. He'll do an interactive workshop where he plays a bit of those various styles, talks about tone, tunings and technique. (Szold Hall - East)</p>
          <p className="font-bold mt-4 leading-relaxed" >11am Dipped in Tone Podcast Live Podcast Taping</p>
          <p className="text-lg leading-relaxed" >Join Rhett Shull, Zach Broyles (Mythos Pedals) and Addison Sauvan for a rare, live taping of their hit podcast. Expect unique takes on industry news, favorite gear, and more. (Maurer Hall - West)</p>

          <p className="font-bold mt-4 leading-relaxed" >11am In Conversation: Richard Bennett</p>
          <p className="text-lg leading-relaxed" >Richard Bennett is one of Nashville's most respected guitarists. In this session, he sits down with the Fretboard Journal to discuss decades of playing and performing with the likes of Mark Knopfler, Neil Diamond, Steve Earle, Emmylou Harris, and countless others. We'll talk gear, inspiration, memorable sessions and more. (Szold Hall - East)
</p>
          <p className="font-bold mt-4 leading-relaxed" >1pm Featured Speaker: Chris Martin IV (Martin Guitars)</p>
          <p className="text-lg leading-relaxed" >Experience an intimate talk with Chris Martin IV, the 6th-generation owner of the iconic guitar manufacturer, C.F. Martin & Co., as he shares his passion and stories from his over 35 years at the helm of the company. Founded in 1833 in New York City, Martin Guitar has been crafting the world’s finest acoustic guitars for nearly 200 years. (Maurer Hall - West)</p>

          <p className="font-bold mt-4 leading-relaxed" >1pm Rare & Vintage Pedals with Chris Vincent (R2R Electric)</p>
          <p className="text-lg leading-relaxed" >Returning Fretboard Summit guest Chris Vincent and Meg Duffy (Hand Habits) walk us through some of the rarest and most unobtanium pedals they cherish, including a few that have their origins in Chicago. (Szold Hall - East)</p>

          <p className="font-bold mt-4 leading-relaxed" >2pm The Fretboard Summit Science Fair </p>
          <p className="text-lg leading-relaxed" >Every year, we carve out an hour at the Summit to showcase the weekend's gear-making pioneers, experimenters and oddballs. It's an old-school Science Fair patterned after the one you had in Junior High, just for guitar geeks. Any exhibitors or attendees are welcome to bring their creations. Expect some jaw-dropping and some laughs. (Szold Hall - East)</p>

          <p className="font-bold mt-4 leading-relaxed" >3pm Pedal Party Clinic with Jessica Dobson of Deep Sea Diver</p>
          <p className="text-lg leading-relaxed" >Dive into the sonic universe of Deep Sea Diver with an exclusive, behind-the-scenes session led by bandleader and multi-instrumentalist Jessica Dobson. In this dynamic presentation and Q&A, Jessica will explore how guitar textures, tone shaping, and creative effects work together to build entire musical worlds in both songwriting and production. Whether you’re a gear enthusiast, a songwriter, or simply a fan of Deep Sea Diver’s signature sound, join us to uncover the artistry behind their pedal choices, sonic landscapes, and the creative decisions that bring their music to life. (Maurer Hall - West)</p>

          <p className="font-bold mt-4 leading-relaxed" >3pm Workshop: Right-hand technique with Jacob Jolliff</p>
          <p className="text-lg leading-relaxed" >Acclaimed mandolin player Jolliff shares techniques and life hacks that have improved his playing. Great for mandolin players, guitarists or anyone who wants to up their game. (Szold Hall - East)</p>

          <p className="font-bold mt-4 leading-relaxed" >4pm Guitar Collecting Roundtable</p>
          <p className="text-lg leading-relaxed" >Join Emerald City Guitars, The Music Emporium, Mass Street Guitars, and Gearcheck for a deep chat about the perils and joys of amassing a growing guitar collection. (Maurer Hall - West)</p>

          <p className="font-bold mt-4 leading-relaxed" >4pm Workshop: Solo Fingerstyle With Shane Parish </p>
          <p className="text-lg leading-relaxed" >Shane Parish will discuss his process for arranging music from various idioms--jazz, folk, electronica, rock, etc.- for solo fingerstyle guitar. The conversation will touch on ideas about transcription, adaptation, counterpoint, alternate tunings, notation, interpretation, timbre, practice, technique, mechanics, analysis, improvisation, and more! Specific examples from his records Autechre Guitar, Repertoire, and Solo at Cafe OTO, will be cited. Questions and suggestions encouraged. </p>


          <p className="font-bold mt-4 leading-relaxed" >4 pm Hands-On Class: Build a Pedal with Summer School's Mark Turley (Intermediate Level)</p>
          <p className="text-lg leading-relaxed" >For those who attended last year’s Summer School class: Here’s your graduate school! Summer School Electronics’ founder Mark Turley leads an intermediate class, where each participant will build their very own pedal. Note: Due to materials cost, a separate admission is required (reserve your spot here). (B-4, West)</p>


          <h3 className="font-aurochs mt-4 uppercase text-xl sm:text-2xl tracking-wider leading-relaxed underline" >Featured Concerts </h3>

          <p className="font-bold mt-4 leading-relaxed underline" >Maurer Hall</p> 
          <p className="text-lg leading-relaxed" >8pm <br/>
          Deep Sea Diver (Solo) <br/>
          Hand Habits </p>


          <p className="font-bold mt-4 leading-relaxed underline" >Szold Hall </p>
          <p className="text-lg leading-relaxed" >8pm Michael Daves & Jacob Jolliff  </p>



          {/* <h3 className="font-aurochs mt-4 uppercase text-xl sm:text-2xl tracking-wider leading-relaxed underline" >Performances</h3>
          <p className="mb-4 leading-relaxed" >
            Deep Sea Diver (Solo) <br/>
            Michael Daves & Jacob Jolliff<br/>
            Hand Habits 
          </p>

          <h3 className="font-aurochs uppercase text-xl sm:text-2xl tracking-wider leading-relaxed underline" >Featured Speakers & Instructors</h3>
          <p className="mb-4 leading-relaxed" >
            Chris Martin IV (Martin Guitars) <br/>
            Josh Scott (JHS) <br/>
            Michael Daves <br/>
            Evan Gluck 
          </p>

          <h3 className="font-aurochs uppercase text-xl sm:text-2xl tracking-wider leading-relaxed underline" >Summit Experiences</h3>
          <p className="font-bold mt-2 leading-relaxed" >The Fretboard Summit Guitar Showcase</p>
          <p className="mb-4 leading-relaxed" >
            Demo and buy new and prototype guitars from nearly 100 boutique brands and independent luthiers
          </p>

          <p className="font-bold mt-2 leading-relaxed" >The Fretboard Summit 5k fun run</p>
          <p className="mb-4 leading-relaxed" >
            Join the runners on the Chicago lakefront for a special 5k
          </p>

          <p className="font-bold mt-2 leading-relaxed" >The Truth About Vintage Amps Library</p>
          <p className="mb-4 leading-relaxed" >
            Demo guitars through a few dozen vintage and rare amplifiers
          </p>

          <p className="font-bold mt-2 leading-relaxed" >Build a Pedal Class </p>
          <p className="mb-4 leading-relaxed" >
            with Summer School Electronics (intermediate class)
          </p> */}
          


          <div className="bg-gray-200 h-2 w-full mt-6"></div>

          <h3 className="font-aurochs mt-10 uppercase text-3xl sm:text-4xl tracking-wider leading-relaxed" >Saturday, August 22</h3>

          <p className="italic my-2  text-base" >Check-in begins at 8:30am. </p>

          <p className="font-bold mt-4 leading-relaxed" >10am - 5pm Luthier & Exhibitor Showcase</p>
          <p className="text-lg leading-relaxed" >The Fretboard Summit features one of the finest collections of handmade, high-end and boutique gear under one roof. Peruse both Old Town School buildings to demo and shop for gear from nearly 100 luthiers, brands, and gear makers. Can't make the rest of the Summit activities? We'll have Lutherie Showcase-only tickets available at the door on Friday and Saturday for those who just want to shop guitars. (Both OTSFM buildings) </p>

          <h3 className="font-aurochs mt-4 uppercase text-xl sm:text-2xl tracking-wider leading-relaxed underline" >Fretboard Summit Activities, Workshops, Speakers & More</h3>

          <p className="font-bold mt-4 leading-relaxed" >9am Bob Taylor: Sustainability and the Future of Guitar Woods. </p>
          <p className="text-lg leading-relaxed" >The sustainability efforts of Taylor Guitars co-founder Bob Taylor are the stuff of legend. In this extended session, Bob will do a tell-all for guitar lovers, fellow luthiers and industry leaders on the state of affairs of tonewoods, the legislation and permitting that may affect them down the road and how they can make change. Please Note: We're starting this session early (9-10:30am) so all exhibitors can attend before the show opens. (Maurer Hall - West)</p>

          <p className="font-bold mt-4 leading-relaxed" >9am Teach Your Children (How a Guitar is Built) – NO PASS REQUIRED, KIDS WELCOME</p> 
          <p className="text-lg leading-relaxed" >Geared toward kids but open to anyone curious, this workshop aims to demystify the guitar-building process. This is your chance to hear from some experts and then try your hand with the techniques, tools, and materials needed to build a guitar. Barry Grzebik (Grez Guitars), Wade Black (3Bender), Shelby Pollard (Black Bobbin), Benny Monson (Lockhorn Instruments), and Stephen Harrison (educator and hobbyist builder) will share their experiences, answer all your guitar questions, and guide you through some guitar building basics. (Szold Hall - East)</p>

          <p className="font-bold mt-4 leading-relaxed" >10:30am History: Martin Mystery Tops with Greig Hutton and TJ Thompson</p>
          <p className="text-lg leading-relaxed" >Two of the world’s foremost experts – TJ Thompson and Greig Hutton – demystify one of the great mysteries of Martin collectors: The “mystery tops” of 1953 and 1957. It’s a deep dive into arcane guitar history, top woods, what matters and what doesn’t. (Maurer Hall - West)</p>
          <p className="font-bold mt-4 leading-relaxed" >11am Songwriting 201 with Sofia Wolfson</p>
          <p className="text-lg leading-relaxed" >For this year’s Summit, the Fretboard Journal's Sofia Wolfson hosts a brand new songwriting class. She will be focusing on lyrical content and using the guitar as a dynamic vehicle for writing songs. There will also be time for a few students to receive live feedback on their own material. (Szold Hall - East)</p>

          <p className="font-bold mt-4 leading-relaxed" >1pm Evan Gluck's Guitar Repair Panel</p>
          <p className="text-lg leading-relaxed" >Join Evan Gluck (NY Guitar Repair), TJ Thompson, Mark Stutman, Jonathan Scott and James Roadman for a lively session on all things guitar repair. Evan wanted us to call this "Between Two Nibs" so expect some laughs between all the hide glue talk. (Maurer Hall - West)</p>

          <p className="font-bold mt-4 leading-relaxed" >1pm Masterclass: The Guitar Styles of Norman Blake with Michael Daves</p>
          <p className="text-lg leading-relaxed" >Bluegrass musician and historian Michael Daves walks participants through the singular guitar playing of Norman Blake. Included will be a deep dive featuring little-known facts about Blake's famed Sulfur Springs record and the gear that was used. (Szold Hall - East)</p>

          <p className="font-bold mt-4 leading-relaxed" >2pm Guitar Design with Grez</p>
          <p className="text-lg leading-relaxed" >California-based boutique builder Barry Grzebik walks us through his design process, a strategy based on data, creativity, art and guts.
          (Maurer Hall - West)</p>

          <p className="font-bold mt-4 leading-relaxed" >2pm Workshop: Recording Acoustic and Electric Guitars in a Digital Age</p>
          <p className="text-lg leading-relaxed" >LA-based studio owner and guitarist Eric Garcia (48 Windows) discusses amps, mics, processing gear, A/D converters, and more in this recording session deep dive. (Szold Hall - East) </p>

          <p className="font-bold mt-4 leading-relaxed" >3pm World Premiere: JHS's Electro-Harmonix Documentary</p>
          <p className="text-lg leading-relaxed" >On the heels of his new book, Made On Earth for Rising Stars: The Electro-Harmonix Story, Josh Scott shares the documentary he made on the project on the Summit's big screen. A Q&A will follow. (Maurer Hall - West)</p>

          <p className="font-bold mt-4 leading-relaxed" >3pm Workshop: Fourths and Fifths with Gabe Noel</p>
          <p className="text-lg leading-relaxed" >Upright bassist and now "cell-ar" (cello meets guitar) player Gabe Noel has played on countless pop hits by Sombr, Kendrick Lamar, Harry Styles and others. In this workshop, Noel walks us through the magic found in four-stringed (tenor) instruments and how downsizing may just open up your sonic possibilities. (Szold Hall - East) </p>


          <p className="font-bold mt-4 leading-relaxed" >5pm The 2026 Summit Pinewood Derby</p>
          <p className="text-lg leading-relaxed" >Each Summit, we close out the festivities with a question: What can some of the world's finest guitarmakers do with a humble Boy Scout pinewood derby car kit? At the Summit Pinewood Derby, we borrow a track from a local troop and see what happens when luthiers get competitive. Wagering encouraged, cold beverages available. (Szold Hall - East)</p>


          <h3 className="font-aurochs mt-4 uppercase text-xl sm:text-2xl tracking-wider leading-relaxed underline" >Featured Concerts </h3>

          <p className="font-bold mt-4 leading-relaxed underline" >Maurer Hall</p>
          <p className="font-bold mt-4 leading-relaxed" >8pm The Summit Summit </p>
          <p className="text-lg leading-relaxed" >A night of instrumental guitar wizards. Hear Twanguero, Shane Parish, Jonathan Stout, Gabe Noel & surprise guests. Available only to passholders.</p>

          <p className="font-bold mt-4 leading-relaxed" >All Weekend Long: The Truth About Vintage Amps Room (E130)</p>
          <p className="text-lg leading-relaxed" >Brian McAlister (vintagetubeamplifiers.com) and the community behind Skip Simmons’ Truth About Vintage Amps podcast share some of their favorite tube amp finds for anyone to try out. Come see what the tube fuss is about or just play a guitar you’ve been admiring at full volume. (B-1, West Building, all weekend long)</p>



          {/* <h3 className="font-aurochs mt-4 uppercase text-xl sm:text-2xl tracking-wider leading-relaxed underline" >Performances</h3>
          <p className="mb-4 leading-relaxed" >
            Shane Parish<br/>
            Jonathan Stout <br/>
            Gabe Noel
          </p>

          <h3 className="font-aurochs uppercase text-xl sm:text-2xl tracking-wider leading-relaxed underline" >Featured Speakers & Instructors</h3>
          <p className="mb-4 leading-relaxed" >
            Bob Taylor (Taylor Guitars) <br/>
            TJ Thompson <br/>
            Barry Grzebik (Grez Guitars)<br/>
            Michael Daves <br/>
            Sofia Wolfson 
          </p>

          <h3 className="font-aurochs uppercase text-xl sm:text-2xl tracking-wider leading-relaxed underline" >Summit Experiences</h3>
          <p className="font-bold mt-2 leading-relaxed" >The Fretboard Summit Guitar Showcase</p>
          <p className="mb-4 leading-relaxed" >
            Demo and buy new and prototype guitars from nearly 100 boutique brands and independent luthiers
          </p>

          <p className="font-bold mt-2 leading-relaxed" >The Truth About Vintage Amps Library</p>
          <p className="mb-4 leading-relaxed" >
            Demo guitars through a few dozen vintage and rare amplifiers
          </p>

          <p className="font-bold mt-2 leading-relaxed" >The Third Annual Fretboard Summit Science Fair</p>
          <p className="mb-4 leading-relaxed" >
            Hear the stories behind the festival’s wildest guitar inventions
          </p>

          <p className="font-bold mt-2 leading-relaxed" >The Summit Pinewood Derby</p>
          <p className="mb-4 leading-relaxed" >
            The world’s best luthiers compete against each other in an old-school pinewood derby 
          </p> */}
        

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
