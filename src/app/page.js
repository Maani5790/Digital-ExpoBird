import React from 'react';
import Script from 'next/script';
import Head from 'next/head';
import Hero from './components/Hero';
import FeatureWork from './components/FeatureWork';
import HeroBackground from './components/HeroBackground';
import Clients from './components/OurClients';
import Driven from './components/Driven';
import HouseTechnology from './components/HouseTechnology';
import Navbar from './components/Navbar';
import Awards from './components/Awards';
import Service from './components/Service';
import Tech from './components/Tech';
import Footer from './components/Footer';
import Tab from './components/Tab';
import Testimonials from './components/Testimonials';


const Home = ({ description }) => {
  return (
    <>
      <Head>
        <title>Home - DigiExpo</title>
        <meta
          name='description'
          content={description}
          key="desc"
        />
      </Head>
      <Script
        src="/scripts/script-3.js"
        strategy="lazyOnload"
      ></Script>
      <Navbar />
      <Hero />
      <HeroBackground />
      <Service />
      <FeatureWork />
      <Clients />
      <Testimonials />
      <Driven para={"Choose Expobird as your software development agency and propel your business to new heights with our award-winning software development services and proprietary technology platform."} />
      <Awards />
      <Tech />
      <HouseTechnology />
      <Tab />
      <Footer />

    </>
  )
}
export default Home