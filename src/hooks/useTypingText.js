import { useEffect, useState } from "react";

export const useTypingText = (
  texts,
  { typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000 } = {}
) => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setDisplayText("");
    setTextIndex(0);
    setIsDeleting(false);
  }, [texts]);

  useEffect(() => {
    if (!texts?.length) {
      return undefined;
    }

    const currentText = texts[textIndex] ?? texts[0];
    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
          return;
        }

        window.setTimeout(() => setIsDeleting(true), pauseDuration);
        return;
      }

      if (displayText.length > 0) {
        setDisplayText(displayText.slice(0, -1));
        return;
      }

      setIsDeleting(false);
      setTextIndex((previousIndex) => (previousIndex + 1) % texts.length);
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => window.clearTimeout(timeout);
  }, [deletingSpeed, displayText, isDeleting, pauseDuration, textIndex, texts, typingSpeed]);

  return displayText;
};
