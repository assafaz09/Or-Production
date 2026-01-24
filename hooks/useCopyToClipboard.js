"use client";

import { useState, useCallback, useRef, useEffect } from "react";

export const useCopyToClipboard = (timeoutMs = 2000) => {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef(null);

  const copy = useCallback(
    async (text) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => setCopied(false), timeoutMs);
        return true;
      } catch (err) {
        console.error("copy to clipboard failed", err);
        return false;
      }
    },
    [timeoutMs]
  );

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return { copy, copied };
};

export default useCopyToClipboard;
