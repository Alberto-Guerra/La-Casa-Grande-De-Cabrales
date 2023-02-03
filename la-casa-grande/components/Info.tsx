import {
  Flex,
  Box,
  Text,
  Image,
} from "@chakra-ui/react";

export default function Info() {
  return (
    <Flex
    padding={"20"}
    gap={"20"}
    alignItems={{base: "center", xl: "start"}}
    direction={{base: "column", xl: "row"}}
    >
      <Image
        src="https://img.staticmb.com/mbcontent//images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg"
        alt="Foto de la casa"
        maxWidth={{base: "80%", xl: "50%"}}
        alignSelf={"center"}
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
