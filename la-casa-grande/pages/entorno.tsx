import Head from "next/head";
import { Inter } from "@next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContentCard from "@/components/ContentCard";

import {Flex } from "@chakra-ui/react";
import ImageHeader from "@/components/ImageHeader";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Flex bgColor={"#F2F2F2"} direction={"column"}>
        <Nav />
        <ImageHeader
          text={"ENTORNO"}
          imgLink={"https://i.ytimg.com/vi/32DEaTXSsTY/maxresdefault.jpg"}
        />
        <Flex direction={{ base: "column", xl: "row" }} wrap={"wrap"} justifyContent={"space-around"} padding={5} gap={25} alignItems={"center"} maxWidth={1700} alignSelf={"center"}>
          <ContentCard
            text={
              "La Ruta del Cares es sin duda la ruta de senderismo más espectacular y conocida del Principado de Asturias. Esta ruta empieza en el municipio de Caín, en la provincia de León y recorremos el río Cares hasta la localidad Asturiana de Poncebos. "
            }
            title={"La Ruta Del Cares"}
            imageLink={"https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2022/05/19/fotografia-ruta-de-cares.jpeg"}
           />
           <ContentCard
            text={
              "La Ruta del Cares es sin duda la ruta de senderismo más espectacular y conocida del Principado de Asturias. Esta ruta empieza en el municipio de Caín, en la provincia de León y recorremos el río Cares hasta la localidad Asturiana de Poncebos. "
            }
            title={"La Ruta Del Cares"}
            imageLink={"https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2022/05/19/fotografia-ruta-de-cares.jpeg"}
           />
           <ContentCard
            text={
              "La Ruta del Cares es sin duda la ruta de senderismo más espectacular y conocida del Principado de Asturias. Esta ruta empieza en el municipio de Caín, en la provincia de León y recorremos el río Cares hasta la localidad Asturiana de Poncebos. "
            }
            title={"La Ruta Del Cares"}
            imageLink={"https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2022/05/19/fotografia-ruta-de-cares.jpeg"}
           />
           <ContentCard
            text={
              "La Ruta del Cares es sin duda la ruta de senderismo más espectacular y conocida del Principado de Asturias. Esta ruta empieza en el municipio de Caín, en la provincia de León y recorremos el río Cares hasta la localidad Asturiana de Poncebos. "
            }
            title={"La Ruta Del Cares"}
            imageLink={"https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2022/05/19/fotografia-ruta-de-cares.jpeg"}
           />
          
        </Flex>
        <Footer />
      </Flex>
    </>
  );
}
