import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Title from "../components/Title";
import ProjectCard from "../components/ProjectCard";
import { work } from "../static/sideProjectData";
// ScrollTrigger.defaults({ markers: { startColor: "white", endColor: "white" } });
gsap.registerPlugin(ScrollTrigger, useGSAP);

const Work = () => {
  const workRef = useRef(null);
  const titleRef = useRef(null);
  useGSAP(
    () => {
      let sections = gsap.utils.toArray(".panel");
      let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none", // <-- IMPORTANT!
        scrollTrigger: {
          trigger: workRef.current,
          pin: true,
          scrub: 0.1,
          // markers: true,
          //snap: directionalSnap(1 / (sections.length - 1)),
          end: "+=3000",
        },
      });

      const ar = gsap.utils.toArray(".test");

      ar.forEach((e, i) => {
        gsap.to(e, {
          scrollTrigger: {
            // markers: true,
            trigger: e,
            containerAnimation: scrollTween,
            start: "left 70%",
            toggleActions: "play none none reset",
            id: i + 1,
          },
        });
      });
    },
    { scope: workRef }
  );
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          // markers: true,
          start: "top 70%",
          end: "top 10%",
          toggleActions: "play none none reverse",
        },
      });
      tl.from(".span", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        y: 100,
      });
    },
    { scope: titleRef }
  );
  return (
    <>
      <div className="Section2 container p-10 flex flex-col mx-auto my-[200px]">
        <Title titleRef={titleRef} title="Work" />
      </div>

      <div ref={workRef} className="Work flex flex-row w-fit">
        {work.map((project) => (
          <section
            key={project.title}
            className="panel p-[40px] pt-[90px] xs:pt-[90px] sm:pt-[90px] md:pt-[140px] w-[100vw] h-[100vh] text-3xl flex justify-center items-center"
          >
            <ProjectCard project={project} />
          </section>
        ))}
        {/* <section className="panel p-[40px] pt-[90px] xs:pt-[90px] sm:pt-[90px] md:pt-[140px] w-[100vw] h-[100vh] text-3xl flex justify-center items-center">
          <ProjectCard />
        </section>
        <section className="panel p-[40px] pt-[90px]  xs:pt-[90px] sm:pt-[90px] md:pt-[140px] w-[100vw] h-[100vh] text-3xl flex justify-center items-center">
          <ProjectCard />
        </section>
        <section className="panel p-[40px] pt-[90px]   xs:pt-[90px] sm:pt-[90px] md:pt-[140px] w-[100vw] h-[100vh] text-3xl flex justify-center items-center">
          <ProjectCard />
        </section> */}
      </div>
    </>
  );
};

export default Work;
