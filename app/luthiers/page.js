import Image from "next/image";
import { Navbar } from "../components/Navbar.jsx";
import Link from "next/link";
import { Footer } from "../components/Footer";

export default function Luthiers() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-r from-[#322D35] to-[#4C454F]">
        
        {/* <div className="my-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-20 bg-[#F0E5D1] text-[#322D25]">
          <h2 className="tracking-wider font-aurochs font-normal uppercase text-5xl text-center my-6">
            Sponsor &amp; Partner Applications Now Available
          </h2>
          <p className="text-xl">
            Email: fretboardsummit@oldtownschool.org or follow us on social
            media for more details!
          </p>
          <p className="text-xl mt-2 ">
            Exhibitor and vendor applications now available.{" "}
            <Link href="/apply" className="text-center underline">
              See details.
            </Link>
          </p>

          <Link href="/tickets" className="text-center mt-6">
            <button className="tracking-wider text-3xl font-aurochs px-6 py-2 uppercase hover:bg-[#4DB3AC] bg-[#2B6F6D] text-[#F0E5D1]">
              Buy Tickets
            </button>
          </Link>
        </div> */}

        <div className="my-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-20 bg-[#A4CCDA] text-[#322D25]">

          {/* <h2 className="text-red-500 mb-10">Please Note: This is content from the 2023 Fretboard Summit for informational purposes only. 2024 info available soon.</h2> */}

          {/* <h3 className="font-aurochs mt-2 uppercase text-3xl sm:text-4xl tracking-wider leading-relaxed mb-8" >Please note: this is the 2024 Fretboard Summit exhibitor list, more details about 2025 will be available in Spring 2025 or earlier</h3> */}

          <h2 className="tracking-wider font-aurochs font-normal uppercase text-5xl text-center">
          CONNECT WITH THE WORLD’S GREATEST GUITAR MAKERS AND TAKE HOME YOUR NEW FAVORITE GEAR
          </h2>

          <p className="font-bold text-2xl mt-6">The midwest’s largest and finest gathering of makers, players, and industry experts are here at Fretboard Summit. </p>

          <p className="font-bold text-2xl mt-4">Try out, demo and purchase new, forthcoming and Summit-exclusive gear luthiers, pedal makers, amp, and gear companies. It’s a one-of-a-kind showcase you have to see to believe.
          </p>


          <h3 className="font-bold text-lg leading-relaxed mt-8">2026 Exhibitor List</h3>
          <p className="italic text-sm leading-relaxed">Updated: April 10, 2026</p>
          <p className="italic text-sm leading-relaxed">* asterisk indicates sponsor</p>


          <table className="table-auto">
            <thead>
              <tr>
                <th className="text-left">Exhibitor</th>
                <th className="text-left">Type</th>
                {/* <th className="text-left">Location</th> */}
              </tr>
            </thead>
            <tbody>
              
              <tr>
                <td><Link href="https://www.3bender.com/">3 Bender Guitars</Link></td>
                <td>Electrics</td>
                {/* <td>E330</td> */}
              </tr>
              <tr>
                <td><Link href="http://www.aberdeenguitars.com/">Aberdeen Guitars</Link></td>
                <td>Acoustics, pickups</td>
                {/* <td>E330</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.argonautguitarcomponents.com/">Argonaut Guitar Components</Link></td>
                <td>Components</td>
                {/* <td>E330</td> */}
              </tr>
              <tr>
                <td><Link href="https://theacousticshoppe.com/">The Acoustic Shoppe</Link></td>
                <td>Acoustics</td>
                 {/* <td>W-210</td> */}
              </tr>
              {/* <tr>
                <td><Link href="http://www.americanmusicfurniture.com/">American Music Furniture </Link></td>
                <td>Instrument Storage Furniture</td>
                <td>East Atrium Lobby</td>
              </tr> */}
              {/* <tr>
                <td><Link href="https://www.applegateguitars.com/">Applegate Guitars</Link></td>
                <td>Acoustics</td>
                <td>W-102</td>
              </tr> */}
              {/* <tr>
                <td><Link href="http://baranikguitars.com/">Baranik Guitars</Link></td>
                <td>Electrics</td>
                <td>E326</td>
              </tr> */}
      
              <tr>
                <td><Link href="https://www.bashkinguitars.com/">Bashkin Guitars</Link></td>
                <td>Acoustics</td>
                {/* <td>W-211</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.bayardguitars.com/">Bayard Guitars</Link></td>
                <td>Acoustics</td>
                {/* <td>W-211</td> */}
              </tr>
              <tr>
                <td><Link href="https://beardguitars.com/">Beard Guitars</Link></td>
                <td>Acoustics</td>
                {/* <td>W-211</td> */}
              </tr>
              {/* <tr>
                <td><Link href="https://www.benavidesguitars.com/">Benavides Guitars</Link></td>
                <td>Acoustics</td>
                <td>W-102</td>
              </tr> */}
              <tr>
                <td className="font-bold"><Link href="https://www.bensonamps.com/">Benson Amps*</Link></td>
                <td>Amplifiers</td>
                {/* <td>Various Rooms</td> */}
              </tr>
              
              <tr>
                <td><Link href="https://blackbobbin.com/">Black Bobbin</Link></td>
                <td>Electrics</td>
                {/* <td>E128</td> */}
              </tr>
              <tr>
                <td className="font-bold"><Link href="https://bourgeoisguitars.com/">Bourgeois Guitars*</Link></td>
                <td>Acoustics</td>
                {/* <td>E124</td> */}
              </tr>
              <tr>
                <td><Link href="https://bovedainc.com/">Boveda</Link></td>
                <td>Humidors</td>
                {/* <td>E328</td> */}
              </tr>
              <tr>
                <td className="font-bold"><Link href="https://breedloveguitars.com/">Breedlove Guitars*</Link></td>
                <td>Acoustics</td>
                {/* <td>E328</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.brianwatsonguitars.com/">Brian Watson Guitars</Link></td>
                <td>Acoustics</td>
                {/* <td>W-102</td> */}
              </tr>
              <tr>
                <td><Link href="http://www.brierroadguitars.com/">Brier Road Guitars</Link></td>
                <td>Acoustics, Mandolin, Ukeleles</td>
                {/* <td>W-102</td> */}
              </tr>
              <tr>
                <td><Link href="https://browneamps.com/">Browne Amplification</Link></td>
                <td>Pedal Builder</td>
                {/* <td>E326</td> */}
              </tr>
              <tr>
                <td><Link href="https://bruceguitars.com/">Bruce Guitars</Link></td>
                <td>Acoustics</td>
                {/* <td>W-102</td> */}
              </tr>
              <tr>
                <td><Link href="http://capozzoliguitarcompany.com/">Capozzoli Guitars</Link></td>
                <td>Electric, Bass, Acoustic</td>
                {/* <td>E326</td> */}
              </tr>
              <tr>
                <td><Link href="http://www.cardinalinstruments.com/">Cardinal Instruments</Link></td>
                <td>Electrics</td>
                {/* <td>E330</td> */}
              </tr>
              
              <tr>
                <td><Link href="https://www.cartoucheguitars.com/">Cartouche Guitars</Link></td>
                <td>Electrics</td>
                {/* <td>E128</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.catonguitars.com/">Caton Guitars</Link></td>
                <td>Acoustics</td>
                {/* <td>E128</td> */}
              </tr>
              <tr>
                <td><Link href="https://cedarcreekcases.com/">Cedar Creek Custom Case Shoppe</Link></td>
                <td>Instrument Cases</td>
                {/* <td>E330</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.cedarhollowguitars.com/">Cedar Hollow Guitars</Link></td>
                <td>Acoustics</td>
                {/* <td>E328</td> */}
              </tr>
              <tr>
                <td><Link href="https://cedarmtm.com">Cedar Mountain Mandolins</Link></td>
                <td>Mandolins</td>
                {/* <td>E328</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.cfholcombguitars.com/">C.F. Holcomb Guitars</Link></td>
                <td>Electrics</td>
                {/* <td>E328</td> */}
              </tr>
              <tr>
                <td><Link href="http://chasebliss.com">Chase Bliss</Link></td>
                <td>Pedal Builder</td>
                {/* <td>E326</td> */}
              </tr>
              {/* <tr>
                <td><Link href="https://www.chicagoluthiers.com/">Chicago Luthiers Workshop</Link></td>
                <td>Luthier Info</td>
                <td>Music Store</td>
              </tr> */}
              {/* <tr>
                <td><Link href="https://www.cirrusguitars.com/">Cirrus Guitars</Link></td>
                <td>Acoustics</td>
                <td>W-Harris Gallery</td>
              </tr> */}
              <tr>
                <td className="font-bold"><Link href="https://www.collingsguitars.com/">Collings Guitars*</Link></td>
                <td>Acoustic, Electric, Archtops, Mandolins</td>
                {/* <td>E221</td> */}
              </tr>
              {/* <tr>
                <td><Link href="https://cusackmusic.com/">Cusack Music</Link></td>
                <td>Pedal Builder</td>
                <td>E326</td>
              </tr> */}
              <tr>
                <td className="font-bold"><Link href="https://www.daddario.com/">D&apos;Addario*</Link></td>
                <td>Strings</td>
                {/* <td>no room</td> */}
              </tr>
              <tr>
                <td><Link href="https://dammanninstruments.com/">Dammann Instruments</Link></td>
                <td>Acoustics</td>
                {/* <td>E330</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.elitetonewoods.com/">Elite Tonewoods</Link></td>
                <td>Acoustics</td>
                {/* <td>E330</td> */}
              </tr>
              {/* <tr>
                <td><Link href="https://www.dambrosioguitars.com/">D&apos;Ambrosio Guitars</Link></td>
                <td>Acoustics, hollow body, jazz</td>
                <td>E330</td>
              </tr> */}
              <tr>
                <td><Link href="http://www.epcustompickups.com">EP Custom Pickups</Link></td>
                <td>Pickups</td>
                {/* <td>E330</td> */}
              </tr>

              {/* <tr>
                <td><Link href="http://www.eldoradostraps.com/">El Dorado Guitar Accessories</Link></td>
                <td>Guitar Straps and Accessories</td>
                <td>E326</td>
              </tr> */}

              <tr>
                <td><Link href="http://www.fellowsguitars.com/">Fellows Guitars</Link></td>
                <td>Electrics</td>
                {/* <td>E326</td> */}
              </tr>
              
              {/* <tr>
                <td><Link href="https://flammangguitars.com">Flammang Guitars</Link></td>
                <td>Acoustics</td>
                <td>W-Harris Gallery</td>
              </tr> */}
              <tr>
                <td><Link href="https://gallagherguitar.com/">Gallagher Guitar Co.</Link></td>
                <td>Acoustics</td>
                {/* <td>W-211</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.gillanderguitars.com/">Gillander Guitars</Link></td>
                <td>Acoustics</td>
                {/* <td>W-211</td> */}
              </tr>
              
              <tr>
                <td><Link href="https://www.grezguitars.com">Grez Guitars</Link></td>
                <td>Solid body, Semi solid and Hollow Electric</td>
                {/* <td>E330</td> */}
              </tr>
              <tr>
                <td className="font-bold"><Link href="https://boucherguitars.com/">Guitares Boucher / Boucher Guitars*</Link></td>
                <td>Acoustics</td>
                {/* <td>East Atrium Lobby</td> */}
              </tr>
              <tr>
                <td><Link href="https://en.guitaresjuliensublet.com/">Guitares Julien Sublet</Link></td>
                <td>Acoustics</td>
                {/* <td>E328</td> */}
              </tr>
              {/* <tr>
                <td><Link href="http://www.heinonenguitars.com/">Heinonen Guitars</Link></td>
                <td>Acoustics</td>
                <td>E328</td>
              </tr> */}
              <tr>
                <td className="font-bold"><Link href="https://www.henriksenamplifiers.com/">Henriksen Amplifiers*</Link></td>
                <td>Amplifiers</td>
                {/* <td>E320</td> */}
              </tr>
              <tr>
                <td><Link href="http://holcombguitars.com/">Holcolmb Guitars</Link></td>
                <td>Electrics</td>
                {/* <td>E326</td> */}
              </tr>
              <tr>
                <td><Link href="https://hussanddalton.com/">Huss & Dalton</Link></td>
                <td>Acoustics</td>
                {/* <td>E328</td> */}
              </tr>
              <tr>
                <td><Link href="http://hoffeecases.com">HXC cases</Link></td>
                <td>Cases</td>
                {/* <td>E328</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.irisguitarcompany.com/">Iris Guitars / Circle Strings / Languedoc Guitars / Allied Lutherie</Link></td>
                <td>Acoustics</td>
                {/* <td>E126</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.irvinguitars.com/">Irvin Guitars</Link></td>
                <td>Acoustics</td>
                {/* <td>E126</td> */}
              </tr>
              <tr>
                <td><Link href="http://www.iuliusguitars.com/">Iulius Guitars</Link></td>
                <td>Acoustics</td>
                {/* <td>W-Harris Gallery</td> */}
              </tr>
              <tr>
                <td><Link href="http://www.japarts.ca/">Japarts Japanese Guitar Parts</Link></td>
                <td>Parts</td>
                {/* <td>W-Harris Gallery</td> */}
              </tr>
              <tr>
                <td><Link href="https://jhspedals.info/">JHS</Link></td>
                <td>Pedals</td>
                {/* <td>W-Harris Gallery</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.jrieck.com/">J. Rieck Lutherie</Link></td>
                <td>Acoustics</td>
                {/* <td>W-102</td> */}
              </tr>
              <tr>
                <td><Link href="https://k-lineguitars.com/">K-Line Guitars</Link></td>
                <td>Electrics</td>
                {/* <td>E326</td> */}
              </tr>
              <tr>
                <td><Link href="https://johnkinnairdguitars.com/">Kinnaird Guitars</Link></td>
                <td>Acoustics</td>
                {/* <td>E326</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.kostalguitars.com/">Kostal Guitars</Link></td>
                <td>Acoustics</td>
                {/* <td>E326</td> */}
              </tr>
              {/* <tr>
                <td><Link href="https://www.kollguitars.com/">Koll Guitar Co.</Link></td>
                <td>Electrics</td>
                <td>E326</td>
              </tr> */}
              {/* <tr>
                <td><Link href="http://www.anthonylattanze.com/">Lattanze Guitars</Link></td>
                <td>Acoustics</td>
                <td>W-102</td>
              </tr> */}
              {/* <tr>
                <td><Link href="https://www.lavecchiaguitars.com/">Laveccia Guitars</Link></td>
                <td>Acoustics</td>
                <td>W-102</td>
              </tr> */}
              <tr>
                <td><Link href="http://www.leavittlutherie.com/">Leavitt Stringed Instruments</Link></td>
                <td>Electrics</td>
                {/* <td>E330</td> */}
              </tr>
              <tr>
                <td><Link href="http://leoposch.com/">Leo Posch Guitars</Link></td>
                <td>Acoustics</td>
                {/* <td>E330</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.lhtguitars.com/guitars">LHT Guitars</Link></td>
                <td>Semi Hollow and Hollow body</td>
                {/* <td>E328</td> */}
              </tr>
              <tr>
                <td><Link href="hhttps://lockhorninstruments.org/">Lockhorn Instruments</Link></td>
                <td>Electrics</td>
                {/* <td>E128</td> */}
              </tr>
              <tr>
                <td><Link href="https://loschguitars.com/">Losch Guitars</Link></td>
                <td>Electrics</td>
                {/* <td>E326</td> */}
              </tr>
              <tr>
                <td className="font-bold"><Link href="https://www.lyonhealycorporation.com/brands/">Lyon and Healy*</Link></td>
                <td>Acoustics</td>
                {/* <td>E126</td> */}
              </tr>
              {/* <tr>
                <td><Link href="http://www.madsenamps.com/">Madsen Amplification</Link></td>
                <td>Amplifiers</td>
                <td>E128</td>
              </tr> */}
              {/* <tr>
                <td><Link href="http://www.hozenguitars.com/">Maestro Guitars </Link></td>
                <td>Acoustics</td>
                <td>E328</td>
              </tr> */}
              <tr>
                <td><Link href="https://www.mtstrings.com/">Martignacco and Thomas Strings</Link></td>
                <td>Mandolins</td>
                {/* <td>E326</td> */}
              </tr>
              <tr>
                <td className="font-bold"><Link href="https://www.martinguitar.com/">Martin Guitar Co*</Link></td>
                <td>Acoustics</td>
                <td>E220</td>
              </tr>
              <tr>
                <td><Link href="https://www.michaelkennedyguitars.com/">Michael Kennedy Guitars</Link></td>
                <td>Acoustics</td>
                {/* <td>E326</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.motanderguitars.com">Motander Guitars</Link></td>
                <td>Electrics</td>
                {/* <td>E326</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.instagram.com/mothguitars/?hl=en">Moth Guitars</Link></td>
                <td>Electrics</td>
                {/* <td>W-102</td> */}
              </tr>
              {/* <tr>
                <td><Link href="https://www.muleresophonic.com/">Mule Resophonic Guitars</Link></td>
                <td>Resonator</td>
                <td>W-102</td>
              </tr> */}
              {/* <tr>
                <td><Link href="http://www.nationalguitars.com/">National Reso-Phonic Guitars Inc.</Link></td>
                <td>Resonator Guitars</td>
                <td>E330</td>
              </tr> */}
              <tr>
                <td><Link href="https://www.northwoodsluthiers.com">North Woods Luthiers</Link></td>
                <td>Acoustics</td>
                {/* <td>E330</td> */}
              </tr>
              <tr>
                <td className="font-bold"><Link href="https://www.northfieldinstruments.com/">Northfield Stringed Instruments/ADK Designs*</Link></td>
                <td>Mandolins</td>
                {/* <td>W-212</td> */}
              </tr>
              
              <tr>
                <td><Link href="https://musicstore.oldtownschool.org">Old Town School Music Store</Link></td>
                <td>Gear, Strings & Accessories</td>
                {/* <td>W 1st Floor</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.oldtownschool.org/resourcecenter/">Old Town School of Folk Music Resource Center</Link></td>
                <td>Archives</td>
                {/* <td>W Basement Lobby</td> */}
              </tr>
              <tr>
                <td className="font-bold"><Link href="https://pacificrimtonewoods.com/">Pacific Rim Tonewoods*</Link></td>
                <td>Tonewoods</td>
                {/* <td>E324</td> */}
              </tr>
              {/* <tr>
                <td><Link href="https://www.phoenixguitarco.com/">Phoenix Guitar Co. </Link></td>
                <td>Acoustics</td>
                <td>W-Harris Gallery</td>
              </tr> */}
              <tr>
                <td><Link href="https://www.instagram.com/po_sans_guitars/reels/">Po Sans Guitars</Link></td>
                <td>Acoustic Guitars, ukuleles</td>
                {/* <td>E328</td> */}
              </tr>
              <tr>
                <td><Link href="https://robertrobinsonguitars.com">R. Robinson Guitars</Link></td>
                <td>Acoustics</td>
                {/* <td>E328</td> */}
              </tr>
              <tr>
                <td><Link href="https://ryanguitars.com/">Ryan Guitars</Link></td>
                <td>Acoustics</td>
                {/* <td>E328</td> */}
              </tr>
              {/* <tr>
                <td><Link href="http://www.krautguitars.com/">Raymond Kraut Guitars</Link></td>
                <td>Acoustics</td>
                <td>W-Harris Gallery</td>
              </tr> */}
              {/* <tr>
                <td><Link href="https://robbinsguitar.com/">Robbins Guitar Company</Link></td>
                <td>Acoustics</td>
                <td>W-Harris Gallery</td>
              </tr> */}
              {/* <tr>
                <td><Link href="https://roberto-venn.com/">Roberto Venn School of Lutherie </Link></td>
                <td>Luthier School Info</td>
                <td>E324</td>
              </tr>               */}
              {/* <tr>
                <td><Link href="https://www.ryansukes.com/">Ryan’s Ukes</Link></td>
                <td>Ukuleles</td>
                <td>E330</td>
              </tr> */}
              {/* <tr>
                <td><Link href="https://www.samguidryguitars.com/">Sam Guidry Guitars</Link></td>
                <td>Acoustics</td>
                <td>W-102</td>
              </tr> */}
              <tr>
                <td><Link href="https://www.sailguitars.it/">Sail Guitars</Link></td>
                <td>Acoustics</td>
                {/* <td>E128</td> */}
              </tr>
              <tr>
                <td className="font-bold"><Link href="https://santacruzguitar.com/">Santa Cruz Guitars*</Link></td>
                <td>Acoustics</td>
                {/* <td>E123</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.seufguitars.com/">Seuf Guitars</Link></td>
                <td>Electrics</td>
                {/* <td>E128</td> */}
              </tr>
              {/* <tr>
                <td><Link href="https://shockthefox.com">Shock the Fox</Link></td>
                <td>Electrics</td>
                <td>E128</td>
              </tr> */}
              {/* <tr>
                <td><Link href="https://www.shure.com/en-US">Shure</Link></td>
                <td>Microphones</td>
                <td>E324</td>
              </tr> */}
              {/* <tr>
                <td><Link href="https://www.silktone.org/">Silktone</Link></td>
                <td>Pedal & Amp Builder</td>
                <td>E128</td>
              </tr> */}
              <tr>
                <td><Link href="http://skytopguitars.com/">Skytop Guitars</Link></td>
                <td>Acoustics</td>
                {/* <td>W-102</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.stehrguitars.com/">Stehr Guitars</Link></td>
                <td>Acoustics</td>
                {/* <td>E324</td> */}
              </tr>
              <tr>
                <td><Link href="http://www.stewmac.com/">Stew Mac</Link></td>
                <td>Luthier Supplies</td>
                {/* <td>E324</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.summerschoolelectronics.com/">Summer School Electronics</Link></td>
                <td>Pedal Builder</td>
                {/* <td>E326</td> */}
              </tr>
              <tr>
                <td><Link href="http://www.hobos-g.com/">Takeo Oka/Hobo&apos;s Guitar Works</Link></td>
                <td>Acoustics</td>
                {/* <td>E328</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.heinonenguitars.com/">T. Drew Heinonen Guitars</Link></td>
                <td>Acoustics</td>
                {/* <td>E328</td> */}
              </tr>
              <tr>
                <td className="font-bold"><Link href="https://www.taylorguitars.com/">Taylor Guitars*</Link></td>
                <td>Acoustics</td>
                {/* <td>W-101</td> */}
              </tr>
              <tr>
                <td><Link href="https://fetellierguitars.com/">Tellier Guitars</Link></td>
                <td>Acoustics</td>
                {/* <td>E328</td> */}
              </tr>
              <tr>
                <td><Link href="https://kazourian-luthier.com/">Theo Kazourian Luthier</Link></td>
                <td>Acoustics</td>
                {/* <td>E328</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.tierneyguitars.com/">Tierney Guitar Co.</Link></td>
                <td>Acoustics</td>
                {/* <td>E328</td> */}
              </tr>
              {/* <tr>
                <td><Link href="https://www.thorellguitars.com/">Thorell Guitars</Link></td>
                <td>Acoustics</td>
                <td>W-102</td>
              </tr> */}
              <tr>
                <td><Link href="http://www.tlguitars.com/">Todd Lunneborg Guitars</Link></td>
                <td>Acoustic & Electric</td>
                {/* <td>E328</td> */}
              </tr>
              <tr>
                <td><Link href="http://tonerangerguitars.com/">Tone Ranger Guitars</Link></td>
                <td>Electrics</td>
                {/* <td>E330</td> */}
              </tr>
              <tr>
                <td><Link href="http://www.toneslabs.com/">ToneSlabs Music LLC</Link></td>
                <td>Guitar Picks</td>
                {/* <td>E124</td> */}
              </tr>
              {/* <tr>
                <td><Link href="http://www.wadeguitar.com/">Travis D. Wade Guitars</Link></td>
                <td>Acoustics</td>
                <td>W-102</td>
              </tr> */}
              <tr>
                <td className="font-bold"><Link href="https://www.fretboardjournal.com/podcasts/the-truth-about-vintage-amps-big-index-page/">Truth About Vintage Amps*</Link></td>
                <td>Amplifiers</td>
                {/* <td>W-B1</td> */}
              </tr>
              <tr>
                <td className="font-bold"><Link href="https://www.two-rock.com/">Two-Rock Amplifiers*</Link></td>
                <td>Amplifiers</td>
                {/* <td>E221</td> */}
              </tr>
              <tr>
                <td><Link href="https://sothguitars.com/">Tyson Soth Guitars</Link></td>
                <td>Acoustics</td>
                {/* <td>E128</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.volticelectronicdevices.com/">Voltic Electronic Devices</Link></td>
                <td>Pedal Builder</td>
                {/* <td>E128</td> */}
              </tr>
              {/* <tr>
                <td><Link href="https://www.woolsonsoundcraft.com/">Woolson Soundcraft</Link></td>
                <td>Electric Guitars</td>
                <td>E330</td>
              </tr> */}
              <tr>
                <td className="font-bold"><Link href="https://usa.yamaha.com/products/musical_instruments/guitars_basses/index.html">Yamaha*</Link></td>
                <td>Instruments</td>
                {/* <td>E322</td> */}
              </tr>
              <tr>
                <td><Link href="https://www.zoejetguitars.com/">Zoe Jet Guitars</Link></td>
                <td>Electrics</td>
                {/* <td>W-Harris Gallery</td> */}
              </tr>
              {/* <tr>
                <td><Link href="http://zimnicki.com/">Zimnicki Guitars</Link></td>
                <td>Acoustics</td>
                <td>W-Harris Gallery</td>
              </tr> */}
            </tbody>
          </table>
          

          {/* <p className="text-xl my-6">Note: Most of the luthiers will have guitars available for purchase. Most of these brands are showcasing never-before-seen and new instruments, as well. Nearly all of them will have their head designers/builders present &#40;ie Bob Taylor himself will be attending for Taylor; Steve McCreary will be attending for Collings, etc&#41;. We will have quiet rooms and amp rooms available for demos.</p> */}

        </div>

        {/* <div className="my-10 w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-20 bg-[#F0E5D1] text-[#322D25]">
          <h2 className="tracking-wider font-aurochs font-normal uppercase text-5xl text-center my-6">
          Sealed Bid Auction - 2024
          </h2>

          <h4 className="tracking-wider font-aurochs font-normal uppercase text-3xl mt-4">
          Santa Cruz FS Model
          </h4>
          <p className="text-xl">
          Customized with Koa Binding, Koa backstrip, and Koa Overlay. All other specs are standard to the model and can be found <Link className="text-[#2B6F6D] underline font-bold" href="https://santacruzguitar.com/fingerstyle/ ">here</Link> – The FS is a truly sophisticated instrument that will allow the best possible presentation of your fingerstyle technique. 
          </p>

          <h4 className="tracking-wider text-3xl font-aurochs mt-4 uppercase text-[#2B6F6D]">
            Opening bid: $7,500.00 
          </h4>
          <p className="text-lg mb-4">Bid card available at check-in, auction closes Sunday at noon.</p>

          <Image
              className="flex"
              src="/SantaCruz_FBSRaffle_1600.png"
              alt="border"
              width={1200}
              height={800}
            />

          <hr className="mt-8 h-2 border-solid border-black"/>
          
          <h2 className="tracking-wider font-aurochs font-normal uppercase text-5xl text-center my-4">
          Premium Raffle Items
          </h2>

          <h4 className="tracking-wider font-aurochs font-normal uppercase text-3xl mt-4">
          Yanuziello Electric Mandolin
          </h4>
          <p className="text-xl mb-4">
          One lucky registrant is going to win this eight-string electric mandolin from famed maker Yanuziello Stringed Instruments, just for attending! It&apos;s a $5,500 USD value and we&apos;re floored by Joe&apos;s generosity...and creativity. (Exclusive raffle item for 3-day All-Access pass holders, raffle drawing on Friday.)
          </p>

          <Image
              className="flex"
              src="/Yanuizello_Mando_FBSRaffle_1600.png"
              alt="border"
              width={1200}
              height={800}
            />

          <hr className="mt-8 h-2 border-solid border-black"/>

          <h2 className="tracking-wider font-aurochs font-normal uppercase text-5xl text-center mt-6">Raffle Prizes</h2>
          <p className="text-xl  text-center">Available to All Access pass holders, raffle drawing Sunday at noon</p>

          <h4 className="tracking-wider font-aurochs font-normal uppercase text-3xl mt-6">RØDE Equipment</h4>
          <p className="text-xl">Premium microphones and audio equipment from our friends at Røde, including:<br/>
          PSA1+ - Studio Boom<br/>
          PodMic - Podcast-ready Dynamic Microphone<br/>
          PodMic USB - Podcast-ready Dynamic Microphone<br/>
          NT1 Gen 5 Microphone <br/>
          NT1 Signature Series Blue Microphone<br/>
          NT1 Signature Series Red Microphone</p>


          <h4 className="tracking-wider font-aurochs font-normal uppercase text-3xl my-6">Lifetime Subscription to Fretboard Journal</h4>


          <h4 className="tracking-wider font-aurochs font-normal uppercase text-3xl mt-6">Old Town School of Folk Music Merch Prize Pack</h4>
          <p className="text-xl">A collection of baseball caps, drinking glasses, coffee tumbler, and other fun accessories celebrating the legendary Old Town School of Folk Music.</p>


          <h4 className="tracking-wider font-aurochs font-normal uppercase text-3xl mt-6">Fretboard Summit Merch</h4>
          <p className="text-xl">All the merch available at the 2025 Fretboard Summit!</p>




        </div> */}

      </main>
      <Footer />
    </>
  );
}
