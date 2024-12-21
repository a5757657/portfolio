import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import { useSelector } from "react-redux";
import github from "./../assets/icon/github.svg";
import link from "./../assets/icon/link.svg";

gsap.registerPlugin(useGSAP);

const LinkIcon = ({ customclass, container, iconType, url }) => {
  const wrapRef = useRef(null);
  const mouse = useSelector((state) => state.mouse.position);
  const isIn = useRef(false);
  const centerRef = useRef({
    x: 0,
    y: 0,
  });

  const { contextSafe } = useGSAP({ scope: container });

  const handleSetCenter = () => {
    if (wrapRef.current) {
      const { x, y, width, height } = wrapRef.current.getBoundingClientRect();
      const center = {
        x: x + width / 2,
        y: y + height / 2,
      };
      centerRef.current = center;
    }
  };

  const itemMoving = contextSafe(() => {
    if (!isIn.current) return;

    const xTo = gsap.quickTo(`.${customclass}`, "x", { duration: 0.5, ease: "power1" });
    const yTo = gsap.quickTo(`.${customclass}`, "y", { duration: 0.5, ease: "power1" });
    const { x, y } = calculateCirclePath();

    xTo(x);
    yTo(y);
  });
  const handleResetItem = contextSafe(() => {
    gsap.to(`.${customclass}`, {
      x: 0,
      y: 0,
    });
  });

  const calculateCirclePath = () => {
    // 计算相对坐标
    let dx = 0;
    let dy = 0;
    let rx = 0;
    let ry = 0;
    if (mouse.x > centerRef.current.x) {
      dx = mouse.x - centerRef.current.x > 20 ? 20 : mouse.x - centerRef.current.x;
      rx = dx;
    } else if (mouse.x < centerRef.current.x) {
      dx = mouse.x - centerRef.current.x < -20 ? -20 : mouse.x - centerRef.current.x;
      rx = -dx;
    }
    if (mouse.y > centerRef.current.y) {
      dy = mouse.y - centerRef.current.y > 20 ? 20 : mouse.y - centerRef.current.y;
      ry = dy;
    } else if (mouse.y < centerRef.current.y) {
      dy = mouse.y - centerRef.current.y < -20 ? -20 : mouse.y - centerRef.current.y;
      ry = -dy;
    }
    // 计算theta，结果以弧度表示
    let theta = Math.atan2(dy, dx);
    let x = rx * Math.cos(theta);
    let y = ry * Math.sin(theta);

    return { x, y };
  };

  const handleGetSrc = () => {
    switch (iconType) {
      case "github":
        return github;
      case "link":
        return link;
    }
  };

  useEffect(() => {
    itemMoving();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mouse]);

  useEffect(() => {
    handleSetCenter();
  }, [wrapRef]);

  useEffect(() => {
    document.addEventListener("scroll", handleSetCenter);
    return () => {
      document.removeEventListener("scroll", handleSetCenter);
    };
  });

  return (
    <a
      target="_blank"
      href={url}
      onMouseEnter={() => (isIn.current = true)}
      onMouseLeave={() => {
        isIn.current = false;
        handleResetItem();
      }}
      ref={wrapRef}
      className="p-2 md:p-4"
    >
      <img
        draggable={false}
        src={handleGetSrc()}
        className={`${customclass} size-[30px] md:size-[50px] rounded-full object-cover`}
      />
    </a>
  );
};

LinkIcon.propTypes = {
  customclass: PropTypes.string.isRequired,
  container: PropTypes.any,
  iconType: PropTypes.string.isRequired,
};

export default LinkIcon;
