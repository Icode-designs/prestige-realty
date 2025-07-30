import { useEffect, useRef } from "react";
import { signOut } from "@/utils/signout";

const INACTIVITY_LIMIT = 60 * 60 * 1000; // 1 hour in milliseconds

export function useAutoSignOut(user) {
  const timer = useRef();

  useEffect(() => {
    if (!user) return;

    const resetTimer = () => {
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        signOut();
      }, INACTIVITY_LIMIT);
    };

    // List of events that indicate activity
    const events = ["mousemove", "keydown", "mousedown", "touchstart"];

    events.forEach((event) => window.addEventListener(event, resetTimer));
    resetTimer(); // Start timer on mount

    return () => {
      clearTimeout(timer.current);
      events.forEach((event) => window.removeEventListener(event, resetTimer));
    };
  }, [user]);
}
