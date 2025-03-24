import Image from "next/image";

const Hero = () => {
  return ( 
    <div>
      <div className="flex w-full h-80 sm:h-100 lg:h-[640px] relative overflow-hidden ">
        <Image src="/Hero.jpg" alt="" fill className="object-cover" />
        <div className="absolute bottom-0 sm:bottom-10 left-1/2 -translate-x-1/2 z-10 bg-black/30 p-4 rounded-md text-center w-[90%] max-w-2xl">
          <h1 className="text-2xl text-white font-bold ">O Momento de Realizar Seus Sonhos Chegou</h1>
          <p className="text-sm text-white">A conquista que você sempre desejou para você e sua família está mais perto do que nunca. Com o consórcio, você planeja seu futuro de forma inteligente, sem pagar juros abusivos e com total flexibilidade para alcançar seus objetivos.</p>
          {/* <p className="text-sm text-white">Seja para adquirir um imóvel, um veículo ou investir no que realmente importa, o consórcio oferece uma solução acessível e segura, permitindo que você realize seus planos com tranquilidade e organização financeira.</p>
          <p className="text-sm text-white">Comece agora a transformar seus sonhos em realidade com a melhor alternativa para uma compra planejada.</p> */}
        </div>
      </div>
    </div>
   );
}
 
export default Hero;