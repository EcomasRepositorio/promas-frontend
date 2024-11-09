import { motion } from "framer-motion";
import { FC } from "react";
import { fadeIn } from "../utils/motion";
import Image from "next/image";
import Link from "next/link";

interface InsightCardProps {
  imgUrl: string;
  title: string;
  index: number;
}
const GraduateCard: FC<InsightCardProps> = ({ imgUrl, title, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    initial="animate"
    className="flex md:flex-col flex-col gap- px-2 py-2 mb-20 mx-auto rounded-2xl bg-violet-500/50 hover:cursor-pointer mt-20"
    whileHover={{ scale: 1.1, backgroundColor: "purple" }}
    whileTap={{ scale: 1 }}
    style={{ width: "100%", maxWidth: "450px" }} // Aumenta el tamaño máximo del cuadro
  >
    <div className="flex justify-center">
      <Image
        src={imgUrl}
        alt={title}
        width={900}
        height={400}
        className="w-auto rounded-3xl p-2 object-cover"
        priority={true}
      />
    </div>
    <div className="w-full flex items-center justify-center px-2">
      <div className="flex-1 flex flex-col items-center">
        <Link
          href={`https://api.whatsapp.com/send?phone=51984040264&text=Hola, podría darme información sobre el diplomado${encodeURIComponent(
            title
          )}`}
          target="_blank" // Abre en una nueva pestaña
          rel="noopener noreferrer" // Seguridad adicional
          className="uppercase text-xs font-extrabold text-white border p-3 md:mt-2 mt-6 mb-4 w-40 rounded-lg hover:scale-110 duration-200 hover:bg-customPurple"
        >
          Más información
        </Link>
      </div>
    </div>
  </motion.div>
);

export default GraduateCard;
