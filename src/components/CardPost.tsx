import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale/pt-BR"


interface CardPostProps {
  title: string
  subtitle: string
  author: string
  createdAt: string
  url: string
}

export default function CardPost({title, subtitle, author, createdAt, url}:CardPostProps){
  return (
    <Link href="/blog/post" className="w-full sm:max-w-[352px] h-full flex flex-col items-center justify-between gap-2 sm:gap-4 hover:brightness-75 transition-all duration-300">
      <div className="flex w-full h-[200px] sm:h-[234px] relative rounded-2xl overflow-hidden">
        <Image
          src={url}
          alt=""
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 w-full flex-col justify-between gap-1 sm:gap-2">
        <h1 className="font-bold  text-blue-600 text-ld sm:text-xl">{title}</h1>
        <p className="text-zinc-600 text-sm hidden sm:flex flex-1 text-justify lg:text-left">{subtitle}</p>
        <div>
          <p className="font-bold text-zinc-900 text-sm md:text-base">{author}</p>
          <p className="text-zinc-600 text-xs md:text-sm">{format(new Date(createdAt),"dd 'de' MMM 'de' yyyy",{locale: ptBR})}</p>
        </div>
      </div>
    </Link>
  )
}