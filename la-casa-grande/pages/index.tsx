import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Card from "@/components/Card";
import ActivityCard from "@/components/ActivityCard";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/Whatsapp";

import whats from "../public/images/whatsapp.png";

import { Box, Text, Flex, Link, Image } from "@chakra-ui/react";

import casa1 from "../public/images/casa.jpg";
import casa2 from "../public/images/casa2.jpg";

export default function Home() {
  return (
    <>
      <Flex bgColor={"#F2F2F2"} direction={"column"} scrollBehavior={"smooth"}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav />
        
        <Hero />
        <Flex maxWidth={"1800"} direction={"column"} alignSelf={"center"}>
          <Info />
          <Box textAlign={"center"}>
            <Text
              id="casas"
              scrollMarginTop={"100px"}
              color="#192E23"
              fontFamily="Lato"
              fontWeight={"extrabold"}
              fontSize={"2em"}
            >
              CASAS RURALES
            </Text>
            <Flex
              padding={"5"}
              paddingTop={"10"}
              gap={"20"}
              alignItems={{ base: "center", lg: "start" }}
              justifyContent={"space-evenly"}
              direction={{ base: "column", lg: "row" }}
            >
              <Card
                name={"LA CASA GRANDE 1"}
                price={110}
                people={8}
                link={"/casas/casa1"}
                image={casa1.src}
              />
              <Card
                name={"LA CASA GRANDE 2"}
                price={90}
                people={6}
                link={""}
                image={casa1.src}
              />
            </Flex>
            <Text
              color="#192E23"
              fontFamily="Lato"
              fontWeight={"extrabold"}
              fontSize={"2em"}
              marginTop={"20px"}
            >
              QUÉ HACER
            </Text>
            <Flex
              padding={"5"}
              paddingTop={"10"}
              gap={"20"}
              alignItems={{ base: "center", lg: "start" }}
              justifyContent={"space-evenly"}
              direction={{ base: "column", lg: "row" }}
            >
              <ActivityCard
                name={"ENTORNO"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla Vulputate in felis at faucibus."
                }
                link={"/entorno"}
                image={
                  "https://guiadeasturias.com/wp-content/uploads/2017/11/santuario-lagos-covadonga-asturias-2.jpg"
                }
              ></ActivityCard>
              <ActivityCard
                name={"ACTIVIDADES"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla Vulputate in felis at faucibus."
                }
                link={"/actividades"}
                image={
                  "https://www.turismoasturias.es/documents/11022/90227/CARES.jpg/0520436c-748a-42ab-9e99-7703dd111d2c?t=1540901739869"
                }
              ></ActivityCard>
            </Flex>
          </Box>
        </Flex>
        <Footer />
      </Flex>
    </>
  );
}
