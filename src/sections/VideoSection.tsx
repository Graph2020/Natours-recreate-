import type { JSX } from "react";

import { MdArrowRightAlt } from "react-icons/md";
import Review from "../components/Review";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const VideoSection = (): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const video = videoRef.current;
    const section = sectionRef.current;

    if (!video || !section) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "90% center",
        scrub: true,

        markers: true,
      },
    });

    video.onloadedmetadata = () => {
      tl.to(
        video,
        {
          currentTime: video.duration,
          duration: 4,
          ease: "power1.inOut",
        },
        "<",
      );
    };
  });
  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden"
    >
      <video
        ref={videoRef}
        src="/img/video.mp4"
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 h-full w-full bg-white/80 shadow-xl"></div>
      <div className="center-elements relative z-20 min-h-screen w-full flex-col gap-10 px-4 py-20">
        <h1 className="main-title">We make people genuinely happy</h1>

        <Review
          imgSrc="/img/nat-8.jpg"
          title="I had the best weekend with my family"
          name="Mary Does"
        />
        <Review
          title="WOW! My life is completely different now"
          name="Jack will"
          imgSrc="/img/nat-9.jpg"
        />

        <a className="main-link center-elements" href="">
          Read all stories{" "}
          <span>
            <MdArrowRightAlt className="mt-0.5 ml-1" />
          </span>
        </a>
      </div>
    </section>
  );
};

export default VideoSection;
