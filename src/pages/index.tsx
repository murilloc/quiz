import {Inter} from 'next/font/google'
import Questao from "@/components/Questao";
import RespostaModel from "@/model/resposta";
import QuestaoModel from "@/model/questao";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    const questaoTeste = new QuestaoModel(1, 'Qual é a melhor cor?', [
        RespostaModel.errada('Azul'),
        RespostaModel.errada('Verde'),
        RespostaModel.errada('Amarelo'),
        RespostaModel.certa('Preto'),
    ])
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        }
        }>
            <Questao valor={questaoTeste}/>
        </div>

    )
}
