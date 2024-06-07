'use client';
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import "./Cadastro.css";
import { API_URL_CONTATO_COLETADOR } from "@/app/utils/api";
import { useEffect } from "react";

type FormData = {
  emailColetador: string;
  telColetador: string;
  idColetador: number;
};

export default function Cadastro() {
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
      const response = await fetch(API_URL_CONTATO_COLETADOR, {
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
        <h1>Seja bem vindo </h1>

        <form onSubmit={handleSubmit(createUser)} className="form_Cadastro">
          <div className="input-box">
            <label>E-mail</label>
            <input
              type="email"
              {...register('emailColetador', { required: true })}
              placeholder="Digite o e-mail"
            />
          </div>

          <div className="input-box">
            <label>Telefone</label>
            <input
              type="number"
              {...register('telColetador', { required: true })}
              placeholder="Digite o stelefone"
            />
          </div>

          <div className="input-box">
            <label>Digite um id</label>
            <input
              type="number"
              {...register('idColetador', { required: true })}
              placeholder="Digite o stelefone"
            />
          </div>

          <button className="login" type="submit">
            Cadastrar-se
          </button>
          <p>Entraremos em contato!</p>
        </form>
       

      </section>
    </>
  );
}
