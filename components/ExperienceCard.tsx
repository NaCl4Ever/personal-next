import { Card, Text, Container, Grid, Button } from "@nextui-org/react"
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
        <Grid.Container justify="center">
        <Grid xs={12} sm={4} justify="center">
           <Text h3>{company} </Text>
        </Grid>
        <Grid xs={12} sm={1} justify="center">
           <Text><i className="fa-solid fa-circle"></i></Text>
        </Grid>
        <Grid xs={12} sm={7} justify="center">
           <Text h3>{title}</Text>
        </Grid>
        </Grid.Container>
        

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