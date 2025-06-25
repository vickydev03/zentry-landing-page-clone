import React, { useEffect, useReducer, useRef, useState } from "react";
import Button from "./Button";
import { Howl } from "howler";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import gsap from "gsap";
import MobileNav from "./MobileNav";
function NavBar() {
  const { x, y } = useWindowScroll();
  console.log("ajay", x, y);

  const [isPlay, setIsPlay] = useState(false);
  const [scrollLast, setScrollLast] = useState();
  const [isVisible, setIsVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const soundRef = useRef(
    new Howl({
      src: ["/audio/loop.mp3"],
      html5: true,
    })
  );
  const handleMusicPlay = () => {
    if (isPlay) {
      soundRef.current.pause();
      setIsPlay(false);
    } else {
      soundRef.current.play();
      setIsPlay(true);
    }
  };
  const navRef = useRef(null);

  useEffect(() => {
    if (y === 0) {
      setIsVisible(true);

      navRef.current.classList.remove("floating-nav");
    } else if (y > scrollLast) {
      setIsVisible(false);

      navRef.current.classList.add("floating-nav");
    } else if (y < scrollLast) {
      setIsVisible(true);
      navRef.current.classList.add("floating-nav");
    }
    console.log(y, scrollLast);

    setScrollLast(y);
  }, [y, scrollLast]);

  // useEffect(() => {
  //   gsap.to(navRef.current, {
  //     // y: isVisible ? 0 : -100,
  //     opacity: !isVisible ? 0 : 1,
  //     duration: 0.2,
  //   });
  // }, [isVisible]);

  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];
  return (
    <div className=" relative overflwo-hidden">
      {open && <MobileNav item={navItems} onClose={()=>setOpen(false)} />}
      <div
        ref={navRef}
        className="bg-transparent z-40  inset-x-0 border-none top-4 h-16 transition-all sm:inset-x-6 fixed    "
      >
        <header className="absolute top-1/2 w-full -translate-y-1/2">
          {!open && (
            <nav className="flex justify-between items-center size-full p-4">
              <div className="flex items-center gap-7 ">
                <img src="img/logo.png" alt="logo" className="w-10" />
                <Button
                  tittle="Product"
                  id={"product"}
                  rightIcon={<TiLocationArrow />}
                  containerClass="bg-blue-75  flex rounded-full !py-2    !px-10 "
                />
                <Button
                  tittle="whitePaper"
                  id={"whiitePaper"}
                  containerClass="bg-blue-75 items-center  flex rounded-full !py-2   !px-10 "
                />
              </div>
              <div className="hidden navItems text-blue-100 md:flex items-center gap-4 font-robert-medium">
                {navItems.map((items, i) => (
                  <a
                    key={i}
                    href={`#${items}`}
                    className="inline-flex gap-1 items-center text-xs nav-hover-btn  "
                  >
                    <span>{items.toUpperCase()}</span>
                    <span>{<TiLocationArrow />}</span>
                  </a>
                ))}
                <button
                  onClick={handleMusicPlay}
                  className="ml-10 flex-center items-center space-x-0.5 w-full  p-2"
                >
                  {[1, 2, 3, 4].map((e) => (
                    <div
                      key={e}
                      className={`indicator-line ${isPlay && "active"} `}
                      style={{ animationDelay: `${0.1 * e}s` }}
                    />
                  ))}
                </button>
              </div>
              <button
                className="bg-red-2000 md:hidden fill-white text-white"
                onClick={() => setOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 fill-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </nav>
          )}
        </header>
      </div>
    </div>
  );
}

export default NavBar;
