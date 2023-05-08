import { info } from "../../info";
import WhatsButton from "../components/Buttons/whatsButton";

export default function ThankYou() {
  return (
    <section className="h-full my-auto">
      <div className="container flex flex-col items-center">
        <h1>¡Gracias por ponerte en contacto!</h1>
        <p className="body_lg">Te contactaré lo antes posible</p>
        <p className="mt-12">
          Te invitamos a seguirnos en nuestras redes sociales
        </p>
        <div className="flex justify-between space-x-20">
          <a
            href={`//facebook.com/${info.social.facebook}`}
            target="_blank"
            className="link"
            rel="noreferrer"
          >
            Facebook
          </a>
          <a
            href={`//instagram.com/${info.social.instagram}`}
            target="_blank"
            className="link"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
        <p className="mt-20">
          O si lo prefieres, también puedes enviarme un WhatsApp
        </p>
        <a
          href={`//wa.me/${info.whatsapp.value}?text=${info.whatsapp.message}`}
          onClick={() => fbq("track", "Contact")}
          target="_blank"
          className="button-secondary"
          rel="noreferrer"
        >
          <WhatsButton>Mándame un WhatsApp</WhatsButton>
        </a>
      </div>
    </section>
  );
}
