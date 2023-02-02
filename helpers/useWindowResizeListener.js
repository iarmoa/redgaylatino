import { useEffect, useState } from "react";

function useWindowResizeListener() {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  function onResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  },[setWidth, setHeight])

  useEffect(() => {
    window.addEventListener("resize", onResize);
    const el = document.querySelectorAll(".dropdown");
    if (width > 991) {
      el.forEach((item) => {
        if (item.children[1]) {
          item.addEventListener("mouseover", (event) => {
            item.children[1].classList.add("fadeIn");
            item.children[1].classList.remove("fadeOut");
            item.children[1].style.display = "block";
          });
          item.addEventListener("mouseout", (event) => {
            item.children[1].classList.add("fadeOut");
            item.children[1].classList.remove("fadeIn");
            item.children[1].style.display = "none";
          });
        }
      });
    }
    return () => window.removeEventListener("resize", onResize);
  }, [width]);
  return {
    width,
    height,
  };
}

export default useWindowResizeListener;
