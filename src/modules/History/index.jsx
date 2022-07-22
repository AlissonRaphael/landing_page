import ArrowRight from '../../assets/arrow_right.svg'
import { HistoryContainer, Title, Article, LineContainer, Text, Links } from './styles'
import { HorizontalLineDetail } from '../../components/Detail'


export default function History () {
  return (
    <HistoryContainer>
      <Title>Na verdade, o que você precisa saber é que...</Title>
      <Article>
        <Text className='end'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit distinctio consequuntur deleniti vero commodi quas facere ipsum dicta ad cupiditate voluptate
          </p>
          <p>
            Quo modi cum repudiandae, autem assumenda earum, dolorem iusto nemo veritatis excepturi fugit.
            Possimus soluta atque aspernatur obcaecati! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </Text>
        <LineContainer>
          <HorizontalLineDetail/>
        </LineContainer>
        <Text className='start'>
          <p>
            Minus itaque exercitationem aut ullam, accusantium reprehenderit veniam consectetur perspiciatis at unde sit architecto nisi! Nemo voluptatibus repudiandae cum accusantium! Fuga, sequi.
          </p>
          <p>
            Labore veritatis delectus numquam illum ullam voluptatibus obcaecati pariatur deserunt harum? Sed, architecto corporis rem natus ipsam accusamus at necessitatibus provident iure.
          </p>
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
        </Text>

      </Article>
    </HistoryContainer>
  )
}
