import { Parser } from 'html-to-react'

const parser = (string) => Parser().parse(string)

export default parser