import { useRouter } from 'next/router';
import integrantesData from "./integrante.json"

export default function Integrante() {
  const router = useRouter();
  const { id } = router.query;
  const integrante = integrantesData.find((integrante) => integrante.id === id);

  if (!integrante) {
    return <div>Integrante não encontrado</div>;
  }

  return (
    <div>
      <h1>{integrante.nome}</h1>
      <p>RM: {integrante.rm} - Turma: {integrante.turma}</p>
      <img src={integrante.foto} alt={`Foto de ${integrante.nome}`} />
    </div>
  );
}
