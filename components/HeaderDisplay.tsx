import { Card, Text, Button, Tooltip } from "@nextui-org/react";
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
            </Button.Group>
          </div>
          
        </Card.Body>
      </Card>)
}