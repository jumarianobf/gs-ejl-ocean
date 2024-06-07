'use client';
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import "./Login.css";
import { API_URL_COLETADOR } from "@/app/utils/api";
import { useEffect } from "react";

type FormData = {
  primeiroNomeConsumidor: string;
  sobrenomeConsumidor: string;
  cpfConsumidor: number;

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
      const response = await fetch(API_URL_COLETADOR, {
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
        <h1>Faça parte da mudança, torne-se um consumidor! </h1>

        <form onSubmit={handleSubmit(createUser)} className="form_Cadastro">
        <div className="input-box">
            <label>Primeiro Nome Consumidor</label>
            <input
              type="text"
              {...register('primeiroNomeConsumidor', { required: true })}
              placeholder="Digite o primeiro nome"
            />
          </div>

          <div className="input-box">
            <label>Sobrenome Consumidor</label>
            <input
              type="text"
              {...register('sobrenomeConsumidor', { required: true })}
              placeholder="Digite o sobrenome"
            />
          </div>

          <div className="input-box">
            <label>CPF</label>
            <input
              type="text"
              {...register('cpfConsumidor', { required: true })}
              placeholder="Digite o CPF"
            />
          </div>

          <button className="login" type="submit">
            Fazer Login
          </button>
        </form>

       <p>Não é um cliente?</p>
       <button className="login">
         <Link href={"/Pages/Cadastro_Consumidor"} >Cadastrar-se</Link>
        </button> 
      </section>
    </>
  );
}
