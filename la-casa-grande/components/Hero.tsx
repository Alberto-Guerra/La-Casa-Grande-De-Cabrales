import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function WithBackgroundImage() {
  return (
    <Flex
      fontFamily={"Lato"}
      w={"full"}
      h={"100vh"}
      //bgImage={"'https://cdn1.dotesports.com/wp-content/uploads/2022/10/11161353/FUWNu5_UUAAhxkD.jpg'"}
      bgImage={"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('')"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
      >
        <Stack
          textAlign={"center"}
          maxW={"2xl"}
          spacing={6}
          filter={"drop-shadow(5px 5px 5px black)"}
        >
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "5xl" })}
          >
            La Casa Grande de Cabrales
          </Text>
          <Text
            color={"white"}
            fontWeight={400}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "2xl", md: "4xl" })}
          >
            En el corazón de los picos de europa
          </Text>
          <Stack>
            <Button
              alignSelf={"center"}
              bg={"#192E23"}
              rounded={"full"}
              width={"30%"}
              color={"white"}
              height={useBreakpointValue({ base: "30px", md: "50px" })}
              fontSize={useBreakpointValue({ base: "md", md: "2xl" })}
              _hover={{ bg: "#234231" }}
            >
              Ver Casas
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
