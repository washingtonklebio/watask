import { Container } from './styles'

import todoImg from '../../assets/todo.svg'
import doingImg from '../../assets/doing.svg'
import doneImg from '../../assets/done.svg'

export function Summary() {
    return (
       <Container>
           <div className="todo">
               <header>
                   <p>Em aberto</p>
                   <img src={todoImg} alt="Aberto"/>
               </header>
               <strong>12</strong>
           </div>
           <div className="doing">
               <header>
                   <p>Em progresso</p>
                   <img src={doingImg} alt="Progresso"/>
               </header>
               <strong>12</strong>
           </div>
           <div className="done">
               <header>
                   <p>Fechadas</p>
                   <img src={doneImg} alt="Fechadas"/>
               </header>
               <strong>12</strong>
           </div>
       </Container>
    )
}