'use client'
import Image from "next/image";
import "./page.css";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    // Adiciona a classe ao body quando a página for montada
    document.body.classList.add('pagina-home');
    
    // Remove a classe do body quando a página for desmontada
    return () => {
        document.body.classList.remove('pagina-home');
    };
}, []);
  return (
    <>
      <section className="Home_section">
        <div className="banner">
        <div className="texto">

        </div>

        </div>
      </section>

      <section className="Home_section">
        <Image className="icon" src={"/assets/icon-plastico3.svg"} alt="" width={100} height={100} />
        <div className="Home_text">
          <h1>Reduza a poluição marinha com reutilização sustentável</h1>
          <p>Transforme a poluição em sustentabilidade ao se conectar com nossa rede de reutilização de materiais oceânicos.</p>
          <p>Seja parte da mudança, unindo esforços com coletores, produtores e consumidores comprometidos com um futuro marinho mais limpo e saudável.</p>
        </div>
        
      </section>

      <section className="Home_section">
        <div className="Home_text">
          <h1>Preserve os Oceanos com Inovação Tecnológica</h1>
          <p>Explore soluções inovadoras que estão transformando a maneira como lidamos com a poluição, a pesca sustentável e a conservação dos ecossistemas oceânicos.</p>
        </div>
        
      </section>

      <section className="Home_section">
        <Image src={"/assets/icon-garrafa.svg"} alt="" width={100} height={100} />
        <div className="Home_text">
          <h1>Conectando Oceanos, Coletores, Produtores e Consumidores</h1>
          <p>Junte-se à nossa rede de reutilização de materiais oceânicos, conectando os coletores do lixo do litoral e oceano, os produtores de materiais reutilizados e os consumidores desses materiais..</p>
        </div>
      </section>

      <section className="Home_section">
        <div className="Home_text">
          <h1>Conectando a indústria à sustentabilidade dos oceanos</h1>
          <p>Descubra como a nossa rede conecta os coletores do lixo do litoral e oceano, os produtores de materiais reutilizados e os consumidores desses materiais, oferecendo inovação e sustentabilidade para qualquer setor da indústria.</p>
        </div>
        
      </section>

      <section className="Home_section">
        <Image src={"/assets/icon-beneficios.svg"} alt="" width={100} height={100} />
        <div className="Home_text">
          <h1>Quais os benefícios?</h1>
          <p>A reutilização de materiais encontrados nos oceanos ajuda a reduzir a quantidade de resíduos plásticos e outros materiais poluentes nos ecossistemas marinhos. 
            Ao conectar coletores, produtores e consumidores, a rede promove a sustentabilidade ao reutilizar materiais, reduzindo a necessidade de novas matérias-primas e o impacto ambiental associado.
            A rede incentiva a criação de uma economia circular, na qual os materiais são reutilizados e reciclados, reduzindo o desperdício e promovendo a sustentabilidade.
            <br />
            Ao envolver coletores, produtores e consumidores, a proposta cria uma comunidade engajada e consciente da importância da preservação dos oceanos.
            A proposta incentiva o desenvolvimento de tecnologias inovadoras para a reutilização de materiais oceânicos, contribuindo para avanços no campo da sustentabilidade ambiental.</p>
        </div>
      </section>
    </>
  );
}
