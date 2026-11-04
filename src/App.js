import { useLayoutEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";
import { gsap } from "gsap";
import Footer from "./components/Footer/Footer";
import HomeScreen from "./HomeScreen";
import Topbar from "./components/Topbar/Topbar";


function App() {
  const pageRef = useRef(null);
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useLayoutEffect(() => {
    const motion = gsap.matchMedia(pageRef);
    motion.add("(prefers-reduced-motion: no-preference)", () => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .from(".hero-eyebrow", { autoAlpha: 0, y: 14, duration: 0.45 })
        .from(".i-intro, .i-name, .i-desc", { autoAlpha: 0, y: 20, duration: 0.65, stagger: 0.1 }, "-=0.2")
        .from(".hero-actions", { autoAlpha: 0, y: 12, duration: 0.45 }, "-=0.25")
        .from(".i-img", { autoAlpha: 0, x: 24, duration: 0.8 }, "-=0.55");
    });

    return () => motion.revert();
  }, []);

  return (
    <ReactLenis root options={{ smoothWheel: !prefersReducedMotion, lerp: prefersReducedMotion ? 1 : 0.09 }}>
      <div className="App" id="top" ref={pageRef}>
        <Topbar/>
        <HomeScreen />
        <Footer />
      </div>
    </ReactLenis>
  );
 }

export default App;
