import {
  Flex,
  Box,
  Text,
  Image,
  Heading,
  Highlight,
  AspectRatio,
} from "@chakra-ui/react";
import { start } from "repl";
import internal from "stream";
import { transform } from "typescript";

interface HouseInfo {
  name: string;

  price: number;

  people: number;

  image: string;

  link: string;
}

export default function Card({ name, price, people, image, link }: HouseInfo) {
  return (
    <AspectRatio
      ratio={16 / 12}
      height={"auto"}
      width={{ base: "100%", lg: "80%" }}
      as={"a"}
      href={link}
      transition={"transform .2s"}
      _hover={{transform:"scale(1.05)"}}
    >
      <Flex
        direction={"column"}
        bgImage={
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('" +
          image +
          "')"
        }
        backgroundSize={"cover"}
        color={"white"}
        
        alignItems={"start"}
        padding={"10"}
        gap={"2"}
        boxShadow={" 0px 6px 6px 0px rgba(0, 0, 0, 0.5)"}
      >
        <Heading
          fontFamily={"Lato"}
          fontWeight={"extrabold"}
          fontSize={{base: "1.3em", md : "2em"}}
        >
          {" "}
          {name}{" "}
        </Heading>
        <Text fontFamily={"Lato"} fontWeight={"light"} fontSize={"1.3rem"}>
          {" "}
          Desde{" "}
          <Text as={"span"} fontWeight={"bold"}>
            {price}€
          </Text>{" "}
          / día{" "}
        </Text>
        <Text fontFamily={"Lato"} fontWeight={"light"} fontSize={"1.3rem"}>
          {" "}
          Hasta{" "}
          <Text as={"span"} fontWeight={"bold"}>
            {people}
          </Text>{" "}
          personas
        </Text>
      </Flex>
    </AspectRatio>
  );
}
