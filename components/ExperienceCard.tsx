import { Card, Text, Container } from "@nextui-org/react"

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
    <Card css={{ mw: "80vw" }}>
    <Card.Header >
      <Container>
        <Text h2>{company} - {title}</Text>
        <Text h3>{start} {end && "- " +end}</Text>
      </Container>    
    </Card.Header>
    <Card.Body css={{ display: 'flex', alignItems: 'center' }}>
    {
      experiences.map((experience, index) => {
        return(<Text key={index} h3 className="fade-in">{experience}</Text>)
      })
    }
    </Card.Body>
  </Card>
  )
}