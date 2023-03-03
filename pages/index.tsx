import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Card, Grid, Text } from "@nextui-org/react";
import HeaderDisplay from '@/components/HeaderDisplay';
const inter = Inter({ subsets: ['latin'] })

const projects = [
`Worked primarily in React.JS modernizing application
by migrating stores from alt.js to Redux.`,
`Created preference feature to allow fine tuning of
observability intake and output.`,
`Reduced redundancies within component library and
replaced with more reusable components.`,
`Increased overall UI test coverage with Selenium tests.`
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <Grid.Container gap={2} justify="center" css={{width:"80vw", mw:"800px", margin: "auto"}}>
      <Grid xs={12} justify='center'>
      <HeaderDisplay/>
      </Grid>
      <Grid xs={12}  justify='center'>
      <Card css={{ mw: "80vw" }}>
        <Card.Header >
        <Text h2>Vmware</Text>
        </Card.Header>
        <Card.Body css={{ display: 'flex', alignItems: 'center' }}>
        {
          projects.map((project, index) => {
            return(<Text key={index} h3>{project}</Text>)
          })
        }
        </Card.Body>
      </Card>
      </Grid>
      
    </Grid.Container>
      </main>
    </>
  )
}
