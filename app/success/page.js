import Image from "next/image";
import { Navbar } from "../components/Navbar.jsx";
import Link from "next/link";
import { Footer } from "../components/Footer.jsx";

export default function Success() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-r from-[#322D35] to-[#4C454F]">
        <div className=" w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-10 bg-[#A4CCDA] text-[#322D25]">

          <h2 className="tracking-wider font-aurochs font-normal uppercase text-5xl text-center ">Exhibitor Application</h2>
          
          <div className="flex flex-col items-center bg-white mt-6">
            
            <div className="w-full sm:w-3/4 my-20">


              <div className="w-auto mb-10">
                <h2 className="bg-green-500 p-2 px-10 text-3xl sm:text-4xl text-white text-center">Your application has been submitted, Thank You!</h2>
              </div>
              

                <p className="text-lg sm:text-xl leading-relaxed mb-4">We are working quickly to process applications and will have responses to you as soon as possible. Looking forward to a great Fretboard Summit!</p>

                <p className="text-lg sm:text-xl leading-relaxed mb-4">Email <a href="mailto:fretboardsummit@oldtownschool.org">fretboardsummit@oldtownschool.org</a> for any additional questions or concerns.</p>


              
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
