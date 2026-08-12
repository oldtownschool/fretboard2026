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
import { useState } from "react";


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


  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All Days"},
    { id: "tab2", label: "Thursday", content: (
            <div className="dayOfWeek tabcontent" id="Thursday">
              <h3 className="mt-10 font-aurochs uppercase text-3xl sm:text-4xl tracking-wider leading-relaxed" >Thursday, August 20</h3>
                <p className="italic my-2  text-base" >(3-Day Passholders Only) 
                  Check-in begins at 10am. </p>
              
                <div className="event">
                  <span className="inline-flex items-center rounded-xl bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Activity</span>
                  <div className=" font-bold text-lg leading-relaxed">
                    <div className="font-bold leading-relaxed" > 10:00 AM | Registration / Check-In </div>
                  </div>
                  <div className="font-semibold">
                    4544 N Lincoln Ave, Chicago, IL 60625
                  </div>
                </div>
                
                <div className="event">
                  <span className="inline-flex items-center rounded-xl bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Activity</span>
                  <div className=" font-bold text-lg leading-relaxed">
                    <div>12:00 PM | Opening Remarks </div>
                  </div>
                  <div className="font-semibold">
                    Maurer Hall - West
                  </div>
                  <div className="mt-3">
                    Just for three-day passholders: Old Town School of Folk Music CEO Troy Anderson and Fretboard Journal founder Jason Verlinde welcome you to the 2026 Fretboard Summit. We'll also go over logistics, surprise lineup additions, updates and more.
                  </div>
                </div>

                <div className="event">
                  <div className=" font-bold text-lg leading-relaxed">
                    <span className="inline-flex items-center rounded-xl bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Activity</span>
                    <div>1:00 PM | Luthier & Exhibitor Showcase Preview Opens</div>
                  </div>
                  <div className="font-semibold">
                    Both OTSFM buildings
                  </div>
                  <div className="mt-3">
                    Exclusive preview of the Summit lutherie showcase just for three-day attendees. Scattered between the Old Town School of Folk Music's two buildings, Summit-goers will find nearly 100 brands and solo builders showcasing the latest in gear, including prototypes and new product launches. You’ll also have ample opportunities to meet some of the legends of the gear industry. Demo/listening rooms are available if you need a quiet space to try things out…or an amp to plug things in.
                  </div>
                </div>

                <div className="event">
                  <div className=" font-bold text-lg leading-relaxed">
                    <span className="inline-flex items-center rounded-xl bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10">Workshops & Speakers</span>
                    <div>1:00 PM | From K&F to CBS: The Real Relics of Fender History </div>
                  </div>
                  <div className="font-semibold">
                    Maurer Hall - West
                  </div>
                  <div className="mt-3">
                    Acclaimed guitar historian Terry Foster shows rare and unseen items from his collection that helped shape the future of electric guitar. Presentation followed by Q&A.
                  </div>
                </div>

                <div className="event">
                  <div className=" font-bold text-lg leading-relaxed">
                    <span className="inline-flex items-center rounded-xl bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10">Workshops & Speakers</span>
                    <div>1:00 PM | Jens Kruger  </div>
                    <div></div>
                  </div>
                  <div className="font-semibold">
                    Szold Hall - East
                  </div>
                  <div className="mt-3">
                    Bluegrass hero Jens Kruger teaches banjo for guitar players! Whether you already play or are just banjo curious, learn the magic of the 5-string from this former recipient of the Steve Martin Prize for Excellence in Banjo and Bluegrass. 
                  </div>
                </div>

                <div className="event">
                  <div className=" font-bold text-lg leading-relaxed">
                    <span className="inline-flex items-center rounded-xl bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10">Workshops & Speakers</span>
                    <div>2:00 PM | Fats Kaplin </div>
                  </div>
                  <div className="font-semibold">
                    Szold Hall - East
                  </div>
                  <div className="mt-3">
                    <p>Acclaimed Nashville musician Fats Kaplin will discuss the instruments, techniques, and musical traditions he has spent a lifetime studying and using on stage and in the studio with artists ranging from John Prine and Mitski to Jack White and the Dead Reckoners. A singular multi-instrumentalist on fiddle, banjo, guitar, ukulele, mandolin, steel guitar and more, Fats has followed an intriguing path through music: years on the road with Roy Book Binder, a long stretch touring the world with Tom Russell, and eventually landing in Nashville, where he has become one of the city’s most respected and in-demand players.</p>
                    <p>In this session, Fats demonstrate some of the techniques and sounds that have shaped his playing, and dig into the music that continues to fuel his desire to learn, create, and keep pushing forward.</p>
                  </div>
                </div>

                <div className="event">
                  <div className=" font-bold text-lg leading-relaxed">
                    <span className="inline-flex items-center rounded-xl bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10">Workshops & Speakers</span>
                    <div>3:00 PM | Twenty-One Years of the Fretboard Journal: Live Podcast Taping </div>
                    <div></div>
                  </div>
                  <div className="font-semibold">
                    Maurer Hall - West
                  </div>
                  <div className="mt-3">
                    What does it take to sustain an independent magazine for two decades? Fretboard Journal founder Jason Verlinde sits down with the one person who has seen it all - his wife! - for a behind-the-scenes conversation about the people, stories, and instincts that shaped the publication, and what still drives him today. Audience Q&A to follow.
                  </div>
                </div>

                <div className="event">
                  <div className=" font-bold text-lg leading-relaxed">
                    <span className="inline-flex items-center rounded-xl bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10">Workshops & Speakers</span>
                    <div>3:00 PM | Jazz duos with Andy Reiss and Jonathan Stout </div>
                  </div>
                  <div className="font-semibold">
                   Szold Hall - East
                  </div>
                  <div  className="mt-3">
                    Returning Fretboard Summit performer Jonathan Stout is joined by Andy Reiss (Volcano Brothers) for a midday jazz performance.
                  </div>
                </div>

                <div className="event">
                  <div className=" font-bold text-lg leading-relaxed">
                    <span className="inline-flex items-center rounded-xl bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10">Workshops & Speakers</span>
                    <div>4:00 PM | The Working Guitarist's Journey </div>
                  </div>
                  <div className="font-semibold">
                   Maurer Hall - West
                  </div>
                  <div className="mt-3">
                    Corey Congilio talks about his journey as a pro guitarist and the realities of being a working musician in 2026. He'll discuss the gear that he depends on and how to build a skill set so that one can adapt to any instrument that they are presented with.
                  </div>
                </div>
                
                <div className="event">
                  <div className=" font-bold text-lg leading-relaxed">
                    <span className="inline-flex items-center rounded-xl bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10">Workshops & Speakers</span>
                    <div>4:00 PM | Vintage Gibson Acoustics Petting Zoo </div>
                  </div>
                  <div className="font-semibold">
                   Szold Hall - East
                  </div>
                  <div className="mt-3">
                    Mark Stutman is the expert on the Gibson L-style acoustic guitar. In this Summit session, he walks us through the quirks and magic found in these instruments. In this hands-on session, participants will also have a rare opportunity to play over a dozen Gibson, Kel Kroydon and other Gibson offshoot instruments from the 1930s.
                  </div>
                </div>

                <div className="event">
                  <div className=" font-bold text-lg leading-relaxed">
                    <span className="inline-flex items-center rounded-xl bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10">Workshops & Speakers</span>
                    <div>4:00 PM | Hands-On Class: Build a Pedal with Summer School's Mark Turley </div>
                  </div>
                  <div className="font-semibold">
                   B-4, West
                  </div>
                  <div className="mt-3">
                    Never touched a soldering iron? Not a problem! Summer School Electronics’ founder Mark Turley leads a beginner-friendly class where each participant will build their very own drive pedal. Note: Due to materials cost, a separate admission is required.
                    <p className="mt-3">
                    <a href="https://www.summerschoolelectronics.com/shop/p/fretboard-summit-pedal-building-class-amnk8" className="text-center my-10">
                      <button className="tracking-wider text-xl font-aurochs px-2 py-2 uppercase hover:bg-[#4DB3AC] bg-[#2B6F6D] text-[#F0E5D1]">
                      Reserve your spot here
                      </button>
                    </a>
                  </p>
                  </div>
                </div>
                
                <div className="event">
                  <div className=" font-bold text-lg leading-relaxed">
                    <span className="inline-flex items-center rounded-xl bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Activity</span>
                    <div>5:00 PM | Happy Hour Hangout with William Downie Pinot Noir </div>
                  </div>
                  <div className="font-semibold">
                    Szold Hall - East
                  </div>
                  <div className="mt-3">
                    Meet fellow 3-day pass holders and Summit exhibitors at a complimentary wine tasting courtesy of Australia’s William Downie Pinot Noir. Additional beverages are available.
                  </div>
                </div>
                

                <div className="event">
                  <div className=" font-bold text-lg leading-relaxed">
                    <span className="inline-flex items-center rounded-xl bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-700/10">Concert</span>
                    <div>8:00 PM | Jake Xerxes Fussell &bull; Cameron Knowler </div>
                  </div>
                  <div className="font-semibold">
                   Maurer Hall
                  </div>
                  <div className="mt-3">
                    North Carolina-based Jake Xerxes Fussell is a singer-songwriter known for crafting original (and mesmerizing) interpretations of traditional Southern folk and blues. This performance, taking place just a few weeks before his next release on Fat Possum Records, will be unforgettable. Opening the show is Rural Guitars' Cameron Knowler, whose own instrumental music is steeped in the playing of Norman Blake and other Americana legends.
                  </div>
                </div>

                <div className="event">
                  <div className=" font-bold text-lg leading-relaxed">
                    <span className="inline-flex items-center rounded-xl bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-700/10">Concert</span>
                    <div>8:00 PM | The Volcano Brothers </div>
                  </div>
                  <div className="font-semibold">
                   Szold Hall
                  </div>
                  <div className="mt-3">
                    Jazz-fueled Hawaiian music of the 1920s and ‘30s as channeled through Nashville’s Steve Dawson, Fats Kaplin, Richard Bennett, Dave Jacques, and Andy Reiss.
                  </div>
                </div>

                
              <div className="bg-gray-200 h-2 w-full mt-6"></div>
            </div>)
    },
    { id: "tab3", label: "Friday", content: (
            <div className="dayOfWeek tabcontent" id="Friday">
              <h3 className="font-aurochs mt-10 uppercase text-3xl sm:text-4xl tracking-wider leading-relaxed" >Friday, August 21</h3>
              <p className="italic my-2  text-base" >Check-in begins at 9:30am. </p>

              <div className="event">
                <div className=" font-bold text-lg leading-relaxed">
                  <span className="inline-flex items-center rounded-xl bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Activity</span>
                  <div>8:00 AM  | The Fretboard Summit 5k! </div>
                </div>
                <div className="mt-3">
                  Get up early and put your trainers on for a fun run with a few demented guitar fanatics who also like to jog in circles. Route to be emailed to passholders, weather permitting.
                </div>
              </div>

              <div className="event">
                <div className=" font-bold text-lg leading-relaxed">
                  <span className="inline-flex items-center rounded-xl bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Activity</span>
                  <div>10:00 AM | Luthier & Exhibitor Showcase </div>
                </div>
                <div className="font-semibold">
                  Both OTSFM buildings
                </div>
                <div className="mt-3">
                  The Fretboard Summit features one of the finest collections of handmade, high-end and boutique gear under one roof. Peruse both Old Town School buildings to demo and shop for gear from nearly 100 luthiers, brands, and gear makers. Can't make the rest of the Summit activities? We'll have Lutherie Showcase-only tickets available at the door on Friday and Saturday for those who just want to shop guitars.
                </div>
              </div>

              <div className="event">
                <div className=" font-bold text-lg leading-relaxed">
                  <span className="inline-flex items-center rounded-xl bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10">Workshops & Speakers</span>
                  <div>10:00 AM | Josh Scott's Can You Hear It? </div>
                </div>
                <div className="font-semibold">
                  Maurer Hall - West
                </div>
                <div className="mt-3">
                  How well do you really know the sound of your favorite pedal? JHS founder Josh Scott will test players with the ultimate Pepsi challenge from the Summit's mainstage. Expect surprises, some deep effects pedal history and plenty of laughs. 
                </div>
              </div>

              <div className="event">
                <div className=" font-bold text-lg leading-relaxed">
                  <span className="inline-flex items-center rounded-xl bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10">Workshops & Speakers</span>
                  <div>10:00 AM | The Many Faces of Modern Lap-Style Guitar with Steve Dawson </div>
                </div>
                <div className="font-semibold">
                  Szold Hall - East
                </div>
                <div className="mt-3">
                  Steve Dawson has been working in studios and on stage for years as a guitarist in many forms, but the steel guitar has always been his focus. Whether that’s solo gigs on Weissenborn, trad Hawaiian tricone with the Volcano Brothers, overdriven modern sounds on an Asher electro, Jerry Byrd-inspired retro lap steel, or pedal steel, Dawson has always found ways to keep interested in developing as a player and working musician. He'll do an interactive workshop where he plays a bit of those various styles, talks about tone, tunings and technique.
                </div>
              </div>

              <div className="event">
                <div className=" font-bold text-lg leading-relaxed">
                  <span className="inline-flex items-center rounded-xl bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10">Workshops & Speakers</span>
                  <div>11:00 AM | Dipped in Tone Podcast Live Podcast Taping </div>
                </div>
                <div className="font-semibold">
                  Maurer Hall - West
                </div>
                <div className="mt-3">
                  Join Rhett Shull, Zach Broyles (Mythos Pedals) and Addison Sauvan for a rare, live taping of their hit podcast. Expect hot takes on industry news, favorite gear, and more.
                </div>
              </div>

              <div className="event">
                <div className=" font-bold text-lg leading-relaxed">
                  <span className="inline-flex items-center rounded-xl bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10">Workshops & Speakers</span>
                  <div>11:00 AM | In Conversation: Richard Bennett </div>
                  <div></div>
                </div>
                <div className="font-semibold">
                  Szold Hall - East
                </div>
                <div className="mt-3">
                  Richard Bennett is one of Nashville's most respected guitarists. In this session, he sits down with the Fretboard Journal to discuss decades of playing and performing with the likes of Mark Knopfler, Neil Diamond, Steve Earle, Emmylou Harris, and countless others. We'll talk gear, inspiration, memorable sessions and more.
                </div>
              </div>

              <div className="event">
                <div className=" font-bold text-lg leading-relaxed">
                  <span className="inline-flex items-center rounded-xl bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10">Workshops & Speakers</span>
                  <div>1:00 PM | Featured Speaker: Chris Martin IV (Martin Guitars) </div>
                </div>
                <div className="font-semibold">
                  Maurer Hall - West
                </div>
                <div className="mt-3">
                  Experience an intimate talk with Chris Martin IV, the 6th-generation owner of the iconic guitar manufacturer, C.F. Martin & Co., as he shares his passion and stories from his over 35 years at the helm of the company. Founded in 1833 in New York City, Martin Guitar has been crafting the world’s finest acoustic guitars for nearly 200 years.
                </div>
              </div>
                
              <div className="event">
                <div className=" font-bold text-lg leading-relaxed">
                  <span className="inline-flex items-center rounded-xl bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10">Workshops & Speakers</span>
                  <div>1:00 PM | Rare & Vintage Pedals with Chris Vincent (R2R Electric) </div>
                </div>
                <div className="font-semibold">
                  Szold Hall - East
                </div>
                <div className="mt-3">
                  Returning Fretboard Summit guest Chris Vincent and Meg Duffy (Hand Habits) walk us through some of the rarest and most unobtanium pedals they cherish, including a few that have their origins in Chicago.
                </div>
              </div>
                
              <div className="event">
                <div className=" font-bold text-lg leading-relaxed">
                  <span className="inline-flex items-center rounded-xl bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Activity</span>
                  <div>2:00 PM | The Fretboard Summit Science Fair </div>
                </div>
                <div className="font-semibold">
                  Szold Hall - East
                </div>
                <div className="mt-3">
                  Every year, we carve out an hour at the Summit to showcase the weekend's gear-making pioneers, experimenters and oddballs. It's an old-school Science Fair patterned after the one you had in Junior High, just for guitar geeks. Any exhibitors or attendees are welcome to bring their creations. Expect some jaw-dropping and some laughs. 
                </div>
              </div>

              <div className="event">
                <div className=" font-bold text-lg leading-relaxed">
                  <span className="inline-flex items-center rounded-xl bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10">Workshops & Speakers</span>
                  <div>3:00 PM | Pedal Party Clinic with Jessica Dobson of Deep Sea Diver </div>
                </div>
                <div className="font-semibold">
                  Maurer Hall - West
                </div>
                <div className="mt-3">
                  Dive into the sonic universe of Deep Sea Diver with an exclusive, behind-the-scenes session led by bandleader and multi-instrumentalist Jessica Dobson. In this dynamic presentation and Q&A, Jessica will explore how guitar textures, tone shaping, and creative effects work together to build entire musical worlds in both songwriting and production. Whether you’re a gear enthusiast, a songwriter, or simply a fan of Deep Sea Diver’s signature sound, join us to uncover the artistry behind their pedal choices, sonic landscapes, and the creative decisions that bring their music to life. 
                </div>
              </div>

              <div className="event">
                <div className=" font-bold text-lg leading-relaxed">
                  <span className="inline-flex items-center rounded-xl bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10">Workshops & Speakers</span>
                  <div>3:00 PM | Workshop: Right-hand technique with Jacob Jolliff </div>
                  <div></div>
                </div>
                <div className="font-semibold">
                  Szold Hall - East
                </div>
                <div className="mt-3">
                  Acclaimed mandolin player Jolliff shares techniques and life hacks that have improved his playing. Great for mandolin players, guitarists or anyone who wants to up their game.
                </div>
              </div>

              <div className="event">
                <div className=" font-bold text-lg leading-relaxed">
                  <span className="inline-flex items-center rounded-xl bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10">Workshops & Speakers</span>
                  <div>3:00 PM | The Hole Truth with Luthier Raymond Kraut </div>
                  <div></div>
                </div>
                <div className="font-semibold">
                  Wood & Wire booth - West 213
                </div>
                <div className="mt-3">
                  Inventive acoustic guitar maker Raymond Kraut shares insights into the world of offset, square and non-traditional soundholes, plus other lutherie developments
                </div>
              </div>

              <div className="event">
                <div className=" font-bold text-lg leading-relaxed">
                  <span className="inline-flex items-center rounded-xl bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10">Workshops & Speakers</span>
                  <div>4:00 PM | Guitar Collecting Roundtable </div>
                </div>
                <div className="font-semibold">
                  Maurer Hall - West
                </div>
                <div className="mt-3">
                  Join The Music Emporium, Mass Street Guitars, and Gearcheck for a deep chat about the perils and joys of amassing a growing guitar collection.
                </div>
              </div>
              
              <div className="event">
                <div className=" font-bold text-lg leading-relaxed">
                  <span className="inline-flex items-center rounded-xl bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10">Workshops & Speakers</span>
                  <div>4:00 PM | Workshop: Solo Fingerstyle With Shane Parish </div>
                </div>
                <div className="font-semibold">
                  Szold Hall - East
                </div>
                <div className="mt-3">
                  Shane Parish will discuss his process for arranging music from various idioms--jazz, folk, electronica, rock, etc.- for solo fingerstyle guitar. The conversation will touch on ideas about transcription, adaptation, counterpoint, alternate tunings, notation, interpretation, timbre, practice, technique, mechanics, analysis, improvisation, and more! Specific examples from his records Autechre Guitar, Repertoire, and Solo at Cafe OTO, will be cited. Questions and suggestions encouraged.
                </div>
              </div>

              <div className="event">
                <div className=" font-bold text-lg leading-relaxed">
                  <span className="inline-flex items-center rounded-xl bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10">Workshops & Speakers</span>
                  <div>4:00 PM | Hands-On Class: Build a Pedal with Summer School's Mark Turley (Intermediate Level) </div>
                </div>
                <div className="font-semibold">
                  B-4, West
                </div>
                <div className="mt-3">
                  For those who attended last year’s Summer School class: Here’s your graduate school! Summer School Electronics’ founder Mark Turley leads an intermediate class, where each participant will build their very own pedal. Note: Due to materials cost, a separate admission is required.
                  <p>
                    <a href="https://www.summerschoolelectronics.com/shop/p/fretboard-summit-pedal-building-class-amnk8" className="text-center my-10">
                      <button className="tracking-wider text-xl font-aurochs px-2 py-2 uppercase hover:bg-[#4DB3AC] bg-[#2B6F6D] text-[#F0E5D1]">
                      Reserve your spot here
                      </button>
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="event">
                <div className=" font-bold text-lg leading-relaxed">
                  <span className="inline-flex items-center rounded-xl bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-700/10">Concert</span>
                  <div>8:00 PM | Deep Sea Diver (Solo) &bull; Hand Habits  </div>
                </div>
                <div className="font-semibold">
                  Maurer Hall
                </div>
                <div className="mt-3">
                  An incredible night of music with two of the most forward-thinking indie rock artists of today: Deep Sea Diver's Jessica Dobson will play a rare solo set of music alongside Hand Habits, the alter ego of Meg Duffy, a guitarist who has played alongside the War on Drugs, Perfume Genius, Kevin Morby and others. Both artists will also be doing workshop sessions during the Summit.
                </div>
              </div>

              <div className="event">
                <div className=" font-bold text-lg leading-relaxed">
                  <span className="inline-flex items-center rounded-xl bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-700/10">Concert</span>
                  <div>8:00 PM | Michael Daves & Jacob Jolliff </div>
                </div>
                <div className="font-semibold">
                  Szold Hall
                </div>
                <div className="mt-3">
                  Into bluegrass? We have you covered! Guitarist Michael Daves and mandolin wizard Jacob Jolliff will perform music from their latest record, We Like Jim & Jesse!, as well as other bluegrass favorites. Daves is a frequent collaborator with Chris Thile, while Jolliff has played with Joy Kills Sorry, Yonder Mountain String Band, and with his own band. Opening is another stellar mandolin/guitar duo: Frank Solivan and Jack Dunlap from the band Frank Solivan & Dirty Kitchen.  
                </div>
              </div>

              <div className="bg-gray-200 h-2 w-full mt-6"></div>
            </div>
            )
    },
    { id: "tab4", label: "Saturday", content: (
            <div className="dayOfWeek tabcontent" id="Saturday">
              <h3 className="font-aurochs mt-10 uppercase text-3xl sm:text-4xl tracking-wider leading-relaxed" >Saturday, August 22</h3>
              <p className="italic my-2  text-base" >Check-in begins at 8:30am. </p>  

              <div className="event">
                <div className=" font-bold text-lg leading-relaxed">
                  <span className="inline-flex items-center rounded-xl bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10">Workshops & Speakers</span>
                  <div>9:00 AM | Bob Taylor: Sustainability and the Future of Guitar Woods </div>
                </div>
                <div className="font-semibold">
                  Maurer Hall - West
                </div>
                <div className="mt-3">
                  The sustainability efforts of Taylor Guitars co-founder Bob Taylor are the stuff of legend. In this extended session, Bob will do a tell-all for guitar lovers, fellow luthiers and industry leaders on the state of affairs of tonewoods, the legislation and permitting that may affect them down the road and how they can make change. Please Note: We're starting this session early (9-10:30am) so all exhibitors can attend before the show opens.
                </div>
              </div>

              <div className="event">
                <div className=" font-bold text-lg leading-relaxed">
                  <span className="inline-flex items-center rounded-xl bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10">Workshops & Speakers</span>
                  <div>9:00 AM | Teach Your Children (How a Guitar is Built) – NO PASS REQUIRED, KIDS WELCOME </div>
                </div>
                <div className="font-semibold">
                  Szold Hall - East
                </div>
                <div className="mt-3">
                  Geared toward kids but open to anyone curious, this workshop aims to demystify the guitar-building process. This is your chance to hear from some experts and then try your hand with the techniques, tools, and materials needed to build a guitar. Barry Grzebik (Grez Guitars), Wade Black (3Bender), Shelby Pollard (Black Bobbin), Benny Monson (Lockhorn Instruments), and Stephen Harrison (educator and hobbyist builder) will share their experiences, answer all your guitar questions, and guide you through some guitar building basics.
                </div>
              </div>

              <div className="event">
                <div className=" font-bold text-lg leading-relaxed">
                  <span className="inline-flex items-center rounded-xl bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Activity</span>
                  <div>10:00 AM | Luthier & Exhibitor Showcase </div>
                </div>
                <div className="font-semibold">
                  Both OTSFM buildings
                </div>
                <div className="mt-3">
                  The Fretboard Summit features one of the finest collections of handmade, high-end and boutique gear under one roof. Peruse both Old Town School buildings to demo and shop for gear from nearly 100 luthiers, brands, and gear makers. Can't make the rest of the Summit activities? We'll have Lutherie Showcase-only tickets available at the door on Friday and Saturday for those who just want to shop guitars.
                </div>
              </div>

              
              <div className="event">
                <div className=" font-bold text-lg leading-relaxed">
                  <span className="inline-flex items-center rounded-xl bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10">Workshops & Speakers</span>
                  <div>10:30 AM | History: Martin Mystery Tops with Greig Hutton and TJ Thompson </div>
                </div>
                <div className="font-semibold">
                  Maurer Hall - West
                </div>
                <div className="mt-3">
                  Two of the world’s foremost experts – TJ Thompson and Greig Hutton – demystify one of the great mysteries of Martin collectors: The “mystery tops” of 1953 and 1957. It’s a deep dive into arcane guitar history, top woods, what matters and what doesn’t.
                </div>
              </div>

              <div className="event">
                <div className=" font-bold text-lg leading-relaxed">
                  <span className="inline-flex items-center rounded-xl bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10">Workshops & Speakers</span>
                  <div>11:00 AM | Songwriting 201 with Sofia Wolfson </div>
                  <div></div>
                </div>
                <div className="font-semibold">
                  Szold Hall - East
                </div>
                <div className="mt-3">
                  For this year’s Summit, the Fretboard Journal's Sofia Wolfson hosts a brand new songwriting class. She will be focusing on lyrical content and using the guitar as a dynamic vehicle for writing songs. There will also be time for a few students to receive live feedback on their own material. 
                </div>
              </div>
                
              <div className="event">
                <div className=" font-bold text-lg leading-relaxed">
                  <span className="inline-flex items-center rounded-xl bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10">Workshops & Speakers</span>
                  <div>1:00 PM | Evan Gluck's Guitar Repair Panel </div>
                </div>
                <div className="font-semibold">
                  Maurer Hall - West
                </div>
                <div className="mt-3">
                  Join Evan Gluck (NY Guitar Repair), TJ Thompson, Mark Stutman, Jonathan Scott and James Roadman for a lively session on all things guitar repair. Evan wanted us to call this "Between Two Nibs" so expect some laughs between all the hide glue talk.
                </div>
              </div>

              <div className="event">
                <div className=" font-bold text-lg leading-relaxed">
                  <span className="inline-flex items-center rounded-xl bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10">Workshops & Speakers</span>
                  <div>1:00 PM | Masterclass: The Guitar Styles of Norman Blake with Michael Daves </div>
                </div>
                <div className="font-semibold">
                  Szold Hall - East
                </div>
                <div className="mt-3">
                  Bluegrass musician and historian Michael Daves walks participants through the singular guitar playing of Norman Blake. Included will be a deep dive featuring little-known facts about Blake's famed Sulfur Springs record and the gear that was used.
                </div>
              </div>

              <div className="event">
                <div className=" font-bold text-lg leading-relaxed">
                  <span className="inline-flex items-center rounded-xl bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10">Workshops & Speakers</span>
                  <div>2:00 PM | Guitar Design with Grez </div>
                </div>
                <div className="font-semibold">
                  Maurer Hall - West
                </div>
                <div className="mt-3">
                  California-based boutique builder Barry Grzebik walks us through his design process, a strategy based on data, creativity, art and guts.
                </div>
              </div>

              <div className="event">
                <div className=" font-bold text-lg leading-relaxed">
                  <span className="inline-flex items-center rounded-xl bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10">Workshops & Speakers</span>
                  <div>2:00 PM | Workshop: Recording Acoustic and Electric Guitars in a Digital Age </div>
                </div>
                <div className="font-semibold">
                  Szold Hall - East
                </div>
                <div className="mt-3">
                  LA-based studio owner and guitarist Eric Garcia (48 Windows) discusses amps, mics, processing gear, A/D converters, and more in this recording session deep dive.
                </div>
              </div>
              
              <div className="event">
                <div className=" font-bold text-lg leading-relaxed">
                  <span className="inline-flex items-center rounded-xl bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10">Workshops & Speakers</span>
                  <div>3:00 PM | World Premiere: JHS's Electro-Harmonix Documentary </div>
                </div>
                <div className="font-semibold">
                  Maurer Hall - West
                </div>
                <div className="mt-3">
                  On the heels of his new book, Made On Earth for Rising Stars: The Electro-Harmonix Story, Josh Scott shares the documentary he made on the project on the Summit's big screen. A Q&A will follow.
                </div>
              </div>
                
              <div className="event">
                <div className=" font-bold text-lg leading-relaxed">
                  <span className="inline-flex items-center rounded-xl bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10">Workshops & Speakers</span>
                  <div>3:00 PM | Workshop: Fourths and Fifths with Gabe Noel </div>
                </div>
                <div className="font-semibold">
                  Szold Hall - East
                </div>
                <div className="mt-3">
                  Upright bassist and now "cell-ar" (cello meets guitar) player Gabe Noel has played on countless pop hits by Sombr, Kendrick Lamar, Harry Styles and others. In this workshop, Noel walks us through the magic found in four-stringed (tenor) instruments and how downsizing may just open up your sonic possibilities.
                </div>
              </div>
              
              <div className="event">
                <div className=" font-bold text-lg leading-relaxed">
                  <span className="inline-flex items-center rounded-xl bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Activity</span>
                  <div>5:00 PM | The 2026 Summit Pinewood Derby </div>
                </div>
                <div className="font-semibold">
                  Szold Hall - East
                </div>
                <div className="mt-3">
                  Each Summit, we close out the festivities with a question: What can some of the world's finest guitarmakers do with a humble Boy Scout pinewood derby car kit? At the Summit Pinewood Derby, we borrow a track from a local troop and see what happens when luthiers get competitive. Wagering encouraged, cold beverages available.
                </div>
              </div>
              

               <div className="event">
                <div className=" font-bold text-lg leading-relaxed">
                  <span className="inline-flex items-center rounded-xl bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-700/10">Concert</span>
                  <div>8:00 PM | The Summit Summit </div>
                </div>
                <div className="font-semibold">
                  Maurer Hall
                </div>
                <div className="mt-3">
                  This year, we're mixing it up and closing out the Summit with a night of instrumental guitar wizards just for all-access passholders. Hear acclaimed artists Twanguero, Shane Parish, Jonathan Stout, Gabe Noel & surprise guests perform just for you. Available only to all-access passholders.
                </div>
              </div>

              <div className="bg-gray-200 h-2 w-full mt-6"></div>
            </div>
            )
    },
    { id: "tab5", label: "All Weekend Long", content: (
            <div className="dayOfWeek tabcontent" id="AllWeek">
              
                <h3 className="font-aurochs mt-10 uppercase text-3xl sm:text-4xl tracking-wider leading-relaxed" >All Weekend Long</h3>

                <div className="event">
                  <div className=" font-bold text-lg leading-relaxed">
                    <span className="inline-flex items-center rounded-xl bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Activity</span>
                    <div>The Truth About Vintage Amps Room </div>
                    <div></div>
                  </div>
                  <div className="font-semibold">
                    E128, East Building
                  </div>
                  <div className="mt-3">
                    Brian McAlister (vintagetubeamplifiers.com) and the community behind Skip Simmons’ Truth About Vintage Amps podcast share some of their favorite tube amp finds for anyone to try out. Come see what the tube fuss is about or just play a guitar you’ve been admiring at full volume.
                  </div>
                </div>

                <div className="event">
                  <div className=" font-bold text-lg leading-relaxed">
                    <span className="inline-flex items-center rounded-xl bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Activity</span>
                    <div>Vintage Martin & Gibson ID with Greig Hutton </div>
                  </div>
                  <div className="font-semibold">
                    Lobby, West Building
                  </div>
                  <div className="mt-3">
                    Acclaimed Martin historian Greig Hutton will be back with his database of early Martin and Gibson guitar records, helping you learn the history of your instrument. Just bring a serial number or factory order number!
                  </div>
                </div>

                <div className="event">
                  <div className=" font-bold text-lg leading-relaxed">
                    <span className="inline-flex items-center rounded-xl bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Activity</span>
                    <div>Free banjo setup by Greg Deering </div>
                  </div>
                  <div className="font-semibold">
                    Deering Booth, E326
                  </div>
                  <div className="mt-3">
                    Deering Banjos' founder, Greg Deering, is offering free banjo setup to any attendee, regardless of make or model! 
                  </div>
                </div>

            </div>
            )
    },
  ];

  // const [searchQuery, setSearchQuery] = useState('');

  //  const filteredTabs = tabs.filter((tab) => {
  //   const text = tab.content?.props.className === "event" || "";
  //   return text.toLowerCase().includes(searchQuery.toLowerCase());
  // });

  // const openDay = (evt, dayName) => {
  //   var i, tabcontent, tablinks;
  //   tabcontent = document.getElementsByClassName("tabcontent");
  //   for (i = 0; i < tabcontent.length; i++) {
  //     tabcontent[i].style.display = "none";
  //   }
  //   tablinks = document.getElementsByClassName("tablinks");
  //   for (i = 0; i < tablinks.length; i++) {
  //     tablinks[i].className = tablinks[i].className.replace(" active", "");
  //   }
  //   document.getElementById(dayName).style.display = "block";
  //   evt.currentTarget.className += " active";
  // }
  return (
    <>
      {/* <link href="/slider.css" rel="stylesheet"></link> */}
      {/* <Script src="/jquery.js" as="script" strategy="beforeInteractive"></Script>
      <Script src="/slickslider.js"></Script>
       */}
      
      
      <Navbar />
      <Script type="text/javascript">
        {` 
        // const tableSearch = document.getElementById('tableSearch');
        // const events = document.querySelectorAll('.event div');

        // tableSearch.addEventListener('input', function () {
        
        //   const filterValue = this.value.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
        //   console.log(events.length);

        //   events.forEach(event => {
        //     const header = event.querySelector('h3');
        //     const rows = event.querySelectorAll('div');
        //     let hasMatch = false;
        //     console.log(rows.length);
        //     rows.forEach(row => {
        //       if(!row.classList.contains('bg-gray-200')){
        //         const rowText = row.textContent.toLowerCase().replace(/[^a-z0-9]/g, '');
        //         if (rowText.includes(filterValue)) {
        //           console.log('working3');
        //           row.classList.add('bg-yellow-50');
        //           row.style.display = '';
        //           hasMatch = true;
        //         } else {
        //           row.style.display = 'none';
        //         }
        //         if (filterValue == "") {
        //           row.classList.remove('bg-yellow-50');
        //         }
        //       }
        //     });
        //     // Show or hide the parent header and section based on matches
        //     if (hasMatch || filterValue === '') {
        //       if (header){
        //       header.style.display = '';
        //       }
        //       event.style.display = '';
        //     } else {
        //       if (header){
        //         header.style.display = 'none';
        //       }
        //       event.style.display = 'none';
        //     }
        //   });
        // });
        `}
      </Script>
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-r from-[#322D35] to-[#4C454F]">

        {/* <div className="my-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-20 bg-[#A4CCDA] text-[#322D25]"> */}
        {/* <div className="py-10 max-w-5xl w-full my-10 p-4 bg-[#A4CCDA] text-[#322D25]">
          <h3 className="sm:px-16 font-aurochs mt-2 uppercase text-3xl sm:text-4xl tracking-wider leading-relaxed mb-8" >All Our Favorite Guitar People Under One Roof  <br></br><a href="/tickets" className="underline text-[#4DB3AC]">3-Day All Access Passes On Sale Now</a></h3>

          <div className="sm:px-16">

            <p className="font-bold text-2xl mt-4">The Summit is the guitar festival of our dreams, where you can meet some of the most inspiring performers and makers in the gear universe.</p>

            <p className="font-bold text-2xl mt-4">All-access passholders get access to three days of world-class concerts, master classes, music workshops, oral histories, podcast tapings, demo rooms, and parties, in addition to admission to the 80-exhibitor lutherie showcase.</p>

            <p className="font-bold text-2xl mt-4">Join us for a once-in-a-lifetime weekend.</p>

            <p className="font-bold text-2xl mt-4 mb-8">- Jason Verlinde, Fretboard Journal</p>
            
          </div> */}

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
        {/* </div> */}


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


          {/* <input className="w-full my-4 p-2 text-gray-900" type="search" id="tableSearch" placeholder="Type to search Schedule..."></input> */}

          {/* <input
            type="text"
            placeholder="Search items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          /> */}

           {/* <div>
            {filteredTabs.length > 0 ? (
              filteredTabs.map((tab, index) => (
                <div key={index}>
                  <h3>{tab.label}</h3>
                  {tab.content}
                </div>
              ))
            ) : (
              <p>No matching content found.</p>
            )}
          </div> */}


          
            <p className="italic text-xs text-gray-900 leading-relaxed">Updated: August 12, 2026</p>
            <p className="font-bold text-base leading-relaxed">Fretboard Summit 2026: Full Schedule</p>

            <div className="my-2">
              <p className="italic text-sm" >New for 2026: All-Access passholders are entered to win a new Iris Guitar, a handmade tube amp and other amazing raffle prizes, in addition to sponsored giveaways, a stellar swag bag, the Summit happy hour, workshops, concerts and other perks.</p>
            </div>
            <div>
              <p className="italic text-sm" >Note: Summit workshops, clinics, interviews and concerts are available to All-Access Passholders only. Just want to guitar shop? We’ll have day Exhibitor Showcase tickets at the door for Friday and Saturday. </p>
            </div>

          <div className="mt-6 tab-buttons flex justify-center tabs gap-2 mb-4" id="tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`font-semibold uppercase tab-btn ${activeTab === tab.id ? "active" : ""} tablinks border border-black hover:bg-[#4DB3AC] py-2 px-4 tab`}
              >
                {tab.label}
              </button>
            ))}
          </div>


          {/* new */}
          {/* <div className="mt-6 tab-buttons flex justify-center tabs gap-2 mb-4" id="tabs">
            {DATA.map((tab) => (
              <button
                key={tab.day}
                onClick={() => setActiveTab(tab.day)}
                className={`font-semibold uppercase tab-btn ${activeTab === tab.day ? "active" : ""} tablinks border border-black hover:bg-[#4DB3AC] py-2 px-4 tab`}
              >
                {tab.day}
              </button>
            ))}
          </div> */}

          

          <div id="dataTable">
            


            {/* Tab Content Panel */}
            <div className="tab-content">
              {tabs.map((tab) => 
                (activeTab === tab.id || activeTab === 'all') && <div key={tab.id}>{tab.content}</div>
              )}
            </div>

            {/* new */}
            {/* <div className="tab-content">
              {DATA.map((tab) => 
                // (activeTab === tab.events.title || activeTab === 'all') && <div key={tab.events.title}>{tab.events.desc}</div>
                {tab.events.map((event, index) => 
                  (activeTab === event.title || activeTab === 'all') && <div>{event.title} {event.desc}</div>
                )}
              )}
            </div> */}

            {/* <div className="dayOfWeek tabcontent" id="Thursday">
              <h3 className="mt-10 font-aurochs uppercase text-3xl sm:text-4xl tracking-wider leading-relaxed" >Thursday, August 20</h3>
              <div className="event">
                <div>
                  <p className="italic my-2  text-base" >(3-Day Passholders Only) 
                  Check-in begins at 10am. </p>
                </div>
                
              </div>
              
              <div className="event">
                <h3 className="font-aurochs mt-4 uppercase text-xl sm:text-2xl tracking-wider leading-relaxed underline" >Fretboard Summit Activities</h3>
                
                <div>
                  <p className="font-bold leading-relaxed" >10am - 12pm Registration / Check-In (4544 N Lincoln Ave, Chicago, IL 60625)<span className="inline-flex items-center rounded-xl bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Activity</span></p>
                </div>
                
                <div>
                  <p className="font-bold leading-relaxed" >12:00pm Opening Remarks </p>
                  <p className="text-lg leading-relaxed" >Just for three-day passholders: Old Town School of Folk Music CEO Troy Anderson and Fretboard Journal founder Jason Verlinde welcome you to the 2026 Fretboard Summit. We'll also go over logistics, surprise lineup additions, updates and more. (Maurer Hall - West)</p>
                </div>

                <div>
                  <p className="font-bold leading-relaxed" >1:00pm Luthier & Exhibitor Showcase Preview Opens</p>
                  <p className="text-lg leading-relaxed" >Exclusive preview of the Summit lutherie showcase just for three-day attendees. Scattered between the Old Town School of Folk Music's two buildings, Summit-goers will find nearly 100 brands and solo builders showcasing the latest in gear, including prototypes and new product launches. You’ll also have ample opportunities to meet some of the legends of the gear industry. Demo/listening rooms are available if you need a quiet space to try things out…or an amp to plug things in. (Both OTSFM buildings) </p>
                </div>

                <div>
                  <p className="font-bold leading-relaxed" >5:00pm - 6:00pm Happy Hour Hangout with William Downie Pinot Noir </p>
                  <p className="text-lg leading-relaxed" >Meet fellow 3-day pass holders and Summit exhibitors at a complimentary wine tasting courtesy of Australia’s William Downie Pinot Noir. Additional beverages are available. (Szold Hall - East)</p>
                </div>
              </div>
              

              <div className="event">
                <h3 className="font-aurochs mt-4 uppercase text-xl sm:text-2xl tracking-wider leading-relaxed underline" >Workshops & Speakers</h3>
                <div>
                  <p className="font-bold leading-relaxed" >1pm From K&F to CBS: The Real Relics of Fender History</p>
                  <p className="text-lg leading-relaxed" >Acclaimed guitar historian Terry Foster shows rare and unseen items from his collection that helped shape the future of electric guitar. Presentation followed by Q&A. (Maurer Hall - West)</p>
                </div>
                
                <div>
                  <p className="font-bold leading-relaxed" >2pm Fats Kaplin</p>
                  <p className="text-lg leading-relaxed" >Acclaimed Nashville musician Fats Kaplin will discuss the instruments, techniques, and musical traditions he has spent a lifetime studying and using on stage and in the studio with artists ranging from John Prine and Mitski to Jack White and the Dead Reckoners. A singular multi-instrumentalist on fiddle, banjo, guitar, ukulele, mandolin, steel guitar and more, Fats has followed an intriguing path through music: years on the road with Roy Book Binder, a long stretch touring the world with Tom Russell, and eventually landing in Nashville, where he has become one of the city’s most respected and in-demand players.</p>
                  <p className="text-lg leading-relaxed" >In this session, Fats demonstrate some of the techniques and sounds that have shaped his playing, and dig into the music that continues to fuel his desire to learn, create, and keep pushing forward. (Szold Hall - East)</p>
                </div>
                

                <div>
                  <p className="font-bold leading-relaxed" >3pm Twenty-One Years of the Fretboard Journal Live Podcast Taping</p>
                  <p className="text-lg leading-relaxed" >A live Fretboard Journal Podcast taping: FJ founder Jason Verlinde shares stories from the frontlines of publishing the world’s most unique guitar publication, what excites him today, and his vision for media going forward. (Maurer Hall - West)</p>
                </div>
                
                <div>
                  <p className="font-bold leading-relaxed" >3pm Jazz duos with Andy Reiss and Jonathan Stout </p>
                  <p className="text-lg leading-relaxed" >Returning Fretboard Summit performer Jonathan Stout is joined by Andy Reiss (Volcano Brothers) for a midday jazz performance. (Szold Hall - East)</p>
                </div>
                
                <div>
                  <p className="font-bold leading-relaxed" >4pm The Working Guitarist's Journey</p>
                  <p className="text-lg leading-relaxed" >Corey Congilio talks about his journey as a pro guitarist and the realities of being a working musician in 2026. He'll discuss the gear that he depends on and how to build a skill set so that one can adapt to any instrument that they are presented with. (Maurer Hall - West)</p>
                </div>
                
                <div>
                  <p className="font-bold leading-relaxed" >4pm Vintage Gibson Acoustics Petting Zoo</p>
                  <p className="text-lg leading-relaxed" >Mark Stutman is the expert on the Gibson L-style acoustic guitar. In this Summit session, he walks us through the quirks and magic found in these instruments. In this hands-on session, participants will also have a rare opportunity to play over a dozen Gibson, Kel Kroydon and other Gibson offshoot instruments from the 1930s. (Szold Hall - East)</p>
                </div>
                
                <div>
                  <p className="font-bold leading-relaxed" >4pm Hands-On Class: Build a Pedal with Summer School's Mark Turley </p>
                  <p className="text-lg leading-relaxed" >Never touched a soldering iron? Not a problem! Summer School Electronics’ founder Mark Turley leads a beginner-friendly class where each participant will build their very own drive pedal. Note: Due to materials cost, a separate admission is required.  (B-4, West)</p>
                  <p>
                    <a href="https://www.summerschoolelectronics.com/shop/p/fretboard-summit-pedal-building-class-amnk8" className="text-center my-10">
                      <button className="tracking-wider text-xl font-aurochs px-2 py-2 uppercase hover:bg-[#4DB3AC] bg-[#2B6F6D] text-[#F0E5D1]">
                      Reserve your spot here
                      </button>
                    </a>
                  </p>
                </div>
              </div>
              
              
              <div className="event">
                <h3 className="font-aurochs mt-4 uppercase text-xl sm:text-2xl tracking-wider leading-relaxed underline" >Featured Concerts </h3>

                <div>
                  <p className="font-bold leading-relaxed underline" >Maurer Hall </p>
                  <p className="font-bold text-lg leading-relaxed" >8pm 
                  Jake Xerxes Fussell &bull;
                  Cameron Knowler</p>
                </div>
                
                <div>
                  <p className="font-bold leading-relaxed underline" >Szold Hall </p>
                  <p className="font-bold text-lg leading-relaxed" >8pm The Volcano Brothers</p>
                  <p className="mb-10">Jazz-fueled Hawaiian music of the 1920s and ‘30s as channeled through Nashville’s Steve Dawson, Fats Kaplin, Richard Bennett, Dave Jacques, and Andy Reiss.</p>
                </div>
              </div>
              <div className="bg-gray-200 h-2 w-full mt-6"></div>
            </div> */}
            



            

            {/* <div className="dayOfWeek tabcontent" id="Friday">
              <h3 className="font-aurochs mt-10 uppercase text-3xl sm:text-4xl tracking-wider leading-relaxed" >Friday, August 21</h3>
              
              <div className="event">
                <div>
                  <p className="italic my-2  text-base" >Check-in begins at 9:30am. </p>
                </div>

                <div>
                  <p className="font-bold leading-relaxed" >10am - 5pm Luthier & Exhibitor Showcase</p>
                  <p className="text-lg leading-relaxed" >The Fretboard Summit features one of the finest collections of handmade, high-end and boutique gear under one roof. Peruse both Old Town School buildings to demo and shop for gear from nearly 100 luthiers, brands, and gear makers. Can't make the rest of the Summit activities? We'll have Lutherie Showcase-only tickets available at the door on Friday and Saturday for those who just want to shop guitars. (Both OTSFM buildings) </p>
                </div>
              </div>
              
              <div className="event">
                <h3 className="mt-4 font-aurochs uppercase text-xl sm:text-2xl tracking-wider leading-relaxed underline" >Fretboard Summit Activities, Workshops, Speakers & More</h3>

                <div>
                  <p className="font-bold leading-relaxed" >8:30am The Fretboard Summit 5k!</p>
                  <p className="text-lg leading-relaxed" >Get up early and put your trainers on for a fun run with a few demented guitar fanatics who also like to jog in circles. Route to be emailed to passholders, weather permitting.</p>
                </div>
                
                <div>
                  <p className="font-bold leading-relaxed" >10am Josh Scott's Blindfold Test</p>
                  <p className="text-lg leading-relaxed" >How well do any of us really know our effects? In this session, JHS founder Josh Scott handpicks a few guitarists roaming the halls of the Summit to see how well they can identify the sounds of a pedal, blindfolded. A Pepsi challenge with fuzz. (Maurer Hall - West)</p>
                </div>
                
                <div>
                  <p className="font-bold leading-relaxed" >10am The Many Faces of Modern Lap-Style Guitar with Steve Dawson</p>
                  <p className="text-lg leading-relaxed" >Steve Dawson has been working in studios and on stage for years as a guitarist in many forms, but the steel guitar has always been his focus. Whether that’s solo gigs on Weissenborn, trad Hawaiian tricone with the Volcano Brothers, overdriven modern sounds on an Asher electro, Jerry Byrd-inspired retro lap steel, or pedal steel, Dawson has always found ways to keep interested in developing as a player and working musician. He'll do an interactive workshop where he plays a bit of those various styles, talks about tone, tunings and technique. (Szold Hall - East)</p>
                </div>
                
                <div>
                  <p className="font-bold leading-relaxed" >11am Dipped in Tone Podcast Live Podcast Taping</p>
                  <p className="text-lg leading-relaxed" >Join Rhett Shull, Zach Broyles (Mythos Pedals) and Addison Sauvan for a rare, live taping of their hit podcast. Expect unique takes on industry news, favorite gear, and more. (Maurer Hall - West)</p>
                </div>

                <div>
                  <p className="font-bold leading-relaxed" >11am In Conversation: Richard Bennett</p>
                  <p className="text-lg leading-relaxed" >Richard Bennett is one of Nashville's most respected guitarists. In this session, he sits down with the Fretboard Journal to discuss decades of playing and performing with the likes of Mark Knopfler, Neil Diamond, Steve Earle, Emmylou Harris, and countless others. We'll talk gear, inspiration, memorable sessions and more. (Szold Hall - East)</p>
                </div>
                
                <div>
                  <p className="font-bold leading-relaxed" >1pm Featured Speaker: Chris Martin IV (Martin Guitars)</p>
                  <p className="text-lg leading-relaxed" >Experience an intimate talk with Chris Martin IV, the 6th-generation owner of the iconic guitar manufacturer, C.F. Martin & Co., as he shares his passion and stories from his over 35 years at the helm of the company. Founded in 1833 in New York City, Martin Guitar has been crafting the world’s finest acoustic guitars for nearly 200 years. (Maurer Hall - West)</p>
                </div>
                
                <div>
                  <p className="font-bold leading-relaxed" >1pm Rare & Vintage Pedals with Chris Vincent (R2R Electric)</p>
                  <p className="text-lg leading-relaxed" >Returning Fretboard Summit guest Chris Vincent and Meg Duffy (Hand Habits) walk us through some of the rarest and most unobtanium pedals they cherish, including a few that have their origins in Chicago. (Szold Hall - East)</p>
                </div>
                
                <div>
                  <p className="font-bold leading-relaxed" >2pm The Fretboard Summit Science Fair </p>
                  <p className="text-lg leading-relaxed" >Every year, we carve out an hour at the Summit to showcase the weekend's gear-making pioneers, experimenters and oddballs. It's an old-school Science Fair patterned after the one you had in Junior High, just for guitar geeks. Any exhibitors or attendees are welcome to bring their creations. Expect some jaw-dropping and some laughs. (Szold Hall - East)</p>
                </div>
                
                <div>
                  <p className="font-bold leading-relaxed" >3pm Pedal Party Clinic with Jessica Dobson of Deep Sea Diver</p>
                  <p className="text-lg leading-relaxed" >Dive into the sonic universe of Deep Sea Diver with an exclusive, behind-the-scenes session led by bandleader and multi-instrumentalist Jessica Dobson. In this dynamic presentation and Q&A, Jessica will explore how guitar textures, tone shaping, and creative effects work together to build entire musical worlds in both songwriting and production. Whether you’re a gear enthusiast, a songwriter, or simply a fan of Deep Sea Diver’s signature sound, join us to uncover the artistry behind their pedal choices, sonic landscapes, and the creative decisions that bring their music to life. (Maurer Hall - West)</p>
                </div>
                
                <div>
                  <p className="font-bold leading-relaxed" >3pm Workshop: Right-hand technique with Jacob Jolliff</p>
                  <p className="text-lg leading-relaxed" >Acclaimed mandolin player Jolliff shares techniques and life hacks that have improved his playing. Great for mandolin players, guitarists or anyone who wants to up their game. (Szold Hall - East)</p>
                </div>
                
                <div>
                  <p className="font-bold leading-relaxed" >4pm Guitar Collecting Roundtable</p>
                  <p className="text-lg leading-relaxed" >Join Emerald City Guitars, The Music Emporium, Mass Street Guitars, and Gearcheck for a deep chat about the perils and joys of amassing a growing guitar collection. (Maurer Hall - West)</p>
                </div>
                
                <div>
                  <p className="font-bold leading-relaxed" >4pm Workshop: Solo Fingerstyle With Shane Parish </p>
                  <p className="text-lg leading-relaxed" >Shane Parish will discuss his process for arranging music from various idioms--jazz, folk, electronica, rock, etc.- for solo fingerstyle guitar. The conversation will touch on ideas about transcription, adaptation, counterpoint, alternate tunings, notation, interpretation, timbre, practice, technique, mechanics, analysis, improvisation, and more! Specific examples from his records Autechre Guitar, Repertoire, and Solo at Cafe OTO, will be cited. Questions and suggestions encouraged. </p>
                </div>
                
                <div>
                  <p className="font-bold leading-relaxed" >4pm Hands-On Class: Build a Pedal with Summer School's Mark Turley (Intermediate Level)</p>
                  <p className="text-lg leading-relaxed" >For those who attended last year’s Summer School class: Here’s your graduate school! Summer School Electronics’ founder Mark Turley leads an intermediate class, where each participant will build their very own pedal. Note: Due to materials cost, a separate admission is required. (B-4, West) </p>
                  <p>
                    <a href="https://www.summerschoolelectronics.com/shop/p/fretboard-summit-pedal-building-class-amnk8" className="text-center my-10">
                      <button className="tracking-wider text-xl font-aurochs px-2 py-2 uppercase hover:bg-[#4DB3AC] bg-[#2B6F6D] text-[#F0E5D1]">
                      Reserve your spot here
                      </button>
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="event">
                <h3 className="font-aurochs mt-4 uppercase text-xl sm:text-2xl tracking-wider leading-relaxed underline" >Featured Concerts </h3>

                <div>
                  <p className="font-bold leading-relaxed underline" >Maurer Hall</p> 
                  <p className="font-bold text-lg leading-relaxed" >8pm
                  Deep Sea Diver (Solo) &bull;
                  Hand Habits </p>
                </div>
                <div>
                  <p className="font-bold leading-relaxed underline" >Szold Hall </p>
                  <p className="font-bold text-lg leading-relaxed" >8pm Special Guest &bull;
                  Michael Daves & Jacob Jolliff </p>
                </div>
              </div>
              <div className="bg-gray-200 h-2 w-full mt-6"></div>
            </div> */}
            
            

            {/* <div className="dayOfWeek tabcontent" id="Saturday">
              <h3 className="font-aurochs mt-10 uppercase text-3xl sm:text-4xl tracking-wider leading-relaxed" >Saturday, August 22</h3>

              <div className="event">
                <div>
                  <p className="italic my-2  text-base" >Check-in begins at 8:30am. </p>  
                </div>
                
                <div>
                  <p className="font-bold leading-relaxed" >10am - 5pm Luthier & Exhibitor Showcase</p>
                  <p className="text-lg leading-relaxed" >The Fretboard Summit features one of the finest collections of handmade, high-end and boutique gear under one roof. Peruse both Old Town School buildings to demo and shop for gear from nearly 100 luthiers, brands, and gear makers. Can't make the rest of the Summit activities? We'll have Lutherie Showcase-only tickets available at the door on Friday and Saturday for those who just want to shop guitars. (Both OTSFM buildings) </p>
                </div>
              </div>
              
              <div className="event">
                <h3 className="font-aurochs mt-4 uppercase text-xl sm:text-2xl tracking-wider leading-relaxed underline" >Fretboard Summit Activities, Workshops, Speakers & More</h3>

                <div>
                  <p className="font-bold leading-relaxed" >9am Bob Taylor: Sustainability and the Future of Guitar Woods. </p>
                  <p className="text-lg leading-relaxed" >The sustainability efforts of Taylor Guitars co-founder Bob Taylor are the stuff of legend. In this extended session, Bob will do a tell-all for guitar lovers, fellow luthiers and industry leaders on the state of affairs of tonewoods, the legislation and permitting that may affect them down the road and how they can make change. Please Note: We're starting this session early (9-10:30am) so all exhibitors can attend before the show opens. (Maurer Hall - West)</p>
                </div>
                
                <div>
                  <p className="font-bold leading-relaxed" >9am Teach Your Children (How a Guitar is Built) – NO PASS REQUIRED, KIDS WELCOME</p> 
                  <p className="text-lg leading-relaxed" >Geared toward kids but open to anyone curious, this workshop aims to demystify the guitar-building process. This is your chance to hear from some experts and then try your hand with the techniques, tools, and materials needed to build a guitar. Barry Grzebik (Grez Guitars), Wade Black (3Bender), Shelby Pollard (Black Bobbin), Benny Monson (Lockhorn Instruments), and Stephen Harrison (educator and hobbyist builder) will share their experiences, answer all your guitar questions, and guide you through some guitar building basics. (Szold Hall - East)</p>
                </div>
                
                <div>
                  <p className="font-bold leading-relaxed" >10:30am History: Martin Mystery Tops with Greig Hutton and TJ Thompson</p>
                  <p className="text-lg leading-relaxed" >Two of the world’s foremost experts – TJ Thompson and Greig Hutton – demystify one of the great mysteries of Martin collectors: The “mystery tops” of 1953 and 1957. It’s a deep dive into arcane guitar history, top woods, what matters and what doesn’t. (Maurer Hall - West)</p>
                </div>
                
                <div>
                  <p className="font-bold leading-relaxed" >11am Songwriting 201 with Sofia Wolfson</p>
                  <p className="text-lg leading-relaxed" >For this year’s Summit, the Fretboard Journal's Sofia Wolfson hosts a brand new songwriting class. She will be focusing on lyrical content and using the guitar as a dynamic vehicle for writing songs. There will also be time for a few students to receive live feedback on their own material. (Szold Hall - East)</p>
                </div>
                
                <div>
                  <p className="font-bold leading-relaxed" >1pm Evan Gluck's Guitar Repair Panel</p>
                  <p className="text-lg leading-relaxed" >Join Evan Gluck (NY Guitar Repair), TJ Thompson, Mark Stutman, Jonathan Scott and James Roadman for a lively session on all things guitar repair. Evan wanted us to call this "Between Two Nibs" so expect some laughs between all the hide glue talk. (Maurer Hall - West)</p>
                </div>
                
                <div>
                  <p className="font-bold leading-relaxed" >1pm Masterclass: The Guitar Styles of Norman Blake with Michael Daves</p>
                  <p className="text-lg leading-relaxed" >Bluegrass musician and historian Michael Daves walks participants through the singular guitar playing of Norman Blake. Included will be a deep dive featuring little-known facts about Blake's famed Sulfur Springs record and the gear that was used. (Szold Hall - East)</p>
                </div>
                
                <div>
                  <p className="font-bold leading-relaxed" >2pm Guitar Design with Grez</p>
                  <p className="text-lg leading-relaxed" >California-based boutique builder Barry Grzebik walks us through his design process, a strategy based on data, creativity, art and guts.
                  (Maurer Hall - West)</p>
                </div>
                
                <div>
                  <p className="font-bold leading-relaxed" >2pm Workshop: Recording Acoustic and Electric Guitars in a Digital Age</p>
                  <p className="text-lg leading-relaxed" >LA-based studio owner and guitarist Eric Garcia (48 Windows) discusses amps, mics, processing gear, A/D converters, and more in this recording session deep dive. (Szold Hall - East) </p>
                </div>
                
                <div>
                  <p className="font-bold leading-relaxed" >3pm World Premiere: JHS's Electro-Harmonix Documentary</p>
                  <p className="text-lg leading-relaxed" >On the heels of his new book, Made On Earth for Rising Stars: The Electro-Harmonix Story, Josh Scott shares the documentary he made on the project on the Summit's big screen. A Q&A will follow. (Maurer Hall - West)</p>
                </div>
                
                <div>
                  <p className="font-bold leading-relaxed" >3pm Workshop: Fourths and Fifths with Gabe Noel</p>
                  <p className="text-lg leading-relaxed" >Upright bassist and now "cell-ar" (cello meets guitar) player Gabe Noel has played on countless pop hits by Sombr, Kendrick Lamar, Harry Styles and others. In this workshop, Noel walks us through the magic found in four-stringed (tenor) instruments and how downsizing may just open up your sonic possibilities. (Szold Hall - East) </p>
                </div>

                <div>
                  <p className="font-bold leading-relaxed" >5pm The 2026 Summit Pinewood Derby</p>
                  <p className="text-lg leading-relaxed" >Each Summit, we close out the festivities with a question: What can some of the world's finest guitarmakers do with a humble Boy Scout pinewood derby car kit? At the Summit Pinewood Derby, we borrow a track from a local troop and see what happens when luthiers get competitive. Wagering encouraged, cold beverages available. (Szold Hall - East)</p>
                </div>
              </div>
              
              <div className="event">
                <h3 className="font-aurochs mt-4 uppercase text-xl sm:text-2xl tracking-wider leading-relaxed underline" >Featured Concerts </h3>
                <div>
                  <p className="font-bold leading-relaxed underline" >Maurer Hall</p>
                  <p className="font-bold leading-relaxed" >8pm The Summit Summit </p>
                  <p className="text-lg leading-relaxed" >A night of instrumental guitar wizards. Hear Twanguero, Shane Parish, Jonathan Stout, Gabe Noel & surprise guests. Available only to passholders.</p>
                </div>
              </div>
              <div className="bg-gray-200 h-2 w-full mt-6"></div>
            </div> */}
            

            {/* <div className="dayOfWeek tabcontent" id="AllWeek">
              <div className="event">
                <h3 className="font-aurochs mt-10 uppercase text-3xl sm:text-4xl tracking-wider leading-relaxed" >All Weekend Long</h3>
                <div>
                  <p className="font-bold leading-relaxed" >The Truth About Vintage Amps Room</p>
                  <p className="text-lg leading-relaxed" >Brian McAlister (vintagetubeamplifiers.com) and the community behind Skip Simmons’ Truth About Vintage Amps podcast share some of their favorite tube amp finds for anyone to try out. Come see what the tube fuss is about or just play a guitar you’ve been admiring at full volume. (E128, East Building)</p>
                </div>

                <div>
                  <p className="font-bold leading-relaxed" >Vintage Martin & Gibson ID with Greig Hutton</p>
                  <p className="text-lg leading-relaxed" >Acclaimed Martin historian Greig Hutton will be back with his database of early Martin and Gibson guitar records, helping you learn the history of your instrument. Just bring a serial number or factory order number! (Lobby, West Building)</p>
                </div>
              </div>
            </div> */}
            
            
            

          </div>
        </div> 

      </main>
      <Footer />
    </>
  );
}
