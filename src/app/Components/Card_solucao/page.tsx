'use client'

import dados from "./Dados_Solucao.json";
import "./Card.css"

interface Dados {
  name : string;

}

export default function Card() {
  return (
    <>
      {
        dados.map((info : Dados) =>(
          <div className="card">
            <h1>{info.name}</h1>
          </div>
        ))
      }
    </>
  );
}
