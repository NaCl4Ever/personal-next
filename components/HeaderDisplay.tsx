import { Card, Text, Button, Tooltip, Container } from "@nextui-org/react";
import Image from 'next/image';
export default function HeaderDisplay() {
  return ( <Card css={{ mw: "300px"}}>
        <Card.Body css={{ display: 'flex', alignItems: 'center' }}>
        <Image  src="/avatar.jpg" height={128} width={128} alt="avatar image"/>
          <Text h2>Jordan Pectyo</Text>
          <Text h4>Frontend Developer</Text>
          <div style={{display: "inline-flex", alignItems: "center"}}>
            <Button.Group>
              <Tooltip content={"https://www.linkedin.com/in/pectyo/"}>
                <Button onClick={(_) => window.location.href = "https://www.linkedin.com/in/pectyo/"}>
                  <i className="fa-brands fa-linkedin"></i>
                </Button>
              </Tooltip>
              <Tooltip content={"mrpectyo@gmail.com"}>
                <Button onClick={(_) => window.location.href = "mailto:mrpectyo@gmail.com"}>
                  <i className="fa-sharp fa-regular fa-envelope"></i>
                </Button>
              </Tooltip>
              <Tooltip content={"(304)-282-8728"}>
                <Button onClick={(_) => window.location.href = "tel:3042828728"}>
                  <i className="fa-sharp fa-solid fa-phone"></i>
                </Button>
              </Tooltip>
              <Tooltip content={"NaCl4Ever"}>
                <Button onClick={(_) => window.location.href = "https://github.com/NaCl4Ever"}>
                <i className="fa-brands fa-github"></i>
                </Button>
              </Tooltip>
            </Button.Group>
          </div>
          <Container css={{display: "flex", justifyContent: "space-between", px: "8px"}}>
          <i className="fa-brands fa-square-js fa-xl"></i>
          <i className="fa-brands fa-react fa-xl"></i>
          <i className="fa-brands fa-angular fa-xl"></i>
          <i className="fa-brands fa-vuejs fa-xl"></i>
          <i className="fa-brands fa-git fa-xl"></i>
          </Container>
        </Card.Body>
      </Card>)
}