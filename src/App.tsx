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
  const [modal, showModal] = useState<string | boolean>("contact");

  const sectionRefTrucks = useRef(null);
  const sectionRefClients = useRef(null);
  const sectionRefEnvironment = useRef(null);

  const controlsTrucks = useAnimation();
  const controlsClients = useAnimation();
  const controlsEnvironment = useAnimation();

  useEffect(() => {
    const createObserver = (controls: AnimationControls) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            controls.start("visible");
          } else {
            controls.start("hidden");
          }
        },
        {
          rootMargin: "0px",
          threshold: 0.1,
        }
      );
    };

    const observerTrucks = createObserver(controlsTrucks);
    const observerClients = createObserver(controlsClients);
    const observerEnvironment = createObserver(controlsEnvironment);

    if (sectionRefTrucks.current) {
      observerTrucks.observe(sectionRefTrucks.current);
    }

    if (sectionRefClients.current) {
      observerClients.observe(sectionRefClients.current);
    }
    if (sectionRefEnvironment.current) {
      observerEnvironment.observe(sectionRefEnvironment.current);
    }

    return () => {
      observerTrucks.disconnect();
      observerClients.disconnect();
      observerEnvironment.disconnect();
    };
  }, [
    controlsTrucks,
    controlsClients,
    controlsEnvironment,
    sectionRefEnvironment,
    sectionRefTrucks,
    sectionRefClients,
  ]);

  return (
    <main className="relative">
      <Return />
      <Header />
      <div className="flex flex-col gap-8 items-center">
        <motion.section>
          <Presentation showModal={showModal} />
        </motion.section>
        <motion.section
          className="border-b-2 border-red border-dotted border-opacity-50 pb-10"
          ref={sectionRefTrucks}
          initial="hidden"
          animate={controlsTrucks}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Trucks showModal={showModal} />
        </motion.section>
        <motion.section
          className="border-b-2 border-red border-dotted border-opacity-50 pb-10"
          ref={sectionRefClients}
          initial="hidden"
          animate={controlsClients}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Clients />
        </motion.section>
        <motion.section
          className=" pb-10"
          ref={sectionRefEnvironment}
          initial="hidden"
          animate={controlsEnvironment}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Environement />
        </motion.section>
        <Footer showModal={showModal} />
      </div>
      {modal === "history" ? (
        <History showModal={showModal} />
      ) : modal === "contact" ? (
        <Contact showModal={showModal} />
      ) : typeof modal === "string" ? (
        <TruckModal modal={modal} showModal={showModal} />
      ) : null}
    </main>
  );
}
