import ArrowRight from '../../assets/arrow_right.svg'
import { HistoryContainer, Article, Links } from './styles'

export default function History () {
  return (
    <HistoryContainer>
      <Article>
        <h1>Na verdade, o que você precisa saber é que...</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit distinctio consequuntur deleniti vero commodi quas facere ipsum dicta ad cupiditate voluptate quidem quasi iste, rem dolore in, eius quis nemo?
        </p>
        <p>
          Quo modi cum repudiandae, autem assumenda earum, mollitia sequi doloremque dolor dolorem iusto nemo veritatis excepturi fugit.
          Possimus soluta atque aspernatur obcaecati! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore veritatis delectus numquam illum ullam voluptatibus obcaecati pariatur deserunt harum? Sed, architecto corporis rem natus ipsam accusamus at necessitatibus provident iure.
          Minus itaque exercitationem aut ullam, accusantium reprehenderit veniam consectetur perspiciatis at unde sit architecto nisi! Nemo voluptatibus repudiandae cum accusantium! Fuga, sequi.
        </p>
        <p>
          Possimus soluta atque aspernatur obcaecati! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </Article>
      <Links>
      <ul>
        <li>
          <a className="primary" href="">
            <span>Tenha acesso</span> 
            <img src={ArrowRight}/>
          </a>
          </li>
      </ul>
      </Links>
    </HistoryContainer>
  )
}
