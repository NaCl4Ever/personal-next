import { Card, Text, Container, Spacer } from "@nextui-org/react"

interface ExperienceCardProps {
  experiences: string[];
  title: string;
  company: string;
  start: number;
  end: number | null;
}


export default function ExperienceCard(props: ExperienceCardProps) {
  const {experiences, title, company, start, end} = props;
 
  return(
    <Card className={"fade-in"} css={{ mw: "600px" }}>
    <Card.Header >
      <Container  css={{ display: 'flex', alignItems: 'center', flexDirection: "column" }}>
        <Text h3>{company} - {title}</Text>
        <Text h4>{start} {end && "- " +end}</Text>
      </Container>    
    </Card.Header>
    <Card.Body css={{ display: 'flex', alignItems: 'center' }}>
    {
      experiences.map((experience, index) => {
        return(
          <Container key={index}>
            <Text  h5 className="fade-in"> <i className="fa-solid fa-caret-right"></i> {experience}</Text>
            <Spacer y={2}/>
          </Container>
        )
      })
    }
    </Card.Body>
  </Card>
  )
}