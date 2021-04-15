import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import { RecoilRoot } from "recoil";
import { Left } from "../components/left";
import { Right } from "../components/right";

export default function Home() {
  return (
    <RecoilRoot>
      <Head>
        <title>Render Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>render test</h1>
      <div style={{ display: "flex", width: "100%" }}>
        <Left />
        <Right />
      </div>
    </RecoilRoot>
  )
}
