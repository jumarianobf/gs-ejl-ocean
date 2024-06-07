'use client';
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import "./Produtor.css";
import { API_URL_CONTATO_PRODUTOR  } from "@/app/utils/api";
import { useEffect } from "react";

type FormData = {
  emailProdutor: string;
  telProdutor: string;
  idProdutor: number;

};

export default function Cadastro() {
  useEffect(() => {
    // Adiciona a classe ao body quando a página for montada
    document.body.classList.add('produtor');
    
    // Remove a classe do body quando a página for desmontada
    return () => {
        document.body.classList.remove('produtor');
    };
}, []);

  const { register, handleSubmit, reset } = useForm<FormData>();

  const createUser: SubmitHandler<FormData> = async (data) => {
    console.log(data);

    try {
      const response = await fetch(API_URL_CONTATO_PRODUTOR , {
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
      console.error('Erro ao cadastrar contato produtor:', error);
      alert("Erro ao cadastrar contato produtor.");
    }
  };

  return (
    <>
      <section className="section_Cadastro">
        <h1>Faça parte da mudança, torne-se um produtor! </h1>

        <form onSubmit={handleSubmit(createUser)} className="form_Cadastro">
          <div className="input-box">
            <label>E-mail</label>
            <input
              type="text"
              {...register('emailProdutor', { required: true })}
              placeholder="Digite o e-mail"
            />
          </div>

          <div className="input-box">
            <label>Telefone</label>
            <input
              type="text"
              {...register('telProdutor', { required: true })}
              placeholder="Digite o telefone"
            />
          </div>

          <div className="input-box">
            <label>Id produtor</label>
            <input
              type="number"
              {...register('idProdutor', { required: true })}
              placeholder="Digite o Id"
            />
          </div>

          <button className="login" type="submit">
            Fazer Login
          </button>
          <p>Entraremos em contato!</p>
        </form>

       

      </section>
    </>
  );
}
