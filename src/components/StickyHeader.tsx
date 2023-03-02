import React, { useEffect } from "react";

const StickyHeader = () => {
  useEffect(() => {
    const header: HTMLElement = document.querySelector(".leaderboard-table__headers")!;
    const headerOffsetTop = header.offsetTop;

    const stickyHeader = () => {
      if (window.pageYOffset > headerOffsetTop && window.innerWidth > 1200) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };
    window.addEventListener("scroll", stickyHeader);

    return () => window.removeEventListener("scroll", stickyHeader);
  }, []);

  return null;
};

export default StickyHeader;
