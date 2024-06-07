'use client';
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import "./Login.css";
import { API_URL_PRODUTOR } from "@/app/utils/api";
import { useEffect } from "react";

type FormData = {
  nomeEmpresaProdutor: string;
  tipoProdutor: string;
  idMaterial: number;

};

export default function Login() {
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
      const response = await fetch(API_URL_PRODUTOR, {
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
        <h1>Faça parte da mudança, torne-se um produtor! </h1>

        <form onSubmit={handleSubmit(createUser)} className="form_Cadastro">
          <div className="input-box">
            <label>Nome empresa produtor</label>
            <input
              type="text"
              {...register('nomeEmpresaProdutor', { required: true })}
              placeholder="Digite o nome da empresa"
            />
          </div>

          <div className="input-box">
            <label>Tipo produtor</label>
            <input
              type="text"
              {...register('tipoProdutor', { required: true })}
              placeholder="Digite o tipo produtor"
            />
          </div>

          <div className="input-box">
            <label>Id material</label>
            <input
              type="number"
              {...register('idMaterial', { required: true })}
              placeholder="Digite o id material"
            />
          </div>

          <button className="login" type="submit">
            Fazer Login
          </button>
        </form>

       <p>Não é um cliente?</p>
       <button className="login">
         <Link href={"/Pages/Cadastro_Produtor"} >Cadastrar-se</Link>
        </button> 
      </section>
    </>
  );
}
