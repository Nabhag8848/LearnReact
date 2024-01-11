import { useEffect, useRef } from "react";

export function useOutSideClick(close, listenCapturing = true) {
  const ref = useRef();
  useEffect(function () {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        console.log("click");
        close();
      }
    }

    document.addEventListener("click", handleClick, listenCapturing);

    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  });
  return ref;
}
