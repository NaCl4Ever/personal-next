import { Card, Text, Button } from "@nextui-org/react";
import Image from 'next/image';
export default function HeaderDisplay() {
  return ( <Card css={{ mw: "20vw"}}>
        <Card.Body css={{ display: 'flex', alignItems: 'center' }}>
        <Image  src="/avatar.jpg" height={128} width={128} alt="avatar image"/>
          <Text h2>Jordan Pectyo</Text>
          <Text h3>Frontend Developer</Text>
          <div style={{display: "inline-flex", alignItems: "center"}}>
            <Button.Group>
              <Button onClick={(_) => window.location.href = "https://www.linkedin.com/in/pectyo/"}>
                <i className="fa-brands fa-linkedin"></i>
              </Button>
              <Button onClick={(_) => window.location.href = "mailto:mrpectyo@gmail.com"}>
                <i className="fa-sharp fa-regular fa-envelope"></i>
              </Button>
            </Button.Group>
            <div style={{display: "inline-flex", alignItems: "center"}}>
              <i className="fa-sharp fa-solid fa-phone"></i>
              <Text>(304)-282-8728</Text>
            </div>
          </div>
          
        </Card.Body>
      </Card>)
}