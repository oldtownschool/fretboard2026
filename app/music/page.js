'use client'

import Image from "next/image";
import { Navbar } from "../components/Navbar.jsx";
import Link from "next/link";
import { Footer } from "../components/Footer";

import Script from "next/script.js";
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Music() {
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
      <Navbar />
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-r from-[#322D35] to-[#4C454F]">
        
        {/*<div className="mt-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:px-20 bg-[#A4CCDA] text-[#322D25]">

           <h2 className="text-red-500">Please Note: This is content from the 2023 Fretboard Summit for informational purposes only. 2024 info available soon.</h2> 
        </div>*/}

        
        <div className="my-10 w-full max-w-5xl sm:flex sm:flex-col px-4 lg:px-14">
          <h2 className="mt-10 font-aurochs text-[#F0E5D1] uppercase text-6xl tracking-wider text-center">
            Live Performances
          </h2>
          <h4 className="mt-10 font-bold font-aurochs text-[#F0E5D1] uppercase text-3xl tracking-wider">
            Great concerts in Old Town School’s legendary concert halls are a key component of Fretboard Summit!
          </h4>
          <p className="font-bold text-2xl mt-6 text-[#F0E5D1]">
          Hear amazing concerts & performances all summit long. From pop-up performances to featured evening concerts every day. Past performers include Lyle Lovett, Tommy Emmanuel, John Leventhal, Bill Frisell, Deep Sea Diver, Jake Xerxes, The Volcano Brothers, Dave Hill, Charlie Hunter, Hand Habits, Blake Mills, Valerie June and many, many more.
          </p>
          {/* <p className="font-bold text-base mt-6 text-[#F0E5D1]">
          Full Concert Schedule & Bios coming soon!
          </p> */}
          <p className="text-center my-10">
            <a href="/tickets">
              <button className="tracking-wider text-3xl font-aurochs px-6 py-2 uppercase hover:bg-[#4DB3AC] bg-[#2B6F6D] text-[#F0E5D1]">
                Buy Tickets
              </button>
            </a>
          </p>
          

        {/* before event happens show these slides, then comment out the week of the event */}
        {/* <Slider {...settings}>
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
        </Slider> */}


        <p className="font-bold text-base mt-10 text-[#F0E5D1]">Please note: 3-day and 1-day All Access passholders can attend or sample as many shows as they desire. Individual concert tickets are available on <a className="underline" href="https://oldtownschool.org/concerts">oldtownschool.org/concerts</a></p>

        <p className="font-bold text-base mt-6 text-[#F0E5D1]">All concert seating is general admission. Doors open 45-minutes prior to showtime</p>
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
        </div> */}

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
            2027 Concert Lineup Coming Soon
          </h2>

          
          {/* <h4 className="tracking-wide font-aurochs text-3xl mt-6">Thursday, August 20 </h4>


          <h3 className="tracking-wide font-aurochs font-bold text-3xl mt-10 mb-2">Jake Xerxes Fussell </h3>
          <p className="font-semibold">(Thursday 8pm - Maurer Hall)</p>
          <p className="mt-4">North Carolina-based Jake Xerxes Fussell is a singer-songwriter known for crafting original (and mesmerizing) interpretations of traditional Southern folk and blues. Look for his latest album, The Old Beloved Path, out September 18th on Fat Possum Records.</p>

          <h3 className="tracking-wide font-aurochs font-bold text-3xl mt-10 mb-2">Cameron Knowler</h3>
          <p className="font-semibold">(Thursday 8pm - Maurer Hall)</p>
          <p className="mt-4">Cameron Knowler is an instrumental guitarist and music historian based in Nashville, Tennessee. His music is equally influenced by the playing of Norman Blake and other Americana legends, with atmospheric touches that evoke Cameron's Southwest roots.</p>

          <h3 className="tracking-wide font-aurochs font-bold text-3xl mt-10 mb-2">The Volcano Brothers </h3>
          <p className="font-semibold">(Thursday 8pm - Szold Hall)</p>
          <p className="mt-4">This year’s Summit features a debut Chicago appearance by the Volcano Brothers, a veritable Nashville supergroup. Hear session aces Steve Dawson, Fats Kaplin, Richard Bennett, Dave Jacques, and Andy Reiss give their take on jazz-fueled Hawaiian music of the 1920s and ‘30s. </p>



          <div className="flex justify-center  my-12">
            <Image
              className="hidden md:flex self-center"
              src="/borderRed2.png"
              alt="border"
              width={350}
              height={5}
            />
          </div>


          <h4 className="tracking-wide font-aurochs text-3xl mt-6">Friday, August 21</h4>


          <h3 className="tracking-wide font-aurochs font-bold text-3xl mt-10 mb-2">Deep Sea Diver Solo </h3>
          <p className="font-semibold">(Friday 8pm - Maurer Hall )</p>
<p className="mt-4">Deep Sea Diver's Jessica Dobson is a modern-day guitar hero. Before starting Deep Sea Diver, Dobson performed in the Shins, and for Beck, Conor Oberst, Spoon and the Yeah Yeah Yeahs. In addition to performing, Dobson will be leading an all-access session on how pedals shape her songwriting.</p>

<h3 className="tracking-wide font-aurochs font-bold text-3xl mt-10 mb-2">Hand Habits </h3>
<p className="font-semibold">(Friday 8pm - Maurer Hall)</p>
<p className="mt-4">Hand Habits is the alter ego of Meg Duffy, a guitarist who has played alongside the War on Drugs, Perfume Genius, Kevin Morby and others. Meg’s inventive use of pedals, great playing and stellar vocals has made them one of the most in-demand LA session artists today. </p>

<h3 className="tracking-wide font-aurochs font-bold text-3xl mt-10 mb-2">Michael Daves & Jacob Jolliff </h3>
<p className="font-semibold">(Friday 8pm - Szold Hall)</p>
<p className="mt-4">Guitarist Michael Daves and mandolin player Jacob Jolliff are two of the most energetic bluegrass players performing today. Their latest record, We Like Jim & Jesse!, celebrates the inventive music of Jim and Jesse McReynolds, but both of these musicians are true scholars of bluegrass. Daves is a frequent collaborator with Chris Thile, while Jolliff has played with Joy Kills Sorry, Yonder Mountain String Band, and with his own band. Both performers will also be teaching workshops at the Summit for all-access passholders. </p>

<h3 className="tracking-wide font-aurochs font-bold text-3xl mt-10 mb-2">Frank Solivan and Jack Dunlap </h3>
<p className="font-semibold">(Friday 8pm - Szold Hall)</p>
<p className="mt-4">Mandolin player Frank Solivan and guitarist Jack Dunlap both perform in progressive bluegrass ensemble Frank Solivan & Dirty Kitchen, winners of the 2014 IBMA Bluegrass Award for Instrumental Group of the Year. Frank is also the proprietor of Tone Slabs picks, exhibiting throughout the weekend at this year’s Summit.  </p> 


          <div className="flex justify-center  my-12">
            <Image
              className="hidden md:flex self-center"
              src="/borderRed2.png"
              alt="border"
              width={350}
              height={5}
            />
          </div>

          <h4 className="tracking-wide font-aurochs text-3xl mt-6">Saturday, August 22</h4>

          <h3 className="tracking-wide font-aurochs font-bold text-3xl mt-10 mb-2">Shane Parish</h3>
          <p className="font-semibold">(Saturday 8pm - Maurer Hall)</p>
<p className="mt-4">Shane Parish is a guitarist, composer, improviser, and interpreter whose work focuses on the translation of music across traditions, canons, and technologies. Known for his precise and expressive fingerstyle technique and his nuanced approach to transcription, Parish treats interpretation as a compositional practice, using existing works as material for structural and sonic transformation. His recent solo recordings center on recontextualizing music not originally written for guitar, including Autechre Guitar (2026, Palilalia Records), where he crafts acoustic fingerstyle arrangements of music by the English electronic duo Autechre. </p>

<h3 className="tracking-wide font-aurochs font-bold text-3xl mt-10 mb-2">Jonathan Stout</h3>
<p className="font-semibold">(Saturday 8pm - Maurer Hall)</p>
<p className="mt-4">Jonathan Stout is a Southern California-based jazz guitarist best known as a bandleader in the swing dance world. This Fretboard Summit alum is a true scholar of archtop guitar, jazz and, especially, Benny Goodman guitarist Allan Reuss. </p>

<h3 className="tracking-wide font-aurochs font-bold text-3xl mt-10 mb-2">Twanguero  </h3>
<p className="font-semibold">(Saturday 8pm - Maurer Hall)</p>
<p className="mt-4">Latin Grammy winner Diego Garcia is best known simply as Twanguero. A Collings Guitars artist, Twanguero can play it all: jazz, rockabilly, Spanish guitar, country and seemingly all points in between. He recently formed a world music collective, Los Silverbacks, along with Argentinian and Congolese artists. Based out of LA, Garcia is currently working on new music for both his Twanguero project and the new band.</p>

<h3 className="tracking-wide font-aurochs font-bold text-3xl mt-10 mb-2">Gabe Noel </h3>
<p className="font-semibold">(Saturday 8pm - Maurer Hall)</p>
<p className="mt-4">Saturday’s all-star jam will include a rare hometown performance from Gabe Noel, a musician who learned at the Old Town School of Folk Music before moving to LA and has appeared on records by Dijon, Sombr, Harry Styles, Kendrick Lamar and other superstars. Best known as a bassist, cellist, composer, and arranger, Gabe will be channeling his four-course roots through a 1935 Rickenbacher Spanish Electro Vibrola tenor guitar he picked up at an estate sale. He tunes it like a cello and has affectionately named it “the Chellar.”</p>*/}



        </div>

      </main>
      <Footer />
    </>
  );
}
