import { FAQContainer, Grid, Title } from './styles'
import { UncontrolledAccordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'

const data = [
  {
    question: 'Praesentium similique ipsam nobis culpa voluptatum perspiciatis quia vitae',
    response: 'Praesentium similique ipsam nobis culpa voluptatum perspiciatis quia vitae inventore quod, laboriosam minima magni corporis, dicta nisi labore doloribus voluptas amet est.'
  },
  {
    question: 'Praesentium similique ipsam nobis culpa voluptatum perspiciatis quia vitae',
    response: 'Praesentium similique ipsam nobis culpa voluptatum perspiciatis quia vitae inventore quod, laboriosam minima magni corporis, dicta nisi labore doloribus voluptas amet est.'
  },
  {
    question: 'Praesentium similique ipsam nobis culpa voluptatum perspiciatis quia vitae',
    response: 'Praesentium similique ipsam nobis culpa voluptatum perspiciatis quia vitae inventore quod, laboriosam minima magni corporis, dicta nisi labore doloribus voluptas amet est.'
  },
  {
    question: 'Praesentium similique ipsam nobis culpa voluptatum perspiciatis quia vitae',
    response: 'Praesentium similique ipsam nobis culpa voluptatum perspiciatis quia vitae inventore quod, laboriosam minima magni corporis, dicta nisi labore doloribus voluptas amet est.'
  },
  {
    question: 'Praesentium similique ipsam nobis culpa voluptatum perspiciatis quia vitae',
    response: 'Praesentium similique ipsam nobis culpa voluptatum perspiciatis quia vitae inventore quod, laboriosam minima magni corporis, dicta nisi labore doloribus voluptas amet est.'
  },
  {
    question: 'Praesentium similique ipsam nobis culpa voluptatum perspiciatis quia vitae',
    response: 'Praesentium similique ipsam nobis culpa voluptatum perspiciatis quia vitae inventore quod, laboriosam minima magni corporis, dicta nisi labore doloribus voluptas amet est.'
  }
]


export default function FAQ () {
  return (
    <FAQContainer>
      <Title>Perguntas e respostas</Title>
      <Grid>
        <UncontrolledAccordion defaultOpen="1">
          {
            data.map(({ question, response }, index) => (
              <AccordionItem>
                <AccordionHeader targetId={index}>
                  {question}
                </AccordionHeader>
                <AccordionBody accordionId={index}>
                  {response}
                </AccordionBody>
              </AccordionItem>
            ))
          }
        </UncontrolledAccordion>
      </Grid>
    </FAQContainer>
  )
}