import Image from "next/image";

const Hero = () => {
  return ( 
    <div>
      <div className="flex w-full h-[80vh] relative overflow-hidden ">
        <Image src="/Hero.jpg" alt="" fill className="object-cover" />
        <div className="absolute top-[60%] lg:top-1/2  left-1/2 lg:left-10 -translate-x-1/2 lg:translate-0 z-10 bg-black/30 p-4 rounded-md text-center w-[90%] max-w-2xl space-y-2 ">
          <h1 className="title text-white">O Momento de Realizar Seus Sonhos Chegou</h1>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-white text-left">A conquista que você sempre desejou para você e sua família está mais perto do que nunca. Com o consórcio, você planeja seu futuro de forma inteligente, sem pagar juros abusivos e com total flexibilidade para alcançar seus objetivos.</p>
            <p className="text-sm text-white hidden lg:block text-left">Seja para adquirir um imóvel, um veículo ou investir no que realmente importa, o consórcio oferece uma solução acessível e segura, permitindo que você realize seus planos com tranquilidade e organização financeira.</p>
            <p className="text-sm text-white hidden text-left">Comece agora a transformar seus sonhos em realidade com a melhor alternativa para uma compra planejada.</p>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Hero;