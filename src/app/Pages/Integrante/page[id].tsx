import { useRouter } from 'next/router';
import integrantesData from "./integrante.json"

export default function Integrante() {
  const router = useRouter();
  const { id } = router.query;
  const integrante = integrantesData.find((integrante) => integrante.id === id);

 
}
