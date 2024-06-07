'use client'
import Card from "@/app/Components/Card_Voluntário/page";
import "./Voluntario.css"
import { useEffect } from "react";
import Link from "next/link";



export default function Voluntario() {
  useEffect(() => {
    // Adiciona a classe ao body quando a página for montada
    document.body.classList.add('pagina-voluntario');
    
    // Remove a classe do body quando a página for desmontada
    return () => {
        document.body.classList.remove('pagina-voluntario');
    };
}, []);

  return (
    <>
      <div className="Voluntario_titulo">
        <h1 >Assuma o controle!</h1>
        <p>Faça a sua parte hoje mesmo: seja voluntário e nos ajude a proteger nosso ambiente marinho. Além disso, ao se cadastrar e fazer login, escolha sua função e contribua de acordo com suas habilidades. Junte-se a nós e faça a diferença!.</p>
      </div>

      <section className="cardVoluntario">
        <Card/>
      </section>
    </>
  );
}
