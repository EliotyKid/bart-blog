import Image from "next/image"
import Link from "next/link"

export default function CardPost(){
  return (
    <Link href="/blog/post" className="w-full sm:max-w-[352px] h-full flex flex-col items-center justify-between gap-2 sm:gap-4 hover:brightness-75 transition-all duration-300">
      <div className="flex w-full h-[200px] sm:h-[234px] relative rounded-2xl overflow-hidden">
        <Image
          src="/post1.jpg"
          alt=""
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 w-full flex-col justify-between gap-1 sm:gap-2">
        <h1 className="font-bold  text-blue-600 text-ld sm:text-xl">Como desenvolver um blog</h1>
        <p className="text-zinc-600 text-sm hidden sm:flex flex-1 text-justify lg:text-left">Adipisci fugiat commodi id dolorum at corporis voluptatibus fuga sunt eaque hic error odit molestiae, accusantium nihil quis?</p>
        <div>
          <p className="font-bold text-zinc-900 text-sm md:text-base">Elias Rodrigues</p>
          <p className="text-zinc-600 text-xs md:text-sm">20 de Março de 2025</p>
        </div>
      </div>
    </Link>
  )
}