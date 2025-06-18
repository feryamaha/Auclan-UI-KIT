interface Props {
  htmlContent: string
}

export const HtmlRenderer: React.FC<Props> = ({ htmlContent }) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
}
