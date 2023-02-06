import {
    UnorderedList,
    Flex,
    Image,
    Text,
    VStack,
    Heading,
    ListItem,
    Box,
  } from "@chakra-ui/react";

  import IconText from "./IconText";

  import iconoPersonas from "../public/icons/personas.png"
  import iconoCamas from "../public/icons/camas.png"
  import iconoPrecio from "../public/icons/precio.png"

  
  interface infoCasa {
    nombre: string;
    personas: string;
    habitaciones: string;
    precio: string;
    descripción: string;
    equipamiento: string[];
  }

  export default function InfoCasa({ nombre,personas, habitaciones, precio, descripción, equipamiento }: infoCasa) {

    return (
        <Flex direction={"column"} color={"#192E23"} maxWidth={{base:"100%" ,lg:"50%"}} marginLeft={{base:"10px" ,lg:"0"}}>
        <Text
        paddingTop={"5"}
        fontFamily="Lato"
        fontWeight={"800"}
        fontSize={"1.8em"}>
            {nombre}
        </Text>
        <VStack alignItems={"left"} marginTop={"10px"}>
            <IconText icono={iconoPersonas.src} boldText={personas} text={"Personas"}></IconText>
            <IconText icono={iconoCamas.src} boldText={habitaciones} text={"Habitaciones Dobles"}></IconText>
            <IconText icono={iconoPrecio.src} boldText={precio} text={"/ Día"}></IconText>
        </VStack>
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
            <ListItem key={index}>
              {string}
            </ListItem>
          ))}
      </UnorderedList>
      <Heading
        paddingTop={"5"}
        fontFamily="Lato"
        fontWeight={"800"}
        fontSize={"1.8em"}
      >
        Ubicación 
      </Heading>
        </Flex>
    )
  }