import Image from "next/image";
import { Navbar } from "../components/Navbar.jsx";
import Link from "next/link";
import { Footer } from "../components/Footer.jsx";

export default function Apply() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-r from-[#322D35] to-[#4C454F]">
        <div className=" w-full max-w-5xl sm:flex-col sm:flex p-4 sm:py-14 sm:px-10 bg-[#A4CCDA] text-[#322D25]">

          <h2 className="tracking-wider font-aurochs font-normal uppercase text-5xl text-center ">Exhibitor Application</h2>
          
          <div className="flex flex-col items-center bg-white mt-6">
            
            <div className="w-full sm:w-3/4 p-5  pb-0">

              <p className="text-lg sm:text-xl leading-relaxed mb-4">We are pleased to invite you to participate in the Fretboard Summit at the Old Town School of Folk Music in Chicago. A partnership between the Fretboard Journal and the legendary Old Town School of Folk Music, this event offers luthiers and makers an unmatched opportunity to connect with collectors and buyers as part of a truly unique and exciting new festival — the only one of its kind in the Midwest.</p>
              <p className="text-lg sm:text-xl leading-relaxed mb-4">The festival, which will take place from Aug 23-25, 2024 will offer performances from internationally- acclaimed touring artists, showcases by sponsored artists, workshops on guitar techniques, songwriting and music as well as discussions on lutherie, opportunities to play and purchase bespoke instruments and more. Fretboard Journal will be conducting multiple onsite recordings for its popular podcast series and documenting the show for publication in the Journal.</p>

              <p className="text-lg sm:text-xl leading-relaxed mb-4 font-bold">Please fill out the application form below. For full details, policies and additional information, view the  <a href="https://fretboardsummit.org/media/FretboardSummit_ExhibitorApplication_DetailsGuidelines_2024.pdf" className="text-[#2B6F6D]">Vendor Application Details & Guidelines PDF</a> and other info located below the form on this page. Applications are due January 21, 2024.</p>

              <p className="text-lg sm:text-xl leading-relaxed mb-4 font-bold">Due to space limitations and other factors, not all applications will be accepted. Fees will be refunded in full if your application is not processed.</p>

              
            </div>

            {/* <iframe id="JotFormIFrame-232886121003144" title="Heading"  allowtransparency="true" allowFullScreen={true} allow="geolocation; microphone; camera" src="https://form.jotform.com/232886121003144" className="jotForm" scrolling="no" > </iframe> */}

            {/* <script type="text/javascript" src="https://form.jotform.com/jsform/230125772586055"></script> */}

            <div className="w-full sm:w-1/2 p-5 pb-0 mt-10">
              <div className="block sm:flex">
                <a href="https://fretboardsummit.org/media/FretboardSummit_ExhibitorApplication_DetailsGuidelines_2024.pdf">
                  <button className="tracking-wider text-3xl font-aurochs px-6 py-2 uppercase hover:bg-[#4DB3AC] bg-[#2B6F6D] text-[#F0E5D1]">
                  Vendor Application Details & Guidelines PDF
                  </button>
                </a>

                
              </div>
            </div>
            
            <div className="w-full p-5">
              <div className="w-full sm:flex">
                <div className="w-full sm:w-1/2 p-10  pb-0">
                  <p className="underline mt-4  text-lg leading-relaxed">EXHIBITOR CATEGORIES AND FEES</p>
                
                  <p className="text-lg sm:text-xl leading-relaxed mb-4">
                  Exhibitor, full table: $700<br/>
                  Exhibitor, half table: $400</p>
                  <p className="text-lg sm:text-xl leading-relaxed mb-4">Exhibitor Applications MUST be completely filled out and submitted with non-refundable payment and supporting
                  documentation by January 21, 2024. Old Town School of Folk Music (OTSFM) and the Fretboard Journal are not responsible for applications that do not include the necessary documentation. Payments will be processed at the time an application is submitted.</p>
                  <p className="text-lg sm:text-xl leading-relaxed mb-4">Submission of an Exhibitor Application does not guarantee participation in the event. All applications are reviewed by the organizers and applicants notified of their acceptance. Any exhibitor not approved for the festival will be notified and will receive a full refund of all application and equipment fees.</p>
                  <p className="text-lg sm:text-xl leading-relaxed mb-4">Exhibitors filing late applications and/or payments will be assessed a 25% late fee which is due with the application. Exhibitors with outstanding debt to the OTSFM or Fretboard Journal will not be allowed to participate until outstanding financial obligations are rectified. </p>
                </div>
                <div className="w-full sm:w-1/2 p-10  pb-0">
                  <p className="underline mt-4  text-lg leading-relaxed">WAITLIST POLICY</p>
                
                  <p className="text-lg sm:text-xl leading-relaxed mb-4">
                  The organizers do not assign a Wait List number to artists. We do however, maintain a Wait List of luthiers and continue to extend invitations all the way until the day before festival set-up. If a slot becomes available, an artisan from the Wait List will be selected based on the organizers evaluation and availability. Artists will be contacted as soon as possible when space becomes available.
                  </p>

                  <p className="underline mt-4  text-lg leading-relaxed">CANCELATIONS</p>
                
                  <p className="text-lg sm:text-xl leading-relaxed mb-4">
                  Due to the nature of the festival, we will only refund exhibition fees in the case of force majeure events after March 30, 2024. We apologize in advance that we cannot make exceptions to this policy. All refunds will be minus credit card fees when applicable.</p>
                  <p className="text-lg sm:text-xl leading-relaxed mb-4">
                  With regard to COVID: Should government mandated restrictions on mass gatherings put forth by the city, county, state or federal government agencies or any safety concerns related to the COVID-19 pandemic, result in the cancelation of an in-person event, all booth fees (minus credit card fees when applicable) will be refundable.</p>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-3/4 p-10">
              <p className="underline mt-4  text-lg leading-relaxed" >CONTACT INFO</p>
              <p className="text-lg sm:text-xl leading-relaxed mb-4">For questions and concerns regarding your application or for any concerns before submitting your application, please email <a href="mailto:fretboardsummit@oldtownschool.org">fretboardsummit@oldtownschool.org</a></p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
