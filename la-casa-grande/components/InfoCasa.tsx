import {
  UnorderedList,
  Flex,
  Button,
  Text,
  VStack,
  Heading,
  ListItem,
  Box,
  Link,
} from "@chakra-ui/react";

import NextLink from "next/link"

import IconText from "./IconText";

import iconoPersonas from "../public/icons/personas.png";
import iconoCamas from "../public/icons/camas.png";
import iconoPrecio from "../public/icons/precio.png";

interface infoCasa {
  nombre: string;
  personas: string;
  habitaciones: string;
  precio: string;
  descripción: string;
  equipamiento: string[];
}

export default function InfoCasa({
  nombre,
  personas,
  habitaciones,
  precio,
  descripción,
  equipamiento,
}: infoCasa) {
  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      marginX={{ base: "10px", lg: "0" }}
    >
      <Flex
        direction={"column"}
        color={"#192E23"}
        maxWidth={{ base: "100%", lg: "50%" }}
      >
        <Text
          paddingTop={"5"}
          fontFamily="Lato"
          fontWeight={"800"}
          fontSize={"1.8em"}
        >
          {nombre}
        </Text>
        <VStack alignItems={"left"} marginTop={"10px"}>
          <IconText
            icono={iconoPersonas.src}
            boldText={personas}
            text={"Personas"}
          ></IconText>
          <IconText
            icono={iconoCamas.src}
            boldText={habitaciones}
            text={"Habitaciones Dobles"}
          ></IconText>
          <IconText
            icono={iconoPrecio.src}
            boldText={precio}
            text={"/ Día"}
          ></IconText>
          
        </VStack>
        
        <Button
            as={"a"}
            href={"#disponibilidad"}
            marginY={"20px"}
            display={{ base: "flex", lg: "none" }}
            alignSelf={"start"}
            alignItems={"center"}
            bg={"#192E23"}
            rounded={"full"}
            width={"250px"}
            color={"white"}
            height={50}
            fontSize={"xl"}
            
          >
            Disponibilidad
          </Button>

        <Heading
          paddingTop={"5"}
          fontFamily="Lato"
          fontWeight={"800"}
          fontSize={"1.8em"}
        >
          Descripción
        </Heading>
        <Text
          paddingTop={"5"}
          maxWidth={"80%"}
          fontFamily="Lato"
          fontWeight={"Regular"}
          fontSize={"1em"}
        >
          {descripción}
        </Text>
        <Heading
          paddingTop={"5"}
          fontFamily="Lato"
          fontWeight={"800"}
          fontSize={"1.8em"}
        >
          Equipamiento
        </Heading>
        <UnorderedList marginTop={"20px"}>
          {equipamiento.map((string, index) => (
            <ListItem key={index}>{string}</ListItem>
          ))}
        </UnorderedList>
        <VStack width={"100%"}>
        <Heading
          paddingTop={"5"}
          fontFamily="Lato"
          fontWeight={"800"}
          fontSize={"1.8em"}
          alignSelf={"start"}
        >
          Ubicación
        </Heading>
        <Box width={"100%"} height="450px" border={"2px solid #192E23"}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2371.026178745533!2d-4.91025663174894!3d43.329685871399235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd49dccf5d7c5343%3A0x5b49b0f3652d7b4d!2sCasa%20Grande%20De%20Cabrales!5e0!3m2!1sen!2ses!4v1675783003032!5m2!1sen!2ses"
            width="100%"
            height="100%"
          ></iframe>
        </Box>
        </VStack>
      </Flex>
      <VStack width={"100%"}>
        <Heading
          paddingTop={"5"}
          fontFamily="Lato"
          fontWeight={"800"}
          fontSize={"1.8em"}
          alignSelf={{ base: "start", lg: "center" }}
          marginTop={{ base: "40px", lg: "0" }}
        >
          Disponibilidad
        </Heading>
        <Box marginBottom={"10px"} width={"100%"} height="500px" border={"2px solid #192E23"}>
          <iframe
            id="disponibilidad"
            src="https://calendar.google.com/calendar/embed?height=450&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FMadrid&src=YTk3YWFjN2Y0ZmVjMWE4OTBmYzgyZGVlNzY2MDljZmJmNTg5MmJhMTAwYTAzZTcxODEyYjI2MDA5M2Y5OTE1ZkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23AD1457"
            width="100%"
            height="100%"
          ></iframe>
        </Box>
      </VStack>
    </Flex>
  );
}
