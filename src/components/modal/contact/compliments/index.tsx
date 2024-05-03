import { useCallback, useMemo, useState } from "react";
import Input from "../../../input";
import Button from "../../../button";

export default function Compliments({
  setSubmit,
  formType,
}: {
  setSubmit: any;
  formType: string;
}) {
  const initialFormState = useMemo(
    () => ({
      name: "",
      company: "",
      sector: "",
      message: "",
    }),
    []
  );

  const inputFields = useMemo(
    () => [
      {
        label: "Seu nome, se quiser se identificar",
        type: "text",
        field: "name",
      },
      {
        label: "Nome da empresa, se quiser se identificar",
        type: "text",
        field: "company",
      },
      { label: "Setor que lhe atendeu", type: "text", field: "sector" },
      {
        message: "Mensagem",
        label: "Mensagem",
        type: "textarea",
        field: "message",
      },
    ],
    []
  );
  const [form, setForm] = useState(initialFormState);
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setSubmit(true);
    },
    [form]
  );

  return (
    <>
      <h2 className="font-title text-6xl font-bold text-center">
        Deixe{" "}
        {formType === "compliments"
          ? "seu elogio ao nosso trabalho"
          : "sua reclamação"}
      </h2>
      <p className="text-center text-2xl font-text font-bold leading-none">
        {formType === "compliments"
          ? "Seu elógio é muito importante para nostra equipe e mostra como nosso colaboradores estão apoiando seus projetos."
          : "Levamos a sério todas mensagem que chegam até a gente, queremos sempre melhorar e proporcionar aos nossos clientes o melhor atendimento."}
      </p>

      <form
        onSubmit={handleSubmit}
        action="submit"
        className="flex flex-col gap-4 w-full"
      >
        {inputFields.map(({ label, type, field }) => (
          <Input
            key={field}
            label={label}
            type={type}
            className=""
            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
            value={form[field as keyof typeof form]}
          />
        ))}
        <div className="flex items-center justify-evenly">
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
