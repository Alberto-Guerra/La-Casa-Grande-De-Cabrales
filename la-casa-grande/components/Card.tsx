import {
    Flex,
    Box,
    Text,
    Image,
  } from "@chakra-ui/react";
import internal from "stream";

  interface HouseInfo {

    name: string;

    price: number;

    people: number;

    link: string;



}
  
  export default function Card({name,price,people,link} : HouseInfo) {
    return (
        <Flex direction={"column"}>
        <h1> {name} </h1>
        <h1> Desde {price}€ / día </h1>
        <h1> Hasta {people} personas</h1>
        </Flex>
    )

  }