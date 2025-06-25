import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";
function About() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 1.5,
        pin: true,
        pinSpacing: true,
      },
    });
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: "0",
    });
  });
  return (
    <div id="#About" className="min-h-screen w-screen overflow-hiddens">
      <div className="mb-8 mt-36 relative flex items-center flex-col gap-5">
        <h2 className=" uppercase font-general text-sm md:text-[10px]  ">
          welcome to zentry
        </h2>
        <AnimatedTitle
          title="Disc<b>o</b>ver the world's
      </br>largest shared <b>a</b>dventure"
          containerClass={"text-center ,text-black mt-5"}
        />

        <div className="about-subtext">
          <p>The Game of Games begins-your life,now an epic MMORPG</p>
          <p className="text-slate-400 text-sm md:text-[19px] text-center">
            Zentry unites the every players from countless games <br /> and
            plateforms, both digital and physcial, into a unfied Play Economy
          </p>
        </div>
      </div>
      <div className="h-dvh w-screen " id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="/img/about.webp"
            alt="about image"
            className="absolute top-0 left-0 size-full"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
