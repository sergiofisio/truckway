import { useState, useEffect, useRef } from "react";
import { motion, AnimationControls, useAnimation } from "framer-motion";
import Header from "./components/header";
import Presentation from "./components/presentation";
import History from "./components/modal/history";
import Trucks from "./components/trucks";
import TruckModal from "./components/modal/truck";
import Clients from "./components/clients";
import Environement from "./components/environement";
import Footer from "./components/footer";
import Return from "./components/return";
import Contact from "./components/modal/contact";

export default function App() {
  const [activeModal, setActiveModal] = useState<string | boolean>(false);
  const [showReturn, setShowReturn] = useState(false);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const mainRef = useRef<HTMLElement | null>(null);

  const sections = {
    Trucks: { ref: useRef(null), controls: useAnimation(), Component: Trucks },
    Clients: {
      ref: useRef(null),
      controls: useAnimation(),
      Component: Clients,
    },
    Environment: {
      ref: useRef(null),
      controls: useAnimation(),
      Component: Environement,
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      if (mainRef.current) {
        setShowReturn(mainRef.current.scrollTop > 30);
      }
    };

    if (mainRef.current) {
      mainRef.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (mainRef.current) {
        mainRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    const createObserver = (controls: AnimationControls) =>
      new IntersectionObserver(
        ([entry]) =>
          controls.start(entry.isIntersecting ? "visible" : "hidden"),
        { rootMargin: "0px", threshold: 0.1 }
      );

    Object.values(sections).forEach(({ ref, controls }) => {
      const observer = createObserver(controls);

      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [activeModal]);

  const renderModal = () => {
    if (typeof activeModal === "string") {
      switch (activeModal) {
        case "history":
          return (
            <History showModal={setActiveModal} windowHeight={windowHeight} />
          );
        case "contact":
          return (
            <Contact showModal={setActiveModal} windowHeight={windowHeight} />
          );
        default:
          return (
            <TruckModal
              modal={activeModal}
              showModal={setActiveModal}
              windowHeight={windowHeight}
            />
          );
      }
    }

    return null;
  };

  return (
    <main
      ref={mainRef}
      className={`relative w-screen h-screen ${
        activeModal
          ? "overflow-y-scroll scrollbar scrollbar-thumb-red scrollbar-track-red"
          : "overflow-y-scroll scrollbar scrollbar-thumb-red scrollbar-track-white"
      } `}
    >
      <Return
        showReturn={showReturn}
        setShowReturn={setShowReturn}
        mainRef={mainRef}
      />
      <Header />
      <div className="flex flex-col gap-8 justify-center">
        <motion.section className="w-full">
          <Presentation showModal={setActiveModal} />
        </motion.section>
        {Object.entries(sections).map(([key, { ref, controls, Component }]) => (
          <motion.section
            key={key}
            className="border-b-2 border-red border-dotted border-opacity-50 pb-10"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Component showModal={setActiveModal} />
          </motion.section>
        ))}
      </div>
      <Footer showModal={setActiveModal} />
      {renderModal()}
    </main>
  );
}
