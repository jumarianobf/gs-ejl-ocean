'use client'

import dados from "./Dados_Voluntario.json"
import "./Card.css"
import Link from "next/link";


interface Dados{
    name : string;
    text : string;
    href : string;
}

export default function Card(){
    return(
        <>
            {dados.map((info: Dados) => (
                <div className="card" key={info.name}>
                    <h1>{info.name}</h1>
                    <p>{info.text}</p>
                    <Link href={info.href} className="link-button">
                        <span className="link-text">Clique aqui</span>
                    </Link>
                </div>
            ))}
        </>
    );
}