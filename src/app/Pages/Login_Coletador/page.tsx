'use client';
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import "./Login.css";
import { API_URL_CONSUMIDOR } from "@/app/utils/api";
import { useEffect } from "react";

type FormData = {
  primeiroNomeColetador: string;
  sobrenomeColetador: string;
  qtdColetado: number;

};

export default function Login() {
  useEffect(() => {
    // Adiciona a classe ao body quando a página for montada
    document.body.classList.add('coletador');
    
    // Remove a classe do body quando a página for desmontada
    return () => {
        document.body.classList.remove('coletador');
    };
}, []);

  const { register, handleSubmit, reset } = useForm<FormData>();

  const createUser: SubmitHandler<FormData> = async (data) => {
    console.log(data);

    try {
      const response = await fetch(API_URL_CONSUMIDOR, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        console.log("Dados enviados com sucesso!");
        alert("Cadastro realizado com sucesso!");
        reset(); // Limpa o formulário após o envio bem-sucedido
      } else {
        console.error("Falha ao enviar os dados.");
        alert("Falha ao enviar os dados.");
      }
    } catch (error) {
      console.error('Erro ao cadastrar coletador:', error);
      alert("Erro ao cadastrar coletador.");
    }
  };

  return (
    <>
      <section className="section_Cadastro">
        <h1>Faça parte da mudança, torne-se um coletador! </h1>

        <form onSubmit={handleSubmit(createUser)} className="form_Cadastro">
          <div className="input-box">
            <label>Primeiro Nome Coletador</label>
            <input
              type="text"
              {...register('primeiroNomeColetador', { required: true })}
              placeholder="Digite o primeiro nome"
            />
          </div>

          <div className="input-box">
            <label>Sobrenome Coletador</label>
            <input
              type="text"
              {...register('sobrenomeColetador', { required: true })}
              placeholder="Digite o sobrenome"
            />
          </div>

          <div className="input-box">
            <label>Quantidade Coletado</label>
            <input
              type="number"
              {...register('qtdColetado', { required: true })}
              placeholder="Digite a quantidade coletada"
            />
          </div>

          <button className="login" type="submit">
            Fazer Login
          </button>
        </form>

       <p>Não é um cliente?</p>
       <button className="login">
         <Link href={"/Pages/Cadastro_Coletador"} >Cadastrar-se</Link>
        </button> 
      </section>
    </>
  );
}
