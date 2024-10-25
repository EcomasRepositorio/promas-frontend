import { motion } from "framer-motion";
import { FC } from "react";
import { fadeIn } from "../utils/motion";
import Image from "next/image";
import Link from "next/link";

interface InsightCardProps {
  imgUrl: string;
  index: number;
}

const GraduateCard: FC<InsightCardProps> = ({ imgUrl, index }) => (
  //<Link href="/graduate">
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    initial="animate"
    className="flex md:flex-col flex-col gap-4 px-2 py-2 mb-8 mx-auto rounded-2xl bg-violet-500/50 hover:cursor-pointer"
    whileHover={{ scale: 1.1, backgroundColor: "purple" }}
    whileTap={{ scale: 1 }}
  >
    <div className="flex justify-center">
      <Image
        src={imgUrl}
        alt="planet-01"
        width={800}
        height={200}
        className="w-auto rounded-3xl p-2 object-cover"
        priority={true}
      />
    </div>
    <div className="w-full flex items-center justify-center px-2">
      <div className="flex-1 flex flex-col max-w-[650px]">
        <Link
          href="/graduate"
          className="uppercase text-xs font-extrabold text-white border p-2 md:mt-2 mt-6 mb-4 w-32 rounded-lg hover:scale-110 duration-200 hover:bg-customPurple ml-[90px]">
          Ver diplomado
        </Link>
      </div>
    </div>
  </motion.div>
  //</Link>
);

export default GraduateCard;
