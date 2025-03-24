"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos");
      return;
    }

    // Pegando as variáveis de ambiente e garantindo que sejam strings
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID ?? "";
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "";
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY ?? "";

    if (!serviceId || !templateId || !publicKey) {
      console.error("Erro: Variáveis de ambiente não definidas.");
      alert("Erro ao enviar email. Contate o suporte.");
      return;
    }

    const templateParams = { name, email, message };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("EMAIL ENVIADO", response.status, response.text);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.error("ERRO AO ENVIAR EMAIL:", err);
      });
  }

  return (
    <>
      <div className="min-h-dvh p-4">
        <h1 className="text-center font-bold text-2xl my-6">Contato</h1>
        <div className=" shadow-2xl rounded-2xl p-4 max-w-[720px] m-auto">
          <form onSubmit={sendEmail} className="flex flex-col gap-4 ">
            <div className="flex flex-col w-full">
              <label className=" px-4">Nome:</label>
              <input
                className="px-4 py-2 rounded-2xl shadow-xl border-2 border-black/10 "
                type="text"
                placeholder="Digite seu nome"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className=" px-4">Email:</label>
              <input
                className="px-4 py-2 rounded-2xl shadow-xl border-2 border-black/10"
                type="email"
                placeholder="Digite seu email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className=" px-4">Email:</label>
              <textarea
                className="px-4 py-2 rounded-2xl shadow-xl border-2 border-black/10 h-60"
                placeholder="Digite sua mensagem..."
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </div>

            <input 
              className="cursor-pointer mt-4 text-xl font-bold border-2 border-black/10 rounded-full w-fit px-4 py-1 self-center hover:bg-black hover:text-white transition-all duration-300" 
              type="submit" 
              value="Enviar" />
          </form>
        </div>
      </div>
    </>
  );
}
