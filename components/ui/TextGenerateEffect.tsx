"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
  type,
}: {
  words: string;
  className?: string;
  type?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    if (type === "description") {
      return (
        <motion.div ref={scope}>
          {wordsArray.map((word, idx) => {
            return (
              <motion.span
                key={word + idx}
                className={`text-white-200 opacity-0 text-center`}
              >
                {word}{" "}
              </motion.span>
            );
          })}
        </motion.div>
      );
    } else if (type === "name") {
      return (
        <motion.div ref={scope}>
          {wordsArray.map((word, idx) => {
            return (
              <motion.span
                key={word + idx}
                className={`${idx > 1 ? "text-violet-500" : ""} opacity-0`}
              >
                {word}{" "}
              </motion.span>
            );
          })}
        </motion.div>
      );
    }
  };

  return (
    <div className={cn("font-bold text-2xl", className)}>
      <div className="my-4">
        <div className="leading-snug tracking-wide">{renderWords()}</div>
      </div>
    </div>
  );
};
