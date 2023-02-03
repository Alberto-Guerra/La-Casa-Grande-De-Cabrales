import { Flex, Box, Text, Image, Heading, Stack } from "@chakra-ui/react";
import Head from "next/head";
import { start } from "repl";
import internal from "stream";

interface HouseInfo {
  name: string;

  description: string;

  link: string;

  image: string;
}

export default function ActivityCard({
  name,
  description,
  image,
  link,
}: HouseInfo) {
  return (
    <Stack
      direction={"column"}
      height={"500px"}
      width={{ base: "110%", md: "80%" }}
      minWidth={"40%"}
      color={"#192E23"}
      alignItems={"center"}
      bgColor={"#F8F8F8"}
      boxShadow={" 0px 6px 6px 0px rgba(0, 0, 0, 0.5)"}
    >
      <Heading
        paddingTop={"2"}
        color="#192E23"
        fontFamily="Lato"
        fontWeight={"bold"}
        fontSize={"1.7em"}
      >
        {name}
      </Heading>
      <Text
        maxWidth={"70%"}
        color="#383838"
        fontFamily="Lato"
        fontWeight={"Regular"}
        fontSize={"1.2em"}
      >
        {description}
      </Text>
      <Image
        src={image}
        alt={`Foto de ${name}`}
        width={"100%"}
        height={"100%"}
        alignSelf={"center"}
        objectFit='cover'
      />
    </Stack>
  );
}
