import gsap from "gsap";
import React, { useRef } from "react";
import { TiLocation, TiLocationArrow } from "react-icons/ti";

function Feature() {
  return (
    <section className="bg-black pb-52 mx-auto">
      <div className=" mx-auto px-3 md:px-10 container  max-w-7xl  ">
        <div className=" px-5 md:px-24 py-32  ">
          <p className="font-circular-web text-lg text-blue-50">
            Dive into the 'Game of Games' Universe
          </p>
          <p className="font-circular-web text-slate-500 text-xl max-w-md ">
            Immerse yourself in a rich and ever-expanding ecosystem where a
            vibrant array of products converge into an interconnected universe.
          </p>
        </div>
      </div>
      <div className="border-hsla max-w-lg md:max-w-7xl  mx-auto h-96 relative w-full overflow-hidden rounded-md md:h-[65vh] mb-7 hover:scale-[0.95] transition-all duration-700">
        <BentoCard
          src="videos/feature-1.mp4"
          title={
            <>
              Radi<b>n</b>t
            </>
          }
          description="A cross-platform metagame app,turning your activities across Web2 and Web3 games into a rewarding adventure"
          isComingSoon
        />
      </div>
      <div className=" grid h-[135vh] grid-cols-2    grid-rows-2 gap-7 relative max-w-md md:max-w-7xl mx-auto      ">
        <div className="bento-tilt_1 row-span-1 md:row-span-2  md:col-span-1 ">
          <BentoCard
            src={"/videos/feature-2.mp4"}
            title={
              <>
                zig<b>ma</b>
              </>
            }
            description={
              "An anime and getting-inspired NFT collection the IP primed for expansion."
            }
          />
        </div>
        <div className="bg-red-2000 flex flex-col h-full w-full   ">
          <div className="bento-tilt_1 me-0  md:me-0 h-00 col-span-1  bg-red-4000 md:w-[50%] w-full h-full ml-auto">
            <BentoCard
              src={"/videos/feature-4.mp4"}
              title={
                <>
                  az<b>ul</b>
                </>
              }
              description={
                "A cross world AI agent-elevating your gameplay to be more fun and productive."
              }
            />
          </div>
          <div className="bento-tilt_1 row-span-1 ms-32 md:ms-0 md-col-span-1 h-full w-full md:w-[50%] mt-28 md:mt-10  ">
            <BentoCard
              src={"/videos/feature-3.mp4"}
              title={
                <>
                  <b>ne</b>xus
                </>
              }
              description={
                "A gamified social hub, adding a new dimension of play to your identity,Web3 engagment and social interaction."
              }
            />
          </div>
        </div>
        <div className="space-y-4 ">
          <div className="bento-tilt_2  ">
            <div className="flex  size-full  justify-between bg-violet-300 p-1 ">
              <h1 className="bento-title special-font max-w-64 text-black">
                M<b>o</b>re co<b>m</b>ing <br /> s<b>o</b>on!
              </h1>
              <TiLocationArrow className=" self-end scale-[5] m-5 p-0" />
            </div>
          </div>
          <div className="bento-tilt_2 w-full">
            <video
              src="/videos/feature-5.mp4"
              className="size-full object-center "
              autoPlay
              loop
              muted
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const BentoCard = ({ title, description, src, isComingSoon }) => {
  const videoRef = useRef(null);
  const divRef = useRef(null);
  const handleTouch = () => {
    videoRef.current.play();
  };
  const onMosueLeave = () => {
    videoRef.current.pause();
  };
  return (
    <div
      className=" relative size-full cursor-pointer"
      onMouseEnter={handleTouch}
      onMouseLeave={onMosueLeave}
    >
      <video
        ref={videoRef}
        src={src}
        // autoPlay
        // muted
        loop
        className="size-full absolute object-cover object-center top-0 left-0 transition-all duration-500 "
      />
      <div className="absolute z-10 text-white flex flex-col p-5 ">
        <h1 className="bento-title special-font">{title}</h1>
        {description && (
          <p className="max-w-64 text-xs font-roberto-regular mt-3 md:text-bases">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};
export default Feature;
