import Button from "../button";
import logo from "../../assets/logo-truckWHITE.svg";
import { social } from "../../data/data";

export default function Footer({
  showModal,
}: {
  showModal: (modalName: string | boolean) => void;
}) {
  return (
    <footer
      id="contact"
      className="bg-red w-full h-60 flex items-center justify-center p-8 sm:p-2"
    >
      <div className="h-full w-full sm:hidden">
        <img className="w-52 " src={logo} alt="Logo truckway" />
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-4">
        <div>
          <h2 className="font-text text-center text-3xl font-bold text-white md:text-xl sm:text-base">
            Endereço
          </h2>
          <div className="text-white text-center">
            <p>Estrada dos Casas, 1421 - Bairro dos Casas</p>
            <p>São Bernardo do Campo - SP</p>
            <p>CEP: 09550-007</p>
          </div>
        </div>
        <h2 className="font-text text-3xl font-bold text-white md:text-xl sm:text-base">
          Nos siga nas redes sociais
        </h2>

        <div className="flex items-center justify-center w-full gap-4">
          {social.map(({ name, url, img }, key) => {
            return (
              <a key={key} href={url} target="_blank">
                <img
                  className="rounded-[100%] w-10"
                  src={img}
                  alt={`img ${name}`}
                />
              </a>
            );
          })}
        </div>
      </div>
      <div className="w-full flex items-center justify-center sm:w-fit">
        <Button
          text="Contato"
          type="button"
          onClick={() => {
            showModal("contact");
          }}
          className="bg-white text-red border-white transition-all duration-500 ease-in-out border-2 border-solid hover:bg-red hover:text-white h-12 max-w-[50%] text-2xl font-bold uppercase px-8 sm:text-base sm:px-3 sm:max-w-[100%]"
        />
      </div>
    </footer>
  );
}
