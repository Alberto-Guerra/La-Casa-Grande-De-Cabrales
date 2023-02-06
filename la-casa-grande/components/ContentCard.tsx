/*
  Componente con una foto, un titulo y un texto para 
  las paginas de entorno y actividades 
*/


import {
  Flex,
  Box,
  Text,
  Image,
  Heading
} from "@chakra-ui/react";

interface componentInfo {
  title: string;

  imageLink: string;

  text: string;

}

export default function ContentCard({title,imageLink,text}: componentInfo) {
  return (
    <Flex
      direction={"column"}
      height={"600px"}
      maxWidth={"700px"}
      color={"#192E23"}
      alignItems={"start"}
      bgColor={"#F2F2F2"}
      
    >
       <Image
        src={imageLink}
        alt={`Foto de ${title}`}
        width={"700"}
        height={"400"}
        alignSelf={"center"}
        objectFit='cover'
      />

      <Heading
        paddingTop={"5"}
        fontFamily="Lato"
        fontWeight={"800"}
        fontSize={"1.8em"}
      >
        {title}
      </Heading>
      <Text
        paddingTop={"5"}
        maxWidth={"80%"}
        fontFamily="Lato"
        fontWeight={"Regular"}
        fontSize={"1em"}
      >
        {text}
      </Text>
     
    </Flex>
  );
}
