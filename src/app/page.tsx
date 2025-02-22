import Image from "next/image"; 
import Navbar from "./scomp/navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
    </div>
  );
}