import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Grid } from "@nextui-org/react";
import HeaderDisplay from '@/components/HeaderDisplay';
import ExperienceCard from '@/components/ExperienceCard';
import Experiences from "../public/experiences.json";


const inter = Inter({ subsets: ['latin'] })


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
      {
        Experiences.data.map(({title, company, experiences, start,end}, index) => {
          return (<Grid xs={12}  justify='center' key={index}>
            <ExperienceCard title={title} company={company} start={start} end={end} experiences={experiences}/>
          </Grid>)
        })
      }
     
    </Grid.Container>
      </main>
    </>
  )
}
