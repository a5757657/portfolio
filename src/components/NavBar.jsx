import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import { useState, useEffect } from "react";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin, useGSAP);

const arr = ["ABOUT", "WORK", "SIDE-PROJECT", "CONTACT ME"];

const NavBar = () => {
  const { contextSafe } = useGSAP();
  const [open, setOpen] = useState(false)

  const scrollTo = contextSafe((id) => {
    gsap.to(window, { scrollTo: { y: `#${id}`, offsetY: 70 }, ease: "power2" });
    closeMenu()
  });

  const toTop = contextSafe(() => {
    gsap.to(window, { scrollTo: { y: 0 }, ease: "power2" });
  });

  const openMenu = contextSafe(() => {
    gsap.from('.menu-text', {
      opacity: 0,
      duration: .3,
      y: -15,
      stagger: 0.1,
    })


    gsap.to('.line1', { rotation: 45, x: '5px', duration: .3  })
    gsap.to('.line3', { rotation: -45, x: '5px', duration: .3  })
    gsap.to('.line2', { opacity: 0, rotation: 90, duration: .3 })

    gsap.to('.menu', {
      height: '164px',
      duration: .3
    })
  });

  const closeMenu = contextSafe(() => {
    gsap.to('.line1', { rotation: 0, x: '0px', duration: .3 })
    gsap.to('.line3', { rotation: 0, x: '0px', duration: .3 })
    gsap.to('.line2', { opacity: 1, rotation: 0, duration: .3 })

    gsap.to('.menu', {
      height: 0,
      duration: .3
    })
  });

  useEffect(() => {
    open ? openMenu() : closeMenu()
  }, [closeMenu, open, openMenu])


  return (
    <nav className="w-full backdrop-blur-md bg-bgcolor/80 fixed top-0 left-0 z-50 ">
      <div className="flex flex-wrap items-center justify-between gap-4 px-4 md:px-8 py-4">
        <div onClick={toTop} className="text-3xl NexaHeavy">
          JOHNNY CHEN
        </div>
        <ul className="hidden gap-6 md:flex">
          {arr.map((str) => (
            <li className="NexaHeavy" onClick={() => scrollTo(str)} key={str}>
              {str}
            </li>
          ))}
        </ul>
        <div onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-2">
          <div className="line1 w-7 h-[2px] origin-left rounded-full bg-white"></div>
          <div className="line2 w-7 h-[2px] rounded-full bg-white"></div>
          <div className="line3 w-7 h-[2px] origin-left rounded-full bg-white"></div>
        </div>

      </div>
      <div className="menu md:hidden w-full h-[0px] overflow-hidden top-[100%]">
        <ul className="flex flex-col p-4 gap-3">
          {arr.map((str) => (
            <li className="text-end menu-text" key={str}>
              <span className="NexaHeavy" onClick={() => scrollTo(str)} >{str}</span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
