import { useState } from "react";
import Button from "../../button";
import Budget from "./budget";
import logoRed from "../../../assets/logo-truckRED.svg";
import Compliments from "./compliments";

export default function Contact({
  showModal,
  windowHeight,
}: {
  showModal: (text: string | boolean) => void;
  windowHeight: number;
}) {
  const [formType, setFormType] = useState("");
  const [submit, setSubmit] = useState(false);

  const fontSize = windowHeight < 800 ? "text-4xl" : "text-6xl";

  return (
    <div
      className={`fixed top-0 right-0 flex w-full h-full bg-opacity-50 bg-red z-50 ${
        windowHeight < 900
          ? "overflow-y-auto scrollbar scrollbar-thumb-red scrollbar-track-white justify-center"
          : "justify-center items-center"
      } `}
    >
      <div
        className={`flex flex-col items-center justify-center w-4/5 max-h-[95%] p-5 bg-white rounded-3xl relative drop-shadow-[0_0_20px_#fff] sm:text-base md:w-full sm:w-full sm:h-full sm:px-1 sm:pt-10 sm:pb-1 ${
          windowHeight < 900 ? "h-fit" : "max-h-[90%]"
        } `}
      >
        <button
          className="rounded-[100%] border-red border-2 absolute top-4 right-4 text-red hover:bg-red hover:text-white transition-all duration-500 ease-in-out"
          onClick={() => showModal(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        {formType !== "" && (
          <button
            className="rounded-[100%] border-red border-2 absolute top-4 left-4 text-red hover:bg-red hover:text-white transition-all duration-500 ease-in-out"
            onClick={() => setFormType("")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="19 12 5 12"></polyline>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
        )}
        {submit ? (
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/3" src={logoRed} alt="" />
            <h2 className="text-red font-title text-6xl font-bold text-center">
              Obrigado pelo contato! Responderemos o mais rápido o possivel
            </h2>
          </div>
        ) : formType === "budget" ? (
          <Budget setSubmit={setSubmit} windowHeight={windowHeight} />
        ) : formType === "compliments" || formType === "complaints" ? (
          <Compliments setSubmit={setSubmit} formType={formType} />
        ) : (
          <>
            <div className="flex items-center justify-center">
              <img className="w-1/3" src={logoRed} alt="" />
              <h2
                className={`text-red font-title ${fontSize} font-bold text-center`}
              >
                Escolha o tipo de contato que você deseja
              </h2>
            </div>
            <div className="flex items-center justify-evenly gap-10">
              <Button
                text="Orçamento"
                className="bg-red text-white h-12 text-2xl font-bold uppercase px-8 hover:bg-white hover:text-red border-red transition-all duration-500 ease-in-out border-2 border-solid"
                type="button"
                onClick={() => setFormType("budget")}
              />
              <Button
                text="Elogio"
                className="bg-red text-white h-12 text-2xl font-bold uppercase px-8 hover:bg-white hover:text-red border-red transition-all duration-500 ease-in-out border-2 border-solid"
                type="button"
                onClick={() => setFormType("compliments")}
              />
              <Button
                text="Reclamação"
                className="bg-red text-white h-12 text-2xl font-bold uppercase px-8 hover:bg-white hover:text-red border-red transition-all duration-500 ease-in-out border-2 border-solid"
                type="button"
                onClick={() => setFormType("complaints")}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
