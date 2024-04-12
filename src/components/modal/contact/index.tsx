import { useState } from "react";
import Input from "../../input";
import Button from "../../button";
import { toastfy } from "../../../hooks/toast";
import formImg from "../../../assets/form.svg";

export default function Contact({
  showModal,
}: {
  showModal: (text: string | boolean) => void;
}) {
  const [form, setForm] = useState({
    name: "",
    role: "",
    company: "",
    cnpj: "",
    typeProduct: "",
    email: "",
    phone: "",
    cellphone: "",
    preferenceContact: "",
  });
  const [error, setError] = useState({
    name: false,
    role: false,
    company: false,
    cnpj: false,
    typeProduct: false,
    email: false,
    phone: false,
    cellphone: false,
    preferenceContact: false,
  });

  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const hasError = Object.values(form).some((item) => !item);
    if (hasError) {
      setError((prev) => ({
        ...prev,
        ...Object.fromEntries(
          Object.entries(form)
            .filter(([_, value]) => !value)
            .map(([key]) => [key, true])
        ),
      }));
      toastfy("error", "Preencha todos os campos", 3000);
      return;
    }
    console.log(form);
    setSubmit(true);
  };
  return (
    <div className="fixed top-0 right-0 z-10 flex items-center justify-center w-full h-full bg-opacity-50 bg-red">
      <div className="flex flex-col w-3/5 max-h-80% h-[90%] p-5 bg-white rounded-3xl relative drop-shadow-[0_0_20px_#fff] gap-4">
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
        <h2 className="font-title text-6xl font-bold text-center">
          Pedido de orçamento
        </h2>
        <p className="text-center text-2xl font-text font-bold">
          {submit
            ? "Mensagem enviada com sucesso. Em breve entraremos em contato para falar sobre o seu orçmento"
            : "Favor preencher os dados abaixo, com os dados da sua empresa e produtos que entraremos em contato o mais rapido o possível para realizar o orcamento para fecharmos esta parceria de sucesso."}
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
          action="submit"
          className="flex flex-col gap-4"
        >
          {submit ? (
            <img className="h-1/2" src={formImg} alt="formulario enviado" />
          ) : (
            <>
              <Input
                label="Nome Completo"
                type="text"
                className=""
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                onFocus={() => setError({ ...error, name: false })}
                value={form.name}
                error={error.name}
              />
              <Input
                label="Cargo"
                type="text"
                className=""
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                onFocus={() => setError({ ...error, role: false })}
                value={form.role}
                error={error.role}
              />
              <Input
                label="Nome da empresa"
                type="text"
                className=""
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                onFocus={() => setError({ ...error, company: false })}
                value={form.company}
                error={error.company}
              />
              <Input
                label="CNPJ"
                mask="99.999.999/9999-99"
                type="text"
                className=""
                onChange={(e) => setForm({ ...form, cnpj: e.target.value })}
                onFocus={() => setError({ ...error, cnpj: false })}
                value={form.cnpj}
                error={error.cnpj}
              />
              <Input
                label="Tipo de carga"
                type="text"
                className=""
                onChange={(e) =>
                  setForm({ ...form, typeProduct: e.target.value })
                }
                onFocus={() => setError({ ...error, typeProduct: false })}
                value={form.typeProduct}
                error={error.typeProduct}
              />
              <Input
                label="Email para contato"
                type="text"
                className=""
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                onFocus={() => setError({ ...error, email: false })}
                value={form.email}
                error={error.email}
              />
              <Input
                label="Telefone Fixo"
                mask="(99) 99999-9999"
                type="text"
                className=""
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                onFocus={() => setError({ ...error, phone: false })}
                value={form.phone}
                error={error.phone}
              />
              <Input
                label="Telefone Celular"
                mask="(99) 99999-9999"
                type="text"
                className=""
                onChange={(e) =>
                  setForm({ ...form, cellphone: e.target.value })
                }
                onFocus={() => setError({ ...error, cellphone: false })}
                value={form.cellphone}
                error={error.cellphone}
              />
              <div className="flex items-center justify-center">
                <label className="w-1/6 text-xl" htmlFor="preference">
                  Preferencia de contato
                </label>
                <select
                  className={`border-2 border-solid w-1/2 h-10 rounded-3xl ${
                    error.preferenceContact ? "border-red" : "border-black"
                  }`}
                  name="preference"
                  id="reference"
                  onChange={(e) =>
                    setForm({ ...form, preferenceContact: e.target.value })
                  }
                  value={form.preferenceContact}
                >
                  <option value=""></option>
                  <option value="Telefone Fixo">Telefone Fixo</option>
                  <option value="Telefone Celular">Telefone Celular</option>
                  <option value="Email">Email</option>
                  <option value="Whatsapp">Whatsapp</option>
                </select>
              </div>
              <div className="flex items-center justify-evenly">
                <Button
                  text="Enviar"
                  type="submit"
                  className="bg-red text-white h-12 max-w-[30%] text-2xl font-bold uppercase px-8 hover:bg-white hover:text-red border-red transition-all duration-500 ease-in-out border-2 border-solid"
                />
                <Button
                  text="Limpar"
                  type="reset"
                  onClick={() => {
                    setForm({
                      name: "",
                      role: "",
                      company: "",
                      cnpj: "",
                      typeProduct: "",
                      email: "",
                      phone: "",
                      cellphone: "",
                      preferenceContact: "",
                    });
                    setSubmit(false);
                  }}
                  className="bg-black text-white h-12 max-w-[30%] text-2xl font-bold uppercase px-8 hover:bg-white hover:text-black border-black transition-all duration-500 ease-in-out border-2 border-solid"
                />
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
