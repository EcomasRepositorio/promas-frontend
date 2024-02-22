import Image from "next/image";
import styles from "./page.module.css";
import Home from "@/components/home/Index";
import Graduate from "@/components/homeContent/Graduate";
import Counter from "@/components/counter/Index";

export default function Main() {
  return (
    <main className="">
     <div className="">
      <Home />
      <Graduate />
      <Counter />
     </div>
    </main>
  );
}
