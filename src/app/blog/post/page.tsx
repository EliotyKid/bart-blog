import Link from "next/link"
import Image from "next/image"
export default function BlogPost(){
  return(
    <div className="w-full max-w-[1120px] flex flex-col mx-auto pb-12 px-4">
      <Link 
        href="/blog"
        className="flex w-full max-w-fit font-bold text-zinc-900 cursor-pointer"
      >
        Voltar
      </Link>
      <div className="w-full h-full flex flex-col mt-8">
        <div className="flex w-full h-56 sm:h-80 lg:h-[392px] relative rounded-2xl overflow-hidden">
          <Image
            src="/post1.jpg"
            alt=""
            fill={true}
            className="object-cover"
          />
        </div>
      </div>

      <div className="flex w-full  flex-col mt-4 sm:mt-8">
        <h1 className="font-bold text-2xl sm:text-4xl lg:text-[40px] text-blue-600">Como desenvolver um blog</h1>
        
        <div>
          <p className="font-bold text-zinc-900">Elias Rodrigues</p>
          <p className="text-zinc-600">20 de Março de 2025</p>
        </div>
        <p className="text-zinc-600 mt-4 sm:mt-8 text-sm sm:text-base text-justify lg:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci fugiat commodi id dolorum at corporis voluptatibus fuga sunt eaque hic error odit molestiae, atque reprehenderit facilis asperiores accusantium nihil quis? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus suscipit culpa mollitia. Quibusdam, excepturi! Modi laboriosam asperiores, eum laudantium vel assumenda aliquam, nemo laborum ad ut velit nam debitis soluta.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi provident amet eum sequi atque dolore iure, ut magnam perferendis aspernatur optio beatae voluptatibus dolorem quam mollitia illum recusandae alias fugit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatibus voluptas optio maiores labore quidem qui soluta inventore ullam, possimus obcaecati aut beatae expedita provident a consequatur repellendus, facere illo.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A quas accusantium recusandae neque quisquam quasi voluptate totam ipsam fuga, eos, consequatur tenetur pariatur necessitatibus doloremque reprehenderit fugiat expedita porro aut!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus ex sapiente ratione mollitia beatae consequuntur consectetur labore quia neque temporibus enim velit eum quasi similique, aliquam impedit alias quas non!
        </p>
      </div>
    </div>
  )
}