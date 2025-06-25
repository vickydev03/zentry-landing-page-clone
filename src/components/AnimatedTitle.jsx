import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

function AnimatedTitle({ title, containerClass }) {
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Set initial state
      gsap.set(".animated-word", {
        // opacity: 0,
        transform: "translate3d(0, 50px, 0) rotate(10deg)",
      });

      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      });

      titleAnimation.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0, 0, 0) rotate(0deg)",
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
      });
    }, containerRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`animated-title text-black ${containerClass}`}
    >
      {title.split("</br>").map((line, index) => (
        <div
          key={index}
          className="flex-center gap-2 max-w-full flex-wrap px-10 md:gap-3"
        >
          {line.split(" ").map((word, wordIndex) => (
            <span
              key={wordIndex}
              className="animated-word text-black"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default AnimatedTitle;
