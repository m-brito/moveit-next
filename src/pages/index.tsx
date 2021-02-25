import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';
import { ChallengBox } from '../components/ChallengeBox';

//npm run dev

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>

      <ExperienceBar />

      <section>
        <div >
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengBox />
        </div>
      </section>
    </div>
  )
}
