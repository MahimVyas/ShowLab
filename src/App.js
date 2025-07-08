import './App.css';
import React from 'react';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import SkillShowcase from './components/SkillShowcase';
import HackingBackground from './components/HackingBackground';

// import { LandingAppStoreButton } from '@/components/landing/app-store-button/LandingAppStoreButton';

function App() {
  return <div className="App">


    {/* 
    
    Idea:- Create a website that showcases the hacking and coding ideas and realworld hacking projects with a skill showcase ,

      Create a website which also consist of tools for everyday use like video compression or YT video downloader or image compression-> format changer or .pdf compression.

    */}
    <HackingBackground/>
      
    <Header/>

    <div className="hero">
      <h1>Hero</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatem labore sed dignissimos minima, error, maiores odit assumenda quam repellat architecto quasi porro neque culpa explicabo sint. Minima, repellendus voluptatem perferendis autem earum dignissimos quia architecto, ducimus rem esse eos laborum praesentium sapiente aliquid voluptates, qui incidunt eum quae exercitationem illo! Quo repellendus labore animi autem fuga tempore commodi accusantium fugit nobis sint. Culpa, perferendis? Illo dignissimos amet error magnam repudiandae libero voluptatum soluta quasi doloremque explicabo quo enim perspiciatis sed architecto necessitatibus, veniam tempora, repellendus eveniet, quibusdam ratione optio! Voluptates a impedit reiciendis dolore soluta atque ut magnam. Perferendis!
      </p>
      <img src="/lorem.png" alt="*Hero of the website"></img>
    </div>

    {/* <LandingAppStoreButton appStore="ios-appstore" />
    <LandingAppStoreButton appStore="mac-appstore" />
    <LandingAppStoreButton appStore="microsoft-store" />
    <LandingAppStoreButton appStore="google-playstore" />
    <LandingAppStoreButton variant="white" appStore="ios-appstore" />
    <LandingAppStoreButton variant="white" appStore="mac-appstore" />
    <LandingAppStoreButton variant="white" appStore="microsoft-store" />
    <LandingAppStoreButton variant="white" appStore="google-playstore" /> */}

    <Content />
    <SkillShowcase />
    <Footer />

  </div>;
}

export default App;
