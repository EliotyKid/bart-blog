import Image from "next/image";

const Consortium = () => {
  return ( 
    <section className="w-full max-w-[1120px] flex flex-col mx-auto pb-12 px-4 mt-8">
      <div className="flex flex-col-reverse md:flex-row gap-4">
        <div className="">
          <div className="  rounded-2xl overflow-hidden w-full h-full">
            <Image 
              src="/Consortium.jpg"
              width={500}
              height={500}
              alt="A family buy a car, the father, the mother and the babe"
              className="size-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold mb-6">O que é consórcio?</h1>
           <p>O consórcio é a solução ideal para quem deseja adquirir bens de alto valor, como veículos, imóveis ou serviços, sem precisar pagar juros abusivos. Funciona como uma compra planejada: um grupo de pessoas se une para formar uma poupança coletiva, e mensalmente um ou mais participantes são contemplados para receber sua carta de crédito e realizar a compra desejada.</p>
           <p>Diferente de financiamentos tradicionais, o consórcio não tem juros, apenas uma taxa de administração, tornando-o uma alternativa mais acessível e econômica. Além disso, você pode antecipar sua contemplação ao ofertar lances, acelerando a conquista do seu objetivo.</p>
           <p>Seja para comprar seu carro, sua casa própria ou investir no seu futuro, o consórcio é um caminho seguro, flexível e inteligente. Planeje, economize e conquiste!</p>
        </div>
      </div>
    </section>
   );
}
 
export default Consortium;