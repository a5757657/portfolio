import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import LinkIcon from "./LinkIcon";
import TechChip from "./TechChip";
gsap.registerPlugin(ScrollTrigger, useGSAP);

const ProjectCard = ({ project }) => {
  const linkGroup = useRef(null);
  const [tab, setTab] = useState("info");
  const item1 = useRef(null);
  const item2 = useRef(null);
  const item3 = useRef(null);
  const projectCardRef = useRef(null);
  const targetRef = useRef({
    item1: {
      class: "item1",
      center: {
        x: 0,
        y: 0,
      },
    },
    item2: {
      class: "item2",
      center: {
        x: 0,
        y: 0,
      },
    },
    item3: {
      class: "item3",
      center: {
        x: 0,
        y: 0,
      },
    },
  });
  const { contextSafe } = useGSAP({ scope: projectCardRef });

  const blockMoving = contextSafe((percent) => {
    gsap.to(".whiteBlock", {
      xPercent: percent,
      duration: 0.3,
      ease: "power1.inOut",
    });
  });

  useEffect(() => {
    blockMoving(tab === "info" ? 0 : 100);
  }, [blockMoving, tab]);

  useEffect(() => {
    if (item1.current) {
      const { x, y, width, height } = item1.current.getBoundingClientRect();
      const center = {
        x: x + width / 2,
        y: y + height / 2,
      };
      targetRef.current.item1.center = center;
    }
    if (item2.current) {
      const { x, y, width, height } = item2.current.getBoundingClientRect();
      const center = {
        x: x + width / 2,
        y: y + height / 2,
      };
      targetRef.current.item2.center = center;
    }
    if (item3.current) {
      const { x, y, width, height } = item3.current.getBoundingClientRect();
      const center = {
        x: x + width / 2,
        y: y + height / 2,
      };
      targetRef.current.item3.center = center;
    }
  }, [item1, item2, item3]);

  return (
    <div
      ref={projectCardRef}
      className="w-full flex max-w-[1000px] flex-shrink h-full flex-col border-[1px] border-solid border-white"
    >
      <img
        draggable={false}
        src={project.img}
        className="md:h-[400px] h-[200px] sm:h-[300px] object-cover"
      />
      <div className="h-full flex flex-col justify-between">
        <div className="flex-grow ">
          <div className="p-4 text-[28px] sm:text-[28px] md:text-[36px] lg:text-[42px]">{project.title}</div>
          <div className="flex border-[1px] border-solid border-white relative">
            <div
              onClick={() => setTab("info")}
              className={`z-10 button w-1/2 text-center p-2 text-[24px] sm:text-[24px] md:text-[28px] transition ${
                tab === "info" ? "text-black " : ""
              }`}
            >
              簡介
            </div>
            <div
              onClick={() => setTab("spec")}
              className={`z-10 button w-1/2 text-center p-2 transition button text-[24px] sm:text-[24px] md:text-[28px] ${
                tab === "spec" ? "text-black " : ""
              }`}
            >
              使用技術
            </div>
            <div className="whiteBlock absolute z-0 w-1/2 h-full top-0 left-0 bg-white"></div>
          </div>
          {tab === "info" ? (
            <div className="flex-grow p-4 h-full text-[16px] sm:text-[16px] md:text-[24px]">{project.info}</div>
          ) : (
            <div className="p-4 gap-x-8 gap-y-4 text-[16px] sm:text-[16px] md:text-[24px] grid grid-cols-12">
              {project.techs.map((d) => (
                <TechChip key={d.name} data={d} />
              ))}
            </div>
          )}
        </div>
        <div ref={linkGroup} className="flex justify-end gap-0 border-t-[1px] border-solid border-white">
        {project.links.github && <LinkIcon container={linkGroup} customclass="item1" iconType='github' url={project.links.github} />}
        {project.links.demo && <LinkIcon container={linkGroup} customclass="item2" iconType='link' url={project.links.demo} />}
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectCard;
