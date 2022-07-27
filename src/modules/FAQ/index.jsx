import { FAQContainer, Grid, Title } from './styles'
import { UncontrolledAccordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'

import parser from '../../helpers/parser'
import configuration from '../../../configuration.json'

export default function FAQ () {
  return (
    <FAQContainer>
      <Title>{parser(configuration.page_sections.faq.title)}</Title>
      <Grid>
        <UncontrolledAccordion defaultOpen="1">
          {
            configuration.page_sections.faq.content.map(({ question, response }, index) => (
              <AccordionItem key={index}>
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