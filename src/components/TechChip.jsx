import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import PropTypes from "prop-types";
gsap.registerPlugin(useGSAP);

const TechChip = ({ data }) => {
  const techChipRef = useRef(null)
  const circleRef = useRef(null)
  const { contextSafe } = useGSAP({ scope: techChipRef });

  const enter = contextSafe((event) => {
    const { x, y } = techChipRef.current.getBoundingClientRect()
    const mouseX = event.nativeEvent.x
    const mouseY = event.nativeEvent.y
    gsap.set('.circle', {
      left: `${mouseX - x - 10}px`,
      top: `${mouseY - y - 10}px`,
      opacity: 0
    })
    gsap.to('.circle', {
      scale: 20,
      duration: .5,
      opacity: 1
    })
  })

  const leave = contextSafe((event) => {
    const { x, y } = techChipRef.current.getBoundingClientRect()
    const mouseX = event.nativeEvent.x
    const mouseY = event.nativeEvent.y
    gsap.set('.circle', {
      left: `${mouseX - x - 10}px`,
      top: `${mouseY - y - 10}px`,
    })
    gsap.to('.circle', {
      scale: 0,
      duration: .5,
      opacity: 0
    })
  })
  return (
    <a
      ref={techChipRef}
      href={data.link}
      target="_blank"
      className="relative overflow-hidden p-2 h-fit text-center rounded-full md:col-span-4 col-span-6 border-[1px] border-solid"
      onMouseEnter={enter}
      onMouseLeave={leave}
    >
      {data.name}
      <div ref={circleRef} className="circle chip flex size-10 scale-0 left-0 mix-blend-difference top-1/2 rounded-full bg-white absolute"></div>
    </a>
  );
};

TechChip.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TechChip;
