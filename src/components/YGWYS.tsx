type Props = {
  text: string
}

const YGWYS = ({ text }: Props) => {
  return <article dangerouslySetInnerHTML={{ __html: text }} />
}

export default YGWYS
