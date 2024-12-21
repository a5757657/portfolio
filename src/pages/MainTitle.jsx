import { useEffect, useRef, useState } from "react";
import "./../styles/MainTitle.scss";
import cch from "./../assets/images/cch.png";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import { useSelector } from "react-redux";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, useGSAP);

const MAINTITLE = ["J", "O", "H", "N", "N", "Y", "", "C", "H", "E", "N"];

const MainTitle = () => {
  const mouse = useSelector((state) => state.mouse.position);
  const centerRef = useRef(null);
  const titleRef = useRef(null);
  const center = useRef(null);
  const [animateDone, setAnimateDone] = useState(false);

  const { contextSafe } = useGSAP({ scope: titleRef });

  const calculateCirclePath = () => {
    let dx = 0;
    let dy = 0;
    let rx = 0;
    let ry = 0;
    if (mouse.x > center.current.x) {
      dx = mouse.x - center.current.x > 50 ? 50 : mouse.x - center.current.x;
      rx = dx;
    } else if (mouse.x < center.current.x) {
      dx = mouse.x - center.current.x < -50 ? -50 : mouse.x - center.current.x;
      rx = -dx;
    }
    if (mouse.y > center.current.y) {
      dy = mouse.y - center.current.y > 50 ? 50 : mouse.y - center.current.y;
      ry = dy;
    } else if (mouse.y < center.current.y) {
      dy = mouse.y - center.current.y < -50 ? -50 : mouse.y - center.current.y;
      ry = -dy;
    }
    let theta = Math.atan2(dy, dx);
    let x = rx * Math.cos(theta);
    let y = ry * Math.sin(theta);

    return { x, y };
  };

  const handleSetCenter = () => {
    if (!centerRef.current) return;
    const { x, y, width, height } = centerRef.current.getBoundingClientRect();
    center.current = {
      x: x + width / 2,
      y: y + height / 2,
    };
  };

  const move = () => {
    if (centerRef.current) {
      const targets = gsap.utils.toArray(".move");
      targets.forEach((ele, i) => {
        const xTo = gsap.quickTo(ele, "x", { duration: i * 0.5, ease: "power1" });
        const yTo = gsap.quickTo(ele, "y", { duration: i * 0.5, ease: "power1" });
        const { x, y } = calculateCirclePath();
        xTo(x);
        yTo(y);
      });
    }
  };

  const textIn = contextSafe((e) => {
    if (!animateDone) return;
    gsap.to(e.target, {
      scale: 1.2,
      y: -10,
      filter: "blur(3px)",
      margin: "0px 20px",
      duration: 0.3,
    });
  });
  const textOut = contextSafe((e) => {
    if (!animateDone) return;
    gsap.to(e.target, {
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      margin: 0,
      duration: 0.3,
    });
  });

  useEffect(() => {
    !center.current && handleSetCenter();
    document.addEventListener("scroll", handleSetCenter);
    document.addEventListener("resize", handleSetCenter);
  });

  useEffect(() => {
    move();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mouse]);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        repeat: 0,
        onComplete: () => setAnimateDone(true),
        delay: 1.5
      });
      tl.from("span", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.3,
      })
        .to(
          "span",
          {
            color: "white",
            duration: 0.3,
            stagger: 0.1,
          },
          "<+=0.2"
        )
        .from(".moveBorder", {
          left: "-100%",
          duration: 1
        }, '<+=.5')
        .to(titleRef.current, {
          overflow: "visible",
        });
    },
    { scope: titleRef }
  );

  useGSAP(
    () => {
      gsap.set("img", {
        xPercent: -50,
        yPercent: -50,
        top: "50%",
        bottom: "50%",
      });
    },
    { scope: centerRef }
  );
  useGSAP(
    () => {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: "h1",
          // markers: true,
          start: "top 15%",
          end: "top 0%",
          toggleActions: "play none none reverse",
        },
      });
      tl1.to("h1", {
        yPercent: -100,
        opacity: 0,
        duration: 1,
        ease: "back.inOut",
      });
    },
    { scope: centerRef }
  );
  return (
    <div ref={centerRef} className="MainTitle w-[100%] h-[100vh] flex justify-center items-center relative">
      <div className="title relative flex flex-col gap-4 z-10 ">
        <h1 ref={titleRef} className="h1-title  select-none overflow-hidden after:contents-[''] ">
          {MAINTITLE.map((t, index) => (
            <span
              onMouseEnter={textIn}
              onMouseLeave={textOut}
              style={{ WebkitTextStroke: "2px white" }}
              className={`${t === "" ? "mx-5" : ""} opacity-100 text-transparent NexaHeavy`}
              key={`${t}-${index}`}
            >
              {t}
            </span>
          ))}
          <div className="absolute w-full h-full border-3 top-2 left-0 z-10 pointer-events-none overflow-hidden">
            <div className="moveBorder absolute w-full h-[3px] bg-white bottom-0 left-[101%]"></div>
          </div>
        </h1>
      </div>
      <img draggable={false} src={cch} className="move hidden" />
      <img
        draggable={false}
        src={cch}
        className="move h-[90vh] opacity-30 imgStyle "
      />
      <img
        draggable={false}
        src={cch}
        className="move h-[100vh] opacity-30 imgStyle "
      />
      <img
        draggable={false}
        src={cch}
        className="move h-[110vh] opacity-30 imgStyle "
      />
    </div>
  );
};

export default MainTitle;
