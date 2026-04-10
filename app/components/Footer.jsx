"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const date = new Date(); // Creates a new Date object representing the current date and time
  const year = date.getFullYear(); // Extracts the full year from the Date object

  return (
    <div className="w-full bg-[#F0E5D1] py-8">
      <div className="flex flex-col">
        <div className="flex justify-center">
          <Image
            src="/FBS_PickFooter.png"
            width={250}
            height={32}
            alt="Fretboard Journal Guitar Pick Logo 2024"
          />
        </div>
        <div className="flex justify-center pt-4">
          <Image
            className="hidden md:flex self-center"
            src="/borderRed1.png"
            alt="border"
            width={200}
            height={5}
          />
          <h4 className="text-2xl sm:text-3xl tracking-wider	uppercase text-[#BE4338] font-handbill font-normal md:mx-4">
            Fretboard summit is brought to you by
          </h4>
          <Image
            className="hidden md:flex self-center"
            src="/borderRed1.png"
            alt="border"
            width={200}
            height={5}
          />
        </div>
        <div className="flex justify-center pt-4 image-container">
          <a className="flex mx-2 self-center image" href="https://www.fretboardjournal.com/" >
            <Image
              className="image"
              src="/FJlogo.png"
              alt="border"
              width={175}
              height={150}
            />
          </a>
          <a className="flex mx-2 sm:ml-12 self-center image" href="https://www.oldtownschool.org/" >
            <Image
              className="image"
              src="/OTS_2L_left_horz_black1.png"
              alt="border"
              width={200}
              height={150}
            />
          </a>
        </div>

        <div className="flex justify-center pt-4">
          <Image
            className="hidden md:flex self-center"
            src="/borderRed2.png"
            alt="border"
            width={350}
            height={5}
          />
          <h4 className="text-3xl tracking-widest	uppercase text-[#BE4338] font-handbill font-normal md:mx-4">
            Sponsors
          </h4>
          <Image
            className="hidden md:flex self-center"
            src="/borderRed2.png"
            alt="border"
            width={350}
            height={5}
          />
        </div>

        <div className="flex justify-center pt-4 image-container">
          <a className="flex mx-2 self-center image-md" href="https://www.henriksenamplifiers.com/" >
            <Image
              className="mix-blend-multiply image-md"
              src="/image5.png"
              alt="Henriksen"
              width={120}
              height={150}
            />
          </a>
          <a className="flex mx-2 sm:ml-12 self-center image-md" href="https://www.martinguitar.com/" >
            <Image
              className="mix-blend-multiply image-md"
              src="/image6.png"
              alt="Martin&amp;Co"
              width={120}
              height={150}
            />
          </a>
          <a className="flex mx-2 sm:ml-12 self-center image-md" href="https://santacruzguitar.com/" >
            <Image
              className="mix-blend-multiply image-md"
              src="/image7.png"
              alt="Santa Cruz"
              width={120}
              height={150}
            />
          </a>
        </div>

        <div className="flex justify-center pt-4 image-container">
          <a className="flex mx-2 self-center image  sm:px-6" href="https://www.collingsguitars.com/" >
            <Image
              className="image"
              src="/image8.png"
              alt="Collings Guitar"
              width={150}
              height={150}
            />
          </a>
          <a className="flex mx-2 sm:ml-4 self-center image" href="https://usa.yamaha.com/products/musical_instruments/guitars_basses/index.html" >
            <Image
              className="r mix-blend-multiply image"
              src="/image9.png"
              alt="Yamaha"
              width={150}
              height={150}
            />
          </a>
          <a className="flex sm:mx-2 sm:px-6 self-center image"href="https://www.taylorguitars.com/" >
            <Image
            className="mix-blend-multiply image"
            src="/Taylor_Web.png"
            alt="Taylor"
            width={100}
            height={150}
            />
          </a>
        </div>

        <div className="flex justify-center pt-4 px-2 image-container">
          <a className="flex sm:mx-2 self-center image-sm" href="https://bourgeoisguitars.com/" >
            <Image
              className="mix-blend-multiply image-sm"
              src="/image10.png"
              alt="Bourgeois"
              width={75}
              height={150}
            />
          </a>
          {/* <a className="flex sm:mx-2 sm:ml-12 self-center image-sm" href="https://rode.com/en-us" >
            <Image
              className="mix-blend-multiply image-sm"
              src="/image11.png"
              alt="Rode"
              width={75}
              height={150}
            />
          </a> */}
          {/* <a className="flex sm:mx-2 sm:ml-12 self-center image-sm" href="https://www.galloupguitars.com/" >
            <Image
              className="mix-blend-multiply image-sm"
              src="/image13.png"
              alt="Galloup"
              width={75}
              height={150}
            />
          </a> */}
          {/* <a className="flex sm:mx-2 sm:ml-12 self-center image-sm" href="https://gallagherguitar.com/" >
            <Image
              className="mix-blend-multiply image-sm"
              src="/GallagherGuitars_Web.png"
              alt="Gallagher Guitars"
              width={75}
              height={150}
            />
          </a> */}
          <a className="flex sm:mx-2 sm:ml-8 self-center image-sm" href="https://boucherguitars.com/" >
            <Image
              className="mix-blend-multiply image-sm"
              src="/boucher_logo.png"
              alt="Boucher Guitars"
              width={75}
              height={150}
            />
          </a>
          <a className="flex sm:mx-2 sm:ml-6 self-center image-sm" href="https://www.northfieldinstruments.com/" >
            <Image
              className="image-sm"
              src="/NorthfieldMandolins_web.png"
              alt="Northfield Mandolins"
              width={75}
              height={150}
            />
          </a>
          <a className="flex mx-1 sm:mx-2 sm:ml-8 self-center image-sm" href="https://www.irisguitarcompany.com/" >
            <Image
              className="mix-blend-multiply image-sm"
              src="/IrisGuitars-web.png"
              alt="Iris Guitars"
              width={60}
              height={150}
            />
          </a>
          <a className="flex mx-1 sm:mx-2 sm:ml-8 self-center image-sm" href="https://beardguitars.com/" >
            <Image
              className="mix-blend-multiply image-sm"
              src="/beard-guitar-logo.png"
              alt="Beard Guitars"
              width={60}
              height={150}
            />
          </a>
          <a className="flex mx-1 sm:mx-2 sm:ml-8 self-center image-sm" href="https://gallagherguitar.com/" >
            <Image
              className="mix-blend-multiply image-sm"
              src="/GallagherGuitars_Web.png"
              alt="Gallagher Guitars"
              width={60}
              height={150}
            />
          </a>
          
        </div>

        <div className="flex justify-center pt-4 px-2 image-container">
          <a className="flex mx-1 sm:mx-2 self-center image-sm" href="https://www.two-rock.com/" >
            <Image
              className="mix-blend-multiply image-sm"
              src="/two-rock-logo-tm.jpg"
              alt="Two-Rock Amplifiers"
              width={60}
              height={150}	
            />
          </a>
          <a className="flex mx-1 sm:mx-2 sm:ml-12 self-center image-sm" href="https://pacificrimtonewoods.com/" >
            <Image
              className="mix-blend-difference image-sm"
              src="/image16.png"
              alt="Pacific Rim Tonewood"
              width={60}
              height={150}
            />
          </a>
          <a className="flex mx-1 sm:mx-2 sm:ml-8 self-center image-sm" href="https://theacousticshoppe.com/" >
            <Image
              className="mix-blend-multiply image-sm"
              src="/AcousticShoppe.png"
              alt="Acoustic Shoppe"
              width={60}
              height={150}
            />
          </a>
          <a className="flex mx-1 sm:mx-2 sm:ml-12 self-center image-sm" href="https://www.lyonhealycorporation.com/brands/" >
            <Image
              className="mix-blend-multiply image-sm"
              src="/LyonHealy.png"
              alt="Lyon & Healy"
              width={60}
              height={150}	
            />
          </a>
          <a className="flex mx-1 sm:mx-2 sm:ml-12 self-center image-sm" href="https://www.daddario.com/" >
            <Image
              className="mix-blend-multiply image-sm"
              src="/image15.png"
              alt="D'Addario"
              width={60}
              height={150}
            />
          </a>
          <a className="flex mx-1 sm:mx-2 sm:ml-12 self-center image-sm" href="https://bovedainc.com/" >
            <Image
              className="mix-blend-multiply image-sm"
              src="/Boveda_FretboardSponsor.png"
              alt="D'Addario"
              width={60}
              height={150}
            />
          </a>
          
        </div>

        {/* <div className="flex justify-center pt-4 px-2 image-container">
          <a className="flex mx-1 sm:mx-2 sm:ml-12 self-center image-sm" href="https://www.daddario.com/" >
            <Image
              className="mix-blend-multiply image-sm"
              src="/image15.png"
              alt="D'Addario"
              width={60}
              height={150}
            />
          </a>
          <a className="flex mx-1 sm:mx-2 sm:ml-12 self-center image-sm" href="https://bovedainc.com/" >
            <Image
              className="mix-blend-multiply image-sm"
              src="/Boveda_FretboardSponsor.png"
              alt="D'Addario"
              width={60}
              height={150}
            />
          </a>
          <a className="flex mx-1 sm:mx-2 self-center image-sm" href="https://www.gibson.com/en-US/" >
            <Image
              className="mix-blend-multiply image-sm"
              src="/Gibson_FretboardSponsor.png"
              alt="Gibson"
              width={60}
              height={150}	
            />
          </a>
          <a className="flex mx-1 sm:mx-2 sm:ml-12 self-center image-sm" href="https://www.yanuziello.com/" >
            <Image
              className="mix-blend-multiply image-sm"
              src="/Yanuziello_FretboardSponsor.png"
              alt="Yanuziello"
              width={60}
              height={150}	
            />
          </a>
        </div> */}
      </div>

      <div className="flex flex-col text-center  py-4">
        <ul className="flex flex-row justify-center text-[#4DB3AC]">
          <Link href="/tickets">
            <li className="sm:mx-2 p-2 uppercase hover:text-[#4DB3AC]">
              Tickets
            </li>
          </Link>
          <Link href="/music">
            <li className="sm:mx-2 p-2 uppercase hover:text-[#4DB3AC]">
              Music
            </li>
          </Link>
          <Link href="/luthiers">
            <li className="sm:mx-2 p-2 uppercase hover:text-[#4DB3AC]">
              Luthiers
            </li>
          </Link>
          <Link href="/chicago">
            <li className="sm:mx-2 p-2 uppercase hover:text-[#4DB3AC]">
              Getting Here
            </li>
          </Link>
        </ul>
        <p className="pt-6 text-slate-700">
          ©{year} Old Town School of Folk Music
        </p>
      </div>
    </div>
  );
};
