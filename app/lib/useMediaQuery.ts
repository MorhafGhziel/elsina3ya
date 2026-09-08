"use client";

import { useEffect, useState } from "react";

/**
 * SSR-safe media query. Returns `false` on the server and on the first
 * client paint, so callers should treat it as "not yet matched".
 */
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const update = () => setMatches(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, [query]);

  return matches;
}
