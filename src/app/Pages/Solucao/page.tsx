'use client'

import Card from "@/app/Components/Card_solucao/page";
import Image from "next/image";
import "./Solucao.css"
import { useEffect } from "react";


export default function Solucao() {
  useEffect(() => {
    // Adiciona a classe ao body quando a página for montada
    document.body.classList.add('solucao');
    
    // Remove a classe do body quando a página for desmontada
    return () => {
        document.body.classList.remove('solucao');
    };
}, []);

  return (
    <>
      <section className="Solucao_titulo">
        <div className="Solucao_texto">
          <h1>Rede de reutilização de materiais oceânicos.</h1>
          <p>Desenvolvemos um sistema integrado que conecta coletores de resíduos marinhos, produtores de materiais reutilizados e consumidores engajados. Nossa solução promove a sustentabilidade, reduz a poluição marinha e traz inovação para todos os setores da indústria .</p>
        </div>
        <Image src={"/assets/teste.avif"} alt="" width={100} height={100}/>
      </section>
      
      <h1 className="Solucao_titulo">Dados Científicos</h1>
     
      <section className="cardSolucao">
        <Card/>
      </section>
    </>
  );
}
