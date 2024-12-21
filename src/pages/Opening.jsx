import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);

const Opening = () => {
  const OpeningRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.to(".circle", {
        scale: 0,
        ease: "power1.inOut",
        duration: 1,
      }).to(OpeningRef.current, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          OpeningRef.current.style.display = "none";
          document.body.classList.remove("overflow-hidden", "!h-[100vh]");
        },
      });
    },
    { scope: OpeningRef }
  );
  return (
    <div
      ref={OpeningRef}
      className="absolute opacity-1 z-[99] top-0 left-0 w-[100vw] h-[100vh] bg-bgcolor"
    >
      <div className="absolute circle scale-3 size-[3000px] bg-white rounded-[50%] left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

export default Opening;
