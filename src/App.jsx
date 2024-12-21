import "./App.scss";
import "./styles/ResetStyle.scss";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { useDispatch } from "react-redux";
import { mouseActions } from "./store/mouse";
import NavBar from "./components/NavBar.jsx";
import MainTitle from "./pages/MainTitle.jsx";
import About from "./pages/About.jsx";
import SideProject from "./pages/SideProject.jsx";
import Work from "./pages/Work";
import Contact from "./pages/Contact.jsx";
import Opening from "./pages/Opening.jsx";
import Footer from "./pages/Footer.jsx";
import AnimatedCursor from "react-animated-cursor";
import { useEffect } from "react";
gsap.registerPlugin(useGSAP);

import { ReactLenis } from "lenis/react";
const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      dispatch(
        mouseActions.setMousePosition({
          x: e.clientX,
          y: e.clientY,
        })
      );
    });

    return () => {
      document.removeEventListener("mousemove", (e) => {
        dispatch(
          mouseActions.setMousePosition({
            x: e.clientX,
            y: e.clientY,
          })
        );
      });
    };
  });

  return (
    <ReactLenis root>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={0.8}
        outerScale={0.4}
        outerAlpha={0}
        showSystemCursor={false}
        hasBlendMode={true}
        outerStyle={{
          border: "1px solid #fff",
        }}
        innerStyle={{
          backgroundColor: "#fff",
        }}
        clickables={[
          {
            target: "img",
            innerSize: 0,
            outerSize: 100,
            color: "255, 255, 255",
            outerAlpha: 1,
            innerScale: 0,
            outerScale: 1,
            outerStyle: {
              border: "none",
              mixBlendMode: "difference",
            },
          },
          {
            target: ".button",
            innerSize: 0,
            outerSize: 10,
            color: "255, 255, 255",
            outerAlpha: 1,
            innerScale: 0,
            outerScale: 1,
            outerStyle: {
              border: "none",
              borderRadius: 0,
              transform: "rotate(45deg)",
              mixBlendMode: "difference",
            },
          },
          {
            target: ".about",
            innerSize: 0,
            outerSize: undefined,
            color: "255, 165, 0",
            outerAlpha: 0.8,
            innerScale: 0,
            outerScale: 2,
            outerStyle: {
              border: "none",
              borderRadius: 0,
              width: 4,
              height: 30,
            },
          },
          {
            target: ".chip",
            innerSize: 0,
            outerSize: 15,
            color: "255, 165, 0",
            outerAlpha: 0.8,
            innerScale: 0,
            outerScale: 1.5,
            outerStyle: {
              border: "none",
            },
          },
        ]}
      />
      <Opening />
      <NavBar />
      <MainTitle />
      <About />
      <Work />
      <SideProject />
      <Contact />
      <Footer />
    </ReactLenis>
  );
};

export default App;
