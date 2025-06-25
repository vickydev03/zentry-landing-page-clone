import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocation, TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
function Hero() {
  gsap.registerPlugin(ScrollTrigger);

  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadedVideo, setLoadedVideo] = useState(0);
  const nextVideoRef = useRef(null);
  const totalVideos = 4;
  // console.log(loadedVideo, "ajay");

  const upComingVideoIndex = (currentIndex % totalVideos) + 1;
  // if (currentIndex == totalVideos) setCurrentIndex(1);

  const handleNextVideo = () => {
    setHasClicked(true);
    if (currentIndex == totalVideos) setCurrentIndex(1);

    // setCurrentIndex((e) => e + 1);
    setCurrentIndex(upComingVideoIndex);
  };

  const getVideoSource = (index) => {
    return `/videos/hero-${index}.mp4`;
  };

  useEffect(() => {
    if (loadedVideo == totalVideos - 1) setLoading(false);
  }, [loadedVideo]);
  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });

        gsap.from("#next-video", {
          transformOrigin: "center center",
          scale: 0.5,
          width: "100%",
          height: "100%",
          duration: 1.5,
          zIndex: 40,
          ease: "power1.inOut",
          onStart: () => nextVideoRef.current.play(),
        });
        gsap.to("#next-video", {
          scale: 1,
          duration: 1,
          ease: "power1.in",
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      // borderRadius: "0 0 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0 100%)",

      ease: "power1.inOut",
      duration: 1.5,
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="h-dvh w-screen overflow-x-hidden relative">
      {loading && (
        <div className="bg-blue-75 z-[100] flex-center absolute h-dvh w-screen overflow-hidden ">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}
      <div
        id="video-frame"
        className=" relative z-10 h-dvh w-screen overflow-hidden bg-blue-75 rounded-lg"
      >
        <div>
          <div className=" mask-clip-path absolute absolute-center z-50 size-64 cursor-pointer scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
            <div onClick={handleNextVideo}>
              <video
                ref={nextVideoRef}
                src={getVideoSource(upComingVideoIndex)}
                autoPlay
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={() => setLoadedVideo(currentIndex + 1)}
              />
            </div>
          </div>
          <video
            ref={nextVideoRef}
            src={getVideoSource(currentIndex)}
            className="size-64 invisible absolute absolute-center w-full h-screen z-20 object-cover object-center"
            autoPlay
            loop
            muted
            id="next-video"
            onLoadedData={() => setLoadedVideo((e) => e + 1)}
          />
          <video
            src={getVideoSource(currentIndex)}
            className="size-full absolute top-0 left-0 absoluete-center z-20 object-cover object-center"
            autoPlay
            loop
            muted
            id="video"
          />
        </div>
        <h1 className="  absolute bottom-5  right-5  z-40  text-blue-75 font-bold  special-font  hero-heading">
          g<b>a</b>ming
        </h1>
        <div className="absolute z-40 top-0 left-0 text-blue-100 ">
          <div className="mt-24 px-5 sm:px-10 ">
            <h1 className="hero-heading special-font ">
              redefi<b>n</b>e
            </h1>
            <p className="max-w-64 text-blue-100 font-robert-regular text-lg mb-5">
              Enter the Metagame <br /> Unleash the play Economy
            </p>
            <Button
              id="watch-trailer"
              tittle={"Watch Trailer"}
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>
      <h1 className="  absolute bottom-5 right-5  z-2  text-black font-bold  special-font  hero-heading">
        g<b>a</b>ming
      </h1>
    </div>
  );
}

export default Hero;
