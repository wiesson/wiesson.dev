import React from "react";

const items = [
  { class: "h-6", src: "douglas.svg", href: "https://www.douglas.de" },
  { class: "h-7", src: "frontnow.svg", href: "https://www.frontnow.com" },
  {
    class: "h-8",
    src: "take-memories.svg",
    href: "https://www.takememories.com",
  },
  {
    class: "h-12",
    src: "canvas-club-oman.svg",
    href: "https://www.canvascluboman.com",
  },
  { class: "h-5", src: "caroutlet.svg", href: "https://www.caroutlet.ch" },
  { class: "h-7", src: "energybox.svg", href: "https://www.energybox.com" },
  { class: "h-8", src: "sipgate.svg", href: "https://www.sipgate.de" },
  {
    class: "h-10",
    src: "loyd-digital.svg",
    href: "https://www.loyd.digital",
  },
  {
    class: "h-14",
    src: "monday-rocks.svg",
    href: "https://www.monday.rocks",
  },
  {
    class: "h-12",
    src: "84rooms.svg",
    href: "https://www.eightyfourrooms.com",
  },
  {
    class: "h-7",
    src: "juts.svg",
    href: "https://www.juts.ch",
  },
  {
    class: "h-7",
    src: "tigev.svg",
    href: "https://www.tigev.de",
  },
];

const ProjectLogoList = () => {
  return (
    <div className="section--wide grid grid-cols-2 md:grid-cols-4 gap-2">
      {items.map((item) => (
        <div
          key={item.src}
          className="group bg-gray-100 hover:bg-amber-300 dark:bg-gray-300 dark:hover:bg-amber-500 rounded-lg flex items-center justify-center h-32 px-4 transition transition-colors"
        >
          <a
            href={item.href + "?ref=arnewiese.de"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`/assets/customers/${item.src}`}
              alt={item.src.replace(".svg", "")}
              className={`block ${item.class}`}
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectLogoList;
