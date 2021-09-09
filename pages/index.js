import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Advices from '../advicedata/Advices.json'
import { useState, useEffect } from "react";
import Advicelist from './components/AdviceList'
import Footer from './components/Footer'
// import PageNav from './components/pagenav'


export default function Home() {


  return (
    <div className="content">
      <Head>
        <title>Advice Hub - Homepage</title>
        <meta name="description" content="Clone of Advice Hub" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <PageNav /> */}
      <div className="grid">
        <Advicelist />
      </div>
    </div>
  )
}
