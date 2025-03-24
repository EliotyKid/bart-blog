import Image from "next/image";

const Consortium = () => {
  return ( 
    <section className="w-full max-w-[1120px] flex flex-col mx-auto pb-12 px-4 mt-30">
      <div className="flex flex-col-reverse md:flex-row gap-8">
        <div className=" flex-1">
          <div className="  rounded-2xl overflow-hidden w-full h-full hidden md:block">
            <Image 
              src="/Consortium.jpg"
              width={500}
              height={500}
              alt="A family buy a car, the father, the mother and the babe"
              className="size-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <h1 className="title">O que é consórcio?</h1>
           <p className="paragrafo">O consórcio é a solução ideal para quem deseja adquirir bens de alto valor, como veículos, imóveis ou serviços, sem precisar pagar juros abusivos. Funciona como uma compra planejada: um grupo de pessoas se une para formar uma poupança coletiva, e mensalmente um ou mais participantes são contemplados para receber sua carta de crédito e realizar a compra desejada.</p>
           <p className="paragrafo">Diferente de financiamentos tradicionais, o consórcio não tem juros, apenas uma taxa de administração, tornando-o uma alternativa mais acessível e econômica. Além disso, você pode antecipar sua contemplação ao ofertar lances, acelerando a conquista do seu objetivo.</p>
           <p className="paragrafo">Seja para comprar seu carro, sua casa própria ou investir no seu futuro, o consórcio é um caminho seguro, flexível e inteligente. Planeje, economize e conquiste!</p>
        </div>
      </div>
    </section>
   );
}
 
export default Consortium;