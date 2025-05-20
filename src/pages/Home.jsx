import React from "react";
import Navigation from "../components/Navigation";

import Hero from "../components/HomeComponents/Hero";
import OnlinePotential from "../components/HomeComponents/OnlinePotential";
import Expirience from "../components/HomeComponents/Expirience";
import LinkBuilding from "../components/HomeComponents/LinkBuilding";
import Content from "../components/HomeComponents/Content";
import Cluster from "../components/HomeComponents/Cluster";
import CustomSEo from "../components/HomeComponents/CustomSEo";
import Skills from "../components/HomeComponents/Skills";
import Contact from "./Contact";
import ContactUS from "../components/HomeComponents/ContactUS";
import DiscoveryCall from "../components/HomeComponents/DiscoveryCall";
import LocomotiveScroll from "locomotive-scroll";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";

const Home = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className="w-full min-h-screen bg-black text-white overflow-hidden  ">
        <Navigation />
        <Hero />
        <OnlinePotential />
        <Expirience />
        <LinkBuilding />
        <Content />
        <Cluster />
        <CustomSEo />
        <Skills />
        <ContactUS />
        <DiscoveryCall />
      </div>
    </>
  );
};

export default Home;
