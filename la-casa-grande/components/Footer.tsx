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
            
            <Text fontSize={{base: "0.8em", md:"1em"}}> 
                Contacto : 📱 662 372 928
            </Text>
                
        </Flex>
    )
}