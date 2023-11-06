import QuestaoModel from "@/model/questao";
import styles from "@/styles/Questao.module.css";
import {Enunciado} from "@/components/Enunciado";
import Resposta from "@/components/Resposta";

interface QuestaoProps {
    valor: QuestaoModel
}
export default function Questao(props: QuestaoProps) {
    const questao = props.valor

    function renderizarRespostas(){
        return questao.respostas.map((resposta, i) => {
            return (<Resposta
                valor={resposta}
                indice={i}
                key={i}
                letra={'A'}
                corFundoLetra="#F2C866"/>)
        })

    }
    return (
       <div className={styles.questao}>
           <Enunciado texto={questao.enunciado}/>
           {renderizarRespostas()}

       </div>
    );
};