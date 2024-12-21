import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef } from "react";
import self from "./../assets/images/self.jpg";
import cch2 from "./../assets/images/cch2.jpg";
import Title from "../components/Title";

gsap.registerPlugin(ScrollTrigger, TextPlugin, useGSAP);

const About = () => {
  const s2Ref = useRef(null);
  const s2H1Title = useRef(null);
  useGSAP(
    () => {
      const options = {
        // markers: true,
        start: "top 75%",
        end: "top 10%",
        toggleActions: "play none none reverse",
        scrub: false,
      };
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".bio-1",
          ...options,
        },
      });
      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".bio-2",
          ...options,
        },
      });

      tl2
        .from(".bio-1", {
          opacity: 0,
          x: -100,
        })
        .to(".img-1", {
          scale: 1.1,
          ease: "power4",
        });
      tl3
        .from(".bio-2", {
          opacity: 0,
          x: 100,
        })
        .to(".img-2", {
          scale: 1.1,
          ease: "power4",
        });
    },
    { scope: s2Ref }
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: s2H1Title.current,
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
    { scope: s2H1Title }
  );

  return (
    <div ref={s2Ref} className="About container p-10 flex flex-col mx-auto my-[200px]">
      <Title titleRef={s2H1Title} title="ABOUT" />
      <div className="flex flex-col gap-[200px]">
        <div className="bio-1 grid grid-cols-12 w-full lg:gap-12 gap-4 md:gap-6 ">
          <div className="lg:hidden lg:w-full w-full flex items-center h-[350px] md:h-[400px] mx-auto col-span-12 overflow-hidden">
            <img className="w-full h-full object-cover flex-shrink-1 img-1" src={self}></img>
          </div>
          <div className="col-span-12 lg:col-span-8 content-center">
            <p className="about md:text-[20px] text-[16px]">
              出生於台北，大學就讀亞東技術學院－機械工程學系，2021年參加資展國際前端工程師就業養成班，於2022年四月結訓，至今已有兩年以上的開發經驗，目前負責的是美業系統的開發及維護，使用框架為React及Vue，執行過React升版、Vue升版及Material
              UI升版，除了前端，也參與後端API撰寫，使用技術為Node.js、Express、GraphQL。
            </p>
            
          </div>
          <div className="lg:flex hidden col-span-12 lg:col-span-4 items-center overflow-hidden">
            <img className="w-full img-1" src={self}></img>
          </div>
        </div>
        <div className="bio-2 grid grid-cols-12 w-full lg:gap-12 gap-4 md:gap-6 ">
          <div className="lg:w-full w-full flex items-center h-[200px] md:h-[400px] mx-auto lg:col-span-4 col-span-12 overflow-hidden">
            <img className="img-2 w-full flex-shrink-1 " src={cch2}></img>
          </div>
          <div className="col-span-12 lg:col-span-8 content-center">
            <p className="about md:text-[20px] text-[16px]">
              除了工作上的程式開發，也會在leetcode上做程式的練習，與撰寫自己的side-project，也參與The F2E 前端& UI
              修煉精神時光屋活動，精進自己的能力，也在這當中學習到許多新技術運用在工作中（如：GSAP、react-beautiful-dnd...等等），目前正在學習Next.js等等技術。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
