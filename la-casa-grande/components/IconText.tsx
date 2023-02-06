
import {
    Stack,
    Flex,
    Image,
    Text,
    VStack,
    useBreakpointValue,
    HStack,
    Box,
  } from "@chakra-ui/react";

interface iconTextInfo{
    icono : string
    boldText : string
    text : string
}






export default function iconText({icono,boldText,text} : iconTextInfo){
    return(
        <HStack align={"flex-start"} spacing={"4px"}>
            <Image 
            src={icono}
            width={"20px"} />
            <Text fontWeight={"bold"}>{boldText}</Text>
            <Text> {text} </Text>

        </HStack>
    )
}