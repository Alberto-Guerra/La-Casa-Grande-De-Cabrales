import { Flex, Box, Text, Image, Heading, Stack } from "@chakra-ui/react";


export default function ActivityCard(){
    return (
        <Flex 
        height={100}
        bgColor={"#192E23"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        color={"#F2F2F2"}
        >
            <Text
            >
            © 2023 Alberto Guerra
            </Text>
            <Flex 
            direction={"column"}
            gap={2}
            fontSize={{base: "0.8em", md:"1em"}}>
                <Text>
                    Movil: 29031213
                </Text>
                <Text>
                    Correo: monicapagabien@gmail.com
                </Text>
            </Flex>
        </Flex>
    )
}