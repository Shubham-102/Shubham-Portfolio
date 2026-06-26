"use client";

import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045, delayChildren: 0.15 } },
};

const letter: Variants = {
  hidden: { y: "120%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const pop: Variants = {
  hidden: { scale: 0, opacity: 0, rotate: -20 },
  show: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 180, damping: 14, delay: 0.45 },
  },
};

function Word({ text }: { text: string }) {
  return (
    <span className="inline-flex">
      {text.split("").map((ch, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span variants={letter} className="inline-block">
            {ch}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function HeroHeadline({
  wordA,
  wordB,
  photo,
  alt,
}: {
  wordA: string;
  wordB: string;
  photo?: string;
  alt: string;
}) {
  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="show"
      className="mt-9 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-display uppercase leading-[0.9] tracking-tight text-[clamp(2.75rem,11vw,8.5rem)]"
    >
      <Word text={wordA} />
      {photo && (
        <motion.img
          variants={pop}
          src={photo}
          alt={alt}
          className="inline-block aspect-square h-[0.92em] w-[0.92em] rounded-full border-4 border-white object-cover object-top shadow-soft ring-1 ring-line"
        />
      )}
      <Word text={wordB} />
    </motion.h1>
  );
}
