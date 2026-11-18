import Image from "next/image"
import { siteContent } from "@/data/site-content"

type WhatsAppCtaProps = {
  className?: string
  label: string
  statusId: string
}

export function WhatsAppCta({
  className = "",
  label,
  statusId,
}: WhatsAppCtaProps) {
  const whatsappUrl = siteContent.contact.whatsappUrl
  const status = whatsappUrl
    ? "Se abrirá el enlace oficial de WhatsApp en una pestaña nueva."
    : "Enlace oficial de WhatsApp pendiente de configuración."
  const controlClassName = "whatsapp-cta__control"
  const controlContent = (
    <>
      <Image
        src="/imágenes_web/iconos/whatsapp.svg"
        alt=""
        aria-hidden="true"
        width={20}
        height={20}
        className="whatsapp-cta__icon"
      />
      <span>{label}</span>
    </>
  )

  return (
    <div className={`whatsapp-cta ${className}`.trim()}>
      {whatsappUrl ? (
        <a
          className={controlClassName}
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-describedby={statusId}
        >
          {controlContent}
        </a>
      ) : (
        <button
          className={controlClassName}
          type="button"
          disabled
          aria-describedby={statusId}
        >
          {controlContent}
        </button>
      )}
      <span id={statusId} className="sr-only">
        {status}
      </span>
    </div>
  )
}
