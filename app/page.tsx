import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/hero/Index";
import Graduate from "@/components/homeContent/Index";

export default function Home() {
  return (
    <main className="">
     <div className="">
      <Hero />
      <Graduate />
     </div>
    </main>
  );
}
