import { Flex, Box, Text, Image, Heading, Highlight } from "@chakra-ui/react";
import { start } from "repl";
import internal from "stream";

interface HouseInfo {
  name: string;

  price: number;

  people: number;

  image: string;

  link: string;
}

export default function Card({ name, price, people, image, link }: HouseInfo) {
  return (
    <Flex
      direction={"column"}
      minHeight={"400px"}
      width={{ base: "110%", md: "80%" }}
      minWidth={"40%"}
      bgImage={
        "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('" +
        image +
        "')"
      }
      backgroundSize={"cover"}
      color={"white"}
      justifyContent={"end"}
      alignItems={"start"}
      padding={"10"}
      gap={"2"}
      boxShadow={" 0px 6px 6px 0px rgba(0, 0, 0, 0.5)"}
    >
      <Heading fontFamily={"Lato"} fontWeight={"extrabold"}
            fontSize={"2em"}> {name} </Heading>
      <Text fontFamily={"Lato"} fontWeight={"light"}
            fontSize={"1.3em"}> Desde <Text as={"span"} fontWeight={"bold"} >{price}€</Text> / día </Text>
      <Text fontFamily={"Lato"}fontWeight={"light"}
            fontSize={"1.3em"} > Hasta <Text as={"span"} fontWeight={"bold"} >{people}</Text> personas</Text>
    </Flex>
  );
}
