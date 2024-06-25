"use client"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "./home/page"
import '../mockResizeObserver'
export default function Page() {
  return (
    <div>
      
      <suppressHydrationWarning />
      <Navbar />
      <Home/>
      <Footer />
    </div>
  );
}
