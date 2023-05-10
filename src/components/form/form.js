import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

import { info } from "../../../info";
import { emailRegExp } from "../../../utils/formValidators";

import fbEvent from "../../services/fbEvents";
import SaveOnGSheet from "../../services/googleSheetDB";
import SendMail from "../../services/mail";
import { useRouter } from "next/router";
import FormButton from "../Buttons/formButton";

export default function Form() {
  const [awaiting, setAwaiting] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    setAwaiting(true);

    SaveOnGSheet(data)
      .then(fbEvent("Lead", data))
      .then(SendMail(data))
      .then(() => {
        setAwaiting(false);
        window.open(
          `//wa.me/${info.whatsapp.value}?text=${info.whatsapp.message}`
        );
        router.push("/thankyou");
      });
  };

  const renderError = (error) => (
    <span className="smallest text-red-500">{error?.message}</span>
  );

  return (
    <form className="mt-12 " onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="fullName">Nombre</label>
      <input
        placeholder="Nombre"
        {...register("fullName", {
          required: "Compártenos tu nombre",
        })}
      />
      {renderError(errors.fullName)}
      <label htmlFor="phone">Teléfono</label>
      <input
        placeholder="(477) 123 1234"
        {...register("phone", {
          required: "Por favor ingresa un teléfono",
        })}
      />
      {renderError(errors.phone)}
      <label htmlFor="email">Email</label>
      <input
        label="Correo"
        placeholder="mail@mail.com"
        {...register("email", {
          required: "Por favor compártenos un correo electrónico",
          pattern: {
            value: emailRegExp,
            message: "Revisa tu correo",
          },
        })}
      />
      {renderError(errors.email)}
      <label htmlFor="Company">Compañía</label>
      <input
        placeholder="Mi compañía"
        error={errors.company}
        {...register("company", {
          required: "Por favor compártenos el nombre de tu compañia.",
        })}
      />
      {renderError(errors.company)}

      <div className=" mt-5 font-bold">
        <FormButton>
          <button
            className={`button ${awaiting ? "!bg-gray-300" : ""}`}
            type="submit"
            disabled={awaiting}
          >
            {!awaiting ? "Enviar y contactar asesor" : "Enviando..."}
          </button>
        </FormButton>
      </div>
      <p className="mb-20 mt-20 mini">
        {"Al dar click aceptas nuestros "}
        <Link href={info.termsConditions ?? ""} passhref>
          <a target="_blank" className="mini font-semibold">
            Términos y condiciones.
          </a>
        </Link>
        <br />
        {"Conoce nuestro "}
        <Link href={info.privacyNotice ?? ""} passhref>
          <a target="_blank" className="mini font-semibold">
            Aviso de privacidad
          </a>
        </Link>
        {"."}
      </p>
    </form>
  );
}
