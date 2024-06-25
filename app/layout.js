import { Inter } from "next/font/google";
import "./globals.css";
import "flowbite";
const inter = Inter({ subsets: ["latin"] });
import '../mockResizeObserver'
export const metadata = {
  title: "Pathak Associates",
  description: "Generated by create next app",
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <head>
      {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"/> */}

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
         <link rel="icon" href="/PI.svg" sizes="any" />
      </head>
      <body className={inter.className}>
        {children}
        {/* <Script src="../path/to/flowbite/dist/flowbite.min.js"></Script> */}
      </body>
    </html>
  );
}