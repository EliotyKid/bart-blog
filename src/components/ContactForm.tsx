"use client";

import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";


const formSchema = z.object({
  name: z
    .string()
    .min(3, "O nome deve ter pelo menos 3 caracteres")
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, "O nome deve conter apenas letras e espaços"),

  email: z
    .string()
    .email("E-mail inválido"),

  phone: z
    .string()
    .min(11, "O telefone deve ter pelo menos 12 caracteres")
    .max(13, "O telefone deve ter no máximo 15 caracteres")
    ,

  message: z.string().min(1, "Mensagem é obrigatória"),
});


type FormSchema = z.infer<typeof formSchema>

export default function ContactForm() {

  const { register, handleSubmit, formState: { isSubmitting, errors }, reset } = useForm<FormSchema>({
    resolver: zodResolver(formSchema)
  })

  function handleContact(data: FormSchema) {

    // Pegando as variáveis de ambiente e garantindo que sejam strings
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID ?? "";
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "";
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY ?? "";

    if (!serviceId || !templateId || !publicKey) {
      console.error("Erro: Variáveis de ambiente não definidas.");
      alert("Erro ao enviar email. Contate o suporte.");
      return;
    }
    const name = data.name
    const phone = data.phone
    const email = data.email
    const message = data.message
    const templateParams = { name , phone, email, message };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log("EMAIL ENVIADO", response.status, response.text);
      
    })
    .catch((err) => {
      console.error("ERRO AO ENVIAR EMAIL:", err);
    });

    reset()
  }

  return (
    <>
      <div className="min-h-dvh p-4">
        <h1 className="text-center font-bold text-2xl my-6">Entre em contato</h1>
        <div className=" shadow-2xl rounded-2xl p-4 max-w-[720px] m-auto">
          <form onSubmit={handleSubmit(handleContact)} className="flex flex-col gap-4 ">
            <div className="flex flex-col w-full gap-2">
              <Label>Nome:</Label>
              <Input {...register("name")} placeholder="Digite seu nome" type="text"/>
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>
            <div className="flex flex-col w-full gap-2">
              <Label>Telefone:</Label>
              <Input {...register("phone")} placeholder="Digite seu número" type="text" />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            </div>
            <div className="flex flex-col w-full gap-2">
              <Label>Email:</Label>
              <Input {...register("email")} placeholder="Digite seu email" type="email"/>
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            
            <div className="flex flex-col w-full gap-2">
              <Label>Mensagem:</Label>
              <Textarea
                placeholder="Digite sua mensagem..."
                {...register("message")}
                className="h-40"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>

            <Button type="submit" className="cursor-pointer font-bold text-white" disabled={isSubmitting}>{isSubmitting ? "Enviando..." : "Enviar"}</Button>
          </form>
        </div>
      </div>
    </>
  );
}
