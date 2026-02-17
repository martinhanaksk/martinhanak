import emailjs from "@emailjs/browser";
import { useRef } from "react";

const EMAILJS_CONFIG = {
  serviceId: "service_8kksrcn",
  templateId: "template_lv61f7k",
  publicKey: "F5C7U01qE60SlfeqA",
} as const;

const useEmailForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        formRef.current,
        { publicKey: EMAILJS_CONFIG.publicKey }
      )
      .then(
        () => alert("Email sent successfully!"),
        (error) => console.error("Email send failed:", error.text)
      );
  };

  return { formRef, handleSubmit };
};

export default useEmailForm;