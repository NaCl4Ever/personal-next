import { Card, Text, Container, Spacer, Button } from "@nextui-org/react"
import { useState, useCallback } from "react";

interface ExperienceCardProps {
  experiences: string[];
  title: string;
  company: string;
  start: number;
  end: number | null;
}


export default function ExperienceCard(props: ExperienceCardProps) {
  const {experiences, title, company, start, end} = props;
  const [isSelected, setIsSelected] = useState(false);

  const onToggleSelect = useCallback(
    () => {
      setIsSelected(!isSelected)
    },
    [isSelected],
  )
  

  return(
    <Card className={"experience-card fade-in"} css={{ mw: "600px", height: "fit-content" }}  >
    <Card.Header >
      <Container  css={{ display: 'flex', alignItems: 'center', flexDirection: "column" }}>
        <Text h3>{company} - {title}</Text>
        <Text h4>{start} {end && "- " +end}</Text>
        <Button onClick={onToggleSelect}>{
          isSelected ?
          <i className="fa-solid fa-minus"></i>
          : <i className="fa-solid fa-plus"></i>
          }</Button>
      </Container>    
    </Card.Header>
    {
      isSelected &&
      <Card.Body css={{ display: 'flex', alignItems: 'center' }}>
    {
      experiences.map((experience, index) => {
        return(
          <Container key={index}>
            <Text blockquote className="fade-in"> <i className="fa-solid fa-caret-right fa-fade"></i> {experience}</Text>
          </Container>
        )
      })
    }
    </Card.Body>
    }

    
  </Card>
  )
}