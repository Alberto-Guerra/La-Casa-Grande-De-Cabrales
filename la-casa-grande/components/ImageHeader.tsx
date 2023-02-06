import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

interface headerInfo {
  text: string;
  imgLink : string;
}

export default function ImageHeader({text,imgLink} : headerInfo) {
  return (
    <Flex
      fontFamily={"Lato"}
      w={"full"}
      h={"150px"}
      bgImage={
        `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${imgLink}')`
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}

      justifyContent={"center"}
      alignItems={"center"}
    >
     <Text
     color={"white"}
     filter={"drop-shadow(5px 5px 5px black)"}
     fontSize={"3em"}
     fontFamily={"Lato"}
     fontWeight={"600"}
     >
      {text}
     </Text>
    </Flex>
  );
}
