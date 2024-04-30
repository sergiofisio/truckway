import { useCallback, useMemo, useState } from "react";
import Input from "../../../input";
import Button from "../../../button";
import { toastfy } from "../../../../hooks/toast";

export default function Budget({ setSubmit }: { setSubmit: any }) {
  const initialFormState = useMemo(
    () => ({
      name: "",
      role: "",
      company: "",
      cnpj: "",
      typeProduct: "",
      email: "",
      phone: "",
      cellphone: "",
      preferenceContact: "",
    }),
    []
  );

  const initialErrorState = useMemo(
    () => ({
      name: false,
      role: false,
      company: false,
      cnpj: false,
      typeProduct: false,
      email: false,
      phone: false,
      cellphone: false,
      preferenceContact: false,
    }),
    []
  );
  const [form, setForm] = useState(initialFormState);
  const [error, setError] = useState(initialErrorState);
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
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
    },
    [form]
  );

  return (
    <>
      <h2 className="font-title text-6xl font-bold text-center">
        Pedido de orçamento
      </h2>
      <p className="text-center text-2xl font-text font-bold">
        Favor preencher os dados abaixo, com os dados da sua empresa e produtos
        que entraremos em contato o mais rapido o possível para realizar o
        orcamento para fecharmos esta parceria de sucesso.
      </p>

      <form
        onSubmit={handleSubmit}
        action="submit"
        className="flex flex-col items-center justify-center gap-4 w-full"
      >
        <div className="flex justify-between gap-4 w-full">
          <Input
            label="Nome Completo"
            type="text"
            className="w-full"
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
        </div>
        <div className="flex justify-between gap-4 w-full">
          <Input
            label="Nome da empresa"
            type="text"
            className="w-full"
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            onFocus={() => setError({ ...error, company: false })}
            value={form.company}
            error={error.company}
          />
          <Input
            label="CNPJ"
            type="text"
            mask="99.999.999/9999-99"
            className="w-1/2"
            onChange={(e) => setForm({ ...form, cnpj: e.target.value })}
            onFocus={() => setError({ ...error, cnpj: false })}
            value={form.cnpj}
            error={error.cnpj}
          />
        </div>
        <Input
          label="Tipo de carga"
          type="text"
          className=""
          onChange={(e) => setForm({ ...form, typeProduct: e.target.value })}
          onFocus={() => setError({ ...error, typeProduct: false })}
          value={form.typeProduct}
          error={error.typeProduct}
        />
        <Input
          label="Email para contato"
          type="email"
          className="w-1/2"
          placeholder="contato@exemplo.com.br"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          onFocus={() => setError({ ...error, email: false })}
          value={form.email}
          error={error.email}
        />
        <div className="flex justify-between gap-4">
          <Input
            label="Telefone Fixo"
            type="text"
            mask="(99) 99999-9999"
            className=""
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            onFocus={() => setError({ ...error, phone: false })}
            value={form.phone}
            error={error.phone}
          />
          <Input
            label="Telefone Celular"
            type="text"
            mask="(99) 99999-9999"
            className=""
            onChange={(e) => setForm({ ...form, cellphone: e.target.value })}
            onFocus={() => setError({ ...error, cellphone: false })}
            value={form.cellphone}
            error={error.cellphone}
          />
        </div>
        <div className="flex items-center justify-center w-full">
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
            onFocus={() => setError({ ...error, preferenceContact: false })}
            value={form.preferenceContact}
          >
            <option value=""></option>
            <option value="Telefone Fixo">Telefone Fixo</option>
            <option value="Telefone Celular">Telefone Celular</option>
            <option value="Email">Email</option>
            <option value="Whatsapp">Whatsapp</option>
          </select>
        </div>
        <div className="flex items-center justify-evenly w-full">
          <Button
            text="Enviar"
            type="submit"
            className="bg-red text-white h-12 max-w-[30%] text-2xl font-bold uppercase px-8 hover:bg-white hover:text-red border-red transition-all duration-500 ease-in-out border-2 border-solid"
          />
          <Button
            text="Limpar"
            type="reset"
            onClick={() => setForm(initialFormState)}
            className="bg-black text-white h-12 max-w-[30%] text-2xl font-bold uppercase px-8 hover:bg-white hover:text-black border-black transition-all duration-500 ease-in-out border-2 border-solid"
          />
        </div>
      </form>
    </>
  );
}
