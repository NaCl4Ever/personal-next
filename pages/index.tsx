import Head from 'next/head'
import { Text, Grid } from "@nextui-org/react";
import HeaderDisplay from '@/components/HeaderDisplay';
import ExperienceCard from '@/components/ExperienceCard';
import Experiences from "../public/experiences.json";
import { useState } from 'react';



export default function Home() {

  return (
    <>
      <Head>
        <title>Pect Projects</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <Grid.Container gap={3} justify="center" css={{width:"80vw", margin: "auto"}}>
        <Grid xs={12} justify='center'>
        <HeaderDisplay/>
        </Grid>
        {
          Experiences.data.map(({title, company, experiences, start,end}, index) => {
            return (<Grid xs={12} md={6}  justify='center' key={index}>
              <ExperienceCard title={title} company={company} start={start} end={end} experiences={experiences}/>
            </Grid>)
          })
        }     
      </Grid.Container>
      <div id="info-panel" >
        <i className="fa-solid fa-circle-info"></i>
      <div className="content">
        <Text h4>Made with </Text>
        <Text h5>Next.js</Text>
        <Text h5>Next.ui</Text>
        <Text h5>FontAwesome</Text>
        <Text h5>TypeScript</Text>
        <Text h5>6 hours of coding</Text>
      </div>
      </div>
      </main>
    </>
  )
}
