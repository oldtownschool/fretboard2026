import "./globals.css";
// import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";


// const inter = Inter({ subsets: ['latin'] })

const aurochs = localFont({
  preload: true,
  display: "swap",
  src: [
    {
      path: "../public/fonts/Aurochs/Aurochs-Light.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Aurochs/Aurochs-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Aurochs/Aurochs-Heavy.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-aurochs",
});
const handbill = localFont({
  preload: true,
  display: "swap",
  src: [
    {
      path: "../public/fonts/Handbill/Handbill-Condensed.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Handbill/Handbill-Grotesk.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Handbill/Handbill-Slab.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-handbill",
});

export const metadata = {
  title: "Fretboard Summit 2025",
  description:
    "A THREE-DAY GUITAR FESTIVAL FROM THE FRETBOARD JOURNAL AND OLD TOWN SCHOOL",
};

const GTM_ID = "GTM-TXTV4QHK";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${aurochs.variable} ${handbill.variable}`}>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
    </Script>
      <body>{children}</body>
    </html>
  );
}
