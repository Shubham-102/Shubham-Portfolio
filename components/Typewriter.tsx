"use client";

import { useEffect, useState } from "react";

export default function Typewriter({
  words,
  className = "",
}: {
  words: string[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let delay = deleting ? 45 : 90;

    if (!deleting && text === current) {
      delay = 1600; // pause when fully typed
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
      delay = 250;
    }

    const id = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else {
        setText(
          deleting
            ? current.slice(0, text.length - 1)
            : current.slice(0, text.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(id);
  }, [text, deleting, index, words]);

  return (
    <span className={className}>
      <span className="accent-text">{text}</span>
      <span className="ml-0.5 inline-block w-[2px] h-[1em] translate-y-[2px] bg-accent animate-blink" />
    </span>
  );
}
