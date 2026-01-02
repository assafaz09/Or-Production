"use client";

import { useCallback } from "react";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";

const CopyLinkButton = ({ pageName = "unknown" }) => {
  const { copy, copied } = useCopyToClipboard(2000);

  const copyToClipboard = useCallback(async () => {
    const ok = await copy(window.location.href);
    if (ok) {
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "CustomEvent", {
          event_name: "CopyLink",
          page_url: window.location.href,
          page_name: pageName,
        });
      }
    }
  }, [copy, pageName]);

  return (
    <button
      onClick={copyToClipboard}
      className="fixed bottom-6 left-6 z-50 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
      title="העתק קישור לעמוד זה"
    >
      {copied ? (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      ) : (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 002 2v8a2 2 0 002 2z"
          />
        </svg>
      )}
    </button>
  );
};

export default CopyLinkButton;
