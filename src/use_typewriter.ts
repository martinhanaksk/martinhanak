import { useEffect, useState } from "react";

const TYPING_SPEED_MS = 40;
const LINE_BREAK_DELAY_MS = 30;

const useTypewriter = (lines: string[]): string => {
  const [typedText, setTypedText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= lines.length) return;

    const currentLine = lines[lineIndex];
    const isLineComplete = charIndex >= currentLine.length;

    const delay = isLineComplete ? LINE_BREAK_DELAY_MS : TYPING_SPEED_MS;

    const timer = setTimeout(() => {
      if (isLineComplete) {
        setTypedText((prev) => prev + "<br>");
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
      } else {
        setTypedText((prev) => prev + currentLine[charIndex]);
        setCharIndex((prev) => prev + 1);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [lineIndex, charIndex, lines]);

  return typedText;
};

export default useTypewriter;