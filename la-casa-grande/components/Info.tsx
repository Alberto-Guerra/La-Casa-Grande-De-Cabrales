import {
  Flex,
  Box,
  Text,
  Image,
} from "@chakra-ui/react";

import infoImage from "../public/images/homepage3.jpeg";

export default function Info() {
  return (
    <Flex
    marginY={"50px"}
    paddingX={"5"}
    gap={"50px"}
    alignItems={{base: "center", xl: "start"}}
    direction={{base: "column", xl: "row"}}
    >
      <Image
        src={infoImage.src}
        alt="Foto de la casa"
        width={{ base: "110%", md: "80%" }}
        minWidth={"50%"}
        alignSelf={"center"}
        boxShadow={" 0px 6px 6px 0px rgba(0, 0, 0, 0.5)"}
      />
      <Box fontSize={{xl: "1em", '2xl' : "1.3em"}}>
        <Text 
        color="#192E23"
        fontFamily="Lato"
        fontWeight={"extrabold"}
        fontSize={"2em"}>INFORMACIÓN</Text>
        <Text 
        marginTop={"2em"}
        color="#192E23"
        fontFamily="Lato"
        fontWeight={"regular"}
        fontSize={"1.2em"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          vulputate in felis at faucibus. Nullam vel porttitor sem. Aenean
          vehicula velit in sem aliquet, eget fermentum nibh laoreet. Quisque a
          nulla ac odio placerat facilisis in at urna.
        </Text>
        <Text
        marginTop={"1em"} 
        color="#192E23"
        fontFamily="Lato"
        fontWeight={"regular"}
        fontSize={"1.2em"}>
          Donec semper porttitor enim at posuere. Etiam vel orci at orci
          volutpat varius nec id lorem. Maecenas dignissim lacus sit amet nunc
          viverra, eu bibendum dolor vestibulum. Vestibulum pellentesque tempor
          massa, sit amet pharetra arcu tristique vitae. Nullam imperdiet neque
          id turpis gravida, vel viverra erat dapibus. 
        </Text>
      </Box>
    </Flex>
  );
}
