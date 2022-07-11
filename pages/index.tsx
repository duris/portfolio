import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home | duris.io</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <Header/>
      <Main/>
      <Footer/>
      
    </div>
  )
}

export default Home
